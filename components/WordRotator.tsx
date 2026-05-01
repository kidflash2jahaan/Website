"use client";

import { useEffect, useState } from "react";

type WordRotatorProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
  /** Class applied to the leaf span containing the actual text */
  textClassName?: string;
};

/**
 * Cycles through words. The current word is rendered as plain text in
 * SSR (always visible). On rotation, a CSS transition fades the old
 * word out and the new one in. textClassName is applied directly to
 * the leaf span so styles like `background-clip: text` work correctly.
 */
export function WordRotator({
  words,
  intervalMs = 2400,
  className = "",
  textClassName = "",
}: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "leaving" | "entering">(
    "visible"
  );

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setPhase("leaving");
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("entering");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase("visible"));
        });
      }, 320);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  const innerStyle: React.CSSProperties = {
    display: "inline-block",
    transition:
      "opacity 320ms cubic-bezier(0.2,0.65,0.2,1), transform 320ms cubic-bezier(0.2,0.65,0.2,1), filter 320ms cubic-bezier(0.2,0.65,0.2,1)",
    opacity: phase === "visible" ? 1 : 0,
    transform:
      phase === "leaving"
        ? "translateY(-0.5em)"
        : phase === "entering"
        ? "translateY(0.5em)"
        : "translateY(0)",
    filter: phase === "visible" ? "blur(0)" : "blur(6px)",
  };

  return (
    <span className={`inline-block ${className}`}>
      <span className={textClassName} style={innerStyle}>
        {words[index]}
      </span>
    </span>
  );
}
