"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#5e5ce6", "#a855f7", "#d946a3", "#f43f5e", "#ff7a59"];
const TRAIL_LENGTH = 12;

/**
 * Tiny colored dots chasing the cursor with progressive lag — gives a
 * comet-tail effect using only CSS transforms (no React state).
 */
export function CursorTrail() {
  const dots = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: -100,
      y: -100,
    }));
    let mx = -100;
    let my = -100;

    function move(e: PointerEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    let raf = 0;
    function tick() {
      // Lead position chases cursor
      positions[0].x += (mx - positions[0].x) * 0.4;
      positions[0].y += (my - positions[0].y) * 0.4;
      // Each subsequent dot follows the previous with slower easing
      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.32;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.32;
      }
      // Apply transforms
      for (let i = 0; i < dots.current.length; i++) {
        const el = dots.current[i];
        if (el) {
          el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
        }
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[110]" aria-hidden>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        const t = i / TRAIL_LENGTH;
        const color = COLORS[i % COLORS.length];
        const size = Math.max(3, 14 - i * 0.9);
        return (
          <div
            key={i}
            ref={(el) => {
              if (el) dots.current[i] = el;
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              opacity: 0.55 - t * 0.5,
              filter: "blur(0.5px)",
              marginLeft: -size / 2,
              marginTop: -size / 2,
              willChange: "transform",
              mixBlendMode: "multiply",
            }}
          />
        );
      })}
    </div>
  );
}
