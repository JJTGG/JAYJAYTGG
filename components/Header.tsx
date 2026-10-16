"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "jayjaytgg-theme";

const navigation = [
  { label: "Projects", href: "/work" },
  { label: "Collaborations", href: "/collaborations" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

function isActiveRoute(pathname: string, href: string) {
  if (pathname === href) return true;

  return href !== "/" && pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const pathname = usePathname();

  useEffect(() => {
    const current = document.documentElement.dataset.theme;

    if (current === "light" || current === "dark") {
      setTheme(current);
    } else {
      setTheme("system");
    }
  }, []);

  function cycleTheme() {
    const nextTheme: Theme =
      theme === "system"
        ? "light"
        : theme === "light"
          ? "dark"
          : "system";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Keep the selected theme for the current page session.
    }
  }

  return (
    <header className="border-b border-[var(--line)] bg-[var(--background)]">
      <div className="mx-auto w-full max-w-[var(--page-width)] px-[var(--page-gutter)]">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <a
            href="/"
            className="group flex shrink-0 flex-col leading-tight"
            aria-label="JAYJAYTGG home"
          >
            <span className="text-base font-bold tracking-[-0.04em]">
              JAYJAYTGG
            </span>

            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] sm:block">
              Independent builder
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-[var(--surface)] font-medium text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={cycleTheme}
              title={`Current theme: ${theme}. Activate to change theme.`}
              aria-label={`Theme: ${theme}. Activate to change theme.`}
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                {theme === "light" ? (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </>
                ) : theme === "dark" ? (
                  <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                ) : (
                  <>
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M8 21h8m-4-4v4" />
                  </>
                )}
              </svg>

              <span className="capitalize">{theme}</span>
            </button>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-[var(--line)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-[var(--line)] py-3 md:hidden"
          >
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors ${
                    active
                      ? "bg-[var(--surface)] font-medium text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}