import Link from "next/link";

import { navigationLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[color:rgba(251,248,247,0.97)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {site.shortName}
          </p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--color-text)]">
            {site.name}
          </p>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-soft)]">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-px bg-black/18" />
    </header>
  );
}
