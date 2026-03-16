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
    "15-20 members in year one",
    "Admission by application, stock pitch submission, and interview",
    "Every member pitches at least once per semester; no exceptions",
    "Inactive members are removed at semester end",
  ],
  admissionSteps: [
    {
      title: "Application",
      description: "Admission begins with an application.",
    },
    {
      title: "Stock Pitch Submission",
      description: "Applicants submit a stock pitch as part of the evaluation.",
    },
    {
      title: "Interview",
      description: "Final admission decisions include an interview.",
    },
  ] satisfies AdmissionStep[],
  meetingCadence: [
    "Weekly meetings of 1.5 hours",
    "One or two pitches per week, rotating through sectors",
    "Remaining time for sector updates, market discussion, and idea generation",
    "Attendance is mandatory; two unexcused absences trigger removal review",
  ],
  memberExpectations: [
    "A minimum of one full pitch per semester",
    "Ongoing coverage and watchlist maintenance for a sector",
    "Active participation in Q&A and voting",
    "Tracking personal calls and learning from mistakes",
  ],
  recruitingPositioning:
    "The group exists to prepare members for equity research careers.",
  recruitingOutcomes: [
    "4+ polished, interview-ready stock pitches by graduation",
    "Deep expertise in at least one sector",
    "A public track record via Substack",
    "Clear perspectives on markets and individual names",
  ],
} as const;
