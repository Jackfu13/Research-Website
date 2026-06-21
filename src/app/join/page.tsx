import Link from "next/link";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { membership } from "@/content/membership";
import { site } from "@/content/site";

export default function JoinPage() {
  return (
    <PageLayout>
      <section className="relative w-full px-8 pt-40 pb-28 md:px-12 md:pt-52 md:pb-36">
        <img
          src="/ISEC_Photo_61.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <h1
            className="text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-5xl"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            Recruitment
          </h1>
          <p
            className="max-w-3xl text-base leading-8 text-[var(--color-footer-text)] md:text-lg"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
          >
            Admission is by application, stock pitch submission, and interview.
          </p>
          <div className="pt-2">
            <Button href="/join/apply" label="Apply" variant="primary" large />
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Admissions Process"
            subtitle="Membership is evaluated through a straightforward three-step process."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {membership.admissionSteps.map((step) => (
              <Card key={step.title} title={step.title} body={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-8 py-10 md:px-12">
        <div className="space-y-6">
          <SectionHeading title="The Commitment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {membership.memberExpectations.map((item, i) => (
              <div key={item}>
                <p className="text-3xl font-semibold text-[var(--color-accent)] opacity-40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-10 md:px-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-footer-text)]">What You Build</h2>
            <p className="mt-2 text-sm text-[var(--color-footer-text)] opacity-60">Members graduate with more than experience — they leave with a record.</p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {membership.recruitingOutcomes.map((outcome) => (
              <div key={outcome.title} className="bg-[var(--color-footer-bg)] px-6 py-8">
                <p className="text-base font-semibold text-[var(--color-footer-text)]">{outcome.title}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-footer-text)] opacity-60">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <SectionHeading title="Who ERG is for" center />
          <p className="max-w-3xl text-base leading-8 text-[var(--color-text-soft)]">
            {site.recruitingBlock}
          </p>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">Questions?</h2>
          <p className="text-base leading-7 text-[var(--color-text-soft)]">
            For questions about ERG, reach out to{" "}
            <Link href="/team/isaac-toffel" className="font-medium text-[var(--color-accent)] underline">
              Isaac Toffel
            </Link>
            ,{" "}
            <Link href="/team/lucas-davis" className="font-medium text-[var(--color-accent)] underline">
              Lucas Davis
            </Link>
            , or{" "}
            <Link href="/team/steele-shapiro" className="font-medium text-[var(--color-accent)] underline">
              Steele Shapiro
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
