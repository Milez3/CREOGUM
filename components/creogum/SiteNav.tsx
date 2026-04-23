"use client";

import { brand, nav } from "@/content/site";
import { m, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { LogoMark } from "./LogoMark";

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <m.header
      className={`cg-nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
    >
      <Link href="/" className="cg-logo" aria-label={`${brand.name} home`}>
        <LogoMark />
        <span className="cg-logo-text">creogum</span>
      </Link>
      <p className="cg-nav-tagline">{brand.tagline}</p>
      <m.div whileTap={{ scale: 0.96 }}>
        <Link href="/#order" className="cg-btn-pill cg-btn-pill--dark" data-cta>
          {nav.reserveCta}
        </Link>
      </m.div>
    </m.header>
  );
}
