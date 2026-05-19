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
- Text and grid content inside sections use generous horizontal padding (`px-8` or `px-12`), but no `max-w` container wrapping the whole page
- Sections alternate between white/cream and green backgrounds to create visual rhythm

### Navbar and Footer
- Navbar spans the full browser width — no `max-w` inner wrapper
- Footer spans the full browser width — no `max-w` inner wrapper
- Both use `px-8` or `px-12` for internal horizontal padding

### PageLayout
- Not a centering wrapper — just a `flex flex-col w-full` passthrough
- Each page section manages its own background and padding

---

## Colors

```css
--color-bg: #f6f8f6              /* off-white with faint green tint — default page bg */
--color-surface: #ffffff          /* white — card and content surface */
--color-surface-muted: #f0f4f1    /* light gray-green — alternate section bg */
--color-text: #1a1a1a             /* near-black */
--color-text-soft: #4b5563        /* secondary text */
--color-accent: #1a5c3a           /* deep forest green — primary brand color */
--color-accent-strong: #144d30    /* darker green — hover states */
--color-accent-soft: #dce8df      /* light green — subtle highlights */
--color-accent-faint: #f2f6f3     /* very light green — hover bg on cards */
--color-border: #e5e5e5           /* light gray borders */
--color-border-strong: #b5cdb9    /* green-tinted border */
--color-muted: #6b7280            /* secondary/muted text */
--color-footer-bg: #1a5c3a        /* deep green — footer and hero sections */
--color-footer-text: #f8fdf9      /* near-white — text on dark green */
```

**Key change from prior version:** accent and footer colors updated from military green (`#4d7c57`) to deep forest green (`#1a5c3a`), matching the Cornell/finance institutional aesthetic.

---

## Typography

- **Font:** Inter (or system sans-serif fallback) — neutral, financial, readable
- One font family across the entire site — no display/body split
- No text larger than `text-5xl` anywhere

Scale:
- Hero / h1: `text-4xl` or `text-5xl`, `font-semibold`, tight tracking
- Section h2: `text-2xl` to `text-3xl`, `font-semibold`
- Body: `text-base`, `leading-relaxed`
- Meta / label: `text-xs`, `uppercase`, `tracking-widest`

Headlines on dark green sections use `--color-footer-text`. Body text on light sections uses `--color-text`.

---

## Components

- One shared button style — rectangular, never `rounded-full`
- One shared card style — consistent border, padding, no shadow
- One shared section heading style (`SectionHeading`) — supports `light` prop for dark backgrounds
- Consistent spacing throughout all pages

### Members page pattern
- **Executive Board:** Deep green full-width band, centered `h2` title, photo card grid (3×5 columns responsive). Cards: portrait photo, name, role, optional "Read Bio" link.
- **Sector Leads:** White/muted full-width band, sector name as bold header, member names listed below each header. Organized by sector, not by card-per-person.

---

## Visual tone

- Minimal and professional
- Content-first layout
- Strong typography hierarchy
- Generous whitespace
- No animation
- No flashy startup aesthetics

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
| Decorative animation | Prohibited |
| `max-w` page wrapper | Use full-width bands instead |
| Inconsistent card styles | One card style only |
| Fake report previews | Prohibited |
