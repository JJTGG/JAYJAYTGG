
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type EventKind =
  | "system"
  | "action"
  | "construction"
  | "discovery"
  | "life";

type WorldEvent = {
  id: string;
  day: number;
  title: string;
  detail: string;
  kind: EventKind;
};

type WorldState = {
  schemaVersion: 1;
  day: number;
  character: {
    id: "founder";
    name: string;
    ageDays: number;
    energy: number;
    hunger: number;
    health: number;
    status: "alive" | "deceased";
    completedProjects: number;
    explorationActions: number;
  };
  resources: {
    food: number;
    materials: number;
    rawMaterials: number;
    wildFood: number;
    unmappedSites: number;
  };
  project: {
    status: "idle" | "building";
    name: "Field Shelter" | "Workshop" | null;
    progress: number;
  };
  structures: string[];
  lastDecision: {
    action: string;
    reason: string;
    day: number;
  };
  events: WorldEvent[];
};

type SaveStatus =
  | "loading"
  | "ready"
  | "saved"
  | "unavailable"
  | "recovery";

const STORAGE_KEY = "jayjaytgg-living-civilization-v1";
const MAX_AGE_DAYS = 80 * 365;
const MAX_EVENTS = 24;

function createInitialWorld(): WorldState {
  return {
    schemaVersion: 1,
    day: 0,
    character: {
      id: "founder",
      name: "The Founder",
      ageDays: 18 * 365,
      energy: 76,
      hunger: 20,
      health: 100,
      status: "alive",
      completedProjects: 0,
      explorationActions: 0
    },
    resources: {
      food: 3,
      materials: 0,
      rawMaterials: 10,
      wildFood: 8,
      unmappedSites: 2
    },
    project: {
      status: "idle",
      name: null,
      progress: 0
    },
    structures: [],
    lastDecision: {
      action: "Waiting to begin",
      reason:
        "The world is paused. Run the simulation to let the founder make its own decisions.",
      day: 0
    },
    events: [
      {
        id: "world-origin",
        day: 0,
        title: "The world is ready",
        detail:
          "The founder begins with basic supplies, a finite environment and the ability to act.",
        kind: "system"
      }
    ]
  };
}

function isWorldState(value: unknown): value is WorldState {
  if (!value || typeof value !== "object") return false;

  const world = value as WorldState;

  const finiteNonNegative = (number: unknown) =>
    typeof number === "number" &&
    Number.isFinite(number) &&
    number >= 0;

  if (
    world.schemaVersion !== 1 ||
    !Number.isInteger(world.day) ||
    !finiteNonNegative(world.day) ||
    !world.character ||
    world.character.id !== "founder" ||
    typeof world.character.name !== "string" ||
    !finiteNonNegative(world.character.ageDays) ||
    !finiteNonNegative(world.character.energy) ||
    !finiteNonNegative(world.character.hunger) ||
    !finiteNonNegative(world.character.health) ||
    !finiteNonNegative(world.character.completedProjects) ||
    !finiteNonNegative(world.character.explorationActions) ||
    !["alive", "deceased"].includes(world.character.status) ||
    !world.resources ||
    !finiteNonNegative(world.resources.food) ||
    !finiteNonNegative(world.resources.materials) ||
    !finiteNonNegative(world.resources.rawMaterials) ||
    !finiteNonNegative(world.resources.wildFood) ||
    !finiteNonNegative(world.resources.unmappedSites) ||
    !world.project ||
    !["idle", "building"].includes(world.project.status) ||
    !finiteNonNegative(world.project.progress) ||
    !Array.isArray(world.structures) ||
    !world.structures.every((item) => typeof item === "string") ||
    !world.lastDecision ||
    typeof world.lastDecision.action !== "string" ||
    typeof world.lastDecision.reason !== "string" ||
    !finiteNonNegative(world.lastDecision.day) ||
    !Array.isArray(world.events) ||
    world.events.length > MAX_EVENTS ||
    !world.events.every(
      (event) =>
        event &&
        typeof event.id === "string" &&
        finiteNonNegative(event.day) &&
        typeof event.title === "string" &&
        typeof event.detail === "string" &&
        ["system", "action", "construction", "discovery", "life"].includes(
          event.kind
        )
    )
  ) {
    return false;
  }

  const validProject =
    (world.project.status === "idle" &&
      world.project.name === null) ||
    (world.project.status === "building" &&
      (world.project.name === "Field Shelter" ||
        world.project.name === "Workshop"));

  return (
    validProject &&
    world.character.energy <= 100 &&
    world.character.hunger <= 100 &&
    world.character.health <= 100
  );
}

