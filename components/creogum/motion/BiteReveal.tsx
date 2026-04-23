"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useMemo, useRef } from "react";

type Props = {
  children: ReactNode;
  /** Index used to diversify bite angles across cards. */
  index?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Bite-shape clip-path reveal. The card enters clipped to a "chewed corner"
 * polygon and smoothly morphs to a full rectangle while lifting into place.
 */
export function BiteReveal({ children, index = 0, delay = 0, className, style }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.4 });

  // Build a bite polygon from a unique corner per index.
  const biteClip = useMemo(() => {
    const shapes = [
      "polygon(0 0, 86% 0, 100% 14%, 100% 100%, 14% 100%, 0 86%)",
      "polygon(14% 0, 100% 0, 100% 86%, 86% 100%, 0 100%, 0 14%)",
      "polygon(0 0, 100% 0, 100% 100%, 76% 100%, 62% 88%, 0 88%)",
      "polygon(0 12%, 24% 12%, 38% 0, 100% 0, 100% 100%, 0 100%)",
    ];
    return shapes[index % shapes.length];
  }, [index]);

  const fullClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

  if (reduce) {
    return (
      <m.div
        ref={ref}
        className={className}
        style={style}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: delay / 1000 }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={style}
      initial={{ clipPath: biteClip, y: 24, opacity: 0 }}
      animate={visible ? { clipPath: fullClip, y: 0, opacity: 1 } : { clipPath: biteClip, y: 24, opacity: 0 }}
      transition={{
        clipPath: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 },
        y: { type: "spring", stiffness: 120, damping: 18, delay: delay / 1000 },
        opacity: { duration: 0.5, delay: delay / 1000 },
      }}
    >
      {children}
    </m.div>
  );
}
