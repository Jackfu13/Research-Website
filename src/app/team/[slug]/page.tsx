import { PageLayout } from "@/components/PageLayout";
import { board } from "@/content/board";
import { verticals } from "@/content/sectors";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const boardSlugs = board.roles.map((r) => ({ slug: r.slug }));
  const verticalSlugs = verticals.map((v) => ({ slug: v.slug }));
  return [...boardSlugs, ...verticalSlugs];
}

export default async function BioPage({ params }: Props) {
  const { slug } = await params;

  const boardMember = board.roles.find((r) => r.slug === slug);
  const vertical = verticals.find((v) => v.slug === slug);

  const name = boardMember?.name ?? vertical?.lead ?? null;
  const title = boardMember?.title ?? vertical?.name ?? null;

  if (!name || !title) {
    return (
      <PageLayout>
        <section className="w-full bg-[var(--color-footer-bg)] px-12 py-28 md:px-20">
          <div className="flex flex-col items-center text-center space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-footer-text)]">
              Not Found
            </h1>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="w-full bg-[var(--color-footer-bg)] px-12 py-28 md:px-20">
        <div className="flex flex-col items-center text-center space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-5xl">
            {name}
          </h1>
          <p className="text-base text-[var(--color-footer-text)] opacity-75">
            {title}
          </p>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-12 py-20 md:px-20">
        <p className="text-base leading-7 text-[var(--color-text-soft)]">
          Bio coming soon.
        </p>
      </section>
    </PageLayout>
  );
}
