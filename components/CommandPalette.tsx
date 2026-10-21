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

type RecognitionAlternative = {
  transcript: string;
};

type RecognitionResult = ArrayLike<RecognitionAlternative> & {
  isFinal: boolean;
};

type RecognitionResultEvent = {
  resultIndex: number;
  results: ArrayLike<RecognitionResult>;
};

type RecognitionErrorEvent = {
  error: string;
};

type BrowserSpeechRecognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onresult: ((event: RecognitionResultEvent) => void) | null;
  onerror: ((event: RecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type RecognitionConstructor = new () => BrowserSpeechRecognition;

type WindowWithSpeechRecognition = Window & {
  SpeechRecognition?: RecognitionConstructor;
  webkitSpeechRecognition?: RecognitionConstructor;
};

function getRecognitionConstructor():
  | RecognitionConstructor
  | undefined {
  const speechWindow = window as WindowWithSpeechRecognition;

  return (
    speechWindow.SpeechRecognition ??
    speechWindow.webkitSpeechRecognition
  );
}

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

function getRecognitionErrorMessage(error: string): string {
  switch (error) {
    case "not-allowed":
    case "service-not-allowed":
      return "Microphone access or speech recognition was denied. Check your browser permissions and try again.";

    case "no-speech":
      return "No speech was detected. Try again or type the command.";

    case "audio-capture":
      return "No usable microphone was found. Check your device or type the command.";

    case "network":
      return "The browser's speech-recognition service could not be reached. Try again or type the command.";

    case "language-not-supported":
      return "The browser cannot recognize the configured language. Type the command instead.";

    case "aborted":
      return "Voice capture was cancelled.";

    default:
      return "Voice recognition encountered a problem. You can retry or type the command.";
  }
}

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<CommandDispatchResult | null>(
    null
  );

  const [recognitionAvailable, setRecognitionAvailable] = useState<
    boolean | null
  >(null);
  const [speechOutputAvailable, setSpeechOutputAvailable] =
    useState(false);
  const [voiceConsent, setVoiceConsent] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechStatus, setSpeechStatus] = useState("");
  const [speakResponses, setSpeakResponses] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const recognitionRef = useRef<BrowserSpeechRecognition | null>(null);
  const speechErrorRef = useRef(false);
  const wasOpenRef = useRef(false);

  const closePalette = useCallback(() => {
    const recognition = recognitionRef.current;

    if (recognition) {
      try {
        recognition.stop();
      } catch {
        recognitionRef.current = null;
        setIsListening(false);
      }
    }

    setOpen(false);
  }, []);

  function stopListening() {
    const recognition = recognitionRef.current;

    if (!recognition) {
      setIsListening(false);
      return;
    }

    try {
      recognition.stop();
    } catch {
      recognitionRef.current = null;
      setIsListening(false);
      setSpeechStatus(
        "Listening stopped. Review the transcript before running it."
      );
    }
  }

  function stopSpokenResponse() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
  }

  function speakMessage(message: string) {
    if (!speakResponses) return;

    if (
      !("speechSynthesis" in window) ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      setSpeechStatus(
        "Spoken feedback is unavailable in this browser. The text response is still available."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    utterance.rate = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  function startListening() {
    if (!voiceConsent) {
      setSpeechStatus(
        "Review and accept the speech-processing notice before starting voice input."
      );
      return;
    }

    const Recognition = getRecognitionConstructor();

    if (!Recognition) {
      setRecognitionAvailable(false);
      setSpeechStatus(
        "Voice recognition is not supported here. You can still type commands normally."
      );
      return;
    }

    if (recognitionRef.current) {
      setSpeechStatus(
        "A voice-recognition session is already active."
      );
      return;
    }

    speechErrorRef.current = false;
    setResult(null);
    setSpeechStatus("Starting voice recognition…");

    try {
      const recognition = new Recognition();

      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        speechErrorRef.current = false;
        setIsListening(true);
        setSpeechStatus(
          "Listening. Speak a command, then review the transcript."
        );
      };

      recognition.onresult = (event) => {
        const transcriptParts: string[] = [];
        let hasInterimText = false;

        for (let index = 0; index < event.results.length; index += 1) {
          const currentResult = event.results[index];
          const alternative = currentResult?.[0];

          if (!alternative) continue;

          const transcript = alternative.transcript.trim();

          if (transcript) {
            transcriptParts.push(transcript);
          }

          if (!currentResult.isFinal) {
            hasInterimText = true;
          }
        }

        const transcript = transcriptParts.join(" ").trim();

        if (transcript) {
          setInput(transcript);
          setResult(null);
          setSpeechStatus(
            hasInterimText
              ? "Transcribing live. The text remains editable."
              : "Transcript captured. Review or edit it before running the command."
          );
        }
      };

      recognition.onerror = (event) => {
        speechErrorRef.current = true;
        setIsListening(false);
        setSpeechStatus(getRecognitionErrorMessage(event.error));
      };

      recognition.onend = () => {
        if (recognitionRef.current === recognition) {
          recognitionRef.current = null;
        }

        setIsListening(false);

        if (!speechErrorRef.current) {
          setSpeechStatus((current) =>
            current.startsWith("Transcript captured") ||
            current.startsWith("Transcribing live")
              ? current
              : "Listening stopped. Review the transcript before running it."
          );
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      recognitionRef.current = null;
      setIsListening(false);
      setSpeechStatus(
        "The browser could not start speech recognition. Check microphone access or type the command."
      );
    }
  }

  function runCommand(command: string) {
    if (isListening) {
      stopListening();
      setSpeechStatus(
        "Voice capture stopped. Review the transcript, then run the command again."
      );
      return;
    }

    const dispatchResult = dispatchCommand(command, {
      navigate: (href) => router.push(href),
      setTheme: applyTheme
    });

    setResult(dispatchResult);
    speakMessage(dispatchResult.message);

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

  useEffect(() => {
    setRecognitionAvailable(Boolean(getRecognitionConstructor()));

    setSpeechOutputAvailable(
      "speechSynthesis" in window &&
        typeof SpeechSynthesisUtterance !== "undefined"
    );
  }, []);

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        if (open) {
          closePalette();
        } else {
          setResult(null);
          setOpen(true);
        }
      }

      if (event.key === "Escape" && open) {
        closePalette();
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [open, closePalette]);

  useEffect(() => {
    closePalette();
  }, [pathname, closePalette]);

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
    return () => {
      const recognition = recognitionRef.current;

      if (recognition) {
        recognition.onend = null;
        recognition.onresult = null;
        recognition.onerror = null;

        try {
          recognition.abort();
        } catch {
          // The recognition session may already have ended.
        }
      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          if (open) {
            closePalette();
          } else {
            setResult(null);
            setOpen(true);
          }
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
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/45 px-3 py-[6vh] backdrop-blur-[2px] sm:px-6 sm:py-[9vh]"
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
                  Enter a supported command by typing or voice. Actions use
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

            <section
              aria-labelledby="voice-input-heading"
              className="border-t border-[var(--line)] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Voice / Input
                  </p>

                  <h3
                    id="voice-input-heading"
                    className="mt-2 text-lg font-semibold tracking-[-0.035em]"
                  >
                    Speak a command.
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-7 text-[var(--muted)]">
                    Listening is started manually. The transcript appears
                    in the editable command field; it is never executed
                    automatically.
                  </p>
                </div>

                <span
                  className={`inline-flex w-fit items-center gap-2 border px-3 py-2 text-xs ${
                    isListening
                      ? "border-[var(--accent)] text-[var(--accent)]"
                      : "border-[var(--line)] text-[var(--muted)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${
                      isListening
                        ? "motion-pulse bg-[var(--accent)]"
                        : "bg-[var(--line)]"
                    }`}
                  />
                  {isListening ? "Listening" : "Microphone inactive"}
                </span>
              </div>

              <div className="mt-5 border border-[var(--line)] p-4">
                <label className="flex items-start gap-3 text-sm leading-6">
                  <input
                    type="checkbox"
                    checked={voiceConsent}
                    onChange={(event) => {
                      const checked = event.target.checked;

                      setVoiceConsent(checked);
                      setSpeechStatus(
                        checked
                          ? "Voice input is enabled for manual use. Start listening when ready."
                          : "Voice input is off until you accept the speech-processing notice."
                      );

                      if (!checked && isListening) {
                        stopListening();
                      }
                    }}
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
                  />

                  <span>
                    <span className="font-medium text-[var(--foreground)]">
                      I understand speech may be processed by my browser&apos;s
                      recognition provider.
                    </span>

                    <span className="mt-1 block text-xs leading-6 text-[var(--muted)]">
                      The browser implementation may send audio to a remote
                      service. This site does not upload microphone audio to
                      its own backend. Voice input remains optional.
                    </span>
                  </span>
                </label>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={
                    recognitionAvailable !== true ||
                    (!voiceConsent && !isListening)
                  }
                  onClick={() => {
                    if (isListening) {
                      stopListening();
                    } else {
                      startListening();
                    }
                  }}
                  className={`inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-45 ${
                    isListening
                      ? "border-[var(--accent)] text-[var(--accent)]"
                      : "border-[var(--line)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  <span aria-hidden="true">
                    {isListening ? "■" : "●"}
                  </span>
                  {isListening ? "Stop listening" : "Start voice input"}
                </button>

                {isListening && (
                  <button
                    type="button"
                    onClick={() => {
                      stopListening();
                      setSpeechStatus(
                        "Listening stopped. Review the transcript before running it."
                      );
                    }}
                    className="inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                  >
                    Finish capture
                  </button>
                )}
              </div>

              <p
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="mt-4 text-sm leading-7 text-[var(--muted)]"
              >
                {recognitionAvailable === null
                  ? "Checking browser voice support…"
                  : recognitionAvailable
                    ? speechStatus ||
                      "Voice input is ready when you accept the notice and start it."
                    : "This browser does not expose a supported speech-recognition API. Typing still works normally."}
              </p>

              {recognitionAvailable === false && (
                <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                  For the best experience, use a supported browser with
                  microphone permission enabled.
                </p>
              )}
            </section>

            <section
              aria-labelledby="voice-output-heading"
              className="border-t border-[var(--line)] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Voice / Output
                  </p>

                  <h3
                    id="voice-output-heading"
                    className="mt-2 text-lg font-semibold tracking-[-0.035em]"
                  >
                    Hear command responses.
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-7 text-[var(--muted)]">
                    Spoken feedback is optional. When enabled, the browser
                    reads the command result aloud.
                  </p>
                </div>

                {isSpeaking && (
                  <button
                    type="button"
                    onClick={stopSpokenResponse}
                    className="inline-flex min-h-10 w-fit items-center justify-center border border-[var(--line)] px-3 py-2 text-xs font-medium hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Stop speech
                  </button>
                )}
              </div>

              <label className="mt-4 flex items-start gap-3 text-sm leading-6">
                <input
                  type="checkbox"
                  checked={speakResponses}
                  disabled={!speechOutputAvailable}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    setSpeakResponses(checked);

                    if (!checked) {
                      stopSpokenResponse();
                    }
                  }}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
                />

                <span>
                  <span className="font-medium">
                    Speak command responses
                  </span>

                  <span className="mt-1 block text-xs leading-6 text-[var(--muted)]">
                    {speechOutputAvailable
                      ? "Uses the browser's speech-synthesis feature. No spoken response is played unless you enable this setting."
                      : "Speech synthesis is unavailable in this browser."}
                  </span>
                </span>
              </label>
            </section>

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

            <section className="border-t border-[var(--line)] p-5 sm:p-6">
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
                Typed commands, recognized speech, and the future interaction
                laboratory all use the same deterministic command engine.
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
}