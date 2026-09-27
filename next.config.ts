import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Research moved from one-page-per-report to one-page-per-company. These keep previously
  // shared report URLs working. Temporary (307) while the structure settles — flip to
  // `permanent: true` once we're confident company pages are the final shape, since 308s
  // get cached hard by browsers and are painful to undo.
  async redirects() {
    return [
      { source: "/research/paycom-software-summer-2026", destination: "/research/paycom-software", permanent: false },
      { source: "/research/paycom-q2-2026-note", destination: "/research/paycom-software", permanent: false },
      { source: "/research/dlocal-summer-2026", destination: "/research/dlocal-limited", permanent: false },
      { source: "/research/dlocal-june-2026", destination: "/research/dlocal-limited", permanent: false },
      { source: "/research/independent-bank-corp-summer-2026", destination: "/research/independent-bank-corp", permanent: false },
      { source: "/research/independent-bank-corp-june-2026", destination: "/research/independent-bank-corp", permanent: false },
      { source: "/research/diamondrock-hospitality-summer-2026", destination: "/research/diamondrock-hospitality", permanent: false },
    ];
  },
};

export default nextConfig;
