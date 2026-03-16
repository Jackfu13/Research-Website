export type SectorLeadStatus = "named" | "open" | "single-lead";

export type SectorCoverage = {
  sector: string;
  lead: string | null;
  status: SectorLeadStatus;
};

export const sectors = {
  intro:
    "Each lead owns primary coverage of one sector. Larger or more active sectors may have co-leads sharing coverage.",
  assignmentNote:
    "Sector assignments are determined at the start of the year based on member preference and demonstrated interest.",
  coLeadPolicy:
    "Co-lead arrangements require both members to pitch separately; shared coverage does not mean shared output.",
  coverage: [
    { sector: "Software", lead: "Danny Schwartz", status: "named" },
    {
      sector: "Digital Infrastructure & Telecom",
      lead: null,
      status: "open",
    },
    {
      sector: "Hardware & Semiconductors",
      lead: "Corbin Duckworth",
      status: "named",
    },
    { sector: "Industrials", lead: "Aiden Schacter", status: "named" },
    {
      sector: "Healthcare - Biotech",
      lead: "Lucas Aulisi",
      status: "named",
    },
    {
      sector: "Healthcare - Medtech & Services",
      lead: null,
      status: "single-lead",
    },
    { sector: "Cyber Security", lead: "Paarth", status: "named" },
    {
      sector: "Consumer Staples & Agriculture",
      lead: null,
      status: "single-lead",
    },
    {
      sector: "Financials - Banks & Insurance",
      lead: "Anthony Gibbs",
      status: "named",
    },
    {
      sector: "Financials - Fintech",
      lead: "Isaac Toffel",
      status: "named",
    },
    { sector: "Energy", lead: "Jack Dalton", status: "named" },
    {
      sector: "Materials & Chemicals",
      lead: null,
      status: "single-lead",
    },
    {
      sector: "Real Estate & REITs",
      lead: "Eli Goldstien",
      status: "named",
    },
    { sector: "Business Services", lead: "Ben Rosenblatt", status: "named" },
    {
      sector: "Transportation & Logistics",
      lead: null,
      status: "single-lead",
    },
    {
      sector: "Aerospace and Defense",
      lead: "Edan Winter",
      status: "named",
    },
  ] satisfies SectorCoverage[],
} as const;
