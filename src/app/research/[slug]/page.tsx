import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageLayout } from "@/components/PageLayout";
import { PdfViewer } from "@/components/PdfViewer";
import { coveredCompanies, companyBySlug } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coveredCompanies.map((c) => ({ slug: c.slug }));
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companyBySlug(slug);
  if (!company) notFound();

  return (
    <PageLayout>
      <section className="relative w-full px-8 pt-28 pb-6 md:px-12 md:pt-32 md:pb-6">
        <Image
          src="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-6xl space-y-5">
          <Link
            href="/research"
            className="inline-flex items-center text-xs font-medium uppercase tracking-[0.12em] text-white opacity-75 transition-opacity hover:opacity-100"
          >
            ← Back to Research
          </Link>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
              {company.ticker} · {company.reports.length}{" "}
              {company.reports.length === 1 ? "report" : "reports"}
            </p>
            <h1
              className="text-2xl font-semibold tracking-tight text-white md:text-4xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
            >
              {company.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Reports stack newest-first: the latest note sits on top, the initiation underneath. */}
      <section className="relative w-full px-4 pb-16 pt-0 md:px-12">
        <Image
          src="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-6xl space-y-12">
          {company.reports.map((report) => (
            <article key={report.slug} className="space-y-4">
              <div className="flex flex-col gap-3 border-t border-white/20 pt-6 md:flex-row md:items-baseline md:justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
                    {report.kind === "note" ? "Analyst Note" : "Initiating Coverage"}
                    {report.analyst ? ` · ${report.analyst}` : null}
                  </p>
                  <h2
                    className="text-xl font-semibold tracking-tight text-white md:text-2xl"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                  >
                    {report.issue}
                  </h2>
                </div>
                <a
                  href={report.pdf}
                  download
                  className="inline-flex w-fit items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)]"
                >
                  Download PDF
                </a>
              </div>
              <PdfViewer src={report.pdf} title={report.title} />
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
