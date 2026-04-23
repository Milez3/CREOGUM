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
  const offsets = useMemo(
    () =>
      chars.map(() => ({
        x: (Math.random() - 0.5) * 180,
        y: (Math.random() - 0.5) * 120,
        r: (Math.random() - 0.5) * 90,
        d: 0.2 + Math.random() * 0.5,
      })),
    [chars],
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
