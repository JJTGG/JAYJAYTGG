"use client";

import { useEffect, useRef, useState } from "react";

type StageMode =
  | "idea"
  | "question"
  | "possibilities"
  | "direction"
  | "specification"
  | "prototype"
  | "product"
  | "insight";

type IdeaStage = {
  id: string;
  word: string;
  description: string;
  mode: StageMode;
};

const stages: IdeaStage[] = [
  {
    id: "idea",
    word: "IDEA",
    description: "Everything starts as a possibility.",
    mode: "idea"
  },
  {
    id: "question",
    word: "QUESTION",
    description: "What could this become?",
    mode: "question"
  },
  {
    id: "possibilities",
    word: "POSSIBILITIES",
    description: "More than one direction is possible.",
    mode: "possibilities"
  },
  {
    id: "direction",
    word: "DIRECTION",
    description: "One path receives focus.",
    mode: "direction"
  },
  {
    id: "specification",
    word: "SPECIFICATION",
    description: "The vague becomes explicit.",
    mode: "specification"
  },
  {
    id: "prototype",
    word: "PROTOTYPE",
    description: "Separate parts begin to take form.",
    mode: "prototype"
  },
  {
    id: "product",
    word: "PRODUCT",
    description: "An idea becomes something usable.",
    mode: "product"
  },
  {
    id: "insight",
    word: "INSIGHT",
    description: "What exists teaches us what comes next.",
    mode: "insight"
  },
  {
    id: "idea-again",
    word: "IDEA",
    description: "The next cycle begins with another possibility.",
    mode: "idea"
  }
];

const LOOP_INTERVAL_MS = 3200;

function getLetterTransform(
  mode: StageMode,
  index: number,
  total: number
): string {
  const side = index < total / 2 ? -1 : 1;

  switch (mode) {
    case "question":
      return `translateY(${index % 2 === 0 ? -3 : 3}px) rotate(${side}deg)`;

    case "possibilities":
      return `translate(${((index % 3) - 1) * 3}px, ${
        index % 2 === 0 ? -4 : 4
      }px) rotate(${((index % 3) - 1) * 1.5}deg)`;

    case "direction":
      return `translateX(${side * 1.5}px)`;

    case "specification":
      return `translateY(${index % 2 === 0 ? 1 : 0}px)`;

    case "prototype":
      return `translateY(${index % 3 === 0 ? -1 : 1}px)`;

    case "product":
      return "translateY(0) rotate(0deg)";

    case "insight":
      return `translateY(${index % 2 === 0 ? -2 : 2}px)`;

    case "idea":
    default:
      return "translateY(0) rotate(0deg)";
  }
}

