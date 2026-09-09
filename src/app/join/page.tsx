import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { PageLayout } from "@/components/PageLayout";
import { membership } from "@/content/membership";
import { site } from "@/content/site";

const heroShadow = { textShadow: "0 2px 8px rgba(0,0,0,0.6)" };
const bodyShadow = { textShadow: "0 1px 6px rgba(0,0,0,0.5)" };

export default function JoinPage() {
  return (
    <PageLayout>
      {/* Hero — the pitch, not the process */}
      <section className="relative w-full px-8 pt-40 pb-24 md:px-12 md:pt-52 md:pb-32">
        <Image
          src="/ISEC_Photo_61.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl" style={heroShadow}>
            Recruitment
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white opacity-90 md:text-lg" style={bodyShadow}>
            {membership.recruitingPositioning}
          </p>
          <div className="pt-2">
            <Button href="/join/apply" label="Apply" variant="primary" large />
          </div>
        </div>
      </section>

      {/* The trade — what it takes vs. what you leave with */}
      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="flex flex-col items-center gap-3 text-center">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent-soft)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
              The Trade
            </p>
            <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-3xl">
              What it takes, and what you leave with.
            </h2>
          </div>

          <div className="grid gap-14 md:grid-cols-[minmax(0,2fr)_1px_minmax(0,3fr)] md:gap-16">
            {/* What it takes */}
            <div className="space-y-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-footer-text-soft)]">
                What it takes
              </p>
              <ol className="space-y-8">
                {membership.memberExpectations.map((item, i) => (
                  <li key={item.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4">
                    <span
                      aria-hidden
                      className="text-3xl font-semibold leading-none tracking-tight tabular-nums text-[var(--color-accent-soft)] opacity-60"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[var(--color-footer-text)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-footer-text)] opacity-75">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div aria-hidden className="hidden bg-white/20 md:block" />

            {/* What you leave with */}
            <div className="space-y-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-footer-text-soft)]">
                What you leave with
              </p>
              <ol className="divide-y divide-white/15">
                {membership.recruitingOutcomes.map((outcome, i) => (
                  <li
                    key={outcome.title}
                    className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <span
                      aria-hidden
                      className="text-3xl font-semibold leading-none tracking-tight tabular-nums text-[var(--color-accent-soft)] opacity-60"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[var(--color-footer-text)]">
                        {outcome.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-[var(--color-footer-text)] opacity-75">
                        {outcome.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Who ERG is for — standalone statements, not a paragraph */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Fit
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
              Who ERG is for.
            </h2>
          </div>
          <ol className="divide-y divide-[var(--color-border)]">
            {site.recruitingStatements.map((statement, i) => (
              <li
                key={statement}
                className="grid gap-3 py-8 first:pt-0 last:pb-0 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8"
              >
                <span aria-hidden className="text-sm font-semibold tabular-nums text-[var(--color-accent)] md:pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xl font-medium leading-snug tracking-tight text-[var(--color-text)] md:text-2xl">
                  {statement}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Close on the ask */}
      <section className="relative w-full px-8 py-24 md:px-12 md:py-32">
        <Image
          src="/northeastern-5.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl" style={heroShadow}>
            Applications are open.
          </h2>
          <p className="text-base leading-7 text-white opacity-90 md:text-lg" style={bodyShadow}>
            Admission is by application, assignment submission, and interview.
          </p>
          <div className="pt-2">
            <Button href="/join/apply" label="Apply" variant="light" large />
          </div>
          <p className="pt-6 text-sm leading-6 text-white opacity-80" style={bodyShadow}>
            Questions? Reach out to{" "}
            <Link href="/team/isaac-toffel" className="font-medium text-white underline">
              Isaac Toffel
            </Link>
            ,{" "}
            <Link href="/team/lucas-davis" className="font-medium text-white underline">
              Lucas Davis
            </Link>
            , or{" "}
            <Link href="/team/steele-shapiro" className="font-medium text-white underline">
              Steele Shapiro
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
