export type AdmissionStep = {
  title: string;
  description: string;
};

export const membership = {
  intro:
    "The group is built for students who want to prepare for equity research careers through repeated pitching, sector ownership, and active debate.",
  participationSummary:
    "Members are expected to maintain sector coverage, contribute to weekly discussion, and complete at least one full pitch each semester.",
  membershipRules: [
    "Admission by application, stock pitch submission, and interview",
    "Every member pitches at least once per semester",
    "Members who don't meet participation requirements don't stay",
  ],
  admissionSteps: [
    {
      title: "Application",
      description: "Submit an application covering your background and interest in equity research.",
    },
    {
      title: "Stock Pitch",
      description: "Present a stock pitch — a real idea with a thesis, basic analysis, and a view on value.",
    },
    {
      title: "Interview",
      description: "A conversation about your pitch, your thinking, and how you approach markets.",
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
