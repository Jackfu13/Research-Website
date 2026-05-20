import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "light";
  large?: boolean;
};

export function Button({
  href,
  label,
  variant = "primary",
  large = false,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)]"
      : variant === "outline"
        ? "border-[var(--color-accent-mid)] bg-[var(--color-accent-mid)] text-white hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
        : "border-[var(--color-accent-mid)] bg-[var(--color-accent-mid)] text-white hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]";

  const sizeClass = large
    ? "min-h-14 px-10 py-3 text-base"
    : "min-h-11 px-5 py-2 text-sm";

  return (
    <Link
      className={`inline-flex items-center justify-center border font-medium uppercase tracking-[0.08em] transition-colors ${sizeClass} ${className}`}
      href={href}
    >
      {label}
    </Link>
  );
}
