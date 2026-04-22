import type { Metadata } from "next";
import Link from "next/link";

import { LogoMark } from "@/components/creogum/LogoMark";

export const metadata: Metadata = {
  title: "About — CREOGUM",
  description: "Founders, story, and why CREOGUM exists.",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)", color: "var(--ink-mid)" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.1rem 2.5rem",
          background: "rgba(249,247,234,0.94)",
          backdropFilter: "blur(14px)",
          borderBottom: "0.5px solid rgba(24,22,15,0.1)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "var(--ink)" }}>
          <LogoMark />
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>creogum</span>
        </Link>
        <Link href="/#order" className="cg-btn-pill cg-btn-pill--dark" style={{ textDecoration: "none" }}>
          Reserve Now
        </Link>
      </header>
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1.25rem 6rem" }}>
        <p className="font-label" style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color: "var(--ink-muted)" }}>
          — About —
        </p>
        <h1 className="font-display" style={{ fontSize: "2.5rem", color: "var(--ink)", margin: "0.5rem 0 1.5rem" }}>
          Founders &amp; story
        </h1>
        <p style={{ lineHeight: 1.7 }}>
          This route preserves the <strong>/about</strong> structure from the live Framer site. Pull founder photos, bios, and the
          brand origin narrative from creogum.com and place them here—or merge into the home manifesto section.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--sage-mid)", fontWeight: 600 }}>
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
