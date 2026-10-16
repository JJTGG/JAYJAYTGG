"use client";

import { useEffect, useState } from "react";

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

const LOOP_INTERVAL_MS = 3000;

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
      return `translateX(${side * 2}px)`;

    case "specification":
      return `translateY(${index % 2 === 0 ? 1 : 0}px)`;

    case "prototype":
      return `translateY(${index % 3 === 0 ? -1 : 1}px)`;

    case "insight":
      return `translateY(${index % 2 === 0 ? -2 : 2}px)`;

    case "idea":
    case "product":
    default:
      return "translateY(0) rotate(0deg)";
  }
}

function StageGraphic({ mode }: { mode: StageMode }) {
  switch (mode) {
    case "idea":
      return (
        <div className="flex min-h-12 items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] motion-pulse" />
          <span className="h-px w-8 bg-[var(--line)]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Potential
          </span>
          <span className="h-px w-8 bg-[var(--line)]" />
          <span className="h-2 w-2 rounded-full border border-[var(--accent)]" />
        </div>
      );

    case "question":
      return (
        <div className="flex min-h-12 items-center justify-center gap-4">
          <span className="h-5 w-5 rounded-full border border-[var(--line)]" />
          <span className="text-3xl font-semibold leading-none text-[var(--accent)]">
            ?
          </span>
          <span className="h-8 w-8 rounded-full border border-[var(--line)]" />
          <span className="h-3 w-3 rounded-full border border-[var(--accent)]" />
        </div>
      );

    case "possibilities":
      return (
        <div className="grid grid-cols-3 gap-2">
          {["A", "B", "C"].map((option, index) => (
            <div
              key={option}
              className={`flex items-center justify-between rounded-md border px-3 py-2 ${
                index === 1
                  ? "border-[var(--accent)] bg-[var(--surface)]"
                  : "border-[var(--line)]"
              }`}
            >
              <span className="text-sm font-medium">{option}</span>
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      );

    case "direction":
      return (
        <div className="flex min-h-12 items-center justify-center gap-3">
          {["A", "B", "C"].map((option, index) => (
            <div key={option} className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-medium ${
                  index === 1
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--line)] text-[var(--muted)]"
                }`}
              >
                {option}
              </span>
              {index < 2 && (
                <span className="text-xs text-[var(--muted)]" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      );

    case "specification":
      return (
        <div className="grid grid-cols-2 gap-2">
          {["INPUT", "RULES", "OUTPUT", "EDGE CASES"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-[var(--line)] px-3 py-2 text-[10px] font-medium tracking-[0.1em] text-[var(--muted)]"
            >
              {item}
            </div>
          ))}
        </div>
      );

    case "prototype":
      return (
        <div className="rounded-md border border-[var(--line)] p-3">
          <div className="flex items-center gap-1.5 border-b border-[var(--line)] pb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="ml-2 text-[10px] text-[var(--muted)]">
              FIRST WORKING FORM
            </span>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] gap-3 pt-3">
            <div className="space-y-2">
              <div className="h-2 rounded-sm bg-[var(--line)]" />
              <div className="h-2 w-3/4 rounded-sm bg-[var(--line)]" />
              <div className="h-2 w-1/2 rounded-sm bg-[var(--line)]" />
            </div>
            <div className="flex items-center justify-center rounded-md border border-[var(--accent)] p-2 text-[10px] font-medium">
              Test the idea ↗
            </div>
          </div>
        </div>
      );

    case "product":
      return (
        <div className="flex items-center gap-3 rounded-md border border-[var(--accent)] bg-[var(--surface)] p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--accent)] text-lg font-semibold text-white">
            ✓
          </span>
          <div>
            <p className="text-sm font-semibold">Form. Function. Use.</p>
            <p className="text-xs text-[var(--muted)]">
              Something usable now exists.
            </p>
          </div>
        </div>
      );

    case "insight":
      return (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["RESULT", "LEARNING", "NEXT IDEA"].map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span
                className={`rounded-full border px-2.5 py-1.5 text-[10px] font-medium ${
                  index === 2
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--line)] text-[var(--muted)]"
                }`}
              >
                {item}
              </span>
              {index < 2 && (
                <span className="text-xs text-[var(--muted)]" aria-hidden="true">
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

  const activeStage = stages[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function updateMotionPreference() {
      setReducedMotion(preference.matches);

      if (preference.matches) {
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

    return () => window.clearInterval(timer);
  }, [isPlaying, reducedMotion]);

  return (
    <section
      aria-label="The evolution of an idea"
      className="relative isolate overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
        }}
      />

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] motion-pulse" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          An idea in motion
        </p>
      </div>

      <div className="py-5 sm:py-6">
        <h2
          key={activeStage.id}
          className="motion-fade-up flex min-h-10 items-center justify-center overflow-hidden text-center text-[clamp(1.35rem,4.4vw,3rem)] font-semibold leading-tight tracking-[-0.07em]"
        >
          <span className="sr-only">{activeStage.word}</span>
          <span aria-hidden="true" className="kinetic-word">
            {activeStage.word.split("").map((letter, index) => (
              <span
                key={`${activeStage.id}-${index}`}
                className="kinetic-letter"
                style={{
                  transform: getLetterTransform(
                    activeStage.mode,
                    index,
                    activeStage.word.length
                  ),
                  animationDelay: `${Math.min(index * 18, 180)}ms`
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h2>

        <p
          key={`${activeStage.id}-description`}
          className="motion-fade-in mt-2 min-h-5 text-center text-xs leading-5 text-[var(--muted)]"
          aria-live="off"
        >
          {activeStage.description}
        </p>

        <div key={`${activeStage.id}-graphic`} className="motion-fade-up mt-4">
          <StageGraphic mode={activeStage.mode} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] pt-3">
        <p className="text-[10px] text-[var(--muted)]">
          {reducedMotion
            ? "Automatic motion is disabled."
            : isPlaying
              ? "An idea, taking shape."
              : "The sequence is paused."}
        </p>

        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          disabled={reducedMotion}
          className="motion-lift min-h-9 shrink-0 rounded-md border border-[var(--line)] px-3 py-2 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPlaying ? "Pause sequence" : "Resume sequence"}
        </button>
      </div>
    </section>
  );
}