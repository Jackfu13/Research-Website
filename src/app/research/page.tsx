import Image from "next/image";
import Link from "next/link";

import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { process } from "@/content/process";
import { site } from "@/content/site";

export default function ResearchPage() {
  return (
    <PageLayout>
      <section className="relative w-full px-8 pt-28 pb-24 md:px-12 md:pt-32 md:pb-32">
        <img
          src="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
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

          <div className="space-y-6">
            <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
              Publications
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {site.publications.map((pub) => (
                <Link
                  key={pub.title}
                  href={`/research/${pub.slug}`}
                  className="group block w-full max-w-xs"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-[var(--color-accent-soft)]/50 transition-colors group-hover:border-[var(--color-accent-soft)]">
                    {pub.cover ? (
                      <Image
                        src={pub.cover}
                        alt={pub.title}
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
                  </div>
                  <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-white opacity-80">
                    {pub.issue}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Research Standards"
            subtitle="Every pitch must cover the following components before it is scheduled for presentation."
          />
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {process.researchStandards.map((r) => (
              <div key={r.label} className="bg-[var(--color-surface)] px-5 py-5">
                <p className="text-sm font-semibold leading-6 text-[var(--color-text)]">{r.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.components.map((component) => (
                    <span
                      key={component}
                      className="border border-[var(--color-border-strong)] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-accent)]"
                    >
                      {component}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
