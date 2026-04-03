# PLAN.md

Implementation plan for the ERG website.
Do not write code that contradicts this plan without updating it first.

---

## Project Root

`nscrg-site/` is the Next.js project root.
All commands (`next dev`, `next build`) run from `nscrg-site/`.
Source files live under `nscrg-site/src/`.
The `@/*` path alias resolves to `src/*`.

---

## Route Structure

```
src/app/
  layout.tsx          root layout: Nav + Footer
  page.tsx            homepage
  about/
    page.tsx          mission, structure, differentiation
  executive-board/
    page.tsx          three executive functions and responsibilities
  sector-leads/
    page.tsx          full sector coverage table and lead assignments
  research/
    page.tsx          process, pitch standards, portfolio
  join/
    page.tsx          application process, expectations, outcomes
```

Six pages. Every page maps to content that exists in RESEARCH.md.
Do not add pages for content that does not exist in RESEARCH.md.

---

## Content File Structure

Content files are typed data — not JSX, not prose invented inline.
They are the single bridge from RESEARCH.md into components.

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

All content strings must be sourced from RESEARCH.md.
Never invent members, stats, returns, sponsors, or accomplishments.

---

## Component Architecture

### Layout

| Component | Location | Purpose |
|---|---|---|
| `Nav` | `src/components/Nav.tsx` | Top nav: org name left, links right. No animation. |
| `Footer` | `src/components/Footer.tsx` | Org name and supporting footer links. |

### Shared Primitives

One instance of each. Applied consistently across all pages.

| Component | Props | Notes |
|---|---|---|
| `SectionHeading` | `title: string`, `subtitle?: string` | Consistent h2. Used to open every page section. |
| `Card` | `title: string`, `body: string`, `meta?: string` | One visual treatment. Never recreated inline. |
| `Button` | `href: string`, `label: string`, `variant: 'primary' \| 'outline'` | Rectangular. Never `rounded-full`. |
| `Divider` | — | Thin gray `<hr>` with controlled vertical margin. |
| `Tag` | `label: string` | Small label chip for sector names or status. |

### Section Components

Assembled from primitives. Used on specific pages.

| Component | Page | Content |
|---|---|---|
| `HeroBlock` | Homepage | Name + tagline + one-sentence mission description |
| `FeatureGrid` | Homepage | 3-column: Deep Research / Sector Ownership / Standards |
| `UniverseCallout` | Homepage, About | Market cap range, geography, style-agnostic |
| `SectorTable` | Sector Leads, Homepage (compact) | Renders `SectorEntry[]` as a clean table |
| `PitchRequirements` | Research | Ordered list of required pitch components |
| `PortfolioSpec` | Research | Portfolio parameters as a definition list |
| `ProcessSteps` | Research | Idea gen → research → pitch → vote → portfolio |
| `ExecBoard` | Executive Board | Three exec roles with responsibilities |
| `MemberList` | Sector Leads | Sector leads grid |
| `JoinSteps` | Join | Application → pitch submission → interview |
| `MemberExpectations` | Join | Commitments, per-semester requirements, recruiting outcomes |

---

## Homepage Section Hierarchy

Sections in order, top to bottom:

1. **Hero** — org name, tagline, one-sentence mission. No stats. No animation.
2. **Feature Grid** — "Deep Primary Research", "Sector Ownership", "Institutional Standards". 2–3 sentences each from RESEARCH.md.
3. **Investment Universe** — $300M–$5B market cap, US-listed, all sectors, no style mandate.
4. **Sectors** — compact sector table or two-column list. All 16 sectors. Link to /sector-leads.
5. **Research Standards** — the six required pitch components from RESEARCH.md. Brief list.
6. **Apply CTA** — admission by application, stock pitch, and interview. Link to /join.

---

## Design Tokens

Defined once in `src/app/globals.css`. Never hardcoded inline.

```css
--color-bg: #fafaf8;         /* warm off-white */
--color-text: #1a1a1a;       /* near-black charcoal */
--color-accent: #1a2744;     /* dark navy */
--color-border: #e5e5e5;     /* light gray */
--color-muted: #6b7280;      /* secondary text */
```

Typography scale (Tailwind classes, not arbitrary values):
- Hero / h1: `text-4xl` or `text-5xl`, `font-semibold`, tight tracking
- Section h2: `text-2xl`, `font-semibold`
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
| Dark hero with blurred background image | Against DESIGN.md |
| `rounded-full` buttons | Startup pill aesthetic |
| Testimonial sections | No member quotes exist |
| Social proof counts (followers, downloads) | No data, misleading |
| Inconsistent card borders/shadows/radii | Against DESIGN.md |
| "Our Mission / Our Vision / Our Values" triple header | Empty filler |
| Centered body text walls | Hard to read, marketing aesthetic |
| Gradient anywhere | Explicitly prohibited by DESIGN.md |
| Dark mode | DESIGN.md specifies white/off-white background |
| Decorative animation of any kind | Explicitly prohibited |

---

## Build Order

Implement in this sequence to avoid rework:

1. Design tokens in `globals.css`
2. Typography and font setup in `layout.tsx`
3. `Nav` and `Footer`
4. Shared primitives: `SectionHeading`, `Card`, `Button`, `Divider`, `Tag`
5. Content files in `src/content/`
6. Homepage (`page.tsx`) using all primitives
7. Remaining pages in any order: `about`, `executive-board`, `sector-leads`, `research`, `join`
