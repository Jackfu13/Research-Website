export type AdmissionStep = {
  title: string;
  description: string;
  // Shown on the /join/apply timeline only when set. Fill in once the next cycle's dates are announced.
  date?: string;
};

export const membership = {
  // Google Form from the Fall 2026 cycle, which is finished. Kept as record — no component renders
  // an Apply button right now. Replace with the Spring 2027 form URL when that cycle opens.
  applicationFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdU02r86LSdRFSEQFghl1XMY0ALBrHikYJFvSyKMxan9gDBIw/viewform",
  // Label for the next recruitment cycle, shown at the top of /join/apply.
  nextCycle: "Spring 2027",
  // Where the cycle stands right now. Every recruitment surface reads these strings, so
  // moving the site to the next phase is one edit here.
  cycleStatus: {
    // Primary status statement — /join hero subline and /join/apply H1.
    headline: "The Fall 2026 class is final. Applications reopen in Spring 2027.",
    // What happens next — paired with the headline wherever there's room for detail.
    detail:
      "Thanks to everyone who applied this fall. The Spring 2027 schedule will be posted here when applications open.",
  },
  intro:
    "The group is built for students who want to prepare for equity research careers through repeated pitching, sector ownership, and active debate.",
  participationSummary:
    "Members are expected to maintain sector coverage, contribute to weekly discussion, and complete at least one full pitch each semester.",
  membershipRules: [
    "Admission by application, assignment submission, and interview",
    "Every member pitches at least once per semester",
    "Members who don't meet participation requirements don't stay",
  ],
  admissionSteps: [
    {
      title: "Application",
      description: "Drop your resume through the application form.",
    },
    {
      title: "Assignment",
      description: "Complete an equity assignment and return it by the deadline.",
    },
    {
      title: "Interview",
      description: "A conversation about your assignment, your thinking, and how you approach markets.",
    },
  ] satisfies AdmissionStep[],
  meetingCadence: [
    "Weekly meetings of 1.5 hours",
    "One or two pitches per week, rotating through sectors",
    "Remaining time for sector updates, market discussion, and idea generation",
    "Attendance is mandatory — consistent absence puts membership at risk",
  ],
  memberExpectations: [
    {
      title: "One full pitch per semester",
      description:
        "A complete idea — written memo, financial model, valuation, and a live defense in front of the group.",
    },
    {
      title: "Weekly participation",
      description:
        "Attendance is mandatory. You challenge others' pitches in Q&A and vote on what enters the portfolio.",
    },
  ],
  recruitingPositioning:
    "The group exists to prepare members for equity research careers.",
  recruitingOutcomes: [
    {
      title: "4+ Polished Pitches",
      description: "Graduate with a portfolio of interview-ready ideas built and defended in front of the group.",
    },
    {
      title: "Sector Expertise",
      description: "Own an industry end-to-end — coverage, watchlist, and a working understanding of what moves it.",
    },
    {
      title: "A Public Track Record",
      description: "Polished research gets published on Substack, giving you a record you can reference in recruiting.",
    },
    {
      title: "Adversarial Q&A Reps",
      description: "Every pitch gets challenged. You leave knowing how to defend a thesis under real pressure.",
    },
    {
      title: "An Investment Philosophy",
      description: "Repeated pitching and debate builds a genuine point of view on markets, not just experience.",
    },
  ],
} as const;
