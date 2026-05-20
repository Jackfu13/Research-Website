export type SectorLeadStatus = "named" | "open" | "single-lead";

export type SectorCoverage = {
  sector: string;
  lead: string | null;
  status: SectorLeadStatus;
  photo: string | null;
  bio: string | null;
};

export type Vertical = {
  name: string;
  lead: string;
  subSectors: string[];
  photo: string | null;
  bio: string | null;
};

export const verticals: Vertical[] = [
  {
    name: "Technology",
    lead: "Mia Patel / Corbin Duckworth",
    subSectors: ["Software", "Semiconductors", "Internet & Platforms", "Gaming & Interactive Media", "Cybersecurity", "AI & Data Infrastructure"],
    photo: null,
    bio: null,
  },
  {
    name: "Industrials & Defense",
    lead: "Aiden Schacter",
    subSectors: ["Machinery & Industrial Equipment", "Defense", "Aerospace", "Transportation & Logistics", "Commercial & Professional Services"],
    photo: null,
    bio: null,
  },
  {
    name: "Financials",
    lead: "Eli Goldstein",
    subSectors: ["Banks", "Fintech", "Asset & Wealth Management", "Real Estate", "Capital Markets", "Private Credit"],
    photo: null,
    bio: null,
  },
  {
    name: "Resources & Real Assets",
    lead: "Jack Dalton",
    subSectors: ["Energy", "Materials & Chemicals", "Utilities & Renewables", "Exploration & Production", "Oilfield Services & Equipment"],
    photo: null,
    bio: null,
  },
  {
    name: "Consumer & Services",
    lead: "Derek Z",
    subSectors: ["Consumer Staples & Agriculture", "Consumer Discretionary", "Business Services", "E-commerce & Retail", "Restaurants & Food Service", "Travel & Leisure"],
    photo: null,
    bio: null,
  },
];

export const sectors = {
  intro:
    "Each lead owns primary coverage of one sector. Larger or more active sectors may have co-leads sharing coverage.",
  assignmentNote:
    "Sector assignments are determined at the start of the year based on member preference and demonstrated interest.",
  coLeadPolicy:
    "Co-lead arrangements require both members to pitch separately; shared coverage does not mean shared output.",
  coverage: [
    { sector: "Software", lead: "Danny Schwartz", status: "named", photo: null, bio: null },
    { sector: "Digital Infrastructure & Telecom", lead: null, status: "open", photo: null, bio: null },
    { sector: "Hardware & Semiconductors", lead: "Corbin Duckworth", status: "named", photo: null, bio: null },
    { sector: "Industrials", lead: "Aiden Schacter", status: "named", photo: null, bio: null },
    { sector: "Healthcare – Biotech", lead: "Lucas Aulisi", status: "named", photo: null, bio: null },
    { sector: "Healthcare – Medtech & Services", lead: null, status: "single-lead", photo: null, bio: null },
    { sector: "Cyber Security", lead: "Paarth", status: "named", photo: null, bio: null },
    { sector: "Consumer Staples & Agriculture", lead: null, status: "single-lead", photo: null, bio: null },
    { sector: "Financials – Banks & Insurance", lead: "Anthony Gibbs", status: "named", photo: null, bio: null },
    { sector: "Financials – Fintech", lead: "Isaac Toffel", status: "named", photo: null, bio: null },
    { sector: "Energy", lead: "Jack Dalton", status: "named", photo: null, bio: null },
    { sector: "Materials & Chemicals", lead: null, status: "single-lead", photo: null, bio: null },
    { sector: "Real Estate & REITs", lead: "Eli Goldstein", status: "named", photo: null, bio: null },
    { sector: "Business Services", lead: "Ben Rosenblatt", status: "named", photo: null, bio: null },
    { sector: "Transportation & Logistics", lead: null, status: "single-lead", photo: null, bio: null },
    { sector: "Aerospace and Defense", lead: "Edan Winter", status: "named", photo: null, bio: null },
  ] satisfies SectorCoverage[],
} as const;
