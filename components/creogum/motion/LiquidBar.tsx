"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Props = {
  /** Percentage 0-100 */
  pct: number;
  /** Bar height in px */
  height?: number;
  /** Delay before fill animates (ms) */
  delay?: number;
  /** Color of the fill (CSS color) */
  fill?: string;
  /** Color of the track */
  track?: string;
  /** Show travelling dot at the end */
  dot?: boolean;
  className?: string;
};

/**
 * Liquid-style fill bar. On in-view: the fill sweeps in with a spring,
 * a highlight shimmer crosses it, and a pulse dot sits at the leading edge.
 */
export function LiquidBar({
  pct,
  height = 6,
  delay = 0,
  fill = "var(--sage-pale)",
  track = "rgba(255,255,255,0.08)",
  dot = true,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.4 });

  const clamped = Math.max(0, Math.min(100, pct));

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        height,
        background: track,
        borderRadius: height / 2,
        overflow: "visible",
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: height / 2 }}>
        <m.div
          initial={{ width: 0 }}
          animate={visible ? { width: `${clamped}%` } : { width: 0 }}
          transition={
            reduce
              ? { duration: 0.2 }
              : { type: "spring", stiffness: 70, damping: 18, delay: delay / 1000 }
          }
          style={{
            height: "100%",
            background: fill,
            borderRadius: height / 2,
            position: "relative",
          }}
        >
          {!reduce ? (
            <m.span
              aria-hidden
              initial={{ x: "-100%", opacity: 0 }}
              animate={visible ? { x: "200%", opacity: [0, 0.7, 0] } : { x: "-100%", opacity: 0 }}
              transition={{ duration: 1.6, delay: (delay + 400) / 1000, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
              }}
            />
          ) : null}
        </m.div>
      </div>
      {dot && !reduce ? (
        <m.span
          aria-hidden
          initial={{ left: "0%", opacity: 0 }}
          animate={visible ? { left: `${clamped}%`, opacity: 1 } : { left: "0%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 18, delay: delay / 1000 }}
          style={{
            position: "absolute",
            top: "50%",
            width: height + 4,
            height: height + 4,
            borderRadius: "50%",
            background: fill,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 0 4px rgba(192,221,151,0.25)`,
          }}
        />
      ) : null}
    </div>
  );
}
