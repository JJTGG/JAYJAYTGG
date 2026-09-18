"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "TGG HUB", href: "/tgg-hub" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-5">
          <a href="/" className="font-semibold tracking-tight">
            JAYJAYTGG
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    active
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="border-t border-[var(--line)] py-4 md:hidden">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-[var(--line)] py-4 text-sm last:border-b-0 ${
                      active
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}