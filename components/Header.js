"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/operator-review", label: "Operator Review" },
  { href: "/apply", label: "Apply for Onboarding" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-header text-white">
      <div className="container-w flex h-14 items-center justify-between md:h-16">
        <Link
          href="/"
          className="font-display text-[0.95rem] font-semibold tracking-[0.04em] uppercase md:text-base"
          onClick={() => setOpen(false)}
        >
          We Clean ABA™
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] tracking-[0.06em] uppercase transition-opacity ${
                  active ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/apply"
            className="text-[0.75rem] tracking-[0.08em] uppercase opacity-90"
            onClick={() => setOpen(false)}
          >
            Apply
          </Link>
          <button
            type="button"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-5 bg-white transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden animate-fade-in">
          <nav className="container-w flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-sm tracking-[0.04em] uppercase opacity-90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
