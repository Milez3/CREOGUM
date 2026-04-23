"use client";

import { faq } from "@/content/site";
import { AnimatePresence, m } from "motion/react";
import { useState } from "react";

import { Reveal } from "../motion/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="cg-wrap">
      <Reveal>
        <p className="cg-eyebrow">{faq.eyebrow}</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="cg-h2">{faq.title}</h2>
      </Reveal>
      <Reveal delay={160}>
        <div>
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <m.div
                key={item.q}
                layout
                className={`cg-faq-item ${isOpen ? "open" : ""}`}
                transition={{ layout: { type: "spring", stiffness: 140, damping: 20 } }}
              >
                <m.button
                  type="button"
                  layout
                  className="cg-faq-btn"
                  onClick={() => setOpen((prev) => (prev === i ? null : i))}
                  aria-expanded={isOpen}
                  whileHover={{ x: 4 }}
                >
                  <span>{item.q}</span>
                  <m.span
                    className="cg-faq-icon"
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  >
                    +
                  </m.span>
                </m.button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <m.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { type: "spring", stiffness: 160, damping: 22 },
                        opacity: { duration: 0.25 },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="cg-faq-panel-inner">{item.a}</div>
                    </m.div>
                  ) : null}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
