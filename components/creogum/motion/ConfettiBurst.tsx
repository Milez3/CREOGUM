"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { useMemo } from "react";

type Props = {
  /** Number of gum-square particles. Capped to 30. */
  count?: number;
  /** Show the burst. Removing it from the DOM cleans particles up. */
  active: boolean;
};

const COLORS = ["#c0dd97", "#3b6b10", "#ba7517", "#f9f7ea", "#eaf3de"];

/**
 * Tiny gum-square particles that burst outward. Each square has its own
 * rotation + trajectory. Fades out and unmounts via AnimatePresence.
 */
export function ConfettiBurst({ count = 22, active }: Props) {
  const reduce = useReducedMotion();
  const n = Math.min(30, count);

  const particles = useMemo(
    () =>
      Array.from({ length: n }).map(() => ({
        angle: Math.random() * Math.PI * 2,
        dist: 80 + Math.random() * 140,
        size: 6 + Math.random() * 8,
        rot: Math.random() * 720 - 360,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.12,
        duration: 0.9 + Math.random() * 0.6,
      })),
    [n],
  );

  if (reduce) return null;

  return (
    <AnimatePresence>
      {active ? (
        <m.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {particles.map((p, i) => (
            <m.span
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              animate={{
                x: Math.cos(p.angle) * p.dist,
                y: Math.sin(p.angle) * p.dist,
                opacity: 0,
                rotate: p.rot,
                scale: 0.4,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: p.duration, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                width: p.size,
                height: p.size,
                borderRadius: 2,
                background: p.color,
                boxShadow: "0 2px 6px rgba(24,22,15,0.12)",
              }}
            />
          ))}
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
