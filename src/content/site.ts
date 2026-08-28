export type SiteFeature = {
  title: string;
  description: string;
};


export type FeaturedPublication = {
  title: string;
  issue: string;
  cover: string | null;
  slug: string;     // URL slug for the in-app reader (/research/<slug>)
  pdf: string;      // path to the PDF file in /public
};

export const site = {
  name: "Equity Research Group",
  shortName: "ERG",
  tagline:
    "Student-run equity research focused on under-covered small and mid-cap companies.",
  valueProposition:
    "ERG covers small and mid-cap companies where sell-side attention is thin. Members own a sector, build original research through primary work and financial modeling, and defend their ideas before an investment committee. Each semester, the strongest pitches are published, giving members a body of work they can point to in recruiting.",
  recruitingBlock:
    "ERG is for students serious about equity research, asset management, or hedge funds. You'll be assigned a sector, expected to develop a real view on the companies in it, and held accountable for the ideas you bring to the investment committee. Each semester, members add to a portfolio of published research, build sector expertise, and develop the analytical foundation that real investing requires.",
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
  // Featured publication on the homepage. The home cover always links to /research; the slug/pdf fields are used when this entry surfaces in the publications archive reader.
  featuredPublication: {
    title: "Initiating Coverage: dLocal Limited",
    issue: "Summer 2026",
    cover: "/dlo-cover.jpg" as string | null,
    slug: "dlocal-summer-2026",
    pdf: "/DLO-Final.pdf",
  } satisfies FeaturedPublication,
  // Research page publications archive. Order shown on the site: DLO first, Independent Bank Corp second, DRH third. Also drives the homepage Featured Publication carousel. Each entry gets its own in-app reader at /research/<slug>.
  publications: [
    {
      title: "Initiating Coverage: dLocal Limited",
      issue: "Summer 2026",
      cover: "/dlo-cover.jpg" as string | null,
      slug: "dlocal-summer-2026",
      pdf: "/DLO-Final.pdf",
    },
    {
      title: "Initiating Coverage: Independent Bank Corp",
      issue: "Summer 2026",
      cover: "/independent-bank-corp-cover.jpg" as string | null,
      slug: "independent-bank-corp-summer-2026",
      pdf: "/Independent-Bank-Corp-Final.pdf",
    },
    {
      title: "Initiating Coverage: DiamondRock Hospitality",
      issue: "Summer 2026",
      cover: "/drh-cover.jpg" as string | null,
      slug: "diamondrock-hospitality-summer-2026",
      pdf: "/DRH-Final.pdf",
    },
  ] satisfies FeaturedPublication[],
} as const;