function StageGraphic({ mode }: { mode: StageMode }) {
  switch (mode) {
    case "idea":
      return (
        <div className="flex min-h-24 items-center justify-center gap-4">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] motion-pulse" />

          <span className="h-px w-10 bg-[var(--line)]" />

          <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Potential
          </span>

          <span className="h-px w-10 bg-[var(--line)]" />

          <span className="h-2 w-2 rounded-full border border-[var(--accent)]" />
        </div>
      );

    case "question":
      return (
        <div className="flex min-h-24 items-center justify-center gap-5">
          <span className="h-8 w-8 rounded-full border border-[var(--line)]" />

          <span className="text-5xl font-semibold leading-none tracking-[-0.08em] text-[var(--accent)]">
            ?
          </span>

          <span className="h-12 w-12 rounded-full border border-[var(--line)]" />

          <span className="h-5 w-5 rounded-full border border-[var(--accent)]" />
        </div>
      );

    case "possibilities":
      return (
        <div className="grid min-h-24 grid-cols-3 gap-2">
          {["A", "B", "C"].map((option, index) => (
            <div
              key={option}
              className={`flex flex-col justify-between rounded-lg border p-3 sm:p-4 ${
                index === 1
                  ? "border-[var(--accent)] bg-[var(--surface)]"
                  : "border-[var(--line)]"
              }`}
            >
              <span className="font-mono text-xs text-[var(--muted)]">
                PATH 0{index + 1}
              </span>

              <span className="text-2xl font-semibold tracking-tight">
                {option}
              </span>

              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            </div>
          ))}
        </div>
      );

    case "direction":
      return (
        <div className="flex min-h-24 items-center justify-center gap-2 sm:gap-4">
          {["A", "B", "C"].map((option, index) => (
            <div key={option} className="flex items-center gap-2 sm:gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  index === 1
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--line)] text-[var(--muted)]"
                }`}
              >
                {option}
              </div>

              {index < 2 && (
                <span className="text-[var(--muted)]" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      );

    case "specification":
      return (
        <div className="grid min-h-24 grid-cols-2 gap-2">
          {["INPUT", "RULES", "OUTPUT", "EDGE CASES"].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-md border border-[var(--line)] px-3 py-2"
            >
              <span className="font-mono text-xs text-[var(--accent)]">
                0{index + 1}
              </span>

              <span className="text-xs font-medium tracking-[0.08em]">
                {item}
              </span>
            </div>
          ))}
        </div>
      );

    case "prototype":
      return (
        <div className="min-h-24 rounded-lg border border-[var(--line)] p-3">
          <div className="flex items-center gap-1.5 border-b border-[var(--line)] pb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

            <span className="ml-2 font-mono text-[10px] text-[var(--muted)]">
              FIRST WORKING FORM
            </span>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-3 pt-3">
            <div className="space-y-2">
              <div className="h-3 rounded-sm bg-[var(--surface)]" />
              <div className="h-3 w-3/4 rounded-sm bg-[var(--surface)]" />
              <div className="h-3 w-1/2 rounded-sm bg-[var(--surface)]" />
            </div>

            <div className="flex items-center justify-center rounded-md border border-[var(--accent)] p-3">
              <span className="text-xs font-medium">Test the idea ↗</span>
            </div>
          </div>
        </div>
      );

    case "product":
      return (
        <div className="flex min-h-24 items-center gap-4 rounded-lg border border-[var(--accent)] bg-[var(--surface)] p-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--accent)] text-xl font-semibold text-white">
            ✓
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold tracking-tight">
              Form. Function. Use.
            </p>

            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
              The idea has taken a usable form.
            </p>
          </div>

          <span className="text-lg text-[var(--accent)]">↗</span>
        </div>
      );

    case "insight":
      return (
        <div className="flex min-h-24 flex-wrap items-center justify-center gap-2 sm:gap-3">
          {["RESULT", "LEARNING", "NEXT IDEA"].map((item, index) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <span
                className={`rounded-full border px-3 py-2 text-xs font-medium ${
                  index === 2
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--line)]"
                }`}
              >
                {item}
              </span>

              {index < 2 && (
                <span className="text-[var(--muted)]" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function IdeaEvolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const previousLength = useRef(stages[0].word.length);
  const activeStage = stages[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function updateMotionPreference() {
      const prefersReducedMotion = preference.matches;

      setReducedMotion(prefersReducedMotion);

      if (prefersReducedMotion) {
        setIsPlaying(false);
      }
    }

    updateMotionPreference();
    preference.addEventListener("change", updateMotionPreference);

    return () => {
      preference.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || reducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stages.length);
    }, LOOP_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPlaying, reducedMotion]);

  useEffect(() => {
    previousLength.current = activeStage.word.length;
  }, [activeStage.word.length]);

  function showPreviousStage() {
    setActiveIndex(
      (current) => (current - 1 + stages.length) % stages.length
    );
  }

  function showNextStage() {
    setActiveIndex((current) => (current + 1) % stages.length);
  }

  return (
    <section
      aria-label="The evolution of an idea"
      className="relative isolate overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7"
    >
      {/* Restrained technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)"
        }}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] motion-pulse" />

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            An idea in motion
          </p>
        </div>

        <span className="font-mono text-xs text-[var(--muted)]">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(stages.length).padStart(2, "0")}
        </span>
      </div>

      {/* Evolving typography */}
      <div className="relative py-9 sm:py-12">
        <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
          From possibility to reality
        </p>

        <h2 className="min-h-16 text-center text-[clamp(1.65rem,5.8vw,4.2rem)] font-semibold leading-tight tracking-[-0.065em]">
          <span className="sr-only">{activeStage.word}</span>

          <span aria-hidden="true" className="kinetic-word whitespace-nowrap">
            {activeStage.word.split("").map((letter, index) => {
              const isNewLetter = index >= previousLength.current;

              return (
                <span
                  key={index}
                  className="kinetic-letter"
                  style={{
                    transform: getLetterTransform(
                      activeStage.mode,
                      index,
                      activeStage.word.length
                    ),
                    animation: isNewLetter
                      ? "motion-fade-up 680ms var(--ease-out) both"
                      : undefined,
                    animationDelay: isNewLetter
                      ? `${Math.min(
                          (index - previousLength.current) * 35,
                          220
                        )}ms`
                      : undefined
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </h2>

        <p
          key={activeStage.id}
          className="motion-fade-in mt-4 min-h-6 text-center text-sm leading-6 text-[var(--muted)]"
          aria-live="off"
        >
          {activeStage.description}
        </p>

        <div
          key={`${activeStage.id}-graphic`}
          className="motion-fade-up mt-7"
        >
          <StageGraphic mode={activeStage.mode} />
        </div>
      </div>

      {/* Explicit, predictable controls */}
      <div className="border-t border-[var(--line)] pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[var(--muted)]">
            {reducedMotion
              ? "Automatic motion disabled by your device preference."
              : isPlaying
                ? "The sequence repeats automatically."
                : "The sequence is paused."}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPreviousStage}
              aria-label="Previous idea stage"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              disabled={reducedMotion}
              className="min-h-10 rounded-md border border-[var(--line)] px-3 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPlaying ? "Pause" : "Play sequence"}
            </button>

            <button
              type="button"
              onClick={showNextStage}
              aria-label="Next idea stage"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              →
            </button>
          </div>
        </div>

        <div
          role="group"
          aria-label="Choose an idea stage"
          className="mt-4 flex flex-wrap gap-2"
        >
          {stages.map((stage, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show stage ${index + 1}: ${stage.word}`}
                aria-current={active ? "step" : undefined}
                className={`flex h-8 min-w-8 items-center justify-center rounded-md border px-2 font-mono text-[10px] transition-colors ${
                  active
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}