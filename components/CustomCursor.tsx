"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 800, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 800, damping: 32, mass: 0.4 });
  const [hot, setHot] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Only show on devices with fine pointer
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setHidden(false);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const interactive =
        !!t &&
        (t.closest("a, button, [role=button], input, label, .glass") ||
          t.tagName === "A" ||
          t.tagName === "BUTTON");
      setHot(!!interactive);
    }
    function leave() {
      setHidden(true);
    }
    function enter() {
      setHidden(false);
    }
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    window.addEventListener("pointerenter", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerenter", enter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[120] rounded-full mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: hot ? 56 : 28,
          height: hot ? 56 : 28,
          border: hot ? "1.5px solid white" : "1px solid white",
          opacity: 0.9,
          transition: "width 220ms ease, height 220ms ease, border 220ms ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[120] rounded-full bg-white mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hot ? 0 : 5,
          height: hot ? 0 : 5,
          opacity: hot ? 0 : 1,
          transition: "width 220ms ease, height 220ms ease, opacity 220ms ease",
        }}
      />
    </>
  );
}
