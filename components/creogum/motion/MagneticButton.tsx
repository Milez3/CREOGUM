"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
  href?: string;
  "aria-label"?: string;
};

/**
 * Cursor-following CTA. Button pulls ~12px toward the mouse when hovered
 * and springs back on leave. Inner content does a micro-lift for parallax.
 */
export function MagneticButton({
  children,
  strength = 0.35,
  className,
  href = "#",
  "aria-label": ariaLabel,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 22 });
  const sy = useSpring(y, { stiffness: 280, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    const clamp = 14;
    x.set(Math.max(-clamp, Math.min(clamp, dx)));
    y.set(Math.max(-clamp, Math.min(clamp, dy)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.a
      ref={ref}
      href={href}
      data-cta
      className={className}
      aria-label={ariaLabel}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
    >
      <m.span style={{ display: "inline-flex", pointerEvents: "none" }}>{children}</m.span>
    </m.a>
  );
}
