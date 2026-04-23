"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useMemo, useRef } from "react";

type Props = {
  text: string;
  className?: string;
  /** Re-scatter whenever this key changes (for hover restarts). */
  scatterKey?: string | number;
};

/**
 * "Forgetting made literal." Each letter begins scattered in random 2D
 * space with low opacity and drifts in to form the word.
 */
export function ScatterWord({ text, className, scatterKey }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.5 });

  const chars = useMemo(() => Array.from(text), [text]);
  /**
   * Deterministic hash so SSR and client render the same offsets —
   * avoids the React hydration mismatch that `Math.random()` causes.
   */
  const offsets = useMemo(
    () =>
      chars.map((ch, i) => {
        const seed = hash(`${text}-${i}-${ch}`);
        const rand = (n: number) => pseudoRandom(seed + n);
        return {
          x: Math.round((rand(1) - 0.5) * 180),
          y: Math.round((rand(2) - 0.5) * 120),
          r: Math.round((rand(3) - 0.5) * 90),
          d: Math.round((0.2 + rand(4) * 0.5) * 100) / 100,
        };
      }),
    [chars, text],
  );

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} style={{ display: "inline-flex" }} aria-label={text} key={scatterKey}>
      {chars.map((ch, i) => (
        <m.span
          key={`${i}-${ch}`}
          aria-hidden
          initial={{ opacity: 0, x: offsets[i].x, y: offsets[i].y, rotate: offsets[i].r, filter: "blur(8px)" }}
          animate={
            visible
              ? { opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" }
              : { opacity: 0, x: offsets[i].x, y: offsets[i].y, rotate: offsets[i].r, filter: "blur(8px)" }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: offsets[i].d,
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </m.span>
      ))}
    </span>
  );
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed) * 43758.5453;
  return x - Math.floor(x);
}
