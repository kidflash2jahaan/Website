"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type WordRotatorProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

export function WordRotator({
  words,
  intervalMs = 2400,
  className = "",
}: WordRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      className={`relative inline-block align-baseline ${className}`}
      style={{ verticalAlign: "baseline" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "0.7em", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.7em", opacity: 0, filter: "blur(8px)" }}
          transition={{
            duration: 0.55,
            ease: [0.2, 0.65, 0.2, 1],
          }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
