export type SiteFeature = {
  title: string;
  description: string;
};

export type SiteSection = {
  title: string;
  intro: string;
  items: string[];
};

export type InvestmentUniverseItem = {
  label: string;
  value: string;
};

export type FeaturedPublication = {
  title: string;
  issue: string;
  cover: string | null;
  href: string;
};

export const site = {
  name: "Equity Research Group",
  shortName: "ERG",
  tagline:
    "Student-run equity research focused on under-covered small and mid-cap companies.",
  mission:
    "The Equity Research Group is a student-run equity research organization at Northeastern focused on under-covered small and mid-cap companies. ERG develops members into rigorous fundamental analysts through deep sector ownership, original bottom-up research, and a published track record built semester by semester.",
  valueProposition:
    "ERG covers small and mid-cap companies where sell-side attention is thin. Members own a sector, build original research through primary work and financial modeling, and defend their ideas before an investment committee. Each semester, the strongest pitches are published, giving members a body of work they can point to in recruiting.",
  recruitingBlock:
    "ERG is for students serious about equity research, asset management, or hedge funds. You'll be assigned a sector, expected to develop a real view on the companies in it, and held accountable for the ideas you bring to the investment committee. Each semester, members add to a portfolio of published research, build sector expertise, and develop the analytical foundation that real investing requires.",
  differentiationParagraph:
    "Most equity research happens above $10 billion in market cap. ERG works below it. Our members own coverage of small and mid-cap companies where sell-side attention is thin, building original research through primary work, financial modeling, and bottom-up analysis. Every pitch is defended in front of an investment committee that decides what enters the portfolio. Each semester adds to a public body of work members can point to, with sector expertise they actually own.",
  investmentUniverse: [
    { label: "Market cap", value: "$300M–$10B" },
    { label: "Listing", value: "US-listed companies" },
    { label: "Coverage", value: "All sectors, all geographies" },
    {
      label: "Style mandate",
      value: "No style mandate; value, growth, and GARP are all welcome",
    },
  ] satisfies InvestmentUniverseItem[],
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
  aboutSections: [
    {
      title: "Mission",
      intro: "ERG is a student-run equity research organization at Northeastern, focused on under-covered small and mid-cap companies.",
      items: [
        "Deep sector ownership and original bottom-up research",
        "Published track record built semester by semester",
        "Five verticals: Technology, Industrials & Defense, Financials, Resources & Real Assets, Consumer & Services",
        "Each vertical led by a designated Vertical Lead",
      ],
    },
  ] satisfies SiteSection[],
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
    "Unlike broad investment clubs that rotate members through generic projects, the group gives each member true ownership of a coverage universe.",
    "The small-cap focus ensures original research rather than regurgitation of Street consensus.",
    "The vertical structure creates clear accountability and specialization — every role has a defined owner, and there is nowhere to hide.",
  ],
  // Featured publication on the homepage. When a real cover image exists, set `cover` to its public path (e.g., "/featured-fall-2026.jpg"). Until then, the section renders a styled placeholder.
  featuredPublication: {
    title: "Inaugural Research Report",
    issue: "Coming Soon",
    cover: null as string | null,
    href: "/research",
  } satisfies FeaturedPublication,
  // Research page publications archive. Add new entries as publications go live.
  publications: [
    {
      title: "Inaugural Research Report",
      issue: "Coming Soon",
      cover: null as string | null,
      href: "/research",
    },
  ] satisfies FeaturedPublication[],
} as const;
