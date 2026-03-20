# Northeastern Equity Research Group Website

Website for the **Northeastern Equity Research Group (NERG)**, a student-run equity research organization focused on under-covered small and mid-cap companies.

This repository contains the public-facing site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Purpose

The site should present NERG as:

- serious
- professional
- student-run
- research-driven

The visual tone should feel institutional and credible rather than startup-like or overly promotional.

## Source of Truth

Two files define the project and should be read before making changes:

1. [`DESIGN.md`](DESIGN.md)
   Defines the visual system, spacing, color direction, typography, and component consistency.
2. [`RESEARCH.md`](RESEARCH.md)
   Defines the mission, structure, sector coverage, research process, membership expectations, and messaging.

Content must be grounded in `RESEARCH.md`.

Do not invent:

- research reports
- biographies
- sponsors
- performance claims
- statistics
- accomplishments

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## How to Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the site in your browser:

```text
http://localhost:3000
```

4. Before wrapping up changes, run verification:

```bash
npm run lint
npm run build -- --webpack
```

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build -- --webpack
```

Notes:

- `npm run dev` starts the local development server.
- `npm run lint` runs the project lint checks.
- `npm run build -- --webpack` is the most reliable local production verification path used in this repo.

## Current Routes

- `/` homepage
- `/about`
- `/executive-board`
- `/sector-leads`
- `/research`
- `/join`

## Project Structure

```text
src/
  app/
    layout.tsx                Root layout
    page.tsx                  Homepage
    about/page.tsx
    executive-board/page.tsx
    sector-leads/page.tsx
    research/page.tsx
    join/page.tsx
    globals.css               Design tokens and global styles
  components/
    Button.tsx
    Card.tsx
    Footer.tsx
    ListCard.tsx
    Navbar.tsx
    PageHeader.tsx
    PageLayout.tsx
    PersonCard.tsx
    SectionHeading.tsx
    SiteShell.tsx
  content/
    site.ts
    board.ts
    sectors.ts
    membership.ts
    process.ts
    portfolio.ts
    output.ts
    navigation.ts
```

## Content Model

`src/content` is the bridge between `RESEARCH.md` and the UI.

Use it for repeated content and page data instead of scattering copy inside page components.

Current content files:

- [`src/content/site.ts`](src/content/site.ts): organization identity, mission, investment universe, differentiation
- [`src/content/board.ts`](src/content/board.ts): year-one structure, executive roles, future structure
- [`src/content/sectors.ts`](src/content/sectors.ts): sector ownership and lead assignments
- [`src/content/membership.ts`](src/content/membership.ts): admissions, expectations, recruiting outcomes, meeting cadence
- [`src/content/process.ts`](src/content/process.ts): research process, pitch requirements, workstreams
- [`src/content/portfolio.ts`](src/content/portfolio.ts): portfolio parameters
- [`src/content/output.ts`](src/content/output.ts): internal output, external output, future publication empty state
- [`src/content/navigation.ts`](src/content/navigation.ts): navigation links

## Design Rules

The site should stay consistent with the design system in `DESIGN.md`:

- clean, content-first layouts
- strong typography hierarchy
- generous whitespace
- restrained red accent system
- subtle hover states only
- consistent cards, buttons, and section headings

Avoid:

- gradients
- glassmorphism
- fake social proof
- fake report previews
- decorative animation
- inconsistent component styling

## Working Guidelines

Before making UI or content changes:

1. Read `DESIGN.md`
2. Read `RESEARCH.md`
3. Review existing files in `src/content`
4. Review shared components in `src/components`

Implementation expectations:

- prefer reusable components over ad hoc page markup
- keep internal page spacing consistent
- use `src/content` for repeated copy
- preserve a serious finance/research tone
- keep pages honest when data or reports do not exist yet

## Verification

Before wrapping up changes, run:

```bash
npm run lint
npm run build -- --webpack
```

This catches most import, typing, and route issues before handoff.
