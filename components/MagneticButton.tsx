"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import {
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  useRef,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** How strongly the button pulls toward the cursor (0–1) */
  strength?: number;
  target?: string;
  rel?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  function handleMove(e: ReactMouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - (rect.left + rect.width / 2);
    const cy = e.clientY - (rect.top + rect.height / 2);
    x.set(cx * strength);
    y.set(cy * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = href ? motion.a : motion.button;
  const props = href
    ? { href, target, rel }
    : { onClick, type: "button" as const };

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ x: sx, y: sy }}
      {...props}
    >
      <motion.span
        className="inline-flex items-center gap-2"
        style={{ x: useSpring(x, { stiffness: 300, damping: 14 }) }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
