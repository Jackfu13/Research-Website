import Link from "next/link";

import { PageLayout } from "@/components/PageLayout";

export default function ApplyPage() {
  return (
    <PageLayout>
      <section className="w-full bg-[var(--color-footer-bg)] px-8 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center space-y-8">
          <div className="flex flex-col items-center gap-3">
            <span aria-hidden className="block h-0.5 w-12 bg-white/60" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white opacity-80">
              Recruitment Status
            </p>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Applications open in the fall.
          </h1>
          <p className="text-base leading-7 text-white opacity-90 md:text-lg">
            The next recruiting cycle opens this fall. Check back here, or follow ERG on our channels for updates.
          </p>
        </div>
      </section>

      <section className="w-full bg-[var(--color-accent-soft)] px-8 py-16 md:px-12">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            Questions?
          </p>
          <p className="text-base leading-7 text-[var(--color-text)]">
            Reach out to{" "}
            <Link href="/team/isaac-toffel" className="font-medium text-[var(--color-accent-strong)] underline">
              Isaac Toffel
            </Link>
            ,{" "}
            <Link href="/team/lucas-davis" className="font-medium text-[var(--color-accent-strong)] underline">
              Lucas Davis
            </Link>
            , or{" "}
            <Link href="/team/steele-shapiro" className="font-medium text-[var(--color-accent-strong)] underline">
              Steele Shapiro
            </Link>
            .
          </p>
          <div className="pt-4">
            <Link
              href="/join"
              className="inline-flex items-center text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent-strong)] hover:text-[var(--color-text)] transition-colors"
            >
              ← Back to Recruitment
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
