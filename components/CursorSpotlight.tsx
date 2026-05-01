"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 50;
    let ty = 50;

    function onMove(e: MouseEvent) {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.setProperty("--cursor-x", `${tx}%`);
          el.style.setProperty("--cursor-y", `${ty}%`);
        }
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-spotlight" aria-hidden />;
}
