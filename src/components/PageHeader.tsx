type PageHeaderProps = {
  title: string;
  intro: string;
};

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-[var(--color-border)] pb-12 md:pb-16">
      <div className="max-w-4xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--color-text-soft)] md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
