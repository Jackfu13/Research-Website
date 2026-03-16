import { ReactNode } from "react";

type CardProps = {
  title: string;
  body?: string;
  meta?: string;
  children?: ReactNode;
};

export function Card({ title, body, meta, children }: CardProps) {
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
      {body ? (
        <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">
          {body}
        </p>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
