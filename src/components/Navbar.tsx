"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[var(--color-footer-bg)]">
      <div className="flex w-full flex-col gap-4 px-12 py-5 md:flex-row md:items-center md:justify-between md:px-20">
        <Link href="/" className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-footer-text)] opacity-60">
            {site.shortName}
          </p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--color-footer-text)]">
            {site.name}
          </p>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-10 gap-y-2 text-base font-medium text-[var(--color-footer-text)]">
            {navigationLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={active ? "border-b-2 border-[var(--color-footer-text)] pb-0.5" : "hover:opacity-80 transition-opacity"}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
