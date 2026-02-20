# Tethered – Clawdbot Setup & AI Consulting

A Next.js marketing site for **Tethered**, an AI consulting and agent-setup company that professionally deploys and maintains **Clawdbot** — the open-source AI assistant that runs on your hardware and acts as a digital employee across email, calendar, Slack, CRM, and more.

## Features

- **Tethered brand** – Copy and structure built around “tethered to the future,” “tethered to AI,” and “tethered to peace of mind”
- **Clawdbot-focused** – Explains what Clawdbot is, why professional setup matters, and how deployment works
- **Clear sections** – Hero, What You’re Setting Up, Why Setup Matters (4 pillars), Managed Monitoring, DIY vs. Tethered, How It Works, Pricing, Testimonials, CTA & Contact
- **Responsive** – Layout and typography tuned for desktop and mobile
- **Next.js 15** – App Router, React 19, Turbopack in dev
- **TypeScript** – Typed components and data
- **Tailwind CSS + shadcn/ui** – Consistent styling and accessible UI

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Site structure (content)

| Section | Purpose |
|--------|---------|
| **Hero** | Headline (“Your Clawdbot setup, done right the first time”), value prop, CTAs, trust stats |
| **What you’re setting up** | Clawdbot as “digital employee” and list of capabilities (inbox, calendar, research, scripts, memory) |
| **Why setup matters** | “Where most people get stuck” + 4 pillars: Configuration, Wiring, Tuning, Hardening |
| **Managed monitoring** | Optional TetheredCare and ops-center monitoring |
| **DIY vs. Tethered** | Honest comparison: going it alone vs. with Tethered |
| **How it works** | 5 steps: Discovery → Build & Harden → Go Live → 14‑Day TetheredCare → Managed Care |
| **Pricing** | In-Person VIP, Remote, Additional Agent; Tethered Care plans (Basic, Super, Enterprise) |
| **Testimonials** | Social proof (industry / founder / ops quotes) |
| **CTA & Contact** | Book setup call, free consultation, email, location (Austin, TX; worldwide remote) |

## Project structure

```
full-stack-starter-frontend/
├── app/
│   ├── page.tsx          # Landing page (all sections)
│   ├── layout.tsx        # Root layout and metadata
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # shadcn/ui (button, card, etc.)
├── public/
│   └── hero-background.jpg   # Hero / lander image (pixel art)
├── lib/
│   └── utils.ts
└── types/
```

## Deployment

- **Vercel**: Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Next.js is auto-detected.
- **Other**: Any platform that supports Next.js (Netlify, AWS Amplify, Railway, Render, etc.) works with `npm run build` and `npm run start`.

## Customization

- **Copy and pricing** – Edit the strings and arrays in `app/page.tsx` (e.g. `deploymentSteps`, `pillars`, `packages`, `carePlans`, `testimonials`).
- **Hero image** – Replace `public/hero-background.jpg`; the hero uses a square-ish area with `object-cover`.
- **Booking / contact** – Update the Cal.com (or other) links and contact details in the CTA section and footer.

## Tech stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: shadcn/ui (Radix primitives)

## Links

- [Next.js docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

© 2025 Tethered. Clawdbot deployment, done right.
