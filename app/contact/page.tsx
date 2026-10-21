"use client";

import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

type ContactIntent = "project" | "question" | "opportunity" | "hello";
type ContactChannel = "whatsapp" | "email" | "telegram";

type CopyStatus = {
  type: "success" | "error";
  message: string;
  manualValue?: string;
} | null;

const intents: {
  id: ContactIntent;
  label: string;
  description: string;
  message: string;
  subject: string;
}[] = [
  {
    id: "project",
    label: "A project",
    description: "Discuss something you have in mind or want to build.",
    message: "Hi! I'd like to discuss a project with you.",
    subject: "Project enquiry"
  },
  {
    id: "question",
    label: "A question",
    description: "Ask me something about my work or projects.",
    message: "Hi! I have a question I'd like to ask you.",
    subject: "A question"
  },
  {
    id: "opportunity",
    label: "Professional opportunity",
    description: "Share an opportunity, collaboration, or proposal.",
    message: "Hi! I'd like to discuss a professional opportunity with you.",
    subject: "Professional opportunity"
  },
  {
    id: "hello",
    label: "Just saying hello",
    description: "Start a conversation without needing a formal reason.",
    message: "Hey! Just stopping by to say hello.",
    subject: "Hello"
  }
];

const channels: {
  id: ContactChannel;
  label: string;
  description: string;
}[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Continue in a WhatsApp conversation."
  },
  {
    id: "email",
    label: "Email",
    description: "Prepare an email you can review and send."
  },
  {
    id: "telegram",
    label: "Telegram",
    description: "Open my Telegram profile and continue there."
  }
];

const contactDetails: Record<ContactChannel, string> = {
  whatsapp: "2348154841438",
  email: "kidjayjaytgg@gmail.com",
  telegram: "@JAYVORTEX_WEB3"
};

const elsewhereLinks = [
  {
    label: "Contra",
    href: "https://contra.com/jayjaytgg_tiuk6n8t?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=jayjaytgg_tiuk6n8t",
    description:
      "Explore my profile for professional opportunities and project enquiries."
  },
  {
    label: "X",
    href: "https://x.com/JAYJAYTGG",
    description: "Follow what I'm building and join the public conversation."
  },
  {
    label: "GitHub",
    href: "https://github.com/JJTGG",
    description: "Explore the code, projects, and experiments behind the work."
  }
];

