"use client";

import { nav } from "@/content/site";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export function StickyCta() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (typeof window === "undefined") return;
    const hero = document.querySelector<HTMLElement>(".cg-hero");
    const form = document.querySelector<HTMLElement>("#order");
    if (!hero || !form) return;
    const heroH = hero.offsetHeight;
    const formTop = form.getBoundingClientRect().top + window.scrollY;
    setVisible(y > heroH * 0.6 && y < formTop - 100);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <m.div
          className="cg-sticky-cta"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          style={{ pointerEvents: "auto" }}
        >
          <m.a
            href="#order"
            className="cg-btn-pill cg-btn-pill--dark"
            data-cta
            whileHover={{ y: -3, boxShadow: "0 14px 34px rgba(24,22,15,0.25)" }}
            whileTap={{ scale: 0.96 }}
          >
            {nav.reserveCta}
          </m.a>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
