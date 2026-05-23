import { Card } from "@/components/Card";
import { InterestForm } from "@/components/InterestForm";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { membership } from "@/content/membership";

export default function JoinPage() {
  return (
    <PageLayout>
      <PageHeader title="Recruitment" intro="Admission is by application, stock pitch submission, and interview." large photo="/northeastern-5.jpg" />

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
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

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading title="The Commitment" />
          <div className="grid gap-8 sm:grid-cols-3">
            {membership.memberExpectations.map((item, i) => (
              <div key={item}>
                <p className="text-3xl font-semibold text-[var(--color-accent)] opacity-40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-16 md:px-12">
        <div className="space-y-10">
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
        <div className="space-y-8">
          <SectionHeading
            title="Express Interest"
            subtitle="Applications open each semester. Submit your information below and we will reach out when the next cycle begins."
          />
          <InterestForm />
        </div>
      </section>
    </PageLayout>
  );
}
