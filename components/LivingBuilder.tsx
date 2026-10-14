"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type SavedBuilderState = {
  progress?: number;
  completedBuilds?: number;
  paused?: boolean;
  hidden?: boolean;
};

const STORAGE_KEY = "jayjaytgg-living-builder";

const reactions = [
  "Oh, hello! I was trying to make this little thing work.",
  "Want to see what I'm putting together?",
  "I think that connection is finally holding."
];

function getPhase(progress: number) {
  if (progress < 22) return "Sketching an idea";
  if (progress < 52) return "Putting pieces together";
  if (progress < 78) return "Testing the connections";
  if (progress < 100) return "Fine-tuning the build";
  return "Made something!";
}

function getPageContext(pathname: string) {
  if (pathname === "/about") {
    return "While you get to know the builder, I'm working on a tiny side project.";
  }

  if (pathname === "/contact") {
    return "A good time to look up and say hello.";
  }

  if (pathname === "/experiments") {
    return "I'm running a little experiment of my own.";
  }

  if (pathname === "/work" || pathname.startsWith("/work/")) {
    return "Looking through the projects? I'm building a tiny system too.";
  }

  if (pathname === "/tgg-hub") {
    return "Things connect here. I'm trying to make something connect, too.";
  }

  return "One small idea at a time. Let's see what this becomes.";
}

type BuilderSceneProps = {
  progress: number;
  paused: boolean;
  onInteract: () => void;
};

function BuilderScene({
  progress,
  paused,
  onInteract
}: BuilderSceneProps) {
  return (
    <button
      type="button"
      onClick={onInteract}
      aria-label="Talk to the little builder"
      title="Say hello to the little builder"
      className="mini-builder-scene mx-auto block w-full max-w-[190px] rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]"
    >
      <svg
        viewBox="0 0 220 148"
        role="img"
        aria-label="A tiny builder robot working at a workbench"
        className={`mx-auto block w-full ${
          paused ? "mini-builder-motion-paused" : ""
        }`}
      >
        <defs>
          <linearGradient
            id="mini-builder-shell"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D9DCE5" />
          </linearGradient>

          <linearGradient
            id="mini-builder-blue"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#4771F1" />
            <stop offset="100%" stopColor="#1746D1" />
          </linearGradient>
        </defs>

        {/* A quiet ground shadow keeps the scene visually anchored. */}
        <ellipse
          cx="108"
          cy="135"
          rx="79"
          ry="5"
          fill="var(--line)"
          opacity="0.65"
        />

        {/* The robot's body gently bobs while it works. */}
        <g className="mini-builder-body-float">
          {/* Left arm */}
          <g className="mini-builder-arm-left">
            <path
              d="M79 72 L65 83 L72 93"
              fill="none"
              stroke="#B9BFCD"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="72" cy="94" r="5" fill="#1746D1" />
          </g>

          {/* Right arm and little hand tool */}
          <g className="mini-builder-arm-right">
            <path
              d="M108 71 L122 82 L139 81"
              fill="none"
              stroke="#B9BFCD"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="139" cy="81" r="5" fill="#1746D1" />

            <path
              d="M139 76 L139 66 M134 66 L144 66"
              fill="none"
              stroke="#1746D1"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* Main body */}
          <rect
            x="77"
            y="59"
            width="34"
            height="40"
            rx="11"
            fill="url(#mini-builder-shell)"
            stroke="#252B38"
            strokeWidth="1.5"
          />

          {/* Work overalls */}
          <path
            d="M80 74 Q94 69 108 74 L108 92 Q94 98 80 92 Z"
            fill="url(#mini-builder-blue)"
          />

          <path
            d="M84 72 L84 78 M104 72 L104 78"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle cx="87" cy="84" r="2" fill="#DDE6FF" />
          <circle cx="101" cy="84" r="2" fill="#DDE6FF" />

          {/* Legs and boots */}
          <path
            d="M85 96 L83 106 M102 96 L105 106"
            stroke="#697183"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M77 108 H87 M100 108 H111"
            stroke="#252B38"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Head */}
          <rect
            x="73"
            y="25"
            width="42"
            height="39"
            rx="13"
            fill="url(#mini-builder-shell)"
            stroke="#252B38"
            strokeWidth="1.5"
          />

          {/* Face screen */}
          <rect
            x="79"
            y="36"
            width="30"
            height="20"
            rx="7"
            fill="#252B38"
          />

          <g className="mini-builder-eye-blink">
            <circle cx="87" cy="43" r="2.5" fill="#FFFFFF" />
            <circle cx="101" cy="43" r="2.5" fill="#FFFFFF" />
          </g>

          <path
            d="M89 50 Q94 54 99 50"
            fill="none"
            stroke="#8DA8FF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Builder cap */}
          <path
            d="M72 35 Q74 18 94 18 Q108 18 114 32 L113 36 Z"
            fill="url(#mini-builder-blue)"
            stroke="#252B38"
            strokeWidth="1.5"
          />

          <path
            d="M72 34 Q91 28 118 35 Q113 41 98 40 L73 39 Z"
            fill="#1038AB"
          />

          <circle cx="94" cy="25" r="3" fill="#DDE6FF" />

          {/* Small badge */}
          <circle
            cx="102"
            cy="64"
            r="3"
            fill="#8DA8FF"
            stroke="#252B38"
            strokeWidth="1"
          />
        </g>

        {/* Workbench */}
        <rect
          x="23"
          y="108"
          width="177"
          height="8"
          rx="3"
          fill="#252B38"
        />

        <rect
          x="30"
          y="109"
          width="163"
          height="2"
          rx="1"
          fill="#697183"
        />

        <path
          d="M38 116 L38 132 M184 116 L184 132"
          stroke="#697183"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* The little machine changes as its build progresses. */}
        <g>
          <rect
            x="148"
            y="87"
            width="29"
            height="18"
            rx="4"
            fill="#D9DCE5"
            stroke="#252B38"
            strokeWidth="1.5"
          />

          <rect
            x="153"
            y="92"
            width="19"
            height="8"
            rx="2"
            fill="#252B38"
          />

          <circle
            cx="162.5"
            cy="96"
            r="2"
            fill={progress >= 100 ? "#8DA8FF" : "#697183"}
          />

          {progress >= 25 && (
            <g>
              <rect
                x="154"
                y="77"
                width="17"
                height="10"
                rx="3"
                fill="url(#mini-builder-blue)"
                stroke="#252B38"
                strokeWidth="1.2"
              />

              <path
                d="M162.5 77 V70"
                stroke="#252B38"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>
          )}

          {progress >= 50 && (
            <g className="mini-builder-machine-pulse">
              <circle
                cx="162.5"
                cy="69"
                r="5"
                fill="#8DA8FF"
                stroke="#1746D1"
                strokeWidth="1.5"
              />

              <circle cx="162.5" cy="69" r="1.5" fill="#FFFFFF" />
            </g>
          )}

          {progress >= 75 && (
            <g className="mini-builder-spark">
              <path
                d="M178 64 L180 69 L185 71 L180 73 L178 78 L176 73 L171 71 L176 69 Z"
                fill="#4771F1"
              />
            </g>
          )}
        </g>
      </svg>
    </button>
  );
}

