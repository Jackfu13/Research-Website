export type BoardRole = {
  title: string;
  responsibilities: string[];
  note: string;
  name: string | null;
  photo: string | null;
  bio: string | null;
};

export const board = {
  yearOneStructure: {
    title: "Year One: Flat Partnership",
    summary:
      "The group launches with 15-20 sector leads operating as equals. No junior analysts are added until the model is proven.",
  },
  executiveBoardIntro:
    "Three functional roles handle administrative responsibilities, and every executive board member also maintains sector coverage and pitches like everyone else.",
  roles: [
    {
      title: "President",
      responsibilities: [
        "Sets meeting cadence and deadlines",
        "Runs weekly meetings",
        "Represents the group externally",
        "Maintains sector coverage and pitches",
      ],
      note: "Functional leadership role within the year-one flat partnership.",
      name: null,
      photo: null,
      bio: null,
    },
    {
      title: "Portfolio Coordinator",
      responsibilities: [
        "Tracks paper portfolio positions and performance",
        "Logs entry prices, exit prices, and catalysts",
        "Runs quarterly performance attribution",
        "Maintains sector coverage and pitches",
      ],
      note: "Owns portfolio administration while remaining part of the research rotation.",
      name: null,
      photo: null,
      bio: null,
    },
    {
      title: "Publishing Lead",
      responsibilities: [
        "Manages Substack and external communications",
        "Edits memos for public release",
        "Coordinates quarterly research report",
        "Maintains sector coverage and pitches",
      ],
      note: "Owns publishing workflow while remaining part of the research rotation.",
      name: null,
      photo: null,
      bio: null,
    },
    {
      title: "Role TBD",
      responsibilities: [],
      note: "",
      name: null,
      photo: null,
      bio: null,
    },
    {
      title: "Role TBD",
      responsibilities: [],
      note: "",
      name: null,
      photo: null,
      bio: null,
    },
    {
      title: "Role TBD",
      responsibilities: [],
      note: "",
      name: null,
      photo: null,
      bio: null,
    },
  ] satisfies BoardRole[],
  futureStructure: {
    title: "Year Two and Beyond",
    summary:
      "Once the model is proven, the group plans to add a junior analyst layer without relaxing quality standards.",
    points: [
      "Sector leads become mentors, each managing 1-2 analysts",
      "Analysts complete a training program and pitch to earn voting membership",
      "Structure scales to 30-40 members while maintaining quality",
      "Analyst-to-lead promotion is based on pitch quality and commitment",
    ],
  },
} as const;
