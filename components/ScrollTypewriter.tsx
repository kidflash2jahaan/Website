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
};

/**
 * Typewriter that only starts typing once it enters the viewport.
 * Reserves layout space with an invisible placeholder so cards don't
 * shift size when typing kicks in.
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
}: ScrollTypewriterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once: true });
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (inView) setArmed(true);
  }, [inView]);

  return (
    <div ref={ref} className={className} style={{ ...style, position: "relative" }}>
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
      {/* Actual typewriter overlays it */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
        }}
      >
        {armed ? (
          <Typewriter
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
