"use client";

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  /** Max tilt in degrees. */
  maxTilt?: number;
  /** Lift on hover, in px. */
  lift?: number;
  /** Show the amber gloss highlight following the cursor. */
  glare?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * 3D tilt card. Tracks cursor within its bounds, tilts via rotateX/rotateY,
 * and optionally adds a conic glare that follows the mouse. Springs back
 * on mouse-leave.
 */
export function TiltCard({ children, maxTilt = 9, lift = 6, glare = true, className, style }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const z = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareA = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 220, damping: 20, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 220, damping: 20, mass: 0.5 });
  const sz = useSpring(z, { stiffness: 220, damping: 22 });
  const sgA = useSpring(glareA, { stiffness: 160, damping: 22 });

  const bg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(186, 117, 23, ${sgA}) 0%, transparent 55%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rx.set((0.5 - py) * maxTilt * 2);
    ry.set((px - 0.5) * maxTilt * 2);
    z.set(-lift);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareA.set(0.18);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    z.set(0);
    glareA.set(0);
  };

  return (
    <m.div
      ref={ref}
      className={className}
      style={{
        ...style,
        rotateX: srx,
        rotateY: sry,
        translateZ: sz,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
        position: "relative",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div style={{ position: "relative", zIndex: 1, transform: "translateZ(40px)" }}>{children}</div>
      {glare && !reduce ? (
        <m.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            mixBlendMode: "overlay",
            background: bg,
            zIndex: 2,
          }}
        />
      ) : null}
    </m.div>
  );
}