export default function ContactPage() {
  const [intent, setIntent] = useState<ContactIntent>("project");
  const [channel, setChannel] = useState<ContactChannel>("whatsapp");
  const [draft, setDraft] = useState(
    "Hi! I'd like to discuss a project with you."
  );
  const [copyStatus, setCopyStatus] = useState<CopyStatus>(null);

  const selectedIntent = intents.find((item) => item.id === intent)!;
  const selectedChannel = channels.find((item) => item.id === channel)!;

  const destinationHref =
    channel === "whatsapp"
      ? `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(draft)}`
      : channel === "email"
        ? `mailto:${contactDetails.email}?subject=${encodeURIComponent(selectedIntent.subject)}&body=${encodeURIComponent(draft)}`
        : "https://t.me/JAYVORTEX_WEB3";

  const actionLabel =
    channel === "whatsapp"
      ? "Continue to WhatsApp"
      : channel === "email"
        ? "Prepare email"
        : "Open Telegram";

  const channelInstructions =
    channel === "whatsapp"
      ? "WhatsApp will open with your message prefilled where supported. Review it in WhatsApp and send it when you're ready."
      : channel === "email"
        ? "Your default email app will open with a subject and message body. Review the draft and send it from your email app."
        : "Telegram will open my profile. Direct-message prefill is not guaranteed, so copy your message here and paste it into the conversation.";

  const detailCopyLabel =
    channel === "whatsapp"
      ? "Copy WhatsApp number"
      : channel === "email"
        ? "Copy email address"
        : "Copy Telegram handle";

  function selectIntent(nextIntent: ContactIntent) {
    const next = intents.find((item) => item.id === nextIntent);

    if (!next) return;

    setIntent(nextIntent);
    setDraft(next.message);
    setCopyStatus(null);
  }

  function selectChannel(nextChannel: ContactChannel) {
    setChannel(nextChannel);
    setCopyStatus(null);
  }

  async function copyValue(
    value: string,
    successMessage: string,
    manualValue?: string
  ) {
    try {
      await navigator.clipboard.writeText(value);

      setCopyStatus({
        type: "success",
        message: successMessage
      });
    } catch {
      setCopyStatus({
        type: "error",
        message: manualValue
          ? "Clipboard access failed. Select the detail below and copy it manually."
          : "Clipboard access failed. Select your message above and copy it manually.",
        manualValue
      });
    }
  }

  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 md:py-28 lg:py-32">
          <ScrollReveal>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] md:items-end md:gap-16">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  <span
                    aria-hidden="true"
                    className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                  />
                  Contact / Start a conversation
                </p>

                <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.93] tracking-[-0.075em]">
                  What brings
                  <span className="block text-[var(--accent)]">
                    you here?
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  A project, a question, a professional opportunity, or
                  simply a hello. Choose a starting point, prepare your
                  message, and take the conversation to a channel that
                  works for you.
                </p>
              </div>

              <aside className="border-y border-[var(--line)] py-6 md:px-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  How this works
                </p>

                <ol className="mt-5 space-y-4">
                  {[
                    "Choose what you want to discuss.",
                    "Select your preferred channel.",
                    "Review your message before sending."
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="pt-0.5 font-mono text-xs text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-6">{step}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-6 border-t border-[var(--line)] pt-4 text-xs leading-6 text-[var(--muted)]">
                  Nothing is sent by this page itself. You review and send
                  through the selected external app.
                </p>
              </aside>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="contact-intent-heading">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-[var(--page-gutter)] py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-24">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / Your reason
              </p>

              <h2
                id="contact-intent-heading"
                className="mt-4 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl"
              >
                What would you like to talk about?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                Pick the closest option. It gives us a starting point, not
                a script you have to follow.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {intents.map((item, index) => {
                  const active = intent === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectIntent(item.id)}
                      className={`group w-full border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:p-5 ${
                        active
                          ? "border-[var(--accent)] bg-[var(--surface)]"
                          : "border-[var(--line)] hover:border-[var(--accent)]"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs ${
                              active
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="font-semibold tracking-[-0.02em]">
                            {item.label}
                          </span>
                        </span>

                        <span
                          aria-hidden="true"
                          className={`text-lg transition-transform ${
                            active
                              ? "text-[var(--accent)]"
                              : "text-[var(--muted)] group-hover:translate-x-1"
                          }`}
                        >
                          {active ? "✓" : "↗"}
                        </span>
                      </span>

                      <span className="mt-3 block pl-7 text-sm leading-6 text-[var(--muted)]">
                        {item.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="min-w-0 border border-[var(--line)]">
              <div className="border-b border-[var(--line)] p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  02 / Choose a channel
                </p>

                <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                  Where should we talk?
                </h2>

                <div
                  aria-label="Contact channel"
                  className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3"
                >
                  {channels.map((item) => {
                    const active = channel === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => selectChannel(item.id)}
                        className={`flex min-h-12 items-center justify-between gap-3 border px-4 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                          active
                            ? "border-[var(--accent)] text-[var(--accent)]"
                            : "border-[var(--line)] hover:border-[var(--accent)]"
                        }`}
                      >
                        {item.label}
                        <span aria-hidden="true">
                          {active ? "✓" : "↗"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {selectedChannel.description}
                </p>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    03 / Your opening message
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setDraft(selectedIntent.message);
                      setCopyStatus(null);
                    }}
                    className="min-h-10 text-xs font-medium text-[var(--muted)] underline underline-offset-4 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    Restore suggestion
                  </button>
                </div>

                <label
                  htmlFor="contact-message"
                  className="mt-5 block text-sm font-medium"
                >
                  Edit the message before continuing
                </label>

                <textarea
                  id="contact-message"
                  value={draft}
                  onChange={(event) => {
                    setDraft(event.target.value);
                    setCopyStatus(null);
                  }}
                  rows={5}
                  maxLength={4000}
                  placeholder="Write a message to get the conversation started..."
                  className="mt-3 block w-full resize-y border border-[var(--line)] bg-transparent p-4 text-sm leading-7 outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />

                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
                  <span>Your message stays under your control.</span>
                  <span className="shrink-0 tabular-nums">
                    {draft.length}/4000
                  </span>
                </div>

                <a
                  href={destinationHref}
                  target={channel === "email" ? undefined : "_blank"}
                  rel={
                    channel === "email" ? undefined : "noopener noreferrer"
                  }
                  className="motion-lift mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--accent)] px-5 py-4 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {actionLabel}
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {channelInstructions}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--line)] pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      copyValue(
                        draft,
                        "Message copied. Paste it into your conversation when you're ready."
                      )
                    }
                    className="min-h-10 text-sm font-medium underline underline-offset-4 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    Copy prepared message
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      copyValue(
                        contactDetails[channel],
                        `${selectedChannel.label} detail copied.`,
                        contactDetails[channel]
                      )
                    }
                    className="min-h-10 text-sm font-medium text-[var(--muted)] underline underline-offset-4 transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    {detailCopyLabel}
                  </button>
                </div>

                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm leading-6 ${
                    copyStatus?.type === "error"
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {copyStatus?.message ?? ""}
                </p>

                {copyStatus?.type === "error" &&
                  copyStatus.manualValue && (
                    <p className="mt-2 select-all break-all border border-[var(--line)] p-3 font-mono text-sm">
                      {copyStatus.manualValue}
                    </p>
                  )}
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-[var(--muted)]">
              This page prepares your message; it does not send messages or
              report whether an external app delivered them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="elsewhere-heading"
        className="border-t border-[var(--line)]"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                04 / Elsewhere
              </p>

              <h2
                id="elsewhere-heading"
                className="mt-4 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl"
              >
                Prefer another starting point?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
                Find my professional profile or explore the work and code
                behind my projects.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {elsewhereLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors sm:py-7"
                >
                  <div className="min-w-0">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 font-semibold transition-colors group-hover:text-[var(--accent)]">
                      {link.label}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      {link.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <ScrollReveal>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              You don&apos;t need a perfect pitch or a fully formed plan.
              Start with what you have in mind, and we can take it from there.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}