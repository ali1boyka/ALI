# SHODOLUX | شودولوكس

Premium bilingual (Arabic/English) corporate website for SHODOLUX, an import & export trading house for food products, legumes and spices.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- next-intl (routing, RTL/LTR switching, `/ar` and `/en`)
- Framer Motion + GSAP (ScrollTrigger) for scroll/parallax/micro-interactions
- Hand-built UI primitives (no external component registry dependency)

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — the root path redirects to `/ar` (default locale). Switch language from the navbar.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Structure

- `src/app/[locale]/` — routes, root layout (fonts, `<html lang dir>`, metadata)
- `src/i18n/` — next-intl routing/config/navigation
- `messages/ar.json`, `messages/en.json` — all site copy
- `src/components/sections/` — page sections (Hero, About, Services, Products, WhyUs, Quality, GlobalMarkets, CTA, Contact)
- `src/components/visuals/` — hand-drawn SVG scene layers (logo, globe/trade-routes, port cranes, cargo ship, waves, quality badge)
- `src/components/ui/` — Button, Card, Input/Textarea, Section, Reveal (Framer Motion), AnimatedCounter

## Known follow-ups

- **Logo**: the mark in `src/components/visuals/logo.tsx` is a recreation based on the brand's color palette, not the original artwork file. Drop the real logo (SVG preferred) into `public/` and swap it in if pixel-perfect fidelity is needed.
- **Imagery**: all visuals are hand-built SVG/CSS (no photography), per the no-stock-photo requirement. If photorealistic commercial photography is wanted later, wire up an image-generation API key and swap the relevant sections.
- **Contact form**: the form is client-side only (simulated submit). Wire it to a real endpoint (API route + email service, or a form backend) to actually receive messages.
- **Placeholder contact details**: email/phone in `messages/*.json` and `contact.tsx`/`footer.tsx` are placeholders — replace with real company contact info.
- **Domain**: `sitemap.ts` and `robots.ts` use `https://www.shodolux.com` as a placeholder — update once the real domain is live.
