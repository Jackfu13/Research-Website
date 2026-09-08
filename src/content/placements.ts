export type Placement = {
  name: string;
  logo: string;
  // Multiplier on the marquee's base logo height. Default 1 — bump per-logo when its
  // source mark reads small next to the others at the shared base height.
  scale?: number;
};

// Verified current/former member placements — pulled from board and industry-lead bios.
export const placements = [
  { name: "Goldman Sachs", logo: "/logos/goldman-sachs.png" },
  { name: "Morgan Stanley", logo: "/logos/morgan-stanley.png" },
  { name: "General Catalyst", logo: "/logos/general-catalyst.svg", scale: 0.8 },
  { name: "Wellington Management", logo: "/logos/wellington-management.svg" },
  { name: "JPMorgan", logo: "/logos/jpmorgan.png", scale: 1.3 },
  { name: "Brown Brothers Harriman", logo: "/logos/brown-brothers-harriman.svg" },
  { name: "State Street", logo: "/logos/state-street.svg" },
  { name: "Natixis", logo: "/logos/natixis.png" },
  { name: "Wells Fargo", logo: "/logos/wells-fargo.png" },
  { name: "Amalgamated Bank", logo: "/logos/amalgamated-bank.png" },
  { name: "Stifel", logo: "/logos/stifel.svg" },
] satisfies Placement[];
