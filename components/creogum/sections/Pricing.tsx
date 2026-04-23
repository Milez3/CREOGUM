"use client";

import { pricing } from "@/content/site";
import { m } from "motion/react";

import { Reveal } from "../motion/Reveal";
import { TiltCard } from "../motion/TiltCard";

type Card = {
  badge: string;
  sub: string;
  price: string;
  perks: readonly string[];
  featured?: boolean;
  badgeClass: string;
};

export function Pricing() {
  const cards: Card[] = [
    {
      ...pricing.founding,
      featured: true,
      badgeClass: "cg-price-badge cg-price-badge--dark",
    },
    {
      ...pricing.trial,
      badgeClass: "cg-price-badge cg-price-badge--sage",
    },
  ];

  return (
    <section className="cg-section cg-section--white">
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow">{pricing.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cg-h2">{pricing.title}</h2>
        </Reveal>
        <div className="cg-pricing-grid">
          {cards.map((card, i) => (
            <Reveal key={card.badge} delay={i * 120}>
              <TiltCard
                maxTilt={6}
                lift={10}
                className={`cg-price-card ${card.featured ? "cg-price-card--featured" : ""}`}
              >
                <span className={card.badgeClass}>{card.badge}</span>
                <p style={{ margin: "1.5rem 0 0", fontSize: "0.85rem", color: "var(--ink-muted)" }}>{card.sub}</p>
                <p className="cg-price-amount">
                  <RollingPrice price={card.price} />
                </p>
                {card.perks.map((line, j) => (
                  <m.div
                    key={line}
                    className="cg-check"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                  >
                    <span className="cg-check-icon" />
                    {line}
                  </m.div>
                ))}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Rolling price: splits a "$16.99" into glyphs and animates numeric
 * characters through a short roll on in-view.
 */
function RollingPrice({ price }: { price: string }) {
  const chars = price.split("");
  return (
    <span aria-label={price} style={{ fontVariantNumeric: "tabular-nums", display: "inline-flex" }}>
      <span aria-hidden style={{ display: "inline-flex" }}>
      {chars.map((c, i) => {
        if (/\d/.test(c)) {
          return (
            <m.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 200, damping: 18 }}
              style={{ display: "inline-block" }}
            >
              {c}
            </m.span>
          );
        }
        return (
          <m.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15 + i * 0.05 }}
            style={{ display: "inline-block" }}
          >
            {c}
          </m.span>
        );
      })}
      </span>
    </span>
  );
}
