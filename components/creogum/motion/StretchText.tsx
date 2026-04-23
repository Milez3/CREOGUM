"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

/**
 * Gum-stretch text: tracks cursor proximity, scales the word horizontally
 * and squishes vertically like chewing gum. Snaps back on leave.
 */
export function StretchText({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const proximity = useMotionValue(0);
  const smooth = useSpring(proximity, { stiffness: 220, damping: 18, mass: 0.8 });

  const scaleX = useTransform(smooth, [0, 1], [1, 1.22]);
  const scaleY = useTransform(smooth, [0, 1], [1, 0.82]);
  const skewX = useTransform(smooth, [0, 1], [0, -4]);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(rect.width, 180);
      const p = Math.max(0, Math.min(1, 1 - dist / radius));
      proximity.set(p);
    };

    const onLeave = () => proximity.set(0);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [proximity, reduce]);

  if (reduce) {
    return <span>{children}</span>;
  }

  return (
    <m.span
      ref={ref}
      style={{
        display: "inline-block",
        scaleX,
        scaleY,
        skewX,
        transformOrigin: "center bottom",
        willChange: "transform",
      }}
    >
      {children}
    </m.span>
  );
}
