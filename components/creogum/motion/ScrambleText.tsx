"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#$%&".split("");

type Props = {
  text: string;
  duration?: number;
  startDelay?: number;
  className?: string;
};

/**
 * Letter-scramble decrypt. Each character tumbles through random glyphs
 * then snaps to its final letter — left to right. Used for manifesto
 * punchlines.
 */
export function ScrambleText({ text, duration = 1100, startDelay = 0, className }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.45 });
  const [frame, setFrame] = useState(text);

  useEffect(() => {
    if (reduce || !visible) {
      setFrame(text);
      return;
    }

    const chars = text.split("");
    const targets = chars.map((ch, i) => ({
      from: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      to: ch,
      start: i * (duration / chars.length) * 0.35 + startDelay,
      end: i * (duration / chars.length) * 0.35 + startDelay + duration * 0.45,
    }));

    const t0 = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const elapsed = t - t0;
      let done = 0;
      const out = targets.map(({ from, to, start, end }) => {
        if (elapsed < start) return from;
        if (elapsed > end) {
          done++;
          return to;
        }
        if (to === " ") return " ";
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      });
      setFrame(out.join(""));
      if (done < targets.length) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, text, duration, startDelay, reduce]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {frame}
    </span>
  );
}
