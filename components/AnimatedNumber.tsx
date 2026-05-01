"use client";

import {
  useMotionValue,
  useTransform,
  useInView,
  animate,
  motion,
} from "motion/react";
import { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  /** Final string e.g. "9+", "30+", "L9", "6" — digits inside animate; non-digits stay */
  value: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
};

/**
 * Counts up the leading numeric portion when scrolled into view.
 * Non-numeric values (like "L9") get a quick fade-up instead of a count.
 */
export function AnimatedNumber({
  value,
  className,
  style,
  duration = 1.4,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const num = useMotionValue(0);
  const target = parseInt(value, 10);
  const hasNumber = !Number.isNaN(target) && target > 0;
  const suffix = hasNumber ? value.replace(/^\d+/, "") : "";

  const display = useTransform(num, (v) => {
    if (!hasNumber) return value;
    return Math.round(v).toString() + suffix;
  });

  useEffect(() => {
    if (!inView || !hasNumber) return;
    const controls = animate(num, target, {
      duration,
      ease: [0.2, 0.65, 0.2, 1],
    });
    return controls.stop;
  }, [inView, hasNumber, num, target, duration]);

  if (!hasNumber) {
    return (
      <motion.span
        ref={ref}
        className={className}
        style={style}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <motion.span ref={ref} className={className} style={style}>
      <motion.span>{display}</motion.span>
    </motion.span>
  );
}
