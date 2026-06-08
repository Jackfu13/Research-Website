export type BoardRole = {
  title: string;
  responsibilities: string[];
  note: string;
  name: string | null;
  slug: string;
  photo: string | null;
  // Team card photo crop. 0 = top of image visible, 100 = bottom. Default 0.
  photoOffsetY: number;
  // Team card photo zoom. 1 = no zoom; 1.1 = 10% in. Default 1.
  photoScale: number;
  // Bio page photo crop. Same scale as photoOffsetY.
  bioPhotoOffsetY: number;
  // Bio page photo zoom. Same scale as photoScale.
  bioPhotoScale: number;
  bio: string | null;
};

export const board = {
  yearOneStructure: {
    title: "Year One: Vertical Leadership Model",
    summary:
      "The group launches with five verticals — Technology, Industrials & Defense, Financials, Resources & Real Assets, and Consumer & Services — each led by a designated Vertical Lead.",
    points: [
      "No junior analysts are added until the model is proven",
      "Eight functional executive board roles cover leadership, research oversight, education, operations, technology, and marketing",
    ],
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
      photo: "/0292_URF__Toffel.I_090225_.JPG",
      photoOffsetY: 0,
      photoScale: 1,
      bioPhotoOffsetY: 0,
      bioPhotoScale: 1,
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
      photoOffsetY: 0,
      photoScale: 1,
      bioPhotoOffsetY: 0,
      bioPhotoScale: 1,
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
      photoOffsetY: 0,
      photoScale: 1,
      bioPhotoOffsetY: 0,
      bioPhotoScale: 1,
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
      photo: "/braden-benzan.jpg",
      photoOffsetY: 0,
      photoScale: 1,
      bioPhotoOffsetY: 0,
      bioPhotoScale: 1,
      bio: "Braden Benzan is a sophomore at Northeastern University pursuing a combined B.S. in Business Administration and M.S. in Finance. He works in Asset & Liability Management Reporting at State Street and co-leads the organization's research across 20+ analysts and 23 sectors. His focus is macro-driven equity research, with research experience across TMT and Financials.",
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
      photoOffsetY: 0,
      photoScale: 1,
      bioPhotoOffsetY: 0,
      bioPhotoScale: 1,
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
      photo: "/202511127-27.jpg",
      photoOffsetY: 50,
      photoScale: 1,
      bioPhotoOffsetY: 30,
      bioPhotoScale: 1.1,
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
      photo: "/pablo-velazquez-de-leon.jpg",
      photoOffsetY: 0,
      photoScale: 1.4,
      bioPhotoOffsetY: 0,
      bioPhotoScale: 1.4,
      bio: "Pablo Velazquez de Leon is an International Affairs and Criminal Justice major at Northeastern University, where he focuses on International Law. In addition to leading the publishing process at ERG, he serves as President of the Global Journal Magazine and COO of Auster Inc., and works as a Legislative Aide at the Massachusetts State Senate.",
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
      photo: "/steele-shapiro.jpg",
      photoOffsetY: 0,
      photoScale: 1.2,
      bioPhotoOffsetY: 20,
      bioPhotoScale: 1,
      bio: "Steele Shapiro is a second-year Finance and Marketing student at Northeastern University, originally from Seattle. He joined the ERG team to deepen his understanding of equity research and financial analysis. Outside of academics, he has a passion for photography and tennis.",
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
