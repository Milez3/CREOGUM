"use client";

import {
  m,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  baseSpeed?: number;
  className?: string;
};

/**
 * Marquee whose speed reacts to page scroll velocity. Scroll up → it flips
 * direction. Scroll hard → it sprints. Sit still → it drifts. Uses `wrap`
 * so content tiles seamlessly.
 */
export function VelocityMarquee({ children, baseSpeed = 2.2, className }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  // Render 2 copies side-by-side and loop using -50% wrap.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(-1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = directionFactor.current * baseSpeed * (delta / 1000) * 10;
    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }
    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <m.div style={{ x, display: "inline-flex", willChange: "transform" }}>
        <span style={{ display: "inline-flex" }}>{children}</span>
        <span style={{ display: "inline-flex" }} aria-hidden>
          {children}
        </span>
        <span style={{ display: "inline-flex" }} aria-hidden>
          {children}
        </span>
        <span style={{ display: "inline-flex" }} aria-hidden>
          {children}
        </span>
      </m.div>
    </div>
  );
}
