"use client";

import { ritual } from "@/content/site";

import { BiteReveal } from "../motion/BiteReveal";
import { Reveal } from "../motion/Reveal";

export function Ritual() {
  return (
    <section className="cg-section cg-section--sage-light">
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow">{ritual.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cg-h2">{ritual.title}</h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="cg-mantra">{ritual.mantra}</p>
        </Reveal>
        <div className="cg-ritual-grid">
          {ritual.steps.map((step, i) => (
            <BiteReveal key={step.title} index={i} delay={i * 120} className="cg-ritual-card">
              <p
                className="font-label"
                style={{ fontSize: "0.62rem", color: "var(--ink-muted)", margin: "0 0 0.5rem" }}
              >
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <p style={{ margin: "0 0 0.35rem", fontWeight: 700, color: "var(--ink)", fontSize: "1.1rem" }}>
                {step.title}
              </p>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-mid)", lineHeight: 1.45 }}>
                {step.description}
              </p>
            </BiteReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
