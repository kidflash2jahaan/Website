"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * Subtle scroll-driven parallax for the background aurora blobs.
 * Each blob moves at a different rate to suggest depth.
 */
export function AuroraParallax() {
  const { scrollY } = useScroll();
  const yViolet = useTransform(scrollY, [0, 2000], [0, -180]);
  const yCoral = useTransform(scrollY, [0, 2000], [0, -120]);
  const yPeach = useTransform(scrollY, [0, 2000], [0, 100]);
  const yMint = useTransform(scrollY, [0, 2000], [0, 60]);
  const ySky = useTransform(scrollY, [0, 2000], [0, -80]);

  return (
    <>
      <div className="aurora" aria-hidden />
      <motion.div
        className="aurora-blob blob-violet"
        aria-hidden
        style={{ y: yViolet }}
      />
      <motion.div
        className="aurora-blob blob-coral"
        aria-hidden
        style={{ y: yCoral }}
      />
      <motion.div
        className="aurora-blob blob-peach"
        aria-hidden
        style={{ y: yPeach }}
      />
      <motion.div
        className="aurora-blob blob-mint"
        aria-hidden
        style={{ y: yMint }}
      />
      <motion.div
        className="aurora-blob blob-sky"
        aria-hidden
        style={{ y: ySky }}
      />
    </>
  );
}
