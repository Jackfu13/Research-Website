# PLAN.md

Implementation plan for the ERG website.
Do not write code that contradicts this plan without updating it first.

---

## Project Root

This repository root is the Next.js project root.
All commands (`next dev`, `next build`) run from the repository root.
Source files live under `src/`.
The `@/*` path alias resolves to `src/*`.

---

## Route Structure

```
src/app/
  layout.tsx          root layout: Nav + Footer
  page.tsx            homepage
  about/
    page.tsx          mission, structure, differentiation
  team/
    page.tsx          executive board + sector leads (merged)
  research/
    page.tsx          process, pitch standards, portfolio
  join/
    page.tsx          application process, expectations, outcomes
```

Five pages. Every page maps to content that exists in `LLM/RESEARCH.md`.
Do not add pages for content that does not exist in `LLM/RESEARCH.md`.

Note: `/executive-board` and `/sector-leads` were merged into `/team` (displayed as "Members" in the navbar).

---

## Content File Structure

Content files are typed data — not JSX, not prose invented inline.
They are the single bridge from `LLM/RESEARCH.md` into components.

```
src/content/
  site.ts             organization identity, mission, universe, differentiation
  board.ts            year-one structure, executive roles, future structure
  sectors.ts          sector coverage ownership and assignment rules
  membership.ts       admissions, expectations, recruiting outcomes, meetings
  process.ts          idea generation, pitch requirements, pitch format
  portfolio.ts        paper portfolio parameters and review rules
  output.ts           internal output, external output, public-track-record goal
  navigation.ts       navigation link definitions
```

### Key types

```ts
// sectors.ts
type SectorCoverage = {
  sector: string
  lead: string | null
  status: 'named' | 'open' | 'single-lead'
}

// board.ts
type BoardRole = {
  title: string
  responsibilities: string[]
}

// process.ts
type PitchRequirement = {
  label: string
  description: string
}
```

All content strings must be sourced from `LLM/RESEARCH.md`.
Never invent members, stats, returns, sponsors, or accomplishments.

---

## Component Architecture

### Layout

| Component | Location | Purpose |
|---|---|---|
| `Navbar` | `src/components/Navbar.tsx` | Top nav: org name left, links right. No animation. |
| `Footer` | `src/components/Footer.tsx` | Org name and supporting footer links. |

### Shared Primitives

One instance of each. Applied consistently across all pages.

| Component | Props | Notes |
|---|---|---|
| `SectionHeading` | `title: string`, `subtitle?: string`, `light?: boolean`, `center?: boolean` | Consistent h2. Used to open page sections. |
| `Card` | `title: string`, `body?: string`, `meta?: string`, `children?: ReactNode` | One visual treatment. Never recreated inline. |
| `Button` | `href: string`, `label: string`, `variant: 'primary' \| 'outline'` | Rectangular. Never `rounded-full`. |
| `ListCard` | `title: string`, `intro?: string`, `items: readonly string[]` | Consistent list treatment. |
| `BoardMemberCard` | `name`, `title`, `photo`, `bio`, `compact?` | Member and placeholder cards. |

### Section Components

Assembled from primitives. Used on specific pages.

| Component | Page | Content |
|---|---|---|
| `HeroBlock` | Homepage | Name + tagline + one-sentence mission description |
| `FeatureGrid` | Homepage | 3-column: Deep Research / Sector Ownership / Standards |
| `UniverseCallout` | Homepage, About | Market cap range, geography, style-agnostic |
| `SectorTable` | Team, Homepage (compact) | Renders sector coverage as a clean table or grouped list |
| `PitchRequirements` | Research | Ordered list of required pitch components |
| `PortfolioSpec` | Research | Portfolio parameters as a definition list |
| `ProcessSteps` | Research | Idea gen → research → pitch → vote → portfolio |
| `ExecBoard` | Team | Executive roles with responsibilities or member cards |
| `MemberList` | Team | Sector leads grouped by sector |
| `JoinSteps` | Join | Application → pitch submission → interview |
| `MemberExpectations` | Join | Commitments, per-semester requirements, recruiting outcomes |

