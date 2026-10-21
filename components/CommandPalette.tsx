"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  commandExamples,
  dispatchCommand,
  type CommandDispatchResult,
  type CommandTheme
} from "../lib/command-engine";

const THEME_STORAGE_KEY = "jayjaytgg-theme";
const THEME_CHANGE_EVENT = "jayjaytgg:theme-change";

function applyTheme(theme: CommandTheme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The theme still applies for the current page session.
  }

  window.dispatchEvent(
    new CustomEvent<CommandTheme>(THEME_CHANGE_EVENT, {
      detail: theme
    })
  );
}

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<CommandDispatchResult | null>(null);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wasOpenRef = useRef(false);

  const closePalette = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
        wasOpenRef.current = false;
      }

      return;
    }

    wasOpenRef.current = true;
    setResult(null);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function runCommand(command: string) {
    const dispatchResult = dispatchCommand(command, {
      navigate: (href) => router.push(href),
      setTheme: applyTheme
    });

    setResult(dispatchResult);

    if (
      dispatchResult.status === "success" &&
      dispatchResult.action.type === "navigate"
    ) {
      setInput("");
      closePalette();
    }
  }

  function handleDialogKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePalette();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements =
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      );

    if (!focusableElements?.length) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setResult(null);
          setOpen(true);
        }}
        aria-label="Open command palette"
        aria-haspopup="dialog"
        aria-keyshortcuts="Control+K Meta+K"
        title="Open command palette (Ctrl/⌘ + K)"
        className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md border border-[var(--line)] px-2.5 py-2 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] sm:px-3"
      >
        <span aria-hidden="true" className="font-mono text-sm">
          ⌘
        </span>
        <span className="hidden sm:inline">Commands</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/45 px-3 py-[8vh] backdrop-blur-[2px] sm:px-6 sm:py-[12vh]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePalette();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-title"
            aria-describedby="command-palette-description"
            tabIndex={-1}
            onKeyDown={handleDialogKeyDown}
            className="w-full max-w-2xl border border-[var(--line)] bg-[var(--background)] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-5 border-b border-[var(--line)] p-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  JJTGG / Command interface
                </p>

                <h2
                  id="command-palette-title"
                  className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl"
                >
                  What should happen?
                </h2>

                <p
                  id="command-palette-description"
                  className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]"
                >
                  Enter a supported command. Actions are selected from
                  explicit rules; unrecognized input will not be guessed.
                </p>
              </div>

              <button
                type="button"
                onClick={closePalette}
                aria-label="Close command palette"
                className="inline-flex min-h-10 min-w-10 items-center justify-center border border-[var(--line)] text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              >
                Esc
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                runCommand(input);
              }}
              className="p-5 sm:p-6"
            >
              <label
                htmlFor="command-input"
                className="block text-sm font-medium"
              >
                Command
              </label>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  ref={inputRef}
                  id="command-input"
                  type="text"
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                    setResult(null);
                  }}
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={200}
                  placeholder='Try "open projects" or "set theme dark"'
                  className="min-h-12 min-w-0 flex-1 border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />

                <button
                  type="submit"
                  className="motion-lift inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Run command
                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                Press Enter to run. Press Escape to close. Ctrl/⌘ + K
                toggles this interface.
              </p>
            </form>

            {result && (
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="mx-5 mb-5 border-y border-[var(--line)] py-4 sm:mx-6"
              >
                <p
                  className={`text-sm font-medium ${
                    result.status === "unknown" ||
                    result.status === "error"
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {result.message}
                </p>

                {result.status === "help" && (
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Use one of the examples below, or try another
                    supported destination or project name.
                  </p>
                )}
              </div>
            )}

            <div className="border-t border-[var(--line)] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Example commands
                </h3>

                <span className="font-mono text-xs text-[var(--muted)]">
                  {String(commandExamples.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-4 divide-y divide-[var(--line)]">
                {commandExamples.map((example) => (
                  <div
                    key={example.command}
                    className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="break-words font-mono text-sm">
                        {example.command}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                        {example.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setInput(example.command);
                        setResult(null);
                        inputRef.current?.focus();
                      }}
                      className="inline-flex min-h-9 shrink-0 items-center justify-center self-start border border-[var(--line)] px-3 py-2 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:self-auto"
                    >
                      Use example
                    </button>
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-[var(--line)] pt-4 text-xs leading-6 text-[var(--muted)]">
                This is the typed-command foundation. Voice input and the
                interactive command lab will use the same engine in later
                steps.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}