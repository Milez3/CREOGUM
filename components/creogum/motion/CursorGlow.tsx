"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Desktop-only blurred cursor-follower. Scales and tints amber when the
 * cursor is over a `[data-cta]` element. Hidden on touch devices and
 * under reduced-motion.
 */
export function CursorGlow() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);

  const sx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 320, damping: 30, mass: 0.6 });
  const ss = useSpring(scale, { stiffness: 220, damping: 22 });

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const cta = target?.closest?.("[data-cta]");
      scale.set(cta ? 2.4 : 1);
    };
    const onLeave = () => scale.set(1);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y, scale, reduce]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: sx,
        y: sy,
        scale: ss,
        width: 28,
        height: 28,
        marginLeft: -14,
        marginTop: -14,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(186,117,23,0.55) 0%, rgba(186,117,23,0) 70%)",
        pointerEvents: "none",
        zIndex: 200,
        mixBlendMode: "multiply",
      }}
    />
  );
}
