
"use client";

import { useState } from "react";

type DecisionDemosProps = {
  slug: string;
};

type ArenaScenario = "routine" | "automation" | "debugging";

const scenarios: {
  value: ArenaScenario;
  label: string;
  question: string;
  responseA: string;
  responseB: string;
}[] = [
  {
    value: "routine",
    label: "Daily routines",
    question: "Why can a daily routine make hard work easier?",
    responseA:
      "A routine removes some repeated decisions. You spend less energy deciding when to start, making it easier to direct attention toward the task itself.",
    responseB:
      "Think of a routine as a prepared path. It does not do the work for you; it lowers the friction between intending to begin and actually beginning."
  },
  {
    value: "automation",
    label: "Automation",
    question: "When should you automate a repeated task?",
    responseA:
      "Consider automation when the task is frequent, its rules are stable, its exceptions are understood, and the cost of failure is manageable.",
    responseB:
      "First understand the repeated work. Predictable inputs and outputs are good candidates for automation; a process that is still changing may need simplifying first."
  },
  {
    value: "debugging",
    label: "Debugging",
    question: "What's a good first step when a web page feels slow?",
    responseA:
      "Measure before changing code. Separate navigation, network requests, rendering, and interaction delays to identify which stage costs the most time.",
    responseB:
      "Reproduce the slowdown, establish a timing baseline, and test one hypothesis at a time. Avoid a broad rewrite before identifying the bottleneck."
  }
];

function ArenaDemo() {
  const [scenario, setScenario] = useState<ArenaScenario>("debugging");

  const example = scenarios.find((item) => item.value === scenario)!;

  return (
    <section
      aria-labelledby="arena-demo-title"
      className="overflow-hidden rounded-xl border border-[var(--line)]"
    >
      <div className="border-b border-[var(--line)] p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Interactive demonstration / AI Arena
        </p>

        <h2
          id="arena-demo-title"
          className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          One question. Two perspectives.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Change the example question and compare two response styles side by
          side, illustrating the product's core comparison experience.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <label
          htmlFor="arena-scenario"
          className="block text-sm font-medium"
        >
          Choose a sample question
        </label>

        <select
          id="arena-scenario"
          value={scenario}
          onChange={(event) =>
            setScenario(event.target.value as ArenaScenario)
          }
          className="mt-3 min-h-12 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-3 text-sm outline-none focus:border-[var(--accent)]"
        >
          {scenarios.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Your question
          </p>

          <p className="mt-3 text-lg font-medium leading-7 sm:text-xl">
            {example.question}
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-[var(--line)] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">Response A</h3>

              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">
                Sample
              </span>
            </div>

            <p className="mt-5 text-sm leading-7">{example.responseA}</p>
          </article>

          <article className="rounded-xl border border-[var(--line)] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">Response B</h3>

              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">
                Sample
              </span>
            </div>

            <p className="mt-5 text-sm leading-7">{example.responseB}</p>
          </article>
        </div>

        <p className="mt-5 text-xs leading-5 text-[var(--muted)]">
          These responses are prewritten examples for this demonstration.
          No AI models are called, and the examples are not attributed to
          real model providers.
        </p>
      </div>
    </section>
  );
}

function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits,
    minimumFractionDigits: 0
  }).format(value);
}

