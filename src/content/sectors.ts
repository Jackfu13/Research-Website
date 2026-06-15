export type SectorLeadStatus = "named" | "open";

export type SubSectorCoverage = {
  name: string;
  lead: string | null;
  status: SectorLeadStatus;
};

export type Industry = {
  name: string;
  slug: string;
  lead: string;
  subSectors: SubSectorCoverage[];
  photo: string | null;
  bio: string | null;
  // Team card photo crop and zoom. Defaults: offsetY 0, scale 1, offsetX 50 (centered).
  photoOffsetY?: number;
  photoScale?: number;
  photoOffsetX?: number;
  // Bio page overrides (fall back to the team-card values if unset).
  bioPhotoOffsetY?: number;
  bioPhotoScale?: number;
  bioPhotoOffsetX?: number;
};

export const industries: Industry[] = [
  {
    name: "Technology",
    slug: "industry-technology",
    lead: "Mia Patel / Corbin Duckworth",
    subSectors: [
      { name: "Software (Enterprise / SaaS)", lead: "Danny Schwartz", status: "named" },
      { name: "Semiconductors", lead: "Avi Nathan", status: "named" },
      { name: "Internet & Platforms", lead: "Caelyn Casey", status: "named" },
      { name: "Gaming & Interactive Media", lead: "Theo Brown", status: "named" },
      { name: "Cybersecurity", lead: "Joy Shome", status: "named" },
      { name: "AI & Data Infrastructure", lead: "Hasith Kadiyala", status: "named" },
    ],
    photo: null,
    bio: null,
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
    bio: null,
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
    photoScale: 1.2,
    bioPhotoScale: 1.2,
    bio: "Eli is a third-year at Northeastern University pursuing a B.S. in Finance with a minor in Economics. He works on the Internal Financial Controls team at Natixis Investment Managers and serves as Sector Lead for the Financials team at ERG. Outside of academics, Eli enjoys hiking and bouldering.",
  },
  {
    name: "Resources & Real Assets",
    slug: "industry-resources-real-assets",
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
  },
];