---

## Homepage Section Hierarchy

Sections in order, top to bottom:

1. **Hero** — org name, tagline, one-sentence mission. No stats. No animation.
2. **Feature Grid** — "Deep Primary Research", "Sector Ownership", "Institutional Standards". 2–3 sentences each from `LLM/RESEARCH.md`.
3. **Investment Universe** — $300M–$5B market cap, US-listed, all sectors, no style mandate.
4. **Sectors** - compact sector table or two-column list. All 16 sectors. Link to `/team`.
5. **Research Standards** — the six required pitch components from `LLM/RESEARCH.md`. Brief list.
6. **Apply CTA** — admission by application, stock pitch, and interview. Link to /join.

---

## Design Tokens

Defined once in `src/app/globals.css`. Never hardcoded inline.

```css
--color-bg: #f6f8f6;              /* off-white with faint green tint */
--color-surface: #ffffff;          /* white cards/surfaces */
--color-surface-muted: #f0f4f1;    /* light gray-green alternate sections */
--color-text: #1a1a1a;             /* near-black */
--color-text-soft: #4b5563;        /* secondary text */
--color-accent: #1a5c3a;           /* deep forest green — primary brand */
--color-accent-strong: #144d30;    /* darker green for hover */
--color-border: #e5e5e5;           /* light gray borders */
--color-muted: #6b7280;            /* muted/secondary */
--color-footer-bg: #1a5c3a;        /* deep green — footer and hero sections */
--color-footer-text: #f8fdf9;      /* near-white text on dark sections */
```

Typography scale (Tailwind classes, not arbitrary values):
- Hero / h1: `text-4xl` or `text-5xl`, `font-semibold`, tight tracking
- Section h2: `text-2xl` to `text-3xl`, `font-semibold`
- Body: `text-base`, `leading-relaxed`
- Meta / label: `text-xs`, `uppercase`, `tracking-widest`

---

## Typography

Current scaffold uses Geist Sans. Consider swapping to **Inter** for a more neutral, financial-context feel. Either way:
- One font family across the entire site
- No display font + body font split unless deliberately chosen
- No text larger than `text-5xl` anywhere

---

## What to Avoid

These patterns make the site feel vibecoded. Do not add them.

| Pattern | Why it's wrong |
|---|---|
| Invented stats ("12 sectors active", "200+ pitches") | No real data exists yet |
| Animated number counters | Decorative, startup-y |
| Dark hero with blurred background image | Against `LLM/DESIGN.md` |
| `rounded-full` buttons | Startup pill aesthetic |
| Testimonial sections | No member quotes exist |
| Social proof counts (followers, downloads) | No data, misleading |
| Inconsistent card borders/shadows/radii | Against `LLM/DESIGN.md` |
| "Our Mission / Our Vision / Our Values" triple header | Empty filler |
| Centered body text walls | Hard to read, marketing aesthetic |
| Gradient anywhere | Explicitly prohibited by `LLM/DESIGN.md` |
| Dark mode | `LLM/DESIGN.md` specifies white/off-white background |
| Decorative animation of any kind | Explicitly prohibited |

---

## Layout Architecture

Pages use full-width color bands, not a centered `max-w` wrapper.

- `PageLayout` is a passthrough `flex flex-col w-full` — no centering
- Each page section controls its own background color and padding
- Sections alternate between white/cream and deep green backgrounds
- Navbar and Footer are full-width with `px-8`/`px-12` internal padding only

## Build Order

Implement in this sequence to avoid rework:

1. Design tokens in `globals.css` (update accent to deep forest green `#1a5c3a`)
2. `Navbar` and `Footer` — remove `max-w` inner wrapper, flush full width
3. `PageLayout` — strip centering, passthrough only
4. Homepage — full-width deep green hero, alternating white/green bands below
5. Remaining pages: `about`, `team`, `research`, `join` — full-width band layout
