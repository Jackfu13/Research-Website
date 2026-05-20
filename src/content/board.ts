export type BoardRole = {
  title: string;
  responsibilities: string[];
  note: string;
  name: string | null;
  slug: string;
  photo: string | null;
  bio: string | null;
};

export const board = {
  yearOneStructure: {
    title: "Year One: Vertical Leadership Model",
    summary:
      "The group launches with five verticals — Technology, Industrials & Defense, Financials, Resources & Real Assets, and Consumer & Services — each led by a designated Vertical Lead. No junior analysts are added until the model is proven.",
  },
  executiveBoardIntro:
    "Eight functional roles covering leadership, research oversight, education, operations, technology, and marketing. All executive board members maintain sector coverage and pitch alongside sector leads.",
  roles: [
    {
      title: "President",
      responsibilities: [
        "Leads the group and sets meeting cadence",
        "Represents ERG externally with faculty, recruiters, and partners",
        "Final accountability on all group decisions",
      ],
      note: "",
      name: "Isaac Toffel",
      slug: "isaac-toffel",
      photo: null,
      bio: null,
    },
    {
      title: "Executive VP",
      responsibilities: [
        "Manages the paper portfolio and all position decisions",
        "Chairs investment committee votes",
        "Runs quarterly performance attribution",
      ],
      note: "",
      name: "Lucas Davis",
      slug: "lucas-davis",
      photo: null,
      bio: null,
    },
    {
      title: "Co-Director of Research",
      responsibilities: [
        "Oversees research quality and standards across all sector leads",
        "Reviews pitch memos for completeness and rigor before presentation",
      ],
      note: "",
      name: "Jack Dalton",
      slug: "jack-dalton",
      photo: null,
      bio: null,
    },
    {
      title: "Co-Director of Research",
      responsibilities: [
        "Oversees research quality and standards across all sector leads",
        "Reviews pitch memos for completeness and rigor before presentation",
      ],
      note: "",
      name: "Braden Benzan",
      slug: "braden-benzan",
      photo: null,
      bio: null,
    },
    {
      title: "Director of Education",
      responsibilities: [
        "Designs and runs onboarding for new members",
        "Hosts skill sessions in financial modeling, valuation, and memo writing",
      ],
      note: "",
      name: "Corbin Duckworth",
      slug: "corbin-duckworth",
      photo: null,
      bio: null,
    },
    {
      title: "Director of Technology",
      responsibilities: [
        "Owns internal tech infrastructure and research tools",
        "Builds and maintains financial modeling and screening platforms",
      ],
      note: "",
      name: "Jack Fu",
      slug: "jack-fu",
      photo: null,
      bio: null,
    },
    {
      title: "Chief Editor",
      responsibilities: [
        "Oversees research publication and external communications",
        "Edits memos for public release and manages the Substack",
      ],
      note: "",
      name: "Pablo Velazquez de Leon",
      slug: "pablo-velazquez-de-leon",
      photo: null,
      bio: null,
    },
    {
      title: "Director of Marketing",
      responsibilities: [
        "Leads recruitment strategy and external outreach",
        "Manages ERG brand identity across all external channels",
      ],
      note: "",
      name: "Steele Shapiro",
      slug: "steele-shapiro",
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
