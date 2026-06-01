type ListCardProps = {
  title: string;
  intro?: string;
  items: readonly string[];
  meta?: string;
};

export function ListCard({ title, intro, items, meta }: ListCardProps) {
  return (
    <article className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-accent-faint)]">
      {meta ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {meta}
        </p>
      ) : null}
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-text)]">
        {title}
      </h3>
      {intro ? (
        <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">
          {intro}
        </p>
      ) : null}
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-text-soft)] marker:text-[var(--color-accent)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
