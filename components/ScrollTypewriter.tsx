"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Typewriter, type TypewriterLine } from "./Typewriter";

type ScrollTypewriterProps = {
  lines: TypewriterLine[];
  className?: string;
  style?: CSSProperties;
  charDelay?: number;
  lineDelay?: number;
  startDelay?: number;
  cursor?: boolean;
  hideCursorOnDone?: boolean;
  /** How much of the element must be visible before typing begins (0–1) */
  amount?: number;
  /** When true, typing replays every time the element re-enters view */
  replay?: boolean;
};

/**
 * Typewriter that fires when its container enters the viewport. With
 * replay: true (default), it re-types every time you scroll back into
 * view. Reserves layout space with an invisible placeholder so cards
 * don't reflow when typing kicks in.
 */
export function ScrollTypewriter({
  lines,
  className = "",
  style,
  charDelay,
  lineDelay,
  startDelay = 100,
  cursor = true,
  hideCursorOnDone = true,
  amount = 0.45,
  replay = true,
}: ScrollTypewriterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once: !replay });
  const [armCount, setArmCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (inView) {
      // Each entry into view: bump armCount to force Typewriter to
      // remount and re-type from scratch.
      setArmCount((c) => c + 1);
      setActive(true);
    } else if (replay) {
      setActive(false);
    }
  }, [inView, replay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, position: "relative" }}
    >
      {/* Invisible placeholder reserves layout space */}
      <span aria-hidden style={{ visibility: "hidden" }}>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.map((seg, si) => (
              <span key={si} className={seg.className}>
                {seg.text}
              </span>
            ))}
          </span>
        ))}
      </span>
      {/* Typewriter overlay — remounts each time armCount changes */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
        }}
      >
        {active ? (
          <Typewriter
            key={armCount}
            lines={lines}
            charDelay={charDelay}
            lineDelay={lineDelay}
            startDelay={startDelay}
            cursor={cursor}
            hideCursorOnDone={hideCursorOnDone}
          />
        ) : null}
      </span>
    </div>
  );
}