export default function LivingBuilder() {
  const pathname = usePathname();
  const progressRef = useRef(12);

  const [progress, setProgress] = useState(12);
  const [completedBuilds, setCompletedBuilds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [reaction, setReaction] = useState("");
  const [reactionIndex, setReactionIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const phase = getPhase(progress);
  const pageContext = getPageContext(pathname);

  const greeting = reaction || pageContext;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const saved = JSON.parse(raw) as SavedBuilderState;

        if (
          typeof saved.progress === "number" &&
          Number.isFinite(saved.progress)
        ) {
          const restoredProgress = Math.max(
            0,
            Math.min(100, saved.progress)
          );

          progressRef.current = restoredProgress;
          setProgress(restoredProgress);
        }

        if (typeof saved.completedBuilds === "number") {
          setCompletedBuilds(
            Math.max(0, Math.floor(saved.completedBuilds))
          );
        }

        if (typeof saved.paused === "boolean") {
          setPaused(saved.paused);
        }

        if (typeof saved.hidden === "boolean") {
          setHidden(saved.hidden);
        }
      }
    } catch {
      // The builder remains usable even when storage is unavailable.
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          progress,
          completedBuilds,
          paused,
          hidden
        } satisfies SavedBuilderState)
      );
    } catch {
      // Continue with in-memory state if storage is unavailable.
    }
  }, [hydrated, progress, completedBuilds, paused, hidden]);

  useEffect(() => {
    if (!hydrated || paused || hidden) return;

    const timer = window.setInterval(() => {
      // Do not advance while the visitor has the page in the background.
      if (document.visibilityState !== "visible") return;

      const current = progressRef.current;
      const next = current >= 100 ? 4 : Math.min(current + 4, 100);

      progressRef.current = next;
      setProgress(next);

      if (next === 100) {
        setCompletedBuilds((count) => count + 1);
      }
    }, 7500);

    return () => window.clearInterval(timer);
  }, [hydrated, paused, hidden]);

  function interactWithBuilder() {
    setReaction(reactions[reactionIndex % reactions.length]);
    setReactionIndex((index) => index + 1);
    setOpen(true);
  }

  if (hidden) {
    return (
      <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setHidden(false)}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--background)] px-4 py-2 text-xs font-semibold text-[var(--foreground)] shadow-lg"
        >
          <span aria-hidden="true">✳</span>
          Show mini builder
        </button>
      </div>
    );
  }

  return (
    <div className="mini-builder-root fixed bottom-4 right-3 z-[70] sm:bottom-6 sm:right-6">
      <section
        aria-label="The little builder"
        className={`overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--background)] text-[var(--foreground)] shadow-xl ${
          open
            ? "w-[min(22rem,calc(100vw-1.5rem))]"
            : "w-[min(11.5rem,calc(100vw-1.5rem))]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] px-3 py-2">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em]">
              Little builder
            </p>
            <p className="text-[9px] text-[var(--muted)]">
              {paused ? "Taking a break" : "At the workbench"}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Resume builder activity" : "Pause builder activity"}
              title={paused ? "Resume activity" : "Pause activity"}
              className="flex h-7 w-7 items-center justify-center rounded-md text-xs hover:bg-[var(--surface)]"
            >
              {paused ? "▶" : "Ⅱ"}
            </button>

            <button
              type="button"
              onClick={() => setHidden(true)}
              aria-label="Hide the little builder"
              title="Hide character"
              className="flex h-7 w-7 items-center justify-center rounded-md text-sm hover:bg-[var(--surface)]"
            >
              ×
            </button>
          </div>
        </div>

        <div className="px-2 pt-2">
          <BuilderScene
            progress={progress}
            paused={paused}
            onInteract={interactWithBuilder}
          />
        </div>

        <div className="px-3 pb-3">
          <div className="flex items-center justify-between gap-2 text-[10px]">
            <span aria-live="polite" className="font-medium">
              {phase}
            </span>
            <span className="tabular-nums text-[var(--muted)]">
              {progress}%
            </span>
          </div>

          <div
            role="progressbar"
            aria-label="Progress on the little builder's project"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            className="mt-2 h-1 overflow-hidden rounded-full bg-[var(--line)]"
          >
            <div
              className="h-full rounded-full bg-[var(--accent)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {open && (
            <div className="mt-4 border-t border-[var(--line)] pt-3">
              <p className="text-sm font-medium leading-6">
                {greeting}
              </p>

              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                {pageContext}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-[var(--surface)] px-3 py-2">
                <span className="text-xs text-[var(--muted)]">
                  Tiny builds finished
                </span>
                <span className="font-mono text-sm font-semibold tabular-nums">
                  {completedBuilds}
                </span>
              </div>

              <p className="mt-3 text-[10px] leading-4 text-[var(--muted)]">
                This is a little programmed world of its own, not a
                representation of work happening on your real projects.
              </p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-4 min-h-9 w-full rounded-md border border-[var(--line)] px-3 py-2 text-xs font-medium hover:border-[var(--accent)]"
              >
                Back to the little builder
              </button>
            </div>
          )}

          {!open && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 min-h-8 w-full rounded-md border border-[var(--line)] px-2 py-1.5 text-[10px] font-medium hover:border-[var(--accent)]"
            >
              Peek at the workbench ↗
            </button>
          )}
        </div>
      </section>

      <style>{`
        .mini-builder-body-float {
          animation: mini-builder-bob 3.2s ease-in-out infinite;
          transform-origin: 94px 80px;
        }

        .mini-builder-arm-left {
          animation: mini-builder-tinker 3.4s ease-in-out infinite;
          transform-origin: 79px 71px;
        }

        .mini-builder-arm-right {
          animation: mini-builder-work 1.1s ease-in-out infinite;
          transform-origin: 108px 70px;
        }

        .mini-builder-eye-blink {
          animation: mini-builder-blink 4.8s ease-in-out infinite;
          transform-origin: 94px 43px;
        }

        .mini-builder-machine-pulse {
          animation: mini-builder-machine-pulse 2.2s ease-in-out infinite;
          transform-origin: 162px 69px;
        }

        .mini-builder-spark {
          animation: mini-builder-spark 1.4s ease-in-out infinite;
          transform-origin: 178px 71px;
        }

        .mini-builder-motion-paused *,
        .mini-builder-motion-paused {
          animation-play-state: paused !important;
        }

        @keyframes mini-builder-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes mini-builder-tinker {
          0%, 100% { transform: rotate(0deg); }
          45% { transform: rotate(-5deg); }
          70% { transform: rotate(3deg); }
        }

        @keyframes mini-builder-work {
          0%, 100% { transform: rotate(0deg); }
          35% { transform: rotate(-7deg); }
          70% { transform: rotate(5deg); }
        }

        @keyframes mini-builder-blink {
          0%, 44%, 48%, 100% { transform: scaleY(1); }
          46% { transform: scaleY(0.15); }
        }

        @keyframes mini-builder-machine-pulse {
          0%, 100% { opacity: 0.65; transform: scale(0.94); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        @keyframes mini-builder-spark {
          0%, 100% { opacity: 0.3; transform: scale(0.85) rotate(-8deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(8deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mini-builder-root *,
          .mini-builder-root *::before,
          .mini-builder-root *::after {
            animation: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}