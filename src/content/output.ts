export type OutputChannel = {
  title: "Internal" | "External";
  items: string[];
};

export const output = {
  channels: [
    {
      title: "Internal",
      items: [
        "All memos archived in shared drive",
        "Portfolio tracked in real time with entry dates and prices",
        "Quarterly review of past calls: wins, losses, lessons learned",
      ],
    },
    {
      title: "External",
      items: [
        "Substack publication with polished research",
        "Quarterly report summarizing top ideas and portfolio performance",
      ],
    },
  ] satisfies OutputChannel[],
  goal: "Build a public track record members can reference in recruiting.",
  publishedResearchPreview: {
    title: "Published research archive",
    body:
      "Public releases are intended to flow through the group's external research channels rather than a marketing-style showcase.",
    emptyState:
      "No public reports are listed here yet. This section is reserved for polished releases prepared for publication.",
  },
} as const;
