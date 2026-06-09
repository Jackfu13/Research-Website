"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const hasPhotoHeader =
    ["/", "/about", "/research", "/join"].includes(pathname) ||
    pathname.startsWith("/team/");
  const isGreen = pathname === "/team";

  const containerClass = hasPhotoHeader
    ? "absolute top-0 left-0 right-0 bg-transparent"
    : isGreen
    ? "bg-[var(--color-footer-bg)]"
    : "bg-[var(--color-bg)] border-b border-[var(--color-border)]";

  const textColor = hasPhotoHeader || isGreen
    ? "text-[var(--color-footer-text)]"
    : "text-[var(--color-text)]";

  const activeBorder = hasPhotoHeader || isGreen
    ? "border-[var(--color-footer-text)]"
    : "border-[var(--color-text)]";

  return (
    <header className={`z-50 ${containerClass}`}>
      <div className="flex w-full flex-col gap-4 px-12 py-5 md:flex-row md:items-center md:justify-between md:px-20">
        <Link href="/" className="max-w-xl">
          <p className={`text-xs font-medium uppercase tracking-[0.18em] opacity-60 ${textColor}`}>
            {site.shortName}
          </p>
          <p className={`mt-1 text-lg font-semibold tracking-tight ${textColor}`}>
            {site.name}
          </p>
        </Link>
        <nav aria-label="Primary">
          <ul className={`flex flex-wrap gap-x-10 gap-y-2 text-base font-medium ${textColor}`}>
            {navigationLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={active ? `border-b-2 ${activeBorder} pb-0.5` : "opacity-75 hover:opacity-100 transition-opacity"}
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
