import Image from "next/image";
import Link from "next/link";

import { PageLayout } from "@/components/PageLayout";
import { PitchAnatomy } from "@/components/PitchAnatomy";
import { process } from "@/content/process";
import { coveredCompanies } from "@/content/site";

export default function ResearchPage() {
  return (
    <PageLayout>
      <section className="relative w-full px-8 pt-28 pb-24 md:px-12 md:pt-32 md:pb-32">
        <Image
          src="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-6xl space-y-14">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Research
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white opacity-90 md:text-lg" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              {process.intro}
            </p>
          </div>

          {/* One card per company under coverage — cover is the newest report on that name */}
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                Under Coverage
              </p>
              <p className="max-w-xl text-sm leading-6 text-white opacity-75">
                Every name we cover, with our most recent view on top.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {coveredCompanies.map((company) => {
                const latest = company.reports[0];
                return (
                  <Link
                    key={company.slug}
                    href={`/research/${company.slug}`}
                    className="group block w-full max-w-xs"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-[var(--color-accent-soft)]/50 transition-colors group-hover:border-[var(--color-accent-soft)]">
                      {company.cover ? (
                        <Image
                          src={company.cover}
                          alt={company.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 80vw, 320px"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--color-surface)] px-6">
                          <p className="text-4xl font-semibold tracking-tight text-[var(--color-accent)]">ERG</p>
                          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                            Cover coming soon
                          </p>
                        </div>
                      )}
                      {latest ? (
                        <span className="absolute right-0 top-0 bg-[var(--color-accent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                          {latest.kind === "note" ? `${latest.issue} Note` : "Initiation"}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-white opacity-90">
                      {company.ticker}
                    </p>
                    <p className="mt-1 text-center text-sm text-white opacity-70">{company.name}</p>
                    <p className="mt-1 text-center text-xs text-white opacity-50">
                      {company.reports.length}{" "}
                      {company.reports.length === 1 ? "report" : "reports"}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The standard — anatomy of a pitch */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The Standard
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
              What&apos;s inside every report.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-soft)]">
              Every pitch is built in the same order, and every component has to be there before it is scheduled for presentation.
            </p>
          </div>
          <PitchAnatomy showColophon />
        </div>
      </section>

    </PageLayout>
  );
}
