"use client";

import { useState } from "react";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "TGG HUB", href: "/tgg-hub" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-5">
          <a href="/" className="font-semibold tracking-tight">
            JAYJAYTGG
          </a>

          <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="border-t border-[var(--line)] py-4 md:hidden">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--line)] py-4 text-sm text-[var(--muted)] last:border-b-0 hover:text-[var(--foreground)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}