"use client";

import { ticker } from "@/content/site";

import { VelocityMarquee } from "../motion/VelocityMarquee";

export function Ticker() {
  return (
    <section className="cg-ticker" aria-label="Brand phrases">
      <VelocityMarquee baseSpeed={2.2}>
        {ticker.phrases.map((phrase, i) => (
          <span
            key={phrase}
            className={`cg-ticker-item ${i % 2 === 0 ? "cg-ticker-item--hi" : ""}`}
          >
            {phrase}
          </span>
        ))}
      </VelocityMarquee>
    </section>
  );
}
