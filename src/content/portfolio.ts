export type PortfolioRule = {
  label: string;
  value: string;
};

export const portfolio = {
  intro:
    "The group runs a paper portfolio with clear sizing, capacity, and review rules.",
  rules: [
    { label: "Starting capital", value: "$1M notional paper portfolio" },
    { label: "Position size", value: "3-7% per name at entry" },
    { label: "Capacity", value: "Maximum 20 positions at any time" },
    {
      label: "Review cycle",
      value: "Positions reviewed quarterly; leads must defend or exit",
    },
    { label: "Trade logging", value: "All trades logged with rationale" },
  ] satisfies PortfolioRule[],
} as const;
