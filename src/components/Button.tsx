import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
};

export function Button({
  href,
  label,
  variant = "primary",
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)]"
      : "border-[var(--color-accent)] bg-white text-[var(--color-accent)] hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-faint)] hover:text-[var(--color-accent-strong)]";

  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center border px-5 py-2 text-sm font-medium uppercase tracking-[0.08em] transition-colors ${className}`}
      href={href}
    >
      {label}
    </Link>
  );
}
