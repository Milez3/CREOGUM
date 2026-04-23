"use client";

import { survey } from "@/content/site";
import { m } from "motion/react";

import { LiquidBar } from "../motion/LiquidBar";
import { Reveal } from "../motion/Reveal";
import { SlotCounter } from "../motion/SlotCounter";

export function Survey() {
  return (
    <section id="survey" className="cg-section cg-section--sage">
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow" style={{ color: "rgba(249,247,234,0.45)" }}>
            {survey.eyebrow}
          </p>
        </Reveal>
        <Reveal x={32} y={0}>
          <p className="cg-survey-headline">
            <SlotCounter end={survey.counterEnd} decimals={1} suffix="%" />
          </p>
          <p style={{ color: "rgba(249,247,234,0.85)", maxWidth: "36rem", margin: 0 }}>
            {survey.counterLabel}
          </p>
          <div className="cg-survey-rows">
            {survey.bars.map((row, i) => (
              <m.div
                key={row.label}
                className="cg-survey-row"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <span>{row.label}</span>
                <LiquidBar
                  pct={row.widthPct}
                  delay={i * 150}
                  height={5}
                  fill="var(--sage-pale)"
                  track="rgba(255,255,255,0.08)"
                  dot={false}
                />
              </m.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
