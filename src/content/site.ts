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
    "The Equity Research Group (ERG) is a student-run equity research organization at Northeastern University focused on under-covered small and mid-cap companies. ERG produces institutional-quality research on names that receive little Wall Street coverage, developing members into rigorous fundamental analysts.",
  footerNote: "Student-run equity research organization.",
  homepageCta:
    "Admission is based on application, stock pitch submission, and interview.",
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
        "Sell-side coverage drops off dramatically below $10B market cap, so the group focuses on work others often do not do.",
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
        "The Equity Research Group (ERG) is a student-run equity research organization at Northeastern University focused on under-covered small and mid-cap companies.",
        "ERG produces institutional-quality research on names that receive little Wall Street coverage, developing members into rigorous fundamental analysts.",
      ],
    },
    {
      title: "Structure",
      body: [
        "ERG operates under a vertical leadership model, organizing coverage across five verticals each led by a designated Vertical Lead.",
        "The executive board holds functional administrative roles, but all board members maintain sector coverage and pitch like everyone else.",
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
} as const;
