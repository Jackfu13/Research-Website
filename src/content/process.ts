export type ProcessStage = {
  title: string;
  description: string;
};

export type PitchRequirement = {
  label: string;
  description: string;
};

export type Workstream = {
  title: string;
  description: string;
};

export const process = {
  intro:
    "The research process combines repeatable idea generation, primary diligence, formal pitching, group voting, and ongoing portfolio review.",
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
      label: "Business overview and industry context",
      description:
        "Explain the company and the industry context required to understand the idea.",
    },
    {
      label: "Variant perception",
      description: "State what the market is missing.",
    },
    {
      label: "Key drivers and risks",
      description:
        "Identify the major drivers of the thesis and the risks that could break it.",
    },
    {
      label: "Financial model",
      description: "Include base, bull, and bear cases.",
    },
    {
      label: "Valuation and price target",
      description:
        "Connect the thesis to valuation work and a defined price target.",
    },
    {
      label: "Defined catalyst or timeline",
      description:
        "Specify the event path or timeline that could close the gap.",
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
  pitchFormat: [
    "Written memo (10-15 pages)",
    "30-minute presentation plus 15-minute Q&A",
    "All leads vote: Strong Buy, Buy, Hold, or Short",
    "Majority vote required for paper portfolio inclusion",
  ],
} as const;
