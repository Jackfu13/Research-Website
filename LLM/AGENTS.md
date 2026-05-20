# AGENTS.md

## Project
This repository contains the website for the **Equity Research Group (ERG)**.

The website should present the group as a serious, professional, student-run equity research organization.

The design should feel **institutional, clean, and credible**, not flashy or startup-like.

---

# Required Reading

Before performing any task, always read the following files:

1. LLM/DESIGN.md
2. LLM/Charter.md
3. src/content files
4. existing components in src/components

Before implementing UI, summarize LLM/DESIGN.md in your own words.

Before implementing or modifying content, summarize LLM/Charter.md in your own words.

---

# Source of Truth

### LLM/DESIGN.md
Defines the visual system including:

- typography
- spacing
- color usage
- layout principles
- UI component consistency

All UI decisions must follow LLM/DESIGN.md.

---

### LLM/Charter.md
Defines the organization's:

- mission
- structure
- sector coverage
- membership expectations
- research process
- portfolio structure
- messaging

LLM/Charter.md is the **source of truth for all factual content**.

Do not invent:

- research reports
- team members
- sector leads
- investment results
- sponsors
- statistics
- accomplishments

All content must be grounded in LLM/Charter.md.

---

# Tech Stack

Preferred stack:

- Next.js
- TypeScript
- Tailwind CSS

General expectations:

- clean React components
- typed props
- reusable components
- minimal dependencies
- accessible HTML

---

# Repository Structure

Expected structure:
```text
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    team/page.tsx
    research/page.tsx
    join/page.tsx
    globals.css
  components/
    BoardMemberCard.tsx
    Button.tsx
    Card.tsx
    Footer.tsx
    InterestForm.tsx
    ListCard.tsx
    Navbar.tsx
    PageHeader.tsx
    PageLayout.tsx
    PersonCard.tsx
    SectionHeading.tsx
    SiteShell.tsx
  content/
    board.ts
    membership.ts
    navigation.ts
    output.ts
    portfolio.ts
    process.ts
    sectors.ts
    site.ts
```

Current public routes:

- `/`
- `/about`
- `/team`
- `/research`
- `/join`

The old `/executive-board` and `/sector-leads` pages are merged into `/team`.
