import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { PageLayout } from "@/components/PageLayout";
import { board } from "@/content/board";
import { industries } from "@/content/sectors";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const boardSlugs = board.roles.map((r) => ({ slug: r.slug }));
  const industrySlugs = industries.map((i) => ({ slug: i.slug }));
  return [...boardSlugs, ...industrySlugs];
}

export default async function BioPage({ params }: Props) {
  const { slug } = await params;

  const boardMember = board.roles.find((r) => r.slug === slug);
  const industry = industries.find((i) => i.slug === slug);

  const name = boardMember?.name ?? industry?.lead ?? null;
  const title = boardMember?.title ?? industry?.name ?? null;
  const bio = boardMember?.bio ?? industry?.bio ?? null;
  const photo = boardMember?.photo ?? industry?.photo ?? null;
  const photoOffsetY = boardMember?.bioPhotoOffsetY ?? boardMember?.photoOffsetY ?? industry?.bioPhotoOffsetY ?? industry?.photoOffsetY ?? 0;
  const photoScale = boardMember?.bioPhotoScale ?? boardMember?.photoScale ?? industry?.bioPhotoScale ?? industry?.photoScale ?? 1;
  const photoOffsetX = boardMember?.bioPhotoOffsetX ?? boardMember?.photoOffsetX ?? industry?.bioPhotoOffsetX ?? industry?.photoOffsetX ?? 50;
  const email = boardMember?.email;
  const linkedin = boardMember?.linkedin;

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

  const imageStyle: CSSProperties = { objectPosition: `${photoOffsetX}% ${photoOffsetY}%` };
  if (photoScale !== 1) {
    imageStyle.transform = `scale(${photoScale})`;
  }

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <PageLayout>
      <section className="w-full bg-[var(--color-footer-bg)] px-8 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start md:gap-14">
            <div className="relative aspect-square w-full overflow-hidden bg-[var(--color-surface-muted)]">
              {photo ? (
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover"
                  style={imageStyle}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-6xl font-semibold text-[var(--color-border-strong)]">
                    {initials}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-5xl">
                {name}
              </h1>
              <p className="text-lg italic text-[var(--color-footer-text)] opacity-75">
                {title}
              </p>
              <p className="text-base leading-7 text-[var(--color-footer-text)] opacity-90">
                {bio ?? "Bio coming soon."}
              </p>
              {(email || linkedin) ? (
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {linkedin ? (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[var(--color-footer-text)] px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-footer-text)] transition-colors hover:bg-[var(--color-footer-text)] hover:text-[var(--color-accent-strong)]"
                    >
                      LinkedIn ↗
                    </a>
                  ) : null}
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-[var(--color-footer-text)] opacity-80 underline hover:opacity-100 transition-opacity"
                    >
                      {email}
                    </a>
                  ) : null}
                </div>
              ) : null}
              <div className="pt-4">
                <Link
                  href="/team"
                  className="inline-flex items-center text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-footer-text)] opacity-75 hover:opacity-100 transition-opacity"
                >
                  ← Back to Members
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
