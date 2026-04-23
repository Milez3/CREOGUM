"use client";

import { manifesto } from "@/content/site";
import { m } from "motion/react";

import { Reveal } from "../motion/Reveal";
import { ScrambleText } from "../motion/ScrambleText";

export function Manifesto() {
  return (
    <section className="cg-section cg-section--white">
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow">{manifesto.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cg-h2">{manifesto.title}</h2>
        </Reveal>
        <div className="cg-manifesto-grid">
          {manifesto.points.map((t, i) => (
            <m.div
              key={t}
              className="cg-manifesto-point"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ type: "spring", stiffness: 110, damping: 18, delay: i * 0.1 }}
              whileHover={{ borderColor: "rgba(192,221,151,0.9)" }}
            >
              <p style={{ margin: 0, fontWeight: 600, color: "var(--ink)" }}>
                <ScrambleText text={t} duration={900} startDelay={i * 100} />
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
