"use client";

import { m, useScroll, useSpring } from "motion/react";

/**
 * 2px top progress bar. `scaleX` = scroll progress; transform-origin left.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        transformOrigin: "0% 50%",
        background: "linear-gradient(90deg, var(--sage-mid), var(--amber))",
        zIndex: 120,
        scaleX,
      }}
    />
  );
}
