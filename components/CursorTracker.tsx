"use client";

import { useEffect } from "react";

/**
 * Writes --cursor-x / --cursor-y CSS variables on <html> so any element
 * (grid background, spotlights, etc.) can react to the cursor position
 * via plain CSS. Throttled with rAF.
 */
export function CursorTracker() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;

    function onMove(e: PointerEvent) {
      tx = e.clientX;
      ty = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${tx}px`);
        root.style.setProperty("--cursor-y", `${ty}px`);
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
