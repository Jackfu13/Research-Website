import Link from "next/link";

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] text-[var(--color-footer-text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-footer-text)]">
            {site.shortName}
          </p>
          <p className="max-w-2xl text-sm leading-6 text-[var(--color-footer-text-soft)]">
            {site.footerNote}
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-[var(--color-footer-text-soft)]">
          <Link href="/research" className="transition-colors hover:text-white">
            Research
          </Link>
          <Link href="/join" className="transition-colors hover:text-white">
            Join
          </Link>
        </div>
      </div>
    </footer>
  );
}
