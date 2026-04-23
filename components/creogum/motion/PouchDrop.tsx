"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  className?: string;
};

/**
 * Page-entrance drop for the hero pouch. Also applies scroll parallax
 * (subtle lift + slow rotation) so the pouch feels physically present.
 */
export function PouchDrop({ className }: Props) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, -60]);
  const parallaxR = useTransform(scrollY, [0, 800], [0, 4]);

  return (
    <m.img
      className={className}
      src="/creogum-pouch.svg"
      width={440}
      height={440}
      alt="CREOGUM pouch"
      loading="eager"
      initial={reduce ? { opacity: 0, y: 0 } : { opacity: 0, y: -160, rotate: -14, scale: 1.05 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: -1, scale: 1 }}
      transition={
        reduce
          ? { duration: 0.3 }
          : {
              opacity: { duration: 0.4 },
              y: { type: "spring", stiffness: 160, damping: 12, mass: 1.2 },
              rotate: { type: "spring", stiffness: 140, damping: 14, delay: 0.05 },
              scale: { type: "spring", stiffness: 180, damping: 14, delay: 0.15 },
            }
      }
      whileHover={reduce ? undefined : { rotate: 3, scale: 1.03 }}
      style={{
        y: reduce ? undefined : parallaxY,
        rotate: reduce ? undefined : parallaxR,
        filter: "drop-shadow(0 24px 48px rgba(24,22,15,0.18))",
        willChange: "transform",
        cursor: reduce ? undefined : "grab",
      }}
      drag={reduce ? false : true}
      dragConstraints={{ left: -40, right: 40, top: -20, bottom: 20 }}
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 16 }}
    />
  );
}
