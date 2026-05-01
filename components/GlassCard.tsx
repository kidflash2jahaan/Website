"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import {
  type ReactNode,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  useRef,
} from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Subtle 3D tilt toward cursor */
  tilt?: boolean;
  /** Lift on hover */
  lift?: boolean;
  /** Cursor-tracked specular highlight */
  shimmer?: boolean;
  /** Rotating conic gradient border on hover */
  ring?: boolean;
};

export function GlassCard({
  children,
  className = "",
  tilt = true,
  lift = true,
  shimmer = true,
  ring = true,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Cursor position tracked via CSS custom properties on the element directly
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 200, damping: 22 });
  const springY = useSpring(tiltY, { stiffness: 200, damping: 22 });

  function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${px}%`);
    el.style.setProperty("--my", `${py}%`);
    el.style.setProperty("--shimmer-opacity", "1");
    if (tilt) {
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      tiltX.set(-cy * 4);
      tiltY.set(cx * 4);
    }
  }

  function handleLeave() {
    if (ref.current) {
      ref.current.style.setProperty("--shimmer-opacity", "0");
    }
    tiltX.set(0);
    tiltY.set(0);
  }

  const base: CSSProperties = {
    transformStyle: "preserve-3d",
    perspective: "1200px",
  };

  // We use plain CSS classes for the static look (so SSR shows the card),
  // and Motion only enriches transform for the 3D tilt + lift.
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={lift ? { y: -3 } : undefined}
      transition={{ type: "spring", stiffness: 250, damping: 24 }}
      className={`glass ${shimmer ? "shimmer" : ""} ${
        ring ? "glass-ring" : ""
      } ${className}`}
      style={{
        ...base,
        rotateX: tilt ? springX : 0,
        rotateY: tilt ? springY : 0,
      }}
    >
      <div data-card-content className="relative">
        {children}
      </div>
    </motion.div>
  );
}
