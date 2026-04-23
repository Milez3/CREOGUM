"use client";

import { m, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Decimal-friendly animated counter. Smoothly interpolates from 0 to `end`
 * when scrolled into view. Tabular-nums so digits don't reflow.
 */
export function SlotCounter({ end, decimals = 0, suffix, duration = 1600, className }: CounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.35 });
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 60, damping: 18, mass: 1 });
  const display = useTransform(smooth, (v) => v.toFixed(decimals));
  const [text, setText] = useState((0).toFixed(decimals));

  useMotionValueEvent(display, "change", (v) => setText(v));

  useEffect(() => {
    if (reduce) {
      raw.set(end);
      return;
    }
    if (!visible) return;
    const start = performance.now();
    let rafId = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      raw.set(eased * end);
      if (k < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [visible, end, duration, raw, reduce]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {text}
      {suffix ? <span style={{ marginLeft: "0.12em" }}>{suffix}</span> : null}
    </span>
  );
}

type DigitsProps = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

/**
 * Per-digit rolling slot: each digit is a 10-cell vertical strip that
 * rolls multiple times before landing on the final digit. Staggered by
 * digit position for a cascading slot-machine feel.
 */
export function SlotCounterDigits({ end, duration = 1700, suffix, className }: DigitsProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.35 });

  const target = Math.max(0, Math.round(end));
  const str = String(target);
  const digits = str.split("").map(Number);

  const progress = useMotionValue(0);

  useEffect(() => {
    if (reduce) {
      progress.set(1);
      return;
    }
    if (!visible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - k, 4);
      progress.set(eased);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, duration, progress, reduce]);

  const ariaLabel = `${target.toLocaleString()}${suffix ?? ""}`;

  return (
    <span
      ref={ref}
      className={className}
      aria-label={ariaLabel}
      style={{ display: "inline-flex", alignItems: "baseline", fontVariantNumeric: "tabular-nums" }}
    >
      <span aria-hidden style={{ display: "inline-flex", alignItems: "baseline" }}>
        {digits.map((d, i) => (
          <DigitSlot key={`${i}-${digits.length}`} target={d} progress={progress} offset={i / (digits.length * 1.4)} />
        ))}
        {suffix ? <span style={{ marginLeft: "0.15em" }}>{suffix}</span> : null}
      </span>
    </span>
  );
}

function DigitSlot({
  target,
  progress,
  offset,
}: {
  target: number;
  progress: ReturnType<typeof useMotionValue<number>>;
  offset: number;
}) {
  const loops = 6;
  const offset2 = Math.min(0.6, offset);
  const translate = useTransform(progress, (v) => {
    const adj = Math.max(0, Math.min(1, (v - offset2) / (1 - offset2)));
    const landed = adj * (loops * 10 + target);
    const cell = landed % 10;
    return `-${cell}em`;
  });

  return (
    <span
      style={{
        display: "inline-block",
        height: "1em",
        overflow: "hidden",
        lineHeight: 1,
      }}
    >
      <m.span style={{ display: "inline-flex", flexDirection: "column", y: translate }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ display: "block", height: "1em", lineHeight: 1 }}>
            {i}
          </span>
        ))}
      </m.span>
    </span>
  );
}
