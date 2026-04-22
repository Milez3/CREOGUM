"use client";

import { reserve } from "@/content/site";
import { FormEvent, useState } from "react";

export function ReserveForm() {
  const [status, setStatus] = useState<"form" | "fade" | "done">("form");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("fade");
    window.setTimeout(() => setStatus("done"), 300);
  }

  return (
    <div className="cg-wrap" style={{ position: "relative", minHeight: "420px" }}>
      {status !== "done" ? (
        <div
          className="cg-form-shell"
          style={{
            opacity: status === "fade" ? 0 : 1,
            transform: status === "fade" ? "scale(0.97)" : "scale(1)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: status === "fade" ? "none" : "auto",
          }}
        >
          <div className="cg-form-grid">
            <div className="reveal-left">
              <p className="cg-eyebrow" style={{ color: "rgba(249,247,234,0.55)" }}>
                {reserve.eyebrow}
              </p>
              <h2 className="cg-h2" style={{ color: "var(--cream)" }}>
                {reserve.title}
              </h2>
              <p style={{ color: "rgba(249,247,234,0.75)", marginTop: "1rem" }}>{reserve.intro}</p>
              <div style={{ marginTop: "2rem" }}>
                {reserve.perks.map((line) => (
                  <div key={line} className="cg-perk">
                    <div className="cg-perk-icon" aria-hidden />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <form className="reveal-right" onSubmit={onSubmit} noValidate>
              <label htmlFor="firstName" className="font-label" style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}>
                {reserve.fields.firstName}
              </label>
              <input id="firstName" name="firstName" className="cg-input" required autoComplete="given-name" />
              <label htmlFor="lastName" className="font-label" style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}>
                {reserve.fields.lastName}
              </label>
              <input id="lastName" name="lastName" className="cg-input" required autoComplete="family-name" />
              <label htmlFor="email" className="font-label" style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}>
                {reserve.fields.email}
              </label>
              <input id="email" name="email" type="email" className="cg-input" required autoComplete="email" />
              <p className="font-label" style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)", marginBottom: "0.35rem" }}>
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
              <label htmlFor="referral" className="font-label" style={{ fontSize: "0.65rem", color: "rgba(249,247,234,0.5)" }}>
                {reserve.fields.referral}
              </label>
              <input id="referral" name="referral" className="cg-input" placeholder="Optional" autoComplete="off" />
              <button type="submit" className="cg-submit">
                {reserve.submit}
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {status === "done" ? (
        <div className="cg-form-success visible" role="status" style={{ animation: "successPop 0.5s ease forwards" }}>
          <h2 className="cg-h2" style={{ color: "var(--cream)" }}>
            {reserve.successTitle}
          </h2>
          <p style={{ color: "rgba(249,247,234,0.8)" }}>{reserve.successBody}</p>
        </div>
      ) : null}
    </div>
  );
}
