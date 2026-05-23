export type ProcessStage = {
  title: string;
  description: string;
};

export type PitchRequirement = {
  label: string;
  description: string;
};

export type ResearchStandard = {
  label: string;
  components: string[];
  description: string;
};

export type Workstream = {
  title: string;
  description: string;
};

export const process = {
  intro:
    "Ideas are sourced, researched, formally pitched, voted on by the group, and tracked in the paper portfolio.",
  ideaGeneration: {
    sources: [
      "Screens",
      "13F tracking",
      "Industry reading",
      "Personal observation",
    ],
    watchlistExpectation:
      "Each lead maintains a watchlist of 10+ names in their sector.",
    weeklyUpdateNote:
      "Weekly sector updates surface early-stage ideas for group feedback.",
  },
  stages: [
    {
      title: "Idea Generation",
      description:
        "Ideas originate from screens, 13F tracking, industry reading, and personal observation before being discussed in weekly sector updates.",
    },
    {
      title: "Research",
      description:
        "Work goes beyond filings and earnings calls and can include customer interviews, competitor analysis, supply chain mapping, and on-the-ground research where possible.",
    },
    {
      title: "Pitch",
      description:
        "Every pitch is delivered as a written memo and formal presentation with structured Q&A.",
    },
    {
      title: "Vote",
      description:
        "All leads vote Strong Buy, Buy, Hold, or Short, and a majority vote is required for paper portfolio inclusion.",
    },
    {
      title: "Portfolio Review",
      description:
        "Positions are reviewed quarterly, and covering leads must defend or exit them.",
    },
  ] satisfies ProcessStage[],
  pitchRequirements: [
    {
      label: "Business Overview",
      description: "Business model, revenue streams, competitive position, and the industry context needed to evaluate the idea.",
    },
    {
      label: "Variant Perception",
      description: "A clear statement of what the market is missing and why the current price doesn't reflect it.",
    },
    {
      label: "Key Drivers and Risks",
      description: "The metrics that determine whether the thesis plays out and the factors most likely to break it.",
    },
    {
      label: "Financial Model",
      description: "Bottom-up projections with base, bull, and bear cases built on clearly labeled assumptions.",
    },
    {
      label: "Valuation and Price Target",
      description: "DCF and comparable company analysis with a defined price target and implied upside or downside.",
    },
    {
      label: "Catalysts and Timeline",
      description: "Near- and medium-term events that could close the gap between current price and intrinsic value.",
    },
    {
      label: "Risks and Mitigants",
      description: "A direct assessment of what could go wrong, including a steelman of the bear case.",
    },
  ] satisfies PitchRequirement[],
  workstreams: [
    {
      title: "Generate Ideas",
      description:
        "Ideas come from screens, 13F tracking, industry reading, and personal observation before they are challenged in weekly sector updates.",
    },
    {
      title: "Develop Full Pitches",
      description:
        "Every recommendation is built through industry context, variant perception, financial modeling, valuation work, and a defined catalyst or timeline.",
    },
    {
      title: "Debate and Review",
      description:
        "All leads vote on formal pitches, and accepted positions are tracked in the paper portfolio and reviewed quarterly.",
    },
  ] satisfies Workstream[],
  researchStandards: [
    {
      label: "The Thesis",
      components: [
        "Business overview",
        "Industry context",
        "Variant perception",
      ],
      description:
        "We start by understanding the business, how it makes money, and where it sits in its industry. From there, we build a specific view on what the market is getting wrong and why.",
    },
    {
      label: "The Analysis",
      components: [
        "Key drivers and risks",
        "Financial model",
        "Base, bull, and bear cases",
        "Valuation and price target",
      ],
      description:
        "We identify the two or three metrics that actually drive the business, then build our own financial model from the ground up with base, bull, and bear cases. Valuation work includes a DCF and comparable company analysis, and every pitch ends with a price target we can defend.",
    },
    {
      label: "The Path",
      components: [
        "Catalysts and timeline",
        "Risks and mitigants",
      ],
      description:
        "A good idea needs a reason to work and a timeline for when it does. We identify specific catalysts that could close the gap, and we take the bear case seriously as part of the work.",
    },
  ] satisfies ResearchStandard[],
  pitchFormat: [
    "Written memo (10-15 pages)",
    "30-minute presentation plus 15-minute Q&A",
    "All leads vote: Strong Buy, Buy, Hold, or Short",
    "Majority vote required for paper portfolio inclusion",
  ],
} as const;
