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
        <div className="flex min-h-10 items-center justify-center gap-3">
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
        <div className="flex min-h-10 items-center justify-center gap-4">
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
        <div className="flex min-h-10 items-center justify-center gap-3">
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
                <span
                  className="text-xs text-[var(--muted)]"
                  aria-hidden="true"
                >
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
                <span
                  className="text-xs text-[var(--muted)]"
                  aria-hidden="true"
                >
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

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
    if (!isExpanded || !isPlaying || reducedMotion !== false) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") {
        return;
      }

      setActiveIndex((current) => (current + 1) % stages.length);
    }, LOOP_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isExpanded, isPlaying, reducedMotion]);

  function previousStage() {
    setActiveIndex((current) => (current - 1 + stages.length) % stages.length);
  }

  function nextStage() {
    setActiveIndex((current) => (current + 1) % stages.length);
  }

  const panelBackground = {
    backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
    backdropFilter: "blur(12px)"
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <aside
        id="idea-evolution-panel"
        aria-label="Idea evolution sequence"
        hidden={!isExpanded}
        className={`pointer-events-auto mb-3 w-[min(19rem,calc(100vw-2rem))] border-l-2 border-[var(--accent)] py-3 pl-4 pr-3 text-[var(--foreground)] ${
          isExpanded ? "block" : "hidden"
        }`}
        style={panelBackground}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            An idea in motion
          </p>

          <span className="font-mono text-[10px] text-[var(--muted)]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(stages.length).padStart(2, "0")}
          </span>
        </div>

        <div className="py-4">
          <h2
            key={activeStage.id}
            className="motion-fade-up max-w-full overflow-hidden text-[clamp(1.3rem,6vw,2rem)] font-semibold leading-tight tracking-[-0.07em]"
            aria-live={reducedMotion ? "polite" : "off"}
          >
            <span className="sr-only">{activeStage.word}</span>

            <span aria-hidden="true" className="kinetic-word">
              {activeStage.word.split("").map((letter, index) => (
                <span
                  key={`${activeStage.id}-${index}`}
                  className="kinetic-letter"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : getLetterTransform(
                          activeStage.mode,
                          index,
                          activeStage.word.length
                        ),
                    animationDelay: reducedMotion
                      ? "0ms"
                      : `${Math.min(index * 18, 180)}ms`
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h2>

          <p
            key={`${activeStage.id}-description`}
            className="motion-fade-in mt-2 text-xs leading-5 text-[var(--muted)]"
          >
            {activeStage.description}
          </p>

          <div
            key={`${activeStage.id}-graphic`}
            className="motion-fade-up mt-4"
            aria-hidden="true"
          >
            <StageGraphic mode={activeStage.mode} />
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-3">
          <p className="mb-3 text-[10px] text-[var(--muted)]">
            {reducedMotion === null
              ? "Reading motion preference…"
              : reducedMotion
                ? "Manual mode · reduced motion"
                : isPlaying
                  ? "Sequence advancing"
                  : "Sequence paused"}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <button
              type="button"
              onClick={previousStage}
              className="min-h-9 text-xs font-medium text-[var(--foreground)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
              aria-label="Previous idea stage"
            >
              ← Previous
            </button>

            {reducedMotion === false && (
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                className="min-h-9 text-xs font-medium text-[var(--accent)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--accent)]"
              >
                {isPlaying ? "Pause" : "Resume"}
              </button>
            )}

            <button
              type="button"
              onClick={nextStage}
              className="min-h-9 text-xs font-medium text-[var(--foreground)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
              aria-label="Next idea stage"
            >
              Next →
            </button>
          </div>
        </div>
      </aside>

      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        aria-expanded={isExpanded}
        aria-controls="idea-evolution-panel"
        className="pointer-events-auto flex min-h-10 items-center gap-2 border-l-2 border-[var(--accent)] px-3 py-2 text-left text-xs font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
        style={panelBackground}
      >
        <span
          aria-hidden="true"
          className="motion-pulse h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
        />

        <span>{isExpanded ? "Close idea sequence" : "Idea in motion"}</span>

        <span aria-hidden="true" className="ml-1 text-[var(--muted)]">
          {isExpanded ? "−" : "↗"}
        </span>
      </button>
    </div>
  );
}