"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  amount?: number;
};

/**
 * Shared in-view reveal — replaces the old `.reveal` / `.reveal-right`
 * IntersectionObserver setup. Uses `whileInView` so it respects browser
 * viewport natively with no manual hook wiring.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  x = 0,
  className,
  style,
  once = true,
  amount = 0.2,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <m.div
        className={className}
        style={style}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount }}
        transition={{ duration: 0.3, delay: delay / 1000 }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: delay / 1000,
      }}
    >
      {children}
    </m.div>
  );
}
