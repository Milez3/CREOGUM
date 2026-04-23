"use client";

import { competitor } from "@/content/site";
import { m } from "motion/react";

import { Reveal } from "../motion/Reveal";
import { ScatterWord } from "../motion/ScatterWord";

export function Competitor() {
  return (
    <section className="cg-section cg-section--dark">
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow" style={{ color: "rgba(249,247,234,0.45)" }}>
            {competitor.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cg-h2">
            {"The real competitor is "}
            <em style={{ fontStyle: "italic", color: "var(--sage-pale)" }}>
              <ScatterWord text="forgetting." scatterKey="headline" />
            </em>
          </h2>
        </Reveal>
        <div className="cg-forgetting-grid">
          {competitor.cards.map((c, i) => (
            <m.div
              key={c.title}
              className="cg-card-dark"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: "rgba(192,221,151,0.45)" }}
            >
              <h3
                className="font-display"
                style={{ fontSize: "1.25rem", margin: "0 0 0.5rem", color: "var(--cream)" }}
              >
                <ScatterWord text={c.title} scatterKey={`${i}-${c.title}`} />
              </h3>
              <p style={{ margin: 0, color: "rgba(249,247,234,0.72)", fontSize: "0.95rem" }}>{c.body}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
