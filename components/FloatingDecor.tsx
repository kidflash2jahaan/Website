"use client";

import { motion } from "motion/react";

const tokens = [
  "FRC 2026",
  "MTAC L9",
  "Op. 15 No. 3",
  "9+ years",
  "30+ shows",
  "BPM 128",
  "Class of 2029",
  "404",
  "git push",
  "{ ... }",
  "Logic Pro",
  "97%",
  "C major",
  "stdin",
  "// build",
];

const positions = [
  { top: "8%", left: "4%", rot: -8 },
  { top: "22%", right: "6%", rot: 6 },
  { top: "58%", left: "8%", rot: -4 },
  { top: "72%", right: "10%", rot: 10 },
  { top: "38%", left: "2%", rot: 12 },
  { top: "12%", right: "20%", rot: -10 },
  { top: "82%", left: "30%", rot: 5 },
  { top: "48%", right: "3%", rot: -6 },
  { top: "30%", left: "18%", rot: 8 },
  { top: "68%", right: "26%", rot: -12 },
  { top: "5%", left: "60%", rot: 4 },
  { top: "92%", left: "50%", rot: -3 },
  { top: "16%", left: "78%", rot: 7 },
  { top: "55%", right: "40%", rot: -8 },
  { top: "44%", left: "44%", rot: 9 },
];

/**
 * Floating decoration: drifting low-opacity tokens scattered across the
 * page. Pure passive motion. Aria-hidden, pointer-events: none.
 */
export function FloatingDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{ overflow: "hidden" }}
    >
      {tokens.map((t, i) => {
        const pos = positions[i % positions.length];
        return (
          <motion.span
            key={`${t}-${i}`}
            className="absolute select-none"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "rgba(10, 10, 18, 0.18)",
              transform: `rotate(${pos.rot}deg)`,
              whiteSpace: "nowrap",
            }}
            animate={{
              y: [0, 16, -10, 0],
              opacity: [0.18, 0.32, 0.14, 0.18],
            }}
            transition={{
              duration: 14 + (i % 5) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {t}
          </motion.span>
        );
      })}
    </div>
  );
}