function getAgeLabel(ageDays: number) {
  const years = Math.floor(ageDays / 365);
  const days = ageDays % 365;
  return `${years} years, ${days} days`;
}

function appendWorldEvent(
  events: WorldEvent[],
  day: number,
  title: string,
  detail: string,
  kind: EventKind = "action"
) {
  const event: WorldEvent = {
    id: `${day}-${events.length}-${kind}-${title}`,
    day,
    title,
    detail,
    kind
  };

  return [...events, event].slice(-MAX_EVENTS);
}

function advanceOneDay(current: WorldState): WorldState {
  if (current.character.status === "deceased") return current;

  const day = current.day + 1;
  const character = {
    ...current.character,
    ageDays: current.character.ageDays + 1,
    hunger: Math.min(100, current.character.hunger + 10)
  };
  const resources = { ...current.resources };
  let project = { ...current.project };
  let structures = [...current.structures];
  let events = [...current.events];

  let lastDecision = {
    action: current.lastDecision.action,
    reason: current.lastDecision.reason,
    day
  };

  const log = (
    title: string,
    detail: string,
    kind: EventKind = "action"
  ) => {
    events = appendWorldEvent(events, day, title, detail, kind);
  };

  // The environment replenishes only while the simulation advances.
  if (day % 3 === 0 && resources.wildFood < 8) {
    resources.wildFood = Math.min(8, resources.wildFood + 1);
  }

  // Eating consumes an actual stored food unit.
  if (character.hunger >= 45 && resources.food > 0) {
    resources.food -= 1;
    character.hunger = Math.max(0, character.hunger - 52);

    log(
      "A meal was consumed",
      `One food unit was used. Remaining food: ${resources.food}.`,
      "life"
    );
  }

  // Prolonged vital deprivation causes a defined loss of health.
  if (character.hunger >= 75 && resources.food === 0) {
    const damage = character.hunger >= 90 ? 7 : 4;
    character.health = Math.max(0, character.health - damage);

    log(
      "Vitality declined",
      `Prolonged hunger reduced health by ${damage}. Current health: ${character.health}.`,
      "life"
    );
  }

  // Death is irreversible, whether age-related or caused by deprivation.
  if (
    character.ageDays >= MAX_AGE_DAYS ||
    character.health <= 0
  ) {
    character.status = "deceased";

    const cause =
      character.ageDays >= MAX_AGE_DAYS
        ? "reached its defined lifespan"
        : "died following prolonged vital deprivation";

    lastDecision = {
      action: "Life ended",
      reason: `The founder ${cause}. The death is permanent.`,
      day
    };

    log(
      "The founder has died",
      `The founder ${cause}. Its life record and world contributions remain.`,
      "life"
    );

    return {
      ...current,
      day,
      character,
      resources,
      project,
      structures,
      lastDecision,
      events
    };
  }

  const decide = (
    action: string,
    reason: string,
    title: string,
    detail: string,
    kind: EventKind = "action"
  ) => {
    lastDecision = { action, reason, day };
    log(title, detail, kind);
  };

  const rest = (reason: string) => {
    const before = character.energy;
    character.energy = Math.min(100, character.energy + 36);

    decide(
      "Rest",
      reason,
      "The founder rested",
      `Energy recovered from ${before} to ${character.energy}.`
    );
  };

  const explore = (reason: string) => {
    character.energy = Math.max(0, character.energy - 12);
    character.explorationActions += 1;

    decide(
      "Explore",
      reason,
      "The surroundings were explored",
      "The founder spent energy investigating and recording observations."
    );

    // New sites require actual exploration actions and are finite.
    if (
      character.explorationActions % 2 === 0 &&
      resources.unmappedSites > 0
    ) {
      resources.unmappedSites -= 1;
      resources.rawMaterials += 3;

      log(
        "A resource site was mapped",
        `Three raw materials were added to the known supply. Unmapped sites remaining: ${resources.unmappedSites}.`,
        "discovery"
      );
    }
  };

  const needsFood =
    character.hunger >= 60 ||
    (resources.food === 0 && character.hunger >= 35);

  // Critical nourishment needs take priority over discretionary work.
  if (
    needsFood &&
    resources.wildFood > 0 &&
    character.energy > 12
  ) {
    const gathered = Math.min(2, resources.wildFood);

    resources.wildFood -= gathered;
    resources.food += gathered;
    character.energy = Math.max(0, character.energy - 12);

    decide(
      "Forage",
      "Nourishment is a higher priority than discretionary work.",
      "Food was gathered",
      `${gathered} food unit(s) were collected from the available wild supply.`
    );
  } else if (needsFood && character.energy > 12) {
    explore(
      "Stored and wild food are insufficient, so the founder searches the surroundings for available supplies."
    );
  } else if (character.energy <= 22) {
    rest("Energy is too low for demanding activity.");
  } else if (needsFood) {
    rest("The founder must recover enough energy to seek nourishment.");
  } else if (project.status === "building" && project.name) {
    if (character.energy < 30) {
      rest("Construction is postponed until sufficient energy is available.");
    } else {
      const projectName = project.name;
      const requiredWork = projectName === "Field Shelter" ? 3 : 4;

      character.energy = Math.max(0, character.energy - 18);
      project.progress += 1;

      if (project.progress >= requiredWork) {
        structures = [...structures, projectName];
        character.completedProjects += 1;

        project = {
          status: "idle",
          name: null,
          progress: 0
        };

        decide(
          "Complete construction",
          `${projectName} reached its required work threshold.`,
          `${projectName} was completed`,
          "The structure is now part of the saved world.",
          "construction"
        );
      } else {
        decide(
          "Continue construction",
          `${projectName} still requires work, and the founder has sufficient energy.`,
          `Work continued on ${projectName}`,
          `Construction progress: ${project.progress}/${requiredWork}.`,
          "construction"
        );
      }
    }
  } else {
    const nextProject = structures.includes("Field Shelter")
      ? structures.includes("Workshop")
        ? null
        : "Workshop"
      : "Field Shelter";

    const materialCost = nextProject === "Workshop" ? 4 : 3;

    if (!nextProject) {
      explore(
        "Current structures are complete. Exploration may reveal further materials or opportunities."
      );
    } else if (resources.materials < materialCost) {
      if (resources.rawMaterials > 0 && character.energy >= 35) {
        const gathered = Math.min(
          2,
          resources.rawMaterials,
          materialCost - resources.materials
        );

        resources.rawMaterials -= gathered;
        resources.materials += gathered;
        character.energy = Math.max(0, character.energy - 12);

        decide(
          "Gather materials",
          `${nextProject} requires ${materialCost} carried materials; only ${resources.materials - gathered} were available before gathering.`,
          "Raw materials were gathered",
          `${gathered} unit(s) moved from the environmental supply to carried materials.`
        );
      } else if (resources.rawMaterials === 0) {
        explore(
          "Available raw materials are exhausted. Exploration is needed to locate another resource site."
        );
      } else {
        rest("More energy is needed to gather materials safely.");
      }
    } else if (character.energy < 55) {
      rest("The founder delays starting a demanding project until it has enough energy.");
    } else {
      resources.materials -= materialCost;
      character.energy = Math.max(0, character.energy - 8);

      project = {
        status: "building",
        name: nextProject,
        progress: 0
      };

      decide(
        `Begin ${nextProject}`,
        `The required ${materialCost} material units are available, and energy is sufficient to begin.`,
        `${nextProject} was started`,
        `${materialCost} carried material units were allocated to this project.`,
        "construction"
      );
    }
  }

  return {
    ...current,
    day,
    character,
    resources,
    project,
    structures,
    lastDecision,
    events
  };
}

