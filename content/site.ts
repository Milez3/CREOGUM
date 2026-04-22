/**
 * CREOGUM landing copy — aligned to the April 2026 Developer Brief (PDF).
 * When the single-file prototype HTML is available, paste it into /reference/prototype.html
 * and reconcile any deltas here (this file stays the app source of truth).
 */

export const brand = {
  name: "CREOGUM",
  tagline: "Consistency is the dose.",
  email: "Hello@creogum.com",
  location: "Toronto, ON",
  /** Do not show shipping ($4.99) on the landing page — brief Section 06 / content notes */
  shipBatchCopy: "Mid-July 2026",
} as const;

export const nav = {
  reserveCta: "Reserve Now",
} as const;

export const hero = {
  eyebrow: "— Section 02 — Hero",
  /** Brief: italic on "actually" */
  headlineBefore: "The habit that ",
  headlineEm: "actually",
  headlineAfter: " sticks.",
  mantra: "— Consistency is the dose.",
  /** Brief Section 01 positioning + product */
  subhead:
    "Premium functional gum delivering 175mg of creatine per piece. The product removes all friction from daily creatine use — no scoops, no shakes, no new routine.",
  primaryCta: "Reserve Now",
  secondaryCta: "See the comparison",
  /** Brief Section 06 — key price facts (render with amber on founding price only) */
  priceFoundingLabel: "Founding Member",
  priceFounding: "$16.99",
  priceFoundingNote: "locked forever, pre-sale only, closes when Batch 001 ships",
  priceTrialLabel: "The Trial",
  priceTrial: "$18.99",
  priceTrialNote: "one-time, no commitment",
  stats: [
    { label: "Dose", value: "175mg / piece" },
    { label: "Daily ritual", value: "4 pieces = 700mg" },
    { label: "Batch 001", value: "7,000 units" },
  ],
  statFootnote:
    "700mg daily from four pieces exceeds the 2026 Health Canada recommendation for creatine context cited in our brief.",
} as const;

export const ticker = {
  /** Brief: scrolling brand phrases — duplicate in UI for seamless loop */
  phrases: [
    "No scoops",
    "No shakes",
    "No new routine",
    "175mg per piece",
    "7,000 units — Batch 001",
    brand.tagline,
    brand.location,
  ],
} as const;

export const competitor = {
  eyebrow: "— Section 04 — The real competitor is forgetting",
  title: "The real competitor is forgetting.",
  intro:
    "Powders, gummies, and pills all work on paper. CREOGUM competes with the routine breaking down — not with a molecule.",
  cards: [
    {
      title: "Powders",
      body: "Scoops, shakers, timing, taste — friction that stacks every day.",
    },
    {
      title: "Gummies",
      body: "Treat-first formats that read as candy before they read as ritual.",
    },
    {
      title: "Pills",
      body: "Another bottle to remember. Easy to skip when life gets loud.",
    },
  ],
} as const;

export const survey = {
  eyebrow: "— Section 05 — Survey validation",
  /** Brief: 75.2% cite "forget / no routine" as #1 barrier */
  counterEnd: 75.2,
  counterLabel:
    "Respondents cite “forget / no routine” as the #1 barrier to consistency — CREOGUM exists to remove that friction.",
  bars: [
    { label: "Forget / no routine", widthPct: 75.2 },
    { label: "Taste / texture fatigue", widthPct: 48 },
    { label: "Portability", widthPct: 36 },
    { label: "Timing around training", widthPct: 29 },
    { label: "Stomach feel", widthPct: 21 },
    { label: "Price per serving", widthPct: 18 },
  ],
} as const;

export const manifesto = {
  eyebrow: "— Section 06 — Manifesto",
  title: "Compliance, not chemistry.",
  points: [
    "The best protocol is the one you repeat.",
    "Habit beats heroics — small doses, daily.",
    "Meet people where they already pause.",
    "Premium means predictable, not performative.",
  ],
} as const;

