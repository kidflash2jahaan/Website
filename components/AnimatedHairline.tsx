"use client";

import { motion } from "motion/react";

type AnimatedHairlineProps = {
  className?: string;
  /** Whether to use accent color */
  accent?: boolean;
};

export function AnimatedHairline({
  className = "",
  accent = false,
}: AnimatedHairlineProps) {
  return (
    <motion.div
      className={`hairline ${accent ? "hairline-accent" : ""} ${className}`}
      initial={{ scaleX: 0, transformOrigin: "left" }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.3, ease: [0.2, 0.65, 0.2, 1] }}
    />
  );
}
