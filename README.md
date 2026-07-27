# SHODOLUX | شودولوكس

Premium bilingual (Arabic/English) corporate website for SHODOLUX, an import & export trading house for food products, legumes and spices.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- next-intl (routing, RTL/LTR switching, `/ar` and `/en`)
- Framer Motion + GSAP (ScrollTrigger) for scroll/parallax/micro-interactions
- `sharp` for on-demand image optimization (WebP/AVIF, responsive sizes) via `next/image`
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
- `messages/ar.json`, `messages/en.json` — all site copy + contact details
- `src/components/sections/` — page sections (Hero, About, Services, Products, WhyUs, Quality, GlobalMarkets, CTA, Contact)
- `src/components/visuals/logo.tsx` — real logo, rendered via `next/image`
- `src/components/ui/` — Button, Card, Input/Textarea, Section, Reveal (Framer Motion), AnimatedCounter
- `public/` — real brand assets: logo, hero video (+ WebP-era poster), and section photography (about/quality/global-markets/products)

## Media assets

- **Hero video**: `public/videos/hero-video.mp4` — re-encoded from the original source (H.264, audio stripped, faststart, ~4.3 MB) for fast autoplay. `hero-video.webm` (VP9) is included as a fallback for browsers without H.264 support. `public/images/hero-poster.jpg` is shown instantly while the video loads.
- **Logo**: `public/logo/shodolux-logo.png` is the real brand mark, used in the navbar, footer, and as the generated favicon/apple-touch-icon (`src/app/icon.png`, `src/app/apple-icon.png`).
- **Photography**: all section photos are the real assets provided (no stock/placeholder images) and are served through `next/image`, which generates resized, modern-format (WebP/AVIF) variants on request — e.g. a ~1.9 MB source PNG is served at ~27 KB for a typical card size.

## Known follow-ups

- **Contact form**: client-side only (simulated submit) — needs a real backend/email service to actually deliver messages.
- **Domain**: `sitemap.ts`/`robots.ts` use `https://www.shodolux.com` as a placeholder until the real domain is live.
