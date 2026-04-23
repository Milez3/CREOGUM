/**
 * CREOGUM landing copy — trimmed for the "viral motion" pass.
 * Punch > paragraphs. Each block is a fragment, not an essay.
 */

export const brand = {
  name: "CREOGUM",
  tagline: "Consistency is the dose.",
  email: "Hello@creogum.com",
  location: "Toronto, ON",
  shipBatchCopy: "Mid-July 2026",
} as const;

export const nav = {
  reserveCta: "Reserve",
} as const;

export const hero = {
  eyebrow: "— 02 / Hero",
  headlineBefore: "The habit that ",
  headlineEm: "actually",
  headlineAfter: " sticks.",
  mantra: "— Consistency is the dose.",
  /** Fragment chips — rendered as individual pills, not a paragraph */
  subheadChips: ["175mg creatine", "per piece", "no scoop", "no shaker"] as const,
  primaryCta: "Reserve Now",
  secondaryCta: "Compare",
  priceFoundingLabel: "Founding",
  priceFounding: "$16.99",
  priceFoundingNote: "locked forever",
  priceTrialLabel: "Trial",
  priceTrial: "$18.99",
  priceTrialNote: "one-time",
  stats: [
    { label: "Dose", value: "175", suffix: "mg" },
    { label: "Daily", value: "4", suffix: "pieces" },
    { label: "Batch 001", value: "7000", suffix: "units" },
  ],
} as const;

export const ticker = {
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
  eyebrow: "— 04 / Competitor",
  title: "The real competitor is forgetting.",
  cards: [
    { title: "Powders", body: "Scoops. Shakers. Timing." },
    { title: "Gummies", body: "Reads as candy first." },
    { title: "Pills", body: "Another bottle to skip." },
  ],
} as const;

export const survey = {
  eyebrow: "— 05 / Survey",
  counterEnd: 75.2,
  counterLabel: "#1 reason people quit: forgetting.",
  bars: [
    { label: "Forget / no routine", widthPct: 75.2 },
    { label: "Taste fatigue", widthPct: 48 },
    { label: "Portability", widthPct: 36 },
    { label: "Timing", widthPct: 29 },
    { label: "Stomach feel", widthPct: 21 },
    { label: "Price", widthPct: 18 },
  ],
} as const;

export const manifesto = {
  eyebrow: "— 06 / Manifesto",
  title: "Compliance, not chemistry.",
  points: [
    "The best protocol is the one you repeat.",
    "Habit beats heroics.",
    "Meet people where they pause.",
    "Premium means predictable.",
  ],
} as const;

export const ritual = {
  eyebrow: "— 07 / Ritual",
  title: "Four chews. One habit.",
  mantra: "— Consistency is the dose.",
  steps: [
    { title: "Morning.", description: "Anchor the day." },
    { title: "Focus.", description: "On the way in." },
    { title: "Reset.", description: "Beat the slump." },
    { title: "Wind down.", description: "Close the loop." },
  ],
} as const;

export const comparison = {
  eyebrow: "— 08 / Comparison",
  title: "CREOGUM vs. the usual suspects",
  columns: ["", "CREOGUM", "Powders", "Gummies", "Pills"] as const,
  rows: [
    ["Friction", "Very low", "High", "Low", "Low"],
    ["Portable", "Excellent", "Poor", "Good", "Good"],
    ["Feels like ritual", "Yes", "Sometimes", "Rarely", "Rarely"],
    ["Dose clarity", "Label-clear", "Varies", "Varies", "Varies"],
  ],
} as const;

export const spots = {
  eyebrow: "— 09 / Spots",
  title: "Batch 001",
  claimed: 143,
  total: 7000,
  helper: "",
} as const;

/** Progress bar fill — must match claimed/total */
export const spotsFillWidthPct = (spots.claimed / spots.total) * 100;

export const pricing = {
  eyebrow: "— 10 / Pricing",
  title: "Pick your entry",
  founding: {
    badge: "Founding",
    sub: "Pre-sale · locked forever",
    price: "$16.99",
    perks: ["Locked until Batch 001 ships", "Priority allocation"],
  },
  trial: {
    badge: "Trial",
    sub: "One-time · no commitment",
    price: "$18.99",
    perks: ["Single purchase", "No subscription"],
  },
} as const;

export const faq = {
  eyebrow: "— 11 / FAQ",
  title: "FAQ",
  items: [
    {
      q: "How much creatine per piece?",
      a: "175mg. Four pieces = 700mg daily — above the 2026 Health Canada recommendation context cited in our brief.",
    },
    {
      q: "When does Batch 001 ship?",
      a: `${brand.shipBatchCopy}. Founding Member pricing stays locked until it ships.`,
    },
    {
      q: "What does it cost?",
      a: "$16.99 Founding (pre-sale, locked forever). $18.99 Trial (one-time, no commitment).",
    },
    {
      q: "Why gum?",
      a: "No scoops, no shakes, no new routine — the friction that makes people forget is gone.",
    },
    {
      q: "Shipping?",
      a: "Handled at checkout. Not shown on this page.",
    },
    {
      q: "Where are you based?",
      a: `${brand.location} · ${brand.email}`,
    },
    {
      q: "How many units in Batch 001?",
      a: "7,000. The counter on this page updates as reservations come in.",
    },
  ],
} as const;

export const reserve = {
  eyebrow: "— 12 / Reserve",
  title: "Claim your spot.",
  intro: "No payment. Reservation only. We'll email you.",
  perks: [
    "Founding price locked until ship",
    "Early access to future drops",
    "Direct line to Toronto",
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
    founding: "Founding — $16.99",
    trial: "Trial — $18.99",
  },
  submit: "Reserve my spot",
} as const;

export const footer = {
  mantra: "— Consistency is the dose. —",
  legal: (year: number) =>
    `© ${year} CREOGUM Inc. · ${brand.location} · ${brand.email}`,
} as const;