function TradingToolsDemo() {
  const [accountSize, setAccountSize] = useState("5000");
  const [riskPercent, setRiskPercent] = useState("1");
  const [entry, setEntry] = useState("100");
  const [stopLoss, setStopLoss] = useState("95");
  const [target, setTarget] = useState("112.5");

  const account = Number(accountSize);
  const risk = Number(riskPercent);
  const entryPrice = Number(entry);
  const stopPrice = Number(stopLoss);
  const targetPrice = Number(target);

  const inputsAreFinite = [
    account,
    risk,
    entryPrice,
    stopPrice,
    targetPrice
  ].every(Number.isFinite);

  const inputsAreValid =
    inputsAreFinite &&
    account > 0 &&
    risk > 0 &&
    risk <= 100 &&
    entryPrice > 0 &&
    stopPrice > 0 &&
    targetPrice > 0 &&
    entryPrice !== stopPrice &&
    entryPrice !== targetPrice;

  const riskAmount = inputsAreValid ? account * (risk / 100) : 0;

  const stopDistance = inputsAreValid
    ? Math.abs(entryPrice - stopPrice)
    : 0;

  const targetDistance = inputsAreValid
    ? Math.abs(targetPrice - entryPrice)
    : 0;

  const positionSize =
    inputsAreValid && stopDistance > 0
      ? riskAmount / stopDistance
      : 0;

  const exposure = inputsAreValid ? positionSize * entryPrice : 0;

  const potentialReward = inputsAreValid
    ? positionSize * targetDistance
    : 0;

  const riskReward =
    inputsAreValid && riskAmount > 0
      ? potentialReward / riskAmount
      : 0;

  return (
    <section
      aria-labelledby="trading-demo-title"
      className="overflow-hidden rounded-xl border border-[var(--line)]"
    >
      <div className="border-b border-[var(--line)] p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Interactive calculator / Trading Tools
        </p>

        <h2
          id="trading-demo-title"
          className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Define the risk before the trade.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Change the values to see position size, account risk, exposure,
          and the potential risk/reward multiple update immediately.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="space-y-5 p-5 sm:p-7">
          {[
            {
              id: "trading-account",
              label: "Account size",
              value: accountSize,
              update: setAccountSize,
              step: "any",
              min: "0.01"
            },
            {
              id: "trading-risk",
              label: "Risk per trade (%)",
              value: riskPercent,
              update: setRiskPercent,
              step: "any",
              min: "0.01"
            },
            {
              id: "trading-entry",
              label: "Entry price",
              value: entry,
              update: setEntry,
              step: "any",
              min: "0.01"
            },
            {
              id: "trading-stop",
              label: "Stop-loss price",
              value: stopLoss,
              update: setStopLoss,
              step: "any",
              min: "0.01"
            },
            {
              id: "trading-target",
              label: "Target price",
              value: target,
              update: setTarget,
              step: "any",
              min: "0.01"
            }
          ].map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium"
              >
                {field.label}
              </label>

              <input
                id={field.id}
                type="number"
                inputMode="decimal"
                min={field.min}
                step={field.step}
                value={field.value}
                onChange={(event) => field.update(event.target.value)}
                className="mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              setAccountSize("5000");
              setRiskPercent("1");
              setEntry("100");
              setStopLoss("95");
              setTarget("112.5");
            }}
            className="min-h-11 rounded-md border border-[var(--line)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Reset example values
          </button>
        </div>

        <div className="border-t border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 md:border-l md:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Calculated results
          </p>

          {inputsAreValid ? (
            <div className="mt-5 space-y-3" aria-live="polite" aria-atomic="true">
              {[
                {
                  label: "Risk amount",
                  value: formatNumber(riskAmount)
                },
                {
                  label: "Estimated position size",
                  value: formatNumber(positionSize, 4) + " units"
                },
                {
                  label: "Position exposure",
                  value: formatNumber(exposure)
                },
                {
                  label: "Potential reward at target",
                  value: formatNumber(potentialReward)
                }
              ].map((result) => (
                <div
                  key={result.label}
                  className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-4"
                >
                  <p className="text-xs text-[var(--muted)]">
                    {result.label}
                  </p>

                  <p className="mt-2 text-xl font-semibold tracking-tight">
                    {result.value}
                  </p>
                </div>
              ))}

              <div className="rounded-xl border border-[var(--accent)] p-5">
                <p className="text-sm text-[var(--muted)]">
                  Potential risk/reward ratio
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {formatNumber(riskReward)} : 1
                </p>
              </div>
            </div>
          ) : (
            <div
              role="status"
              className="mt-5 rounded-lg border border-[var(--line)] bg-[var(--background)] p-5"
            >
              <p className="font-medium">Check the input values</p>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Use positive numbers, keep risk between 0 and 100 percent,
                and make sure entry, stop-loss, and target prices are not
                identical where a distance is required.
              </p>
            </div>
          )}

          <p className="mt-5 text-xs leading-5 text-[var(--muted)]">
            Simplified mathematical example only. It excludes fees,
            slippage, leverage rules, contract multipliers, liquidity, and
            other instrument-specific constraints. This is not a trade
            recommendation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function DecisionDemos({ slug }: DecisionDemosProps) {
  if (slug === "ai-arena") {
    return <ArenaDemo />;
  }

  if (slug === "trading-tools") {
    return <TradingToolsDemo />;
  }

  return null;
}
