"use client";

import { hero } from "@/content/site";
import { m, useReducedMotion } from "motion/react";

import { MagneticButton } from "../motion/MagneticButton";
import { PouchDrop } from "../motion/PouchDrop";
import { SlotCounterDigits } from "../motion/SlotCounter";
import { StretchText } from "../motion/StretchText";

const headlineStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 18 },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  const before = hero.headlineBefore;
  const after = hero.headlineAfter;

  return (
    <section className="cg-hero">
      <div className="cg-wrap cg-hero-grid">
        <div>
          <m.p
            className="cg-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            {hero.eyebrow}
          </m.p>

          <m.h1
            className="cg-h1"
            variants={reduce ? undefined : headlineStagger}
            initial={reduce ? { opacity: 0 } : "hidden"}
            animate={reduce ? { opacity: 1 } : "show"}
            transition={reduce ? { duration: 0.3 } : undefined}
            style={{ overflow: "hidden" }}
          >
            <m.span variants={reduce ? undefined : line} style={{ display: "inline-block" }}>
              {before}
            </m.span>
            <m.em variants={reduce ? undefined : line} style={{ display: "inline-block" }}>
              <StretchText>{hero.headlineEm}</StretchText>
            </m.em>
            <m.span variants={reduce ? undefined : line} style={{ display: "inline-block" }}>
              {after}
            </m.span>
          </m.h1>

          <m.p
            className="cg-mantra"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {hero.mantra}
          </m.p>

          <m.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.55 } } }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem", marginBottom: "1.5rem" }}
          >
            {hero.subheadChips.map((chip) => (
              <m.span
                key={chip}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
                }}
                style={{
                  display: "inline-flex",
                  padding: "0.45rem 0.85rem",
                  border: "0.5px solid rgba(24,22,15,0.18)",
                  borderRadius: "100px",
                  fontFamily: "var(--font-label)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-mid)",
                  background: "rgba(255,255,255,0.4)",
                }}
              >
                {chip}
              </m.span>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            <MagneticButton href="#order" className="cg-btn-pill cg-btn-primary">
              {hero.primaryCta}
            </MagneticButton>
            <MagneticButton href="#compare" className="cg-btn-pill cg-btn-ghost">
              {hero.secondaryCta}
            </MagneticButton>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            style={{ marginTop: "1.25rem", fontSize: "0.88rem", color: "var(--ink-muted)" }}
          >
            {hero.priceFoundingLabel}{" "}
            <span style={{ color: "var(--amber)", fontWeight: 700 }}>{hero.priceFounding}</span>{" "}
            <span style={{ opacity: 0.7 }}>{hero.priceFoundingNote}</span>
            {" · "}
            {hero.priceTrialLabel}{" "}
            <span style={{ fontWeight: 700 }}>{hero.priceTrial}</span>{" "}
            <span style={{ opacity: 0.7 }}>{hero.priceTrialNote}</span>
          </m.p>

          <div className="cg-hero-stats">
            {hero.stats.map((s, i) => (
              <m.div
                key={s.label}
                className="cg-stat"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08, type: "spring", stiffness: 120, damping: 18 }}
              >
                <strong>{s.label}</strong>
                <span>
                  <SlotCounterDigits end={Number(s.value)} suffix={s.suffix} />
                </span>
              </m.div>
            ))}
          </div>
        </div>

        <div className="cg-hero-visual" aria-hidden>
          <HeroOrbs />
          <div style={{ position: "relative", zIndex: 3, display: "flex", justifyContent: "center" }}>
            <PouchDrop className="cg-pouch" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroOrbs() {
  const reduce = useReducedMotion();
  const common = reduce
    ? undefined
    : {
        animate: { y: [0, -18, 10, 0], scale: [1, 1.02, 0.98, 1] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <>
      <m.div
        className="cg-orb-wrap cg-orb-wrap-1"
        {...(common ?? {})}
        style={{ willChange: "transform" }}
      >
        <div className="cg-orb cg-orb-1" />
      </m.div>
      <m.div
        className="cg-orb-wrap cg-orb-wrap-2"
        {...(common ?? {})}
        transition={common ? { ...common.transition, delay: 2 } : undefined}
        style={{ willChange: "transform" }}
      >
        <div className="cg-orb cg-orb-2" />
      </m.div>
      <m.div
        className="cg-orb-wrap cg-orb-wrap-3"
        {...(common ?? {})}
        transition={common ? { ...common.transition, delay: 4 } : undefined}
        style={{ willChange: "transform" }}
      >
        <div className="cg-orb cg-orb-3" />
      </m.div>
    </>
  );
}
