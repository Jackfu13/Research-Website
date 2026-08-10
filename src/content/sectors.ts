export type SectorLeadStatus = "named" | "open";

export type SubSectorCoverage = {
  name: string;
  lead: string | null;
  status: SectorLeadStatus;
};

export type IndustryCoLead = {
  name: string;
  slug: string;
  photo: string | null;
  bio: string | null;
  photoOffsetY?: number;
  photoScale?: number;
  photoOffsetX?: number;
  bioPhotoOffsetY?: number;
  bioPhotoScale?: number;
  bioPhotoOffsetX?: number;
  // Optional contact info for a co-lead who isn't in `board.roles`.
  email?: string;
  linkedin?: string;
};

export type Industry = {
  name: string;
  slug: string;
  // Optional override for the lead's bio link. Set to an existing board member's slug (e.g., "jack-dalton") so clicking the industry-leads card routes to that board bio instead of the industry placeholder.
  leadSlug?: string;
  lead: string;
  // Optional second lead, rendered as its own card on /team. Links to its own bio slug (which can be an existing board member's slug to reuse their bio).
  coLead?: IndustryCoLead;
  subSectors: SubSectorCoverage[];
  photo: string | null;
  bio: string | null;
  // Upcoming industries appear on the About page's Industry Coverage section but are filtered out of the Industry Leads section on /team.
  upcoming?: boolean;
  // Team card photo crop and zoom. Defaults: offsetY 0, scale 1, offsetX 50 (centered).
  photoOffsetY?: number;
  photoScale?: number;
  photoOffsetX?: number;
  // Bio page overrides (fall back to the team-card values if unset).
  bioPhotoOffsetY?: number;
  bioPhotoScale?: number;
  bioPhotoOffsetX?: number;
  // Optional contact info for the industry lead — used by the bio page when the lead doesn't have a board entry.
  email?: string;
  linkedin?: string;
};

export const industries: Industry[] = [
  {
    name: "Technology",
    slug: "industry-technology",
    lead: "Mia Patel",
    coLead: {
      name: "Corbin Duckworth",
      slug: "corbin-duckworth",
      photo: "/Corbin-Headshot.png",
      bio: "Corbin Duckworth co-leads coverage of the Technology industry at the Equity Research Group alongside Mia Patel.",
      email: "duckworth.co@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/corbin-duckworth",
    },
    subSectors: [
      { name: "Software (Enterprise / SaaS)", lead: "Danny Schwartz", status: "named" },
      { name: "Semiconductors", lead: "Avi Nathan", status: "named" },
      { name: "Internet & Platforms", lead: "Caelyn Casey", status: "named" },
      { name: "Gaming & Interactive Media", lead: "Theo Brown", status: "named" },
      { name: "Cybersecurity", lead: "Joy Shome", status: "named" },
      { name: "AI & Data Infrastructure", lead: "Hasith Kadiyala", status: "named" },
    ],
    photo: "/Mia-Patel-headshot.jpg",
    photoScale: 1.2,
    photoOffsetY: 0,
    bio: "Mia Patel serves as Industry Lead for Technology at the Equity Research Group, overseeing coverage across Software, Semiconductors, Internet & Platforms, Gaming, Cybersecurity, and AI & Data Infrastructure. She co-leads the Technology team alongside Corbin Duckworth.",
    email: "patel.mia1@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/miapatel858/",
  },
  {
    name: "Industrials & Defense",
    slug: "industry-industrials-defense",
    lead: "Aiden Schachter",
    subSectors: [
      { name: "Machinery & Industrial Equipment", lead: "Steele Shapiro", status: "named" },
      { name: "Defense", lead: "Edan Winter", status: "named" },
      { name: "Aerospace", lead: "Aiden Schachter", status: "named" },
      { name: "Transportation & Logistics", lead: null, status: "open" },
      { name: "Commercial & Professional Services", lead: "Keaton Lai", status: "named" },
    ],
    photo: "/Aiden-Schachter.jpeg",
    bio: "Aiden Schachter serves as Industry Lead for Industrials & Defense at the Equity Research Group, overseeing coverage across Machinery, Defense, Aerospace, Transportation, and Commercial & Professional Services. He also leads the Aerospace sub-sector directly.",
    email: "schachter.a@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/aiden-schachter-855589249/",
  },
  {
    name: "Financials",
    slug: "industry-financials",
    lead: "Eli Goldstein",
    subSectors: [
      { name: "Banks", lead: "Anthony Gibbs", status: "named" },
      { name: "Fintech", lead: "Luana Case", status: "named" },
      // Lead unconfirmed — asterisk in name marks it for review
      { name: "Asset & Wealth Management", lead: "Isaac Rocha*", status: "named" },
      { name: "Real Estate", lead: "Eli Goldstein", status: "named" },
      { name: "Capital Markets", lead: "Chris Chen", status: "named" },
      { name: "Private Credit", lead: "Bryce Huang", status: "named" },
    ],
    photo: "/Eli-Goldstein.JPEG",
    photoScale: 1.4,
    bioPhotoScale: 1.4,
    bio: "Eli is a third-year at Northeastern University pursuing a B.S. in Finance with a minor in Economics. He works on the Internal Financial Controls team at Natixis Investment Managers and serves as Sector Lead for the Financials team at ERG. Outside of academics, Eli enjoys hiking and bouldering.",
  },
  {
    name: "Resources & Real Assets",
    slug: "industry-resources-real-assets",
    leadSlug: "jack-dalton",
    lead: "Jack Dalton",
    subSectors: [
      { name: "Energy", lead: "Jack Dalton", status: "named" },
      { name: "Materials & Chemicals", lead: null, status: "open" },
      { name: "Utilities & Renewables", lead: "Jordi Visser", status: "named" },
      { name: "Exploration & Production", lead: null, status: "open" },
      { name: "Oilfield Services & Equipment", lead: null, status: "open" },
    ],
    photo: "/Jack-Dalton.jpeg",
    photoScale: 1.2,
    photoOffsetX: 42,
    bioPhotoScale: 1.2,
    bioPhotoOffsetX: 42,
    bio: null,
  },
  {
    name: "Consumer & Services",
    slug: "industry-consumer-services",
    lead: "TBA",
    subSectors: [
      { name: "Consumer Staples & Agriculture", lead: "Orestes Blades", status: "named" },
      { name: "Consumer Discretionary", lead: "TBA", status: "named" },
      { name: "Business Services", lead: "Ben Rosenblatt", status: "named" },
      { name: "E-commerce & Retail", lead: null, status: "open" },
      { name: "Restaurants & Food Service", lead: "Dominic Romero", status: "named" },
      { name: "Travel & Leisure", lead: null, status: "open" },
    ],
    photo: null,
    bio: null,
    upcoming: true,
  },
];
