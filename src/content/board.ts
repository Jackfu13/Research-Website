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
  // Northeastern email (without mailto:). Optional — bio page shows the contact block only if present.
  email?: string;
  // Full LinkedIn profile URL (https://www.linkedin.com/in/...). Optional.
  linkedin?: string;
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
      email: "toffel.i@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/isaac-toffel",
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
      photo: "/Lucas-Davis.jpeg",
      photoOffsetY: 20,
      photoScale: 1.6,
      bioPhotoOffsetY: 20,
      bioPhotoScale: 1.6,
      bio: "Lucas Davis is a third-year at Northeastern University from Millburn, New Jersey, studying Business Administration and Economics with a concentration in FinTech. He spent his first year abroad in London and is a founding member of the Equity Research Group at Northeastern and a member of the Entrepreneurs Club. This summer, he is joining Wellington Management in Boston. Outside of academics, Lucas enjoys working out, poker, and rooting for the Philadelphia Eagles.",
      email: "davis.luc@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/lucas-davis-745880246/",
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
      email: "dalton.ja@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/jackdaltonnu/",
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
      email: "benzan.b@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/bbenzan/",
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
      email: "duckworth.co@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/corbin-duckworth",
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
      email: "fu.jac@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/jackfu13/",
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
      email: "velazquezdeleon.p@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/pablovelazquezdeleon/",
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
      email: "shapiro.ste@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/steele-shapiro",
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
