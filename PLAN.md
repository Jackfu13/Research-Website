# PLAN.md

Implementation plan for the ERG website.
Do not write code that contradicts this plan without updating it first.

`LLM/Charter.md` is the current source of truth for organization facts.
`LLM/RESEARCH.md` is the cleaned website-facing distillation of that charter.

---

## Project Root

This repository root is the Next.js project root.
All commands (`next dev`, `next build`) run from the repository root.
Source files live under `src/`.
The `@/*` path alias resolves to `src/*`.

---

## Route Structure

```text
src/app/
  layout.tsx          root layout: Nav + Footer
  page.tsx            homepage
  about/
    page.tsx          mission, structure, core edge, differentiation
  team/
    page.tsx          executive board, vertical leads, sector leads
  research/
    page.tsx          process, pitch standards, portfolio, output
  join/
    page.tsx          application process, expectations, outcomes
```

Five pages. Every page maps to content that exists in `LLM/RESEARCH.md`.
Do not add pages for content that does not exist in `LLM/RESEARCH.md`.

Note: `/executive-board`, `/vertical-leads`, and `/sector-leads` stay merged into `/team` (displayed as "Members" in the navbar).

---

## Content File Structure

Content files are typed data, not JSX and not prose invented inline.
They are the bridge from `LLM/RESEARCH.md` into components.

```text
src/content/
  site.ts             organization identity, mission, universe, core edge, differentiation
  board.ts            eight-person executive board, role owners, responsibilities, future structure
  sectors.ts          verticals, vertical leads, sub-sectors, sector leads, open seats
  membership.ts       admissions, expectations, recruiting outcomes, meetings
  process.ts          idea generation, pitch requirements, pitch format, pitch standards checklist
  portfolio.ts        paper portfolio parameters and review rules
  output.ts           internal output, external output, public-track-record goal
  navigation.ts       navigation link definitions
```

### Key Types

```ts
// board.ts
type BoardRole = {
  title: string
  name: string | null
  responsibilities: string[]
  note?: string
  photo?: string | null
  bio?: string | null
}

// sectors.ts
type SectorLeadStatus = 'named' | 'open'

type SubSectorCoverage = {
  name: string
  lead: string | null
  status: SectorLeadStatus
  photo?: string | null
  bio?: string | null
}

type VerticalCoverage = {
  vertical: string
  verticalLead: string
  subSectors: SubSectorCoverage[]
}

// process.ts
type PitchRequirement = {
  label: string
  description: string
}

type PitchStandardSection = {
  title: string
  targetLength?: string
  requirements: string[]
}
```

All content strings must be sourced from `LLM/RESEARCH.md`.
Never invent members, stats, returns, sponsors, biographies, reports, or accomplishments.

---

## Current Organization Facts

These facts must be reflected consistently across website copy and content files:

- Organization: Equity Research Group (ERG), Northeastern University
- Focus: under-covered small and mid-cap US-listed companies
- Market cap universe: $300M-$10B
- Structure: year-one vertical leadership model
- Verticals: Technology, Industrials & Defense, Financials, Resources & Real Assets, Consumer & Services
- Executive board: eight-person board overseeing operations, research quality, and member development
- No junior analyst layer until the model is proven
- Every executive board member maintains sector coverage and pitches alongside sector leads

---

## Component Architecture

### Layout

| Component | Location | Purpose |
|---|---|---|
| `Navbar` | `src/components/Navbar.tsx` | Sticky top nav: org name left, links right. No animation. |
| `Footer` | `src/components/Footer.tsx` | Minimal centered org name. |

### Shared Primitives

One instance of each. Applied consistently across all pages.

| Component | Props | Notes |
|---|---|---|
| `SectionHeading` | `title: string`, `subtitle?: string`, `light?: boolean`, `center?: boolean` | Consistent h2. Used to open page sections. |
| `Card` | `title: string`, `body?: string`, `meta?: string`, `children?: ReactNode` | One visual treatment. Never recreated inline. |
| `Button` | `href: string`, `label: string`, `variant: 'primary' \| 'outline' \| 'light'` | Rectangular. Never `rounded-full`. |
| `ListCard` | `title: string`, `intro?: string`, `items: readonly string[]` | Consistent list treatment. |
| `BoardMemberCard` | `name`, `title`, `photo`, `bio`, `compact?` | Executive board, vertical lead, and sector lead cards. |

### Section Components

Assembled from primitives. Used on specific pages.

| Component | Page | Content |
|---|---|---|
| `HeroBlock` | Homepage | Name, Northeastern affiliation, tagline, mission summary |
| `FeatureGrid` | Homepage | Deep Primary Research / Vertical Ownership / Institutional Standards |
| `UniverseCallout` | Homepage, About | $300M-$10B, US-listed, all sectors/geographies, no style mandate |
| `VerticalOverview` | Homepage, Team | Five verticals and their vertical leads |
| `SectorTable` | Team, Homepage compact | Grouped sub-sector coverage by vertical |
| `PitchRequirements` | Research | Six required pitch components |
| `PitchStandardsChecklist` | Research | 14-section stock pitch standards checklist |
| `PortfolioSpec` | Research | Portfolio parameters as a definition list |
| `ProcessSteps` | Research | Idea generation -> research -> pitch -> vote -> portfolio |
| `ExecBoard` | Team | Eight executive board roles with names and responsibilities |
| `MemberList` | Team | Vertical leads and sector leads grouped by vertical |
| `JoinSteps` | Join | Application -> stock pitch submission -> interview |
| `MemberExpectations` | Join | Commitments, per-semester requirements, recruiting outcomes |

---

## Page Content Requirements