export const ritual = {
  eyebrow: "— Section 07 — Daily ritual",
  title: "Four chews. One habit.",
  mantra: "— Consistency is the dose.",
  steps: [
    { title: "Morning stack", description: "Anchor the day before the noise starts." },
    { title: "Pre-work focus", description: "A chew on the way in — no shaker required." },
    { title: "Afternoon reset", description: "Replace the slump with a repeat cue." },
    { title: "Evening wind-down", description: "Close the loop on four pieces total." },
  ],
} as const;

export const comparison = {
  eyebrow: "— Section 08 — Comparison table",
  title: "CREOGUM vs. the usual suspects",
  columns: ["", "CREOGUM", "Powders", "Gummies", "Pills"] as const,
  rows: [
    ["Friction to use", "Very low", "High", "Low", "Low"],
    ["Portable", "Excellent", "Poor", "Good", "Good"],
    ["Feels like a daily ritual", "Yes", "Sometimes", "Rarely", "Rarely"],
    ["Creatine dose clarity", "Label-clear", "Varies", "Varies", "Varies"],
  ],
} as const;

export const spots = {
  eyebrow: "— Section 09 — Spot counter",
  title: "Batch 001 spots",
  /** Brief: update manually as reservations come in */
  claimed: 143,
  total: 7000,
  helper: "Update this figure manually as reservations come in.",
} as const;

/** Progress bar fill — must match claimed/total */
export const spotsFillWidthPct = (spots.claimed / spots.total) * 100;

export const pricing = {
  eyebrow: "— Section 10 — Pricing cards",
  title: "Choose your entry",
  founding: {
    badge: "Founding Member",
    sub: "Pre-sale only · locked forever · closes when Batch 001 ships",
    price: "$16.99",
    perks: ["Locked price until Batch 001 ships", "Priority allocation in Batch 001"],
  },
  trial: {
    badge: "The Trial",
    sub: "One-time · no commitment",
    price: "$18.99",
    perks: ["Try the format without a subscription", "Single purchase"],
  },
} as const;

export const faq = {
  eyebrow: "— Section 11 — FAQ accordion",
  title: "FAQ",
  /** Seven questions — brief requirement; answers grounded in brief facts */
  items: [
    {
      q: "How much creatine is in each piece?",
      a: "175mg per piece. Four pieces daily totals 700mg — exceeding the 2026 Health Canada recommendation context noted in our product brief.",
    },
    {
      q: "When does Batch 001 ship?",
      a: `We are targeting ${brand.shipBatchCopy}. Founding Member pricing stays locked until Batch 001 ships.`,
    },
    {
      q: "What do Founding Member and The Trial cost?",
      a: "Founding Member is $16.99 (locked forever, pre-sale only, closes when Batch 001 ships). The Trial is $18.99 one-time with no commitment.",
    },
    {
      q: "Why gum instead of powder or pills?",
      a: "No scoops, no shakes, no new routine — gum removes the friction that makes people forget.",
    },
    {
      q: "Will shipping show on this page?",
      a: "No. Shipping is not displayed on the landing page; it is handled at checkout only.",
    },
    {
      q: "Where is CREOGUM based?",
      a: `${brand.location} · ${brand.email}`,
    },
    {
      q: "How many units are in Batch 001?",
      a: "7,000 units. Spot reservations update the counter on this page as they come in.",
    },
  ],
} as const;

export const reserve = {
  eyebrow: "— Section 12 — Reserve form",
  title: "Claim your spot.",
  intro:
    "No payment on this page — this is a reservation / waitlist for Batch 001. We will follow up by email.",
  perks: [
    "Founding Member price locked until Batch 001 ships",
    "Early access to future drops",
    "Direct line to the founders in Toronto",
  ],
  successTitle: "You are in.",
  successBody: "Watch your inbox for Batch 001 updates.",
  fields: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    sku: "Choose SKU",
    referral: "How did you hear about us?",
  },
  sku: {
    founding: "Founding Member — $16.99 (locked pre-sale)",
    trial: "The Trial — $18.99 one-time",
  },
  submit: "Reserve my spot",
} as const;

export const footer = {
  mantra: "— Consistency is the dose. —",
  legal: (year: number) =>
    `© ${year} CREOGUM Inc. · ${brand.location} · ${brand.email}`,
} as const;
