
"use client";

import { useState } from "react";

type ProjectExperiencesProps = {
  slug: string;
};

type ExperienceFormat = "collection" | "letter" | "memory";

const experienceFormats: { label: string; value: ExperienceFormat }[] = [
  { label: "Memory collection", value: "collection" },
  { label: "Personal letter", value: "letter" },
  { label: "Single memory", value: "memory" }
];

function MeayuExperience() {
  const [personName, setPersonName] = useState("");
  const [relationship, setRelationship] = useState("Someone close to me");
  const [memory, setMemory] = useState("");
  const [format, setFormat] = useState<ExperienceFormat>("collection");
  const [prepared, setPrepared] = useState(false);

  const formatTitles: Record<ExperienceFormat, string> = {
    collection: "A collection of meaningful things",
    letter: "A letter made just for you",
    memory: "A moment worth keeping"
  };

  return (
    <section
      aria-labelledby="meayu-experience-title"
      className="overflow-hidden rounded-xl border border-[var(--line)]"
    >
      <div className="border-b border-[var(--line)] p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Interactive concept / Meayu
        </p>

        <h2
          id="meayu-experience-title"
          className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Make something for someone.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Add a little context and see how it could become a personal digital
          experience. This demonstration works locally and does not publish or
          save your input.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="space-y-5 p-5 sm:p-7">
          <div>
            <label
              htmlFor="meayu-person"
              className="block text-sm font-medium"
            >
              Who is it for?
            </label>

            <input
              id="meayu-person"
              value={personName}
              onChange={(event) => {
                setPersonName(event.target.value);
                setPrepared(false);
              }}
              maxLength={70}
              placeholder="Enter a name"
              className="mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div>
            <label
              htmlFor="meayu-relationship"
              className="block text-sm font-medium"
            >
              What's your connection?
            </label>

            <input
              id="meayu-relationship"
              value={relationship}
              onChange={(event) => {
                setRelationship(event.target.value);
                setPrepared(false);
              }}
              maxLength={80}
              placeholder="Friend, sibling, mentor..."
              className="mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div>
            <label
              htmlFor="meayu-format"
              className="block text-sm font-medium"
            >
              Choose an experience
            </label>

            <select
              id="meayu-format"
              value={format}
              onChange={(event) => {
                setFormat(event.target.value as ExperienceFormat);
                setPrepared(false);
              }}
              className="mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            >
              {experienceFormats.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="meayu-memory"
              className="block text-sm font-medium"
            >
              Add a memory or personal detail
            </label>

            <textarea
              id="meayu-memory"
              value={memory}
              onChange={(event) => {
                setMemory(event.target.value);
                setPrepared(false);
              }}
              maxLength={500}
              rows={4}
              placeholder="A moment, a message, or something you appreciate..."
              className="mt-2 w-full resize-y rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-3 text-sm leading-6 outline-none focus:border-[var(--accent)]"
            />

            <p className="mt-1 text-right text-xs text-[var(--muted)]">
              {memory.length}/500
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPrepared(true)}
            className="min-h-11 w-full rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
          >
            Prepare experience preview
          </button>

          {prepared && (
            <p role="status" className="text-sm leading-6 text-[var(--muted)]">
              Local preview prepared. Nothing has been published or saved.
            </p>
          )}
        </div>

        <div className="border-t border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 md:border-l md:border-t-0">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Recipient's view
            </p>

            <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">
              Sample
            </span>
          </div>

          <article className="mt-5 rounded-xl border border-[var(--line)] bg-[var(--background)] p-5 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--surface)] text-xl font-semibold text-[var(--accent)]">
              {(personName.trim()[0] || "M").toUpperCase()}
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
              Made for {personName.trim() || "someone meaningful"}
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">
              {formatTitles[format]}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {relationship.trim() || "A meaningful connection"}
            </p>

            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <p className="whitespace-pre-wrap text-sm leading-7">
                {memory.trim() ||
                  "The details you choose to include will shape this personal experience."}
              </p>
            </div>

            <p className="mt-7 text-xs text-[var(--muted)]">
              A personal experience, shaped by the person who knows them best.
            </p>
          </article>

          <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
            This is an illustrative composition, not the actual Meayu publishing
            system.
          </p>
        </div>
      </div>
    </section>
  );
}

const sampleGames = [
  "Mobile Legends (sample)",
  "PUBG Mobile (sample)",
  "Free Fire (sample)"
];

const sampleBundles = [
  "Small credit bundle",
  "Standard credit bundle",
  "Large credit bundle"
];

const orderStages = [
  "Product",
  "Order review",
  "Payment",
  "Fulfillment",
  "Result"
];

function ClutchTopUpExperience() {
  const [game, setGame] = useState(sampleGames[0]);
  const [bundle, setBundle] = useState(sampleBundles[0]);
  const [review, setReview] = useState(false);

  return (
    <section
      aria-labelledby="clutchtopup-experience-title"
      className="overflow-hidden rounded-xl border border-[var(--line)]"
    >
      <div className="border-b border-[var(--line)] p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Interactive concept / ClutchTopUp
        </p>

        <h2
          id="clutchtopup-experience-title"
          className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          From selection to order review.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Explore an example of the product-selection flow. The games and
          bundles below are illustrative and are not a statement of current
          catalogue availability.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="space-y-5 p-5 sm:p-7">
          <div>
            <label
              htmlFor="clutch-game"
              className="block text-sm font-medium"
            >
              Example game
            </label>

            <select
              id="clutch-game"
              value={game}
              onChange={(event) => {
                setGame(event.target.value);
                setReview(false);
              }}
              className="mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            >
              {sampleGames.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="clutch-bundle"
              className="block text-sm font-medium"
            >
              Example bundle
            </label>

            <select
              id="clutch-bundle"
              value={bundle}
              onChange={(event) => {
                setBundle(event.target.value);
                setReview(false);
              }}
              className="mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
            >
              {sampleBundles.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => setReview(true)}
            className="min-h-11 w-full rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
          >
            Preview selection
          </button>

          <p className="text-xs leading-5 text-[var(--muted)]">
            Preview only. This demo does not create orders, collect payment
            details, contact a provider, or deliver any game credits.
          </p>
        </div>

        <div className="border-t border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 md:border-l md:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Example order flow
          </p>

          <div className="mt-5 space-y-0">
            {orderStages.map((stage, index) => {
              const active = review ? index <= 1 : index === 0;

              return (
                <div key={stage} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                        active
                          ? "border-[var(--accent)] text-[var(--accent)]"
                          : "border-[var(--line)] text-[var(--muted)]"
                      }`}
                    >
                      {index + 1}
                    </span>

                    {index < orderStages.length - 1 && (
                      <span className="my-1 min-h-6 w-px bg-[var(--line)]" />
                    )}
                  </div>

                  <div className="pb-5">
                    <p
                      className={`text-sm font-medium ${
                        active
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {stage}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                      {index === 0
                        ? "Choose a sample game and bundle."
                        : index === 1
                          ? "Review the selected example."
                          : "Not connected in this demonstration."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {review && (
            <div
              role="status"
              className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                Sample selection
              </p>

              <p className="mt-3 text-sm font-medium">{game}</p>

              <p className="mt-1 text-sm text-[var(--muted)]">{bundle}</p>

              <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
                Preview complete. No real order was created.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ProjectExperiences({
  slug
}: ProjectExperiencesProps) {
  if (slug === "meayu") {
    return <MeayuExperience />;
  }

  if (slug === "clutchtopup") {
    return <ClutchTopUpExperience />;
  }

  return null;
}
