"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const hasPhotoHeader =
    ["/", "/about", "/research", "/join", "/team"].includes(pathname) ||
    pathname.startsWith("/team/") ||
    pathname.startsWith("/research/");

  const containerClass = hasPhotoHeader
    ? "absolute top-0 left-0 right-0 bg-transparent"
    : "bg-[var(--color-bg)] shadow-sm";

  const textColor = hasPhotoHeader
    ? "text-[var(--color-footer-text)]"
    : "text-[var(--color-text)]";

  const activeBorder = hasPhotoHeader
    ? "border-[var(--color-footer-text)]"
    : "border-[var(--color-text)]";

  return (
    <>
      <header className={`z-50 ${containerClass}`}>
        <div className="flex w-full items-center justify-between px-8 py-5 md:px-20">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <p className={`text-xs font-medium uppercase tracking-[0.18em] opacity-60 ${textColor}`}>
              {site.shortName}
            </p>
            <p className={`mt-1 text-lg font-semibold tracking-tight ${textColor}`}>
              {site.name}
            </p>
          </Link>

          {/* Hamburger / close — mobile only */}
          <button
            className={`md:hidden p-2 ${menuOpen ? "text-[var(--color-text)]" : textColor}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className={`flex gap-x-10 text-base font-medium ${textColor}`}>
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

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#e2deda] md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          aria-label="Primary mobile"
          className={`flex h-full flex-col items-center justify-center gap-8 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navigationLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold tracking-tight text-[var(--color-text)] transition-opacity ${active ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
