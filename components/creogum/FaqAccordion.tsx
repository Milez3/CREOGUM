"use client";

import { faq } from "@/content/site";
import { useCallback, useState } from "react";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="cg-wrap">
      <p className="cg-eyebrow reveal">{faq.eyebrow}</p>
      <h2 className="cg-h2 reveal reveal-delay-1">{faq.title}</h2>
      <div className="reveal reveal-delay-2">
        {faq.items.map((item, i) => (
          <div key={item.q} className={`cg-faq-item ${open === i ? "open" : ""}`}>
            <button type="button" className="cg-faq-btn" onClick={() => toggle(i)} aria-expanded={open === i}>
              <span>{item.q}</span>
              <span className="cg-faq-icon" aria-hidden>
                +
              </span>
            </button>
            <div className="cg-faq-panel">
              <div className="cg-faq-panel-inner">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
