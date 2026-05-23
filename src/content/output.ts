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
  goal: "Research that meets the standard gets published. Members graduate with a track record, not just experience.",
  publishedResearchPreview: {
    title: "Published research archive",
    emptyState:
      "No public reports yet — polished research will be released here as it clears the group's publishing standard.",
  },
} as const;
