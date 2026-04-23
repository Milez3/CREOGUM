"use client";

import { comparison } from "@/content/site";
import { m } from "motion/react";
import { useState } from "react";

import { Reveal } from "../motion/Reveal";
import { TiltCard } from "../motion/TiltCard";

const CREOGUM_COL = 1;

export function Comparison() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section id="compare" className="cg-section" style={{ background: "var(--cream)" }}>
      <div className="cg-wrap">
        <Reveal>
          <p className="cg-eyebrow">{comparison.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cg-h2">{comparison.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <TiltCard maxTilt={4} lift={4} glare className="cg-table-wrap">
            <table className="cg-table" style={{ position: "relative" }}>
              <thead>
                <tr>
                  {comparison.columns.map((h, i) => (
                    <m.th
                      key={h || "dim"}
                      onMouseEnter={() => setHoveredCol(i)}
                      onMouseLeave={() => setHoveredCol(null)}
                      animate={{
                        color: i === CREOGUM_COL ? "var(--sage-mid)" : "var(--ink)",
                        filter:
                          hoveredCol !== null && hoveredCol !== i && i !== 0
                            ? "saturate(0.35) opacity(0.55)"
                            : "saturate(1) opacity(1)",
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        fontFamily: i === CREOGUM_COL ? "var(--font-display)" : undefined,
                        fontWeight: i === CREOGUM_COL ? 900 : 600,
                      }}
                    >
                      {h}
                    </m.th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, rowIdx) => (
                  <m.tr
                    key={row[0]}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: rowIdx * 0.06, type: "spring", stiffness: 130, damping: 20 }}
                  >
                    {row.map((cell, cellIndex) => (
                      <m.td
                        key={`${row[0]}-${cellIndex}`}
                        onMouseEnter={() => setHoveredCol(cellIndex)}
                        onMouseLeave={() => setHoveredCol(null)}
                        animate={{
                          filter:
                            hoveredCol !== null && hoveredCol !== cellIndex && cellIndex !== 0
                              ? "saturate(0.35) opacity(0.55)"
                              : "saturate(1) opacity(1)",
                          backgroundColor:
                            cellIndex === CREOGUM_COL
                              ? "rgba(192,221,151,0.14)"
                              : "rgba(192,221,151,0)",
                        }}
                        transition={{ duration: 0.25 }}
                        style={{
                          fontWeight: cellIndex === CREOGUM_COL ? 700 : undefined,
                          color: cellIndex === CREOGUM_COL ? "var(--sage-mid)" : undefined,
                        }}
                      >
                        {cell}
                      </m.td>
                    ))}
                  </m.tr>
                ))}
              </tbody>
            </table>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
