"use client";

import { reserve } from "@/content/site";
import { AnimatePresence, m } from "motion/react";
import { FormEvent, useState } from "react";

import { ConfettiBurst } from "../motion/ConfettiBurst";
import { Reveal } from "../motion/Reveal";

const fieldVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 160, damping: 20 } },
};

export function Reserve() {
  const [status, setStatus] = useState<"form" | "done">("form");
  const [burst, setBurst] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBurst(true);
    window.setTimeout(() => setStatus("done"), 350);
    window.setTimeout(() => setBurst(false), 1800);
  }

  return (
    <div className="cg-wrap" style={{ position: "relative", minHeight: "420px" }}>
      <AnimatePresence mode="wait">
        {status === "form" ? (
          <m.div
            key="form-shell"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cg-form-grid">
              <Reveal x={-32} y={0}>
                <p className="cg-eyebrow" style={{ color: "rgba(249,247,234,0.55)" }}>
                  {reserve.eyebrow}
                </p>
                <h2 className="cg-h2" style={{ color: "var(--cream)" }}>
                  {reserve.title}
                </h2>
                <p style={{ color: "rgba(249,247,234,0.75)", marginTop: "1rem" }}>{reserve.intro}</p>
                <div style={{ marginTop: "2rem" }}>
                  {reserve.perks.map((line, i) => (
                    <m.div
                      key={line}
                      className="cg-perk"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 140, damping: 20 }}
                      whileHover={{ x: 4 }}
                    >
                      <m.div
                        className="cg-perk-icon"
                        aria-hidden
                        whileHover={{ backgroundColor: "rgba(192,221,151,0.32)", scale: 1.08 }}
                      />
                      <span>{line}</span>
                    </m.div>
                  ))}
                </div>
              </Reveal>

              <m.form
                onSubmit={onSubmit}
                noValidate
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                style={{ position: "relative" }}
              >
                <m.div variants={fieldVariant}>
                  <label
                    htmlFor="firstName"
                    className="font-label"
                    style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}
                  >
                    {reserve.fields.firstName}
                  </label>
                  <input id="firstName" name="firstName" className="cg-input" required autoComplete="given-name" />
                </m.div>

                <m.div variants={fieldVariant}>
                  <label
                    htmlFor="lastName"
                    className="font-label"
                    style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}
                  >
                    {reserve.fields.lastName}
                  </label>
                  <input id="lastName" name="lastName" className="cg-input" required autoComplete="family-name" />
                </m.div>

                <m.div variants={fieldVariant}>
                  <label
                    htmlFor="email"
                    className="font-label"
                    style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}
                  >
                    {reserve.fields.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="cg-input"
                    required
                    autoComplete="email"
                  />
                </m.div>

                <m.div variants={fieldVariant}>
                  <p
                    className="font-label"
                    style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)", marginBottom: "0.35rem" }}
                  >
                    {reserve.fields.sku}
                  </p>
                  <div className="cg-sku-options">
                    <label>
                      <input type="radio" name="sku" value="founding" defaultChecked />
                      <span className="cg-sku-label">{reserve.sku.founding}</span>
                    </label>
                    <label>
                      <input type="radio" name="sku" value="trial" />
                      <span className="cg-sku-label">{reserve.sku.trial}</span>
                    </label>
                  </div>
                </m.div>

                <m.div variants={fieldVariant}>
                  <label
                    htmlFor="referral"
                    className="font-label"
                    style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}
                  >
                    {reserve.fields.referral}
                  </label>
                  <input id="referral" name="referral" className="cg-input" placeholder="Optional" autoComplete="off" />
                </m.div>

                <m.div variants={fieldVariant} style={{ position: "relative" }}>
                  <m.button
                    type="submit"
                    className="cg-submit"
                    data-cta
                    whileHover={{ y: -2, boxShadow: "0 14px 34px rgba(36,61,20,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {reserve.submit}
                  </m.button>
                  <ConfettiBurst active={burst} />
                </m.div>
              </m.form>
            </div>
          </m.div>
        ) : (
          <m.div
            key="success"
            role="status"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            style={{ position: "relative" }}
          >
            <h2 className="cg-h2" style={{ color: "var(--cream)" }}>
              {reserve.successTitle}
            </h2>
            <p style={{ color: "rgba(249,247,234,0.8)" }}>{reserve.successBody}</p>
            <ConfettiBurst active={burst} />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
