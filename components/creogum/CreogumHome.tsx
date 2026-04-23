"use client";

import { footer } from "@/content/site";

import { LogoMark } from "./LogoMark";
import { CursorGlow } from "./motion/CursorGlow";
import { MotionProvider } from "./motion/MotionProvider";
import { ScrollProgress } from "./motion/ScrollProgress";
import { Competitor } from "./sections/Competitor";
import { Comparison } from "./sections/Comparison";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";
import { Manifesto } from "./sections/Manifesto";
import { Pricing } from "./sections/Pricing";
import { Reserve } from "./sections/Reserve";
import { Ritual } from "./sections/Ritual";
import { Spots } from "./sections/Spots";
import { Survey } from "./sections/Survey";
import { Ticker } from "./sections/Ticker";
import { SiteNav } from "./SiteNav";
import { StickyCta } from "./StickyCta";

export function CreogumHome() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <CursorGlow />
      <SiteNav />
      <main>
        <Hero />
        <Ticker />
        <Competitor />
        <Survey />
        <Manifesto />
        <Ritual />
        <Comparison />
        <Spots />
        <Pricing />
        <section className="cg-section" style={{ background: "var(--cream)" }}>
          <Faq />
        </section>
        <section id="order" className="cg-section cg-section--form" style={{ minHeight: "480px" }}>
          <Reserve />
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
            <p
              className="font-label"
              style={{ fontSize: "0.68rem", color: "rgba(249,247,234,0.55)", margin: 0 }}
            >
              {footer.mantra}
            </p>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(249,247,234,0.65)" }}>
              {footer.legal(new Date().getFullYear())}
            </p>
          </div>
        </footer>
      </main>
      <StickyCta />
    </MotionProvider>
  );
}
