import Link from "next/link";
import { notFound } from "next/navigation";

import { PageLayout } from "@/components/PageLayout";
import { PdfViewer } from "@/components/PdfViewer";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.publications.map((p) => ({ slug: p.slug }));
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const pub = site.publications.find((p) => p.slug === slug);
  if (!pub) notFound();

  return (
    <PageLayout>
      <section className="relative w-full px-8 pt-28 pb-6 md:px-12 md:pt-32 md:pb-6">
        <img
          src="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-6xl space-y-5">
          <Link
            href="/research"
            className="inline-flex items-center text-xs font-medium uppercase tracking-[0.12em] text-white opacity-75 transition-opacity hover:opacity-100"
          >
            ← Back to Research
          </Link>
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <h1
              className="text-2xl font-semibold tracking-tight text-white md:text-4xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
            >
              {pub.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <p
                className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-accent-soft)]"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {pub.issue}
              </p>
              <a
                href={pub.pdf}
                download
                className="inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)]"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full px-4 pb-16 pt-0 md:px-12">
        <img
          src="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <PdfViewer src={pub.pdf} title={pub.title} />
        </div>
      </section>
    </PageLayout>
  );
}
