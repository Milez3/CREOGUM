"use client";

import { spots, spotsFillWidthPct } from "@/content/site";

import { LiquidBar } from "../motion/LiquidBar";
import { Reveal } from "../motion/Reveal";
import { SlotCounterDigits } from "../motion/SlotCounter";

export function Spots() {
  return (
    <section id="spots" className="cg-section cg-section--sage-light">
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow">{spots.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cg-h2">{spots.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--ink)",
            }}
          >
            <SlotCounterDigits end={spots.claimed} /> / {spots.total.toLocaleString()}{" "}
            <span style={{ fontWeight: 400, fontSize: "1rem", color: "var(--ink-mid)" }}>claimed</span>
          </p>
        </Reveal>
        <Reveal delay={220} style={{ marginTop: "1.5rem" }}>
          <LiquidBar
            pct={spotsFillWidthPct}
            height={10}
            fill="linear-gradient(90deg, var(--sage-mid), var(--sage-pale))"
            track="rgba(24,22,15,0.06)"
            dot
          />
        </Reveal>
      </div>
    </section>
  );
}
