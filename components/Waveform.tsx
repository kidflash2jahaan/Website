"use client";

import { motion } from "motion/react";

type WaveformProps = {
  bars?: number;
  className?: string;
};

/**
 * Audio EQ-style waveform bars — each bar pulses on its own loop with
 * staggered delays. Pure decorative motion for the music section.
 */
export function Waveform({ bars = 18, className = "" }: WaveformProps) {
  return (
    <div
      aria-hidden
      className={`flex h-12 items-end justify-between gap-[3px] ${className}`}
    >
      {Array.from({ length: bars }).map((_, i) => {
        const baseHeight = 24 + ((i * 7) % 60);
        return (
          <motion.span
            key={i}
            className="block w-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(to top, var(--color-accent), var(--color-accent-warm))",
            }}
            initial={{ height: `${baseHeight}%` }}
            animate={{
              height: [
                `${baseHeight}%`,
                `${Math.min(100, baseHeight + 40)}%`,
                `${Math.max(20, baseHeight - 12)}%`,
                `${baseHeight}%`,
              ],
            }}
            transition={{
              duration: 1.4 + (i % 5) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.04,
            }}
          />
        );
      })}
    </div>
  );
}
