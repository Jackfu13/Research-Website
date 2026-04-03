export type SiteFeature = {
  title: string;
  description: string;
};

export type SiteSection = {
  title: string;
  body: string[];
};

export type InvestmentUniverseItem = {
  label: string;
  value: string;
};

export const site = {
  name: "Equity Research Group",
  shortName: "ERG",
  heroEyebrow: "Student-run equity research",
  tagline:
    "Student-run equity research focused on under-covered small and mid-cap companies.",
  heroSummary:
    "The group produces institutional-quality research on names that receive little Wall Street coverage.",
  mission:
    "The Equity Research Group is a student-run equity research organization focused on under-covered small and mid-cap companies. The group produces institutional-quality research on names that receive little Wall Street coverage, developing members into rigorous fundamental analysts.",
  footerNote: "Student-run equity research organization.",
  homepageCta:
    "Admission is based on application, stock pitch submission, and interview.",
  investmentUniverse: [
    { label: "Market cap", value: "$300M-$5B" },
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
        "Sell-side coverage drops off dramatically below $5B market cap, so the group focuses on work others often do not do.",
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
      body: [
        "The group focuses on under-covered small and mid-cap companies where rigorous fundamental research can create original insights.",
        "Its aim is to produce institutional-quality research while developing members into disciplined equity research analysts.",
      ],
    },
    {
      title: "Structure",
      body: [
        "In year one, the group launches as a flat partnership with 15 to 20 sector leads operating as equals.",
        "The executive board holds functional administrative roles, but board members still maintain sector coverage and pitch like everyone else.",
      ],
    },
    {
      title: "Differentiation",
      body: [
        "Unlike broader investment clubs that rotate members through generic projects, the group gives each member ownership of a coverage universe.",
        "The small-cap focus is designed to generate original research rather than repeat Wall Street consensus.",
      ],
    },
  ] satisfies SiteSection[],
  coreEdge: {
    title: "Deep primary research on ignored names",
    summary:
      "The group's edge is simple: it does the work others do not.",
    methods: [
      "Customer interviews",
      "Competitor analysis",
      "Supply chain mapping",
      "On-the-ground research where possible",
    ],
  },
  differentiation: [
    "Unlike broad investment clubs that rotate members through generic projects, the group gives each member true ownership of a coverage universe.",
    "The small-cap focus ensures original research rather than regurgitation of Street consensus.",
    "The flat structure in year one creates accountability because there is nowhere to hide.",
  ],
} as const;
