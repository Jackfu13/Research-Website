import { Card } from "@/components/Card";

type PersonCardProps = {
  title: string;
  name?: string | null;
  subtitle?: string;
  items?: string[];
};

export function PersonCard({
  title,
  name,
  subtitle,
  items = [],
}: PersonCardProps) {
  return (
    <Card title={name ?? title} meta={name ? title : undefined}>
      {subtitle ? (
        <p className="text-sm leading-6 text-[var(--color-text-soft)]">{subtitle}</p>
      ) : null}
      {items.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-text-soft)]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
