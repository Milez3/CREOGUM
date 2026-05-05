# CREOGUM — Next.js 14 + TypeScript

Production port of the CREOGUM landing page prototype. 3 sections, UI-forward, heavy on motion.

## Stack

- **Next.js 14** (App Router)
- **React 18** / TypeScript (strict)
- **next/font** — Playfair Display, Figtree, DM Mono (self-hosted, no FOUT)
- Plain CSS (globals.css) — no Tailwind, no CSS-in-JS

## Install

```bash
cd nextjs
npm install
npm run dev
# http://localhost:3000
```

## Build & deploy

```bash
npm run build
npm run start
```

Deploy to Vercel: push this folder and set the project root to `nextjs/`.