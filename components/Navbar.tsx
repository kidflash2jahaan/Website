"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { LiveClock } from "./LiveClock";

const navItems = [
  { href: "#engineering", label: "Engineering" },
  { href: "#music", label: "Music" },
  { href: "#leadership", label: "Leadership" },
  { href: "#academics", label: "Academics" },
  { href: "#vision", label: "Vision" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0.25, 0.65]);
  const blurAmount = useTransform(scrollY, [0, 200], [12, 32]);
  const padding = useTransform(scrollY, [0, 200], [10, 6]);

  // Top-button visibility — appears once scrolled past hero-ish
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 200));
    return unsub;
  }, [scrollY]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-3 z-50 mx-auto flex w-fit max-w-[calc(100%-1.5rem)] items-center justify-between gap-2 rounded-full border border-white/70 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_32px_-8px_rgba(94,92,230,0.18),0_2px_8px_rgba(10,10,18,0.06)] md:top-5"
      style={{
        background: useTransform(
          bgOpacity,
          (v) => `rgba(255, 255, 255, ${v})`
        ),
        backdropFilter: useTransform(
          blurAmount,
          (v) => `blur(${v}px) saturate(180%)`
        ),
        WebkitBackdropFilter: useTransform(
          blurAmount,
          (v) => `blur(${v}px) saturate(180%)`
        ),
        paddingTop: useTransform(padding, (v) => `${v}px`),
        paddingBottom: useTransform(padding, (v) => `${v}px`),
      }}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
    >
      {/* Top button — wordmark + arrow; scrolls to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.78rem] font-medium text-[var(--color-text)] transition-colors hover:bg-white/40"
      >
        <motion.span
          aria-hidden
          animate={{ y: scrolled ? 0 : 2, opacity: scrolled ? 1 : 0.55 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="inline-block"
        >
          ↑
        </motion.span>
        <span className="hidden md:inline">Jahaan</span>
      </button>

      <div className="flex items-center gap-0.5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hidden rounded-full px-3.5 py-2 text-[0.78rem] font-medium text-[var(--color-text-soft)] transition-colors hover:bg-white/40 hover:text-[var(--color-text)] md:inline-flex"
          >
            {item.label}
          </a>
        ))}
      </div>

      <LiveClock />

      <a
        href="#contact"
        className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-[0.78rem] font-medium text-white transition-all hover:bg-[var(--color-accent-bright)] hover:shadow-[0_0_24px_rgba(94,92,230,0.4)]"
      >
        Contact
        <span aria-hidden>↗</span>
      </a>
    </motion.nav>
  );
}
