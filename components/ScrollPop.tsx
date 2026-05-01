"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type ScrollPopProps = {
  children: ReactNode;
  className?: string;
  /** Travel distance in px at the entrance/exit edges */
  offset?: number;
  /** Maximum rotation at edges, in degrees */
  rotate?: number;
  /** Minimum scale at edges (1 = no scale, 0.85 = shrink 15% when offscreen) */
  minScale?: number;
  /** Minimum opacity at edges */
  minOpacity?: number;
  /** Whether the element should also rotate (set false for big card groups) */
  withRotate?: boolean;
};

/**
 * Scroll-driven "pop into place" effect.
 *
 * - When the element is just entering the viewport from the bottom,
 *   it sits below, smaller, faded, slightly rotated.
 * - When the element is centered in the viewport, it snaps into its
 *   final position: scale = 1, opacity = 1, no rotate.
 * - When you scroll past, it lifts up, shrinks, fades, rotates the
 *   opposite direction — so only the currently-centered card is
 *   "in place," giving the impression that the page is being built /
 *   deconstructed in real time.
 *
 * Wrap any element. Stack with GlassCard freely (this provides the
 * outer scale/y/rotate; GlassCard handles cursor tilt internally).
 */
export function ScrollPop({
  children,
  className = "",
  offset = 70,
  rotate = 4,
  minScale = 0.86,
  minOpacity = 0.18,
  withRotate = true,
}: ScrollPopProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Spring-smooth the scroll progress so it's silky, not 1:1 with scroll.
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  const scale = useTransform(
    progress,
    [0, 0.35, 0.65, 1],
    [minScale, 1, 1, minScale]
  );
  const opacity = useTransform(
    progress,
    [0, 0.25, 0.75, 1],
    [minOpacity, 1, 1, minOpacity]
  );
  const y = useTransform(progress, [0, 0.5, 1], [offset, 0, -offset]);
  const rotateZ = useTransform(
    progress,
    [0, 0.5, 1],
    [rotate, 0, -rotate]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        scale,
        opacity,
        y,
        rotate: withRotate ? rotateZ : 0,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
