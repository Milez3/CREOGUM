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

## Structure

```
nextjs/
├── app/
│   ├── layout.tsx        # Root layout · fonts · <html>/<body>
│   ├── page.tsx          # Home — composes all sections
│   └── globals.css       # Design tokens + component styles
├── components/
│   ├── Nav.tsx           # 'use client' · scroll-shadow fixed nav
│   ├── Hero.tsx          # 'use client' · parallax orbs · pouch · fadeUp stagger
│   ├── Ticker.tsx        # marquee between sections
│   ├── RitualDial.tsx    # 'use client' · interactive 4-dose dial
│   ├── Reserve.tsx       # 'use client' · spot bar · pricing · email form
│   ├── Footer.tsx
│   ├── StickyCTA.tsx     # 'use client' · hero-to-form scroll visibility
│   ├── RevealObserver.tsx# 'use client' · IntersectionObserver for .reveal
│   ├── Logo.tsx          # inline SVG double-C mark
│   └── Pouch.tsx         # inline SVG product placeholder
├── lib/
│   └── content.ts        # typed dose / ticker / batch constants
└── ...                   # tsconfig · next.config · eslint · package.json
```

## Wiring the reservation form

`components/Reserve.tsx` posts a no-op by default. To hook Klaviyo / Mailchimp:

```ts
// Option A — direct from client (use a form endpoint token):
await fetch('https://a.klaviyo.com/client/subscriptions/?company_id=...', {
  method: 'POST',
  body: JSON.stringify({ /* payload */ }),
});

// Option B — via a Next Route Handler (recommended):
// app/api/reserve/route.ts
export async function POST(req: Request) {
  const { email } = await req.json();
  // forward to provider with server-side API key
  return Response.json({ ok: true });
}
```

Then change the `submit` handler in `Reserve.tsx`:

```ts
await fetch('/api/reserve', { method: 'POST', body: JSON.stringify({ email }) });
```

## Swap the product image

`Pouch.tsx` is a placeholder SVG. For the real transparent PNG:

1. Drop `creogum-pouch.png` into `public/`.
2. Replace `<Pouch />` in `Hero.tsx` with `next/image`:

   ```tsx
   import Image from 'next/image';
   <Image src="/creogum-pouch.png" alt="CREOGUM pouch" width={440} height={600} priority />
   ```

## Notes

- All motion (parallax orbs, fadeUp stagger, reveals, dial progress, spot bar) is CSS + vanilla JS — no animation libraries.
- The Tweaks panel from the prototype isn't ported — it's a dev-preview affordance, not production UX.
- Strict mode is on. All client components are explicitly `'use client'`.
