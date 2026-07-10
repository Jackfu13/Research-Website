import Image from "next/image";

import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { industries } from "@/content/sectors";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        title="About"
        intro="The Equity Research Group is a student-run organization that studies public companies to judge whether their stock is a good investment. We focus on smaller, under-covered businesses that get little attention from Wall Street, with each member owning research on a specific industry."
        large
        photo="/northeastern-5.jpg"
      />

      {/* Mission — full-width statement band */}
      <section className="w-full bg-[var(--color-footer-dark)] px-8 py-20 md:px-12 md:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center space-y-6">
          <div className="flex flex-col items-center gap-3">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent-mid)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-footer-text-soft)]">
              Our Mission
            </p>
          </div>
          <p className="text-2xl font-light leading-snug tracking-tight text-[var(--color-footer-text)] md:text-4xl md:leading-snug">
            {site.missionStatement}
          </p>
        </div>
      </section>

      {/* Differentiation — $10B editorial split */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col items-center gap-3">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The Gap
            </p>
          </div>
          <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-20">
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
            <p className="text-7xl font-semibold tracking-tight text-[var(--color-accent)] md:text-8xl">
              $10B
            </p>
            <p className="text-lg leading-8 text-[var(--color-text-soft)]">
              Most equity research happens above this line.
              <br />
              <span className="font-medium text-[var(--color-text)]">We work below it.</span>
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {site.differentiation.map((item) => (
              <div
                key={item.label}
                className="border-t border-[var(--color-border)] py-6 last:pb-0 first:border-t-0 first:pt-0 md:first:pt-6 md:first:border-t"
              >
                <p className="text-base font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  {item.label}
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--color-text-soft)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Investment universe — term-sheet strip */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col items-center gap-3">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Mandate
            </p>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
              Investment Universe
            </h2>
          </div>
          <div className="grid grid-cols-1 divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-[var(--color-surface)] sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4">
            {site.investmentUniverse.map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-start gap-2 px-6 py-8 sm:border-b sm:border-[var(--color-border)] md:border-b-0 md:border-l md:border-[var(--color-border)] md:first:border-l-0"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="text-xl font-semibold leading-7 tracking-tight text-[var(--color-text)]">
                  {item.value}
                </p>
                {item.note ? (
                  <p className="text-sm leading-6 text-[var(--color-text-soft)]">
                    {item.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry coverage — numbered table rows */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="flex flex-col gap-3">
                <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Coverage
                </p>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
                Industry Coverage
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-text-soft)]">
                ERG organizes its coverage universe into five industries, each owned by a dedicated industry lead.
              </p>
            </div>
            <Button href="/team" label="View Members" variant="outline" />
          </div>
          <div className="border-t border-[var(--color-border-strong)]">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className="grid gap-2 border-b border-[var(--color-border)] py-6 transition-colors hover:bg-[var(--color-accent-faint)] md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.6fr)] md:items-baseline md:gap-6"
              >
                <p className="text-sm font-semibold text-[var(--color-accent)] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  {industry.name}
                </p>
                <p className="text-sm leading-6 text-[var(--color-text-soft)]">
                  {industry.subSectors.map((subSector) => subSector.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — photo band */}
      <section className="relative w-full px-8 py-24 md:px-12 md:py-32">
        <Image
          src="/ISEC_Photo_61.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center space-y-6">
          <h2
            className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            Interested in joining?
          </h2>
          <p
            className="text-base leading-7 text-white opacity-90 md:text-lg"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            Admission is by application, stock pitch submission, and interview.
          </p>
          <div className="pt-2">
            <Button href="/join" label="Recruitment" variant="light" large />
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
