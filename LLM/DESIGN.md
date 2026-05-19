# DESIGN.md

## Goal
Build a polished website for the Equity Research Group.
The website should feel serious, credible, and student-led.
It should resemble a clean university finance organization site.

## Inspiration
- **Cornell Equity Research** (cornellequityresearch.com) — deep green branding, full-width layout, photo card grid for members, centered section titles on colored bands
- **Penn WITG** (pennwitg.com/portfolio-managers) — clean sans-serif, generous whitespace, sector-grouped member layout, no visual noise

The target feel is between these two: more visually grounded than Penn WITG, less elaborate than a full editorial site.

---

## Layout

### Full-width bands
- Pages are composed of full-width color band sections, not centered card columns
- Each section's background color stretches edge to edge
- Text and grid content inside sections use `px-12 md:px-20` horizontal padding
- No `max-w` container wrapping the whole page
- Sections alternate between white (`--color-surface`) and muted green (`--color-surface-muted`) to create visual rhythm
- Dark green (`--color-footer-bg`) is reserved for the hero, page headers, and the bottom CTA band

### Navbar
- Sticky, full browser width, deep green background (`--color-footer-bg`)
- Always visible — no scroll hide/show behavior
- Active page indicated by white `border-b-2` underline on the current link
- Horizontal padding: `px-12 md:px-20`
- Logo: short name (ERG) small and muted above the full org name
- Links: `text-base font-medium`, full white, `gap-x-10`

### Footer
- Full browser width, near-black background (`--color-footer-dark: #2d2d2d`)
- Minimal — org name centered, no nav links

### PageLayout
- Not a centering wrapper — just a `flex flex-col w-full` passthrough
- Each page section manages its own background and padding

---

## Colors

```css
--color-bg: #f6f8f6              /* off-white with faint green tint — default page bg */
--color-surface: #ffffff          /* white — primary section and card surface */
--color-surface-muted: #f0f4f1    /* light gray-green — alternate section bg */
--color-text: #1a1a1a             /* near-black */
--color-text-soft: #4b5563        /* secondary text */
--color-accent: #1a5c3a           /* deep forest green — primary brand color */
--color-accent-strong: #144d30    /* darker green — hover states */
--color-accent-soft: #dce8df      /* light green — subtle highlights */
--color-accent-faint: #f2f6f3     /* very light green — hover bg on cards */
--color-border: #e5e5e5           /* light gray borders */
--color-border-strong: #b5cdb9    /* green-tinted border — card hover states */
--color-muted: #6b7280            /* muted/secondary text */
--color-footer-bg: #1a5c3a        /* deep green — navbar, hero, page headers, CTA bands */
--color-footer-text: #f8fdf9      /* near-white — text on deep green surfaces */
--color-footer-text-soft: #c8dece /* softer near-white — secondary text on deep green */
--color-footer-dark: #2d2d2d      /* near-black — footer background */
```

---

## Typography

- **Font:** `"Aptos", "Segoe UI", "Helvetica Neue", Arial, sans-serif` — system stack, no external font loaded
- One font family across the entire site
- No text larger than `text-5xl` anywhere

Scale:
- Hero / h1: `text-3xl md:text-5xl`, `font-semibold`, tight tracking
- Section h2: `text-2xl md:text-3xl`, `font-semibold`
- Body: `text-base`, `leading-7` or `leading-8`
- Meta / label: `text-xs`, `uppercase`, `tracking-[0.18em]`
- Navbar links: `text-base font-medium`

Text on dark green sections uses `--color-footer-text`. Body text on light sections uses `--color-text` or `--color-text-soft`.

---

## Components

### Button — 3 variants

| Variant | Use case | Appearance |
|---|---|---|
| `primary` | Default, on light backgrounds | Green fill, white text |
| `outline` | Secondary action, on light backgrounds | Green border, green text, white bg |
| `light` | On dark green backgrounds (hero, CTA) | White fill, dark green text |

All variants: rectangular (never `rounded-full`), `uppercase`, `tracking-[0.08em]`, `min-h-11`.

### Card
- Border: `--color-border`, hover border: `--color-border-strong`
- Background: `--color-surface`, hover bg: `--color-accent-faint`
- Optional `meta` label above title (small, uppercase, accent color)
- Optional `children` slot below body text
- One card style only — never recreated inline

### SectionHeading
- Props: `title`, `subtitle?`, `light?`, `center?`
- `light` variant uses `--color-footer-text` — for use on dark green bands
- `center` adds `mx-auto text-center`

### ListCard
- Same border/surface treatment as Card
- Renders a title, optional intro, and a bulleted item list

### BoardMemberCard
- Portrait photo or initials placeholder
- Name + role title below
- Optional bio trigger (only rendered when bio exists)
- Executive board: `h-80` photo area, rendered in a `sm:grid-cols-3` grid
- Sector leads: `aspect-[3/4]` compact mode, rendered in a `grid-cols-2 sm:grid-cols-4 lg:grid-cols-8` grid

### PageHeader
- Full-width deep green band
- Centered h1 + intro paragraph
- `large` prop increases vertical padding for emphasis

### InterestForm
- Client component with controlled inputs
- Fields: name, email, graduation year, sector interest, optional note
- Posts to Formspree via `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- Shows confirmation state on success, inline error on failure

---

## Visual tone

- Minimal and professional
- Content-first layout
- Strong typography hierarchy
- Generous whitespace
- No animation — navbar is static sticky, no scroll effects

---

## Do not do

| Pattern | Why |
|---|---|
| Gradients | Explicitly prohibited |
| Glassmorphism | Against the aesthetic |
| Invented stats or metrics | No real data exists yet |
| Animated number counters | Startup-y |
| `rounded-full` buttons | Pill aesthetic, wrong tone |
| Testimonials or social proof | No data exists |
| Centered body text walls | Hard to read |
| Dark mode | Site uses white/off-white bg |
| Excessive motion or transitions | Prohibited |
| `max-w` page wrapper | Use full-width bands instead |
| Inconsistent card styles | One card style only |
| Fake report previews | Prohibited |