function Meter({
  label,
  value
}: {
  label: string;
  value: number;
}) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-[var(--muted)]">{label}</span>
        <span className="font-mono tabular-nums">{safeValue}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
        className="h-2 overflow-hidden rounded-full bg-[var(--line)]"
      >
        <div
          className="h-full rounded-full bg-[var(--accent)]"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--line)] p-4 sm:p-5">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-3 break-words text-2xl font-semibold tracking-tight">
        {value}
      </p>
      <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
        {detail}
      </p>
    </div>
  );
}

export default function WorldPage() {
  const [world, setWorld] = useState<WorldState>(createInitialWorld);
  const [hydrated, setHydrated] = useState(false);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState<1 | 2 | 4>(1);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("loading");
  const [recoveryBlocked, setRecoveryBlocked] = useState(false);
  const [storageMessage, setStorageMessage] = useState("");

  useEffect(() => {
    let raw: string | null;

    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      setSaveStatus("unavailable");
      setStorageMessage(
        "Browser storage could not be read. The world can run in memory, but persistence is not confirmed."
      );
      setHydrated(true);
      return;
    }

    if (raw) {
      let parsed: unknown;

      try {
        parsed = JSON.parse(raw);
      } catch {
        setRecoveryBlocked(true);
        setSaveStatus("recovery");
        setStorageMessage(
          "The saved world is unreadable. It has not been overwritten. Reset it only if you accept losing that saved state."
        );
        setHydrated(true);
        return;
      }

      if (!isWorldState(parsed)) {
        setRecoveryBlocked(true);
        setSaveStatus("recovery");
        setStorageMessage(
          "The saved world does not match this version. It has not been overwritten. Reset it only if you accept losing that saved state."
        );
        setHydrated(true);
        return;
      }

      setWorld(parsed);
      setSaveStatus("saved");
    } else {
      setSaveStatus("ready");
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || recoveryBlocked) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(world));
      setSaveStatus("saved");
      setStorageMessage("");
    } catch {
      setSaveStatus("unavailable");
      setStorageMessage(
        "The latest state could not be saved. The current session remains in memory only."
      );
    }
  }, [world, hydrated, recoveryBlocked]);

  useEffect(() => {
    const pauseWhenHidden = () => {
      if (document.visibilityState !== "visible") {
        setRunning(false);
      }
    };

    document.addEventListener("visibilitychange", pauseWhenHidden);

    return () => {
      document.removeEventListener("visibilitychange", pauseWhenHidden);
    };
  }, []);

  useEffect(() => {
    if (world.character.status === "deceased") {
      setRunning(false);
      return;
    }

    if (!running || !hydrated || recoveryBlocked) return;

    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") {
        setRunning(false);
        return;
      }

      setWorld((current) => advanceOneDay(current));
    }, 4000 / speed);

    return () => window.clearInterval(interval);
  }, [
    running,
    speed,
    hydrated,
    recoveryBlocked,
    world.character.status
  ]);

  function resetUnreadableSave() {
    const accepted = window.confirm(
      "Permanently replace the unreadable or incompatible saved world with a new civilization?"
    );

    if (!accepted) return;

    setRunning(false);
    setWorld(createInitialWorld());
    setRecoveryBlocked(false);
    setSaveStatus("ready");
    setStorageMessage("");
  }

  const alive = world.character.status === "alive";
  const canOperate =
    hydrated && !recoveryBlocked && alive;

  const saveLabel: Record<SaveStatus, string> = {
    loading: "Loading saved world",
    ready: "Preparing save",
    saved: "Saved on this device",
    unavailable: "Persistence unavailable",
    recovery: "Save recovery required"
  };

  const age = getAgeLabel(world.character.ageDays);
  const activeProject =
    world.project.status === "building" ? world.project.name : null;

  const projectRequirement =
    activeProject === "Field Shelter" ? 3 : activeProject === "Workshop" ? 4 : 0;

  return (
    <main className="min-h-screen overflow-hidden">
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-8 sm:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <span aria-hidden="true">←</span>
            Back to portfolio
          </Link>

          <div className="mt-10 flex flex-col gap-7 md:mt-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Independent simulation / Prototype 01
              </p>
              <h1 className="mt-4 text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
                Living Civilization
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                A small world governed by rules, resources, decisions and
                consequences. Its first inhabitant begins alone.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:min-w-[260px]">
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[var(--line)] px-4 py-3 text-sm">
                <span className="text-[var(--muted)]">Simulation</span>
                <span className="font-medium">
                  {alive ? (running ? "Running" : "Paused") : "Life ended"}
                </span>
              </div>

              <button
                type="button"
                disabled={!canOperate}
                onClick={() => setRunning((value) => !value)}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {!alive
                  ? "Simulation ended"
                  : running
                    ? "Pause simulation"
                    : "Run simulation"}
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              {saveLabel[saveStatus]}
              {hydrated && saveStatus === "saved" ? ` · Day ${world.day}` : ""}
            </p>
            <p>
              The clock stops when paused, hidden or closed. No offline
              progress is simulated.
            </p>
          </div>

          {storageMessage && (
            <div
              role="status"
              className="mt-5 rounded-lg border border-[var(--line)] p-4 text-sm leading-7"
            >
              <p>{storageMessage}</p>
              {recoveryBlocked && (
                <button
                  type="button"
                  onClick={resetUnreadableSave}
                  className="mt-3 min-h-10 rounded-md border border-[var(--line)] px-4 py-2 font-medium hover:border-[var(--accent)]"
                >
                  Reset unreadable save
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-8 sm:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                Simulation speed
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                One world day per four seconds at 1×.
              </p>
            </div>

            <div
              className="inline-flex w-fit rounded-lg border border-[var(--line)] p-1"
              aria-label="Simulation speed"
            >
              {([1, 2, 4] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  disabled={!canOperate}
                  aria-pressed={speed === value}
                  onClick={() => setSpeed(value)}
                  className={`min-h-10 min-w-14 rounded-md px-3 text-sm font-medium transition-colors disabled:opacity-50 ${
                    speed === value
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {value}×
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            <Stat
              label="World day"
              value={world.day.toLocaleString()}
              detail="Advances only during active simulation."
            />
            <Stat
              label="Founder age"
              value={`${Math.floor(world.character.ageDays / 365)} years`}
              detail={age}
            />
            <Stat
              label="Completed projects"
              value={String(world.character.completedProjects)}
              detail="Structures successfully completed."
            />
            <Stat
              label="Known structures"
              value={String(world.structures.length)}
              detail={
                world.structures.length
                  ? world.structures.join(", ")
                  : "Nothing built yet."
              }
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-6 px-[var(--page-gutter)] py-8 sm:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <article className="rounded-xl border border-[var(--line)] p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
              Inhabitant / 001
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em]">
              {world.character.name}
            </h2>

            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              Carefree · Curious · Adventure-oriented
            </p>

            <div className="mt-6 grid gap-5">
              <Meter label="Energy" value={world.character.energy} />
              <Meter label="Hunger" value={world.character.hunger} />
              <Meter label="Health" value={world.character.health} />
            </div>

            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Life status
              </p>
              <p className="mt-2 text-sm font-medium">
                {alive ? "Alive" : "Deceased — permanent"}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                The founder's decisions respond to current needs, available
                resources, project dependencies and energy. The character
                has no LLM or external model dependency.
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-[var(--line)] p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
              Decision record
            </p>

            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
              {world.lastDecision.action}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {world.lastDecision.reason}
            </p>

            <div className="mt-6 rounded-lg bg-[var(--surface)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Current project
              </p>
              <p className="mt-2 text-lg font-semibold">
                {activeProject ?? "No active construction"}
              </p>

              {activeProject ? (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Work completed: {world.project.progress}/
                  {projectRequirement} stages.
                </p>
              ) : (
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  The founder will evaluate survival needs, available
                  materials, remaining structures and exploration.
                </p>
              )}
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Autonomous decision loop
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                Observe conditions → prioritize needs → validate resources
                → choose a permitted action → apply its real cost and
                outcome → record the result.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-8 sm:py-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
              Resource ledger
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
              Every unit has a source.
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            <Stat
              label="Stored food"
              value={String(world.resources.food)}
              detail="Consumed to reduce hunger."
            />
            <Stat
              label="Carried materials"
              value={String(world.resources.materials)}
              detail="Allocated when construction starts."
            />
            <Stat
              label="Raw materials"
              value={String(world.resources.rawMaterials)}
              detail="Finite, gatherable environmental supply."
            />
            <Stat
              label="Wild food"
              value={String(world.resources.wildFood)}
              detail={`Unmapped resource sites: ${world.resources.unmappedSites}.`}
            />
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
            Gathering transfers resources between actual inventories.
            Construction consumes carried materials. Wild food replenishes
            by one unit every three active world days, up to a maximum of
            eight. New material sites require exploration and are finite.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-8 sm:py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                World history
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
                What actually happened.
              </h2>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Latest {world.events.length} recorded events · Maximum {MAX_EVENTS}
            </p>
          </div>

          <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {[...world.events].reverse().map((event) => (
              <article
                key={event.id}
                className="grid gap-2 py-5 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-5"
              >
                <p className="font-mono text-xs text-[var(--muted)]">
                  DAY {event.day}
                </p>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold">{event.title}</h3>
                    <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-[var(--muted)]">
                      {event.kind}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {event.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 px-[var(--page-gutter)] py-8 text-xs leading-6 text-[var(--muted)] sm:flex-row sm:items-start sm:justify-between sm:py-10">
          <p>
            Prototype 01 · One inhabitant · Deterministic actions · Local save
          </p>
          <p className="max-w-xl">
            Companion creation, autonomous social relationships, extensible
            behaviour evolution and sustained generations are later
            milestones. This prototype does not claim those systems exist yet.
          </p>
        </div>
      </section>
    </main>
  );
}
