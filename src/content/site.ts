export type SiteFeature = {
  title: string;
  description: string;
};


// "initiation" = the first full pitch on a company (thesis, model, valuation, rating).
// "note" = an event-driven follow-up on a company already under coverage (earnings, guidance change).
export type PublicationKind = "initiation" | "note";

export type Publication = {
  title: string;
  // Initiations use the cycle they were produced in ("Summer 2026"); notes use the period they cover ("Q2 2026").
  issue: string;
  cover: string | null;
  slug: string;     // URL slug for the in-app reader (/research/<slug>)
  pdf: string;      // path to the PDF file in /public
  kind: PublicationKind;
  // Ticker is the key that links a note back to the initiation covering the same company.
  ticker: string;
  // Authoring analyst. Shown on notes; initiations carry the byline inside the PDF cover.
  analyst?: string;
  publishedAt?: string; // ISO date, used to order notes within a company
};

export const site = {
  name: "Equity Research Group",
  shortName: "ERG",
  tagline:
    "Student-run equity research focused on under-covered small and mid-cap companies.",
  valueProposition:
    "ERG covers small and mid-cap companies where sell-side attention is thin. Members own a sector, build original research through primary work and financial modeling, and defend their ideas before an investment committee. Each semester, the strongest pitches are published, giving members a body of work they can point to in recruiting.",
  // Rendered as standalone statements on the Recruitment page.
  recruitingStatements: [
    "ERG is for students serious about equity research, asset management, or hedge funds.",
    "You'll be assigned a sector, expected to develop a real view on the companies in it, and held accountable for the ideas you bring to the investment committee.",
  ],
  differentiationParagraph:
    "Most equity research happens above $10 billion in market cap. ERG works below it. Our members own coverage of small and mid-cap companies where sell-side attention is thin, building original research through primary work, financial modeling, and bottom-up analysis. Every pitch is defended in front of an investment committee that decides what enters the portfolio. Each semester adds to a public body of work members can point to, with sector expertise they actually own.",
  featureHighlights: [
    {
      title: "Deep Primary Research",
      description:
        "Sell-side coverage drops off below $10B in market cap, leaving room for original work. That gap is where ERG operates.",
    },
    {
      title: "Sector Ownership",
      description:
        "Each lead owns primary coverage of one sector and is expected to maintain a watchlist and surface ideas through weekly updates.",
    },
    {
      title: "Institutional Standards",
      description:
        "Every pitch requires a written memo, presentation, valuation work, defined risks, and a clear catalyst or timeline before a portfolio vote.",
    },
  ] satisfies SiteFeature[],
  coreEdge: {
    title: "Our Edge",
    summary:
      "Institutional sell-side coverage thins out significantly below $10B market cap, leaving a large segment of the market underanalyzed. ERG targets this gap — building original views on companies that receive limited Wall Street attention by going deeper than public filings and earnings calls.",
    methods: [
      "Competitor analysis",
      "Customer interviews",
      "Supply chain mapping",
      "Primary research where accessible",
    ],
  },
  differentiation: [
    {
      label: "True ownership",
      body: "Unlike broad investment clubs that rotate members through generic projects, the group gives each member true ownership of a coverage universe.",
    },
    {
      label: "Original research",
      body: "The small-cap focus ensures original research rather than regurgitation of Street consensus.",
    },
    {
      label: "Nowhere to hide",
      body: "The industry structure creates clear accountability and specialization — every role has a defined owner, and there is nowhere to hide.",
    },
  ],
  // All research, initiations and notes together. Initiation order drives the /research grid and the homepage
  // carousel (which shows initiations only) — Paycom is first as the front-facing pitch. Notes are grouped under
  // their initiation by matching `ticker`. Each entry gets its own in-app reader at /research/<slug>.
  publications: [
    {
      title: "Initiating Coverage: Paycom Software",
      issue: "Summer 2026",
      cover: "/paycom-cover.jpg" as string | null,
      slug: "paycom-software-summer-2026",
      pdf: "/Paycom-Software-Final.pdf",
      kind: "initiation",
      ticker: "PAYC",
    },
    {
      title: "Analyst Note: Paycom Software",
      issue: "Q2 2026",
      cover: "/paycom-note-q2-cover.jpg" as string | null,
      slug: "paycom-q2-2026-note",
      pdf: "/Paycom-Note-Q2-2026.pdf",
      kind: "note",
      ticker: "PAYC",
      analyst: "Braden Benzan",
      publishedAt: "2026-09-21",
    },
    {
      title: "Initiating Coverage: dLocal Limited",
      issue: "Summer 2026",
      cover: "/dlo-cover.jpg" as string | null,
      slug: "dlocal-summer-2026",
      pdf: "/DLO-Final.pdf",
      kind: "initiation",
      ticker: "DLO",
    },
    {
      title: "Initiating Coverage: Independent Bank Corp",
      issue: "Summer 2026",
      cover: "/independent-bank-corp-cover.jpg" as string | null,
      slug: "independent-bank-corp-summer-2026",
      pdf: "/Independent-Bank-Corp-Final.pdf",
      kind: "initiation",
      ticker: "INDB",
    },
    {
      title: "Initiating Coverage: DiamondRock Hospitality",
      issue: "Summer 2026",
      cover: "/drh-cover.jpg" as string | null,
      slug: "diamondrock-hospitality-summer-2026",
      pdf: "/DRH-Final.pdf",
      kind: "initiation",
      ticker: "DRH",
    },
  ] satisfies Publication[],
} as const;

const byNewestFirst = (a: Publication, b: Publication) =>
  (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "");

export const initiations = site.publications.filter((p) => p.kind === "initiation");

export const notes = site.publications.filter((p) => p.kind === "note").toSorted(byNewestFirst);

export const notesForTicker = (ticker: string) => notes.filter((p) => p.ticker === ticker);

// Companies under coverage. Array order drives the /research grid and the homepage carousel.
// A publication whose ticker is missing here won't surface on the site — add the company first.
// Phase 2 (per Braden): add a `sector` field here and group the /research grid by it.
export const coverage = [
  { ticker: "PAYC", name: "Paycom Software", slug: "paycom-software" },
  { ticker: "DLO", name: "dLocal Limited", slug: "dlocal-limited" },
  { ticker: "INDB", name: "Independent Bank Corp", slug: "independent-bank-corp" },
  { ticker: "DRH", name: "DiamondRock Hospitality", slug: "diamondrock-hospitality" },
];

// Every report on a company, current view first: notes newest-first, then the initiation underneath.
export const reportsForTicker = (ticker: string) => [
  ...notesForTicker(ticker),
  ...initiations.filter((p) => p.ticker === ticker),
];

// One entry per covered company. The cover shown is the newest report's, so a company with a
// fresh note leads with the note cover rather than the initiation cover.
export const coveredCompanies = coverage.map((company) => {
  const reports = reportsForTicker(company.ticker);
  return { ...company, reports, cover: reports[0]?.cover ?? null };
});

export const companyBySlug = (slug: string) => coveredCompanies.find((c) => c.slug === slug);