### Homepage Section Hierarchy

Sections in order, top to bottom:

1. **Hero** - org name, Northeastern affiliation, tagline, one-sentence mission. No invented stats. No animation.
2. **Feature Grid** - "Deep Primary Research", "Vertical Ownership", "Institutional Standards".
3. **Investment Universe** - $300M-$10B market cap, US-listed companies, all sectors/geographies, no style mandate.
4. **Verticals** - compact view of the five verticals and vertical leads. Link to `/team`.
5. **Research Standards** - the six required pitch components from `LLM/RESEARCH.md`.
6. **Apply CTA** - admission by application, stock pitch submission, and interview. Link to `/join`.

### About Page

Sections should cover:

- mission
- investment universe
- core edge
- year-one vertical leadership model
- differentiation
- future year-two analyst layer

The about page must not describe the organization as a flat partnership.

### Team Page

Sections should cover:

- eight-person executive board
- five vertical leads
- sub-sector coverage grouped under each vertical
- open sector lead seats clearly marked as open

The team page must not use the old 16-sector flat list as the primary structure.

### Research Page

Sections should cover:

- idea generation
- research standard
- pitch format
- stock pitch standards checklist
- portfolio management
- internal and external output

The detailed pitch standards should be represented compactly. Do not create fake report previews or fake published research.

### Join Page

Sections should cover:

- admissions process: application, stock pitch submission, interview
- member expectations
- meeting cadence
- recruiting positioning
- interest form

---

## Design Tokens

Defined once in `src/app/globals.css`. Never hardcoded inline.

```css
--color-bg: #f6f8f6;              /* off-white with faint green tint */
--color-surface: #ffffff;          /* white cards/surfaces */
--color-surface-muted: #f0f4f1;    /* light gray-green alternate sections */
--color-text: #1a1a1a;             /* near-black */
--color-text-soft: #4b5563;        /* secondary text */
--color-accent: #1a5c3a;           /* deep forest green primary brand */
--color-accent-strong: #144d30;    /* darker green for hover */
--color-accent-soft: #dce8df;      /* light green subtle highlights */
--color-accent-faint: #f2f6f3;     /* very light green hover backgrounds */
--color-border: #e5e5e5;           /* light gray borders */
--color-border-strong: #b5cdb9;    /* green-tinted border hover states */
--color-muted: #6b7280;            /* muted/secondary */
--color-footer-bg: #1a5c3a;        /* deep green navbar, hero, page headers, CTA bands */
--color-footer-text: #f8fdf9;      /* near-white text on dark sections */
--color-footer-text-soft: #c8dece; /* softer near-white secondary text */
--color-footer-dark: #2d2d2d;      /* near-black footer background */
```

Typography scale:

- Hero / h1: `text-3xl md:text-5xl`, `font-semibold`, tight tracking
- Section h2: `text-2xl md:text-3xl`, `font-semibold`
- Body: `text-base`, `leading-7` or `leading-8`
- Meta / label: `text-xs`, `uppercase`, `tracking-[0.18em]`
- Navbar links: `text-base font-medium`

---

## Typography

- Use one font family across the entire site.
- Preferred stack: `"Aptos", "Segoe UI", "Helvetica Neue", Arial, sans-serif`.
- No display/body font split unless deliberately chosen.
- No text larger than `text-5xl` anywhere.

---

## What To Avoid

These patterns make the site feel unsupported by the source material.

| Pattern | Why it is wrong |
|---|---|
| Invented stats such as "200+ pitches" | No real data exists yet |
| Animated number counters | Decorative and startup-like |
| Dark hero with blurred background image | Against `LLM/DESIGN.md` |
| `rounded-full` buttons | Wrong visual tone |
| Testimonials | No member quotes exist |
| Social proof counts | No data, misleading |
| Fake report previews | Prohibited |
| Fake biographies | Not in source docs |
| Old flat partnership language | Contradicts the charter |
| Old $300M-$5B market cap range | Contradicts the charter |
| Old 16-sector flat list as primary team model | Contradicts the charter |
| Inconsistent card borders/shadows/radii | Against `LLM/DESIGN.md` |
| "Our Mission / Our Vision / Our Values" triple header | Empty filler |
| Centered body text walls | Hard to read |
| Gradients | Explicitly prohibited |
| Dark mode | Site uses white/off-white background |
| Decorative animation | Explicitly prohibited |

---

## Layout Architecture

Pages use full-width color bands, not a centered `max-w` wrapper.

- `PageLayout` is a passthrough `flex flex-col w-full`; no page-level centering
- Each page section controls its own background color and padding
- Sections alternate between white and muted green backgrounds
- Deep green is reserved for hero, page headers, navbar, and CTA bands
- Navbar and footer are full-width with internal horizontal padding only
- Navbar should be sticky, full browser width, and always visible

---

## Build Order

Implement in this sequence to avoid rework:

1. Update `src/content/site.ts` for $300M-$10B, Northeastern affiliation, core edge, and vertical structure language.
2. Update `src/content/board.ts` for the eight-person executive board and named role owners from `LLM/RESEARCH.md`.
3. Update `src/content/sectors.ts` from a flat sector list to five verticals with sub-sector coverage.
4. Update `src/content/process.ts` to include the detailed stock pitch standards checklist.
5. Update homepage sections to match the new hierarchy.
6. Update about page to remove flat partnership language and explain the vertical leadership model.
7. Update team page to show executive board, vertical leads, and sector leads grouped by vertical.
8. Update research page to include the pitch standards checklist without fake published output.
9. Update join page only where membership copy needs to reflect the charter.
10. Run `npm run lint` and `npm run build`.
