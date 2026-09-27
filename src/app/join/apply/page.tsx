import Image from "next/image";
import Link from "next/link";

import { PageLayout } from "@/components/PageLayout";
import { membership } from "@/content/membership";

export default function ApplyPage() {
  return (
    <PageLayout>
      {/* Hero — same photo as /join so the click-through feels continuous */}
      <section className="relative w-full px-8 pt-40 pb-28 md:px-12 md:pt-52 md:pb-36">
        <Image
          src="/ISEC_Photo_61.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center space-y-6">
          <div className="flex flex-col items-center gap-3">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent-soft)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
              Fall 2026 Cycle
            </p>
          </div>
          <h1
            className="text-4xl font-semibold tracking-tight text-white md:text-5xl"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            Applications are closed for Fall 2026.
          </h1>
          <p
            className="max-w-2xl text-base leading-8 text-white opacity-90 md:text-lg"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            Thanks to everyone who applied. Assignments are out; interviews run October 8–15.
          </p>
        </div>
      </section>

      {/* Timeline — how admission works */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl space-y-14">
          <div className="flex flex-col items-center gap-3 text-center">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The Process
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
              How admission works.
            </h2>
          </div>

          <ol className="relative grid gap-10 before:absolute before:top-0 before:bottom-0 before:left-5 before:w-px before:bg-[var(--color-border-strong)] md:grid-cols-3 md:gap-8 md:before:top-5 md:before:right-[16.67%] md:before:bottom-auto md:before:left-[16.67%] md:before:h-px md:before:w-auto">
            {membership.admissionSteps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex gap-5 md:flex-col md:items-center md:text-center"
              >
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] text-sm font-semibold tabular-nums text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-2 pt-1.5 md:pt-0">
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)] tabular-nums">
                    {step.date}
                  </p>
                  <p className="max-w-xs text-sm leading-6 text-[var(--color-text-soft)]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions */}
      <section className="w-full bg-[var(--color-accent-soft)] px-8 py-16 md:px-12">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="flex flex-col items-center gap-3">
            <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent-strong)]" />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
              Questions?
            </p>
          </div>
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
              className="inline-flex items-center text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-text)]"
            >
              ← Back to Recruitment
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
