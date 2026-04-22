"use client";

import {
  comparison,
  competitor,
  footer,
  hero,
  manifesto,
  pricing,
  ritual,
  spots,
  survey,
  ticker,
} from "@/content/site";
import { useCreogumSite } from "@/hooks/useCreogumSite";

import { FaqAccordion } from "./FaqAccordion";
import { LogoMark } from "./LogoMark";
import { ReserveForm } from "./ReserveForm";
import { SiteNav } from "./SiteNav";
import { StickyCta } from "./StickyCta";

export function CreogumHome() {
  useCreogumSite();

  return (
    <>
      <SiteNav />
      <main>
        <section className="cg-hero">
          <div className="cg-wrap cg-hero-grid">
            <div>
              <p className="cg-eyebrow hero-animate hero-delay-1">{hero.eyebrow}</p>
              <h1 className="cg-h1 hero-animate hero-delay-2">
                {hero.headlineBefore}
                <em>{hero.headlineEm}</em>
                {hero.headlineAfter}
              </h1>
              <p className="cg-mantra hero-animate hero-delay-3">{hero.mantra}</p>
              <p className="hero-animate hero-delay-4" style={{ color: "var(--ink-mid)", maxWidth: "36rem" }}>
                {hero.subhead}
              </p>
              <div
                className="hero-animate hero-delay-5"
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}
              >
                <a href="#order" className="cg-btn-pill cg-btn-primary">
                  {hero.primaryCta}
                </a>
                <a href="#compare" className="cg-btn-pill cg-btn-ghost">
                  {hero.secondaryCta}
                </a>
              </div>
              <p className="hero-animate hero-delay-6" style={{ marginTop: "1.25rem", fontSize: "0.92rem", color: "var(--ink-muted)" }}>
                {hero.priceFoundingLabel}{" "}
                <span style={{ color: "var(--amber)", fontWeight: 600 }}>{hero.priceFounding}</span>
                {" — "}
                {hero.priceFoundingNote}
                {" · "}
                {hero.priceTrialLabel} <span style={{ fontWeight: 600 }}>{hero.priceTrial}</span> — {hero.priceTrialNote}
              </p>
              <p className="hero-animate hero-delay-6" style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "var(--ink-muted)", maxWidth: "40rem" }}>
                {hero.statFootnote}
              </p>
              <div className="cg-hero-stats hero-animate hero-delay-7">
                {hero.stats.map((s) => (
                  <div key={s.label} className="cg-stat">
                    <strong>{s.label}</strong>
                    <span>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cg-hero-visual" aria-hidden>
              <div className="cg-orb-wrap cg-orb-wrap-1">
                <div className="cg-orb cg-orb-1" />
              </div>
              <div className="cg-orb-wrap cg-orb-wrap-2">
                <div className="cg-orb cg-orb-2" />
              </div>
              <div className="cg-orb-wrap cg-orb-wrap-3">
                <div className="cg-orb cg-orb-3" />
              </div>
              <div style={{ position: "relative", zIndex: 3, display: "flex", justifyContent: "center" }}>
                <img
                  className="cg-pouch"
                  src="/creogum-pouch.svg"
                  width={440}
                  height={440}
                  alt="CREOGUM pouch"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cg-ticker" aria-label="Brand phrases">
          <div className="cg-ticker-track">
            {[0, 1].map((copy) => (
              <span key={copy} style={{ display: "inline-flex" }}>
                {ticker.phrases.map((phrase, i) => (
                  <span key={`${copy}-${phrase}`} className={`cg-ticker-item ${i % 2 === 0 ? "cg-ticker-item--hi" : ""}`}>
                    {phrase}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </section>

        <section className="cg-section cg-section--dark">
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal" style={{ color: "rgba(249,247,234,0.45)" }}>
              {competitor.eyebrow}
            </p>
            <h2 className="cg-h2 reveal reveal-delay-1">{competitor.title}</h2>
            <p className="reveal reveal-delay-2" style={{ color: "rgba(249,247,234,0.75)", maxWidth: "40rem" }}>
              {competitor.intro}
            </p>
            <div className="cg-forgetting-grid">
              {competitor.cards.map((c, i) => (
                <div key={c.title} className={`cg-card-dark reveal ${i === 0 ? "" : `reveal-delay-${i}`}`}>
                  <h3 className="font-display" style={{ fontSize: "1.25rem", margin: "0 0 0.5rem", color: "var(--cream)" }}>
                    {c.title}
                  </h3>
                  <p style={{ margin: 0, color: "rgba(249,247,234,0.72)", fontSize: "0.95rem" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="survey" className="cg-section cg-section--sage">
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal" style={{ color: "rgba(249,247,234,0.45)" }}>
              {survey.eyebrow}
            </p>
            <div className="reveal-right">
              <p className="cg-survey-headline" data-counter data-counter-end={String(survey.counterEnd)}>
                0%
              </p>
              <p style={{ color: "rgba(249,247,234,0.85)", maxWidth: "36rem", margin: 0 }}>
                {survey.counterLabel}
              </p>
              <div className="cg-survey-rows">
                {survey.bars.map((row) => (
                  <div key={row.label} className="cg-survey-row">
                    <span>{row.label}</span>
                    <div className="cg-bar-track">
                      <div className="cg-bar-fill" data-survey-bar data-width={`${row.widthPct}%`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cg-section cg-section--white">
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal">{manifesto.eyebrow}</p>
            <h2 className="cg-h2 reveal reveal-delay-1">{manifesto.title}</h2>
            <div className="cg-manifesto-grid">
              {manifesto.points.map((t, i) => (
                <div key={t} className={`cg-manifesto-point reveal reveal-delay-${Math.min(4, i + 1)}`}>
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--ink)" }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cg-section cg-section--sage-light">
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal">{ritual.eyebrow}</p>
            <h2 className="cg-h2 reveal reveal-delay-1">{ritual.title}</h2>
            <p className="cg-mantra reveal reveal-delay-2">{ritual.mantra}</p>
            <div className="cg-ritual-grid">
              {ritual.steps.map((step, i) => (
                <div key={step.title} className={`cg-ritual-card reveal reveal-delay-${Math.min(4, i + 1)}`}>
                  <p className="font-label" style={{ fontSize: "0.62rem", color: "var(--ink-muted)", margin: "0 0 0.5rem" }}>
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{ margin: "0 0 0.35rem", fontWeight: 600, color: "var(--ink)" }}>{step.title}</p>
                  <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-mid)", lineHeight: 1.45 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="cg-section" style={{ background: "var(--cream)" }}>
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal">{comparison.eyebrow}</p>
            <h2 className="cg-h2 reveal reveal-delay-1">{comparison.title}</h2>
            <div className="cg-table-wrap reveal reveal-delay-2">
              <table className="cg-table">
                <thead>
                  <tr>
                    {comparison.columns.map((h) => (
                      <th key={h || "dim"}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="spots" className="cg-section cg-section--sage-light">
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal">{spots.eyebrow}</p>
            <h2 className="cg-h2 reveal reveal-delay-1">{spots.title}</h2>
            <p className="reveal reveal-delay-2" style={{ margin: 0, color: "var(--ink-mid)" }}>
              {spots.claimed.toLocaleString()} / {spots.total.toLocaleString()} spots claimed — {spots.helper}
            </p>
            <div className="cg-spot-bar-wrap reveal reveal-delay-2" style={{ marginTop: "1.5rem" }}>
              <div className="cg-spot-fill" data-spot-fill>
                <span className="cg-spot-dot" />
              </div>
            </div>
          </div>
        </section>

        <section className="cg-section cg-section--white">
          <div className="cg-wrap">
            <p className="cg-eyebrow reveal">{pricing.eyebrow}</p>
            <h2 className="cg-h2 reveal reveal-delay-1">{pricing.title}</h2>
            <div className="cg-pricing-grid">
              <div className="cg-price-card cg-price-card--featured reveal">
                <span className="cg-price-badge cg-price-badge--dark">{pricing.founding.badge}</span>
                <p style={{ margin: "1.5rem 0 0", fontSize: "0.85rem", color: "var(--ink-muted)" }}>{pricing.founding.sub}</p>
                <p className="cg-price-amount">{pricing.founding.price}</p>
                {pricing.founding.perks.map((line) => (
                  <div key={line} className="cg-check">
                    <span className="cg-check-icon" />
                    {line}
                  </div>
                ))}
              </div>
              <div className="cg-price-card reveal reveal-delay-1">
                <span className="cg-price-badge cg-price-badge--sage">{pricing.trial.badge}</span>
                <p style={{ margin: "1.5rem 0 0", fontSize: "0.85rem", color: "var(--ink-muted)" }}>{pricing.trial.sub}</p>
                <p className="cg-price-amount">{pricing.trial.price}</p>
                {pricing.trial.perks.map((line) => (
                  <div key={line} className="cg-check">
                    <span className="cg-check-icon" />
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cg-section" style={{ background: "var(--cream)" }}>
          <FaqAccordion />
        </section>

        <section id="order" className="cg-section cg-section--form" style={{ minHeight: "480px" }}>
          <ReserveForm />
        </section>

        <footer className="cg-footer">
          <div
            className="cg-wrap"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "var(--cream)" }}>
              <LogoMark />
              <span className="cg-logo-text" style={{ color: "var(--cream)" }}>
                creogum
              </span>
            </div>
            <p className="font-label" style={{ fontSize: "0.68rem", color: "rgba(249,247,234,0.55)", margin: 0 }}>
              {footer.mantra}
            </p>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(249,247,234,0.65)" }}>{footer.legal(new Date().getFullYear())}</p>
          </div>
        </footer>
      </main>
      <StickyCta />
    </>
  );
}
