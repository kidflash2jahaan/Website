"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Segment = {
  text: string;
  className?: string;
  /** Punctuation that types as one "tick" with the previous char */
  glue?: boolean;
};

export type TypewriterLine = Segment[];

type TypewriterProps = {
  lines: TypewriterLine[];
  /** ms per character */
  charDelay?: number;
  /** Pause between lines (ms) */
  lineDelay?: number;
  /** Initial delay before typing begins (ms) */
  startDelay?: number;
  /** Show blinking cursor while typing and after done */
  cursor?: boolean;
  className?: string;
  style?: CSSProperties;
  /** When true, hide the cursor once typing finishes */
  hideCursorOnDone?: boolean;
};

/**
 * Types out structured lines character-by-character with a blinking
 * cursor. Each line is an array of {text, className} segments, so
 * gradient italics, accent colors, etc. are preserved while typing.
 */
export function Typewriter({
  lines,
  charDelay = 32,
  lineDelay = 280,
  startDelay = 200,
  cursor = true,
  className = "",
  style,
  hideCursorOnDone = false,
}: TypewriterProps) {
  // Flatten lines into a "tape" of characters with their (line, segment) coords
  const tape: { lineIdx: number; segIdx: number; charIdx: number }[] = [];
  lines.forEach((line, li) => {
    line.forEach((seg, si) => {
      Array.from(seg.text).forEach((_, ci) => {
        tape.push({ lineIdx: li, segIdx: si, charIdx: ci });
      });
    });
  });

  const [tapePos, setTapePos] = useState(0);
  const [done, setDone] = useState(tape.length === 0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const t = setTimeout(() => {
      setTapePos(1);
    }, startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (tapePos === 0) return; // not started yet
    if (tapePos >= tape.length) {
      setDone(true);
      return;
    }
    // Determine if we're crossing a line boundary
    const prev = tape[tapePos - 1];
    const next = tape[tapePos];
    const crossingLine = prev && next && prev.lineIdx !== next.lineIdx;
    const wait = crossingLine ? lineDelay : charDelay;
    const t = setTimeout(() => setTapePos((p) => p + 1), wait);
    return () => clearTimeout(t);
  }, [tapePos, tape.length, charDelay, lineDelay]);

  // Determine current line and char count within that line
  let currentLineIdx = 0;
  let charsRevealedInLine = 0;
  if (tapePos > 0) {
    const last = tape[Math.min(tapePos - 1, tape.length - 1)];
    currentLineIdx = last.lineIdx;
    // Count chars in current line up to and including last
    for (let i = 0; i < tapePos; i++) {
      if (tape[i].lineIdx === currentLineIdx) charsRevealedInLine++;
    }
  }

  return (
    <div className={className} style={style}>
      {lines.map((line, li) => {
        const isPast = li < currentLineIdx;
        const isCurrent = li === currentLineIdx && tapePos > 0;
        const isFuture = !isPast && !isCurrent;

        // Compute chars to show in this line
        let charsToShow: number;
        if (isPast) {
          charsToShow = line.reduce((sum, s) => sum + s.text.length, 0);
        } else if (isCurrent) {
          charsToShow = charsRevealedInLine;
        } else {
          charsToShow = 0;
        }

        // Render segments up to charsToShow
        let usedChars = 0;
        const showCursorOnThisLine =
          cursor &&
          !isFuture &&
          (isCurrent || (isPast && li === lines.length - 1 && done));
        return (
          <span
            key={li}
            className="block"
            style={{ minHeight: "1em", visibility: isFuture ? "hidden" : "visible" }}
          >
            {line.map((seg, si) => {
              const remainingForLine = charsToShow - usedChars;
              if (remainingForLine <= 0) return null;
              const sliceLen = Math.min(seg.text.length, remainingForLine);
              const visible = seg.text.slice(0, sliceLen);
              usedChars += sliceLen;
              return (
                <span key={si} className={seg.className}>
                  {visible}
                </span>
              );
            })}
            {/* Cursor lives at the end of the actively-typing line, or end
                of the last line if done */}
            {((isCurrent && !done) ||
              (done && li === lines.length - 1 && !hideCursorOnDone)) && (
              <span aria-hidden className="tw-cursor" />
            )}
          </span>
        );
      })}
    </div>
  );
}
