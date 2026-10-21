import { projects } from "./projects";

export type CommandTheme = "light" | "dark" | "system";

export type CommandAction =
  | {
      type: "navigate";
      href: string;
      label: string;
    }
  | {
      type: "set-theme";
      theme: CommandTheme;
    }
  | {
      type: "help";
    }
  | {
      type: "unknown";
      input: string;
    };

export type CommandHandlers = {
  navigate: (href: string) => void;
  setTheme: (theme: CommandTheme) => void;
};

export type CommandDispatchResult =
  | {
      status: "success";
      message: string;
      action: Extract<CommandAction, { type: "navigate" | "set-theme" }>;
    }
  | {
      status: "help";
      message: string;
      examples: typeof commandExamples;
    }
  | {
      status: "unknown";
      message: string;
    }
  | {
      status: "error";
      message: string;
    };

type NavigationTarget = {
  label: string;
  href: string;
  aliases: string[];
};

const navigationTargets: NavigationTarget[] = [
  {
    label: "Home",
    href: "/",
    aliases: ["home", "homepage", "main page", "/"]
  },
  {
    label: "Projects",
    href: "/work",
    aliases: [
      "projects",
      "project",
      "work",
      "my work",
      "projects and systems",
      "project catalogue",
      "project catalog",
      "/work"
    ]
  },
  {
    label: "Experiments",
    href: "/experiments",
    aliases: ["experiments", "experiment", "explorations", "/experiments"]
  },
  {
    label: "Collaborations",
    href: "/collaborations",
    aliases: [
      "collaborations",
      "collaboration",
      "collaborative work",
      "client work",
      "/collaborations"
    ]
  },
  {
    label: "About",
    href: "/about",
    aliases: ["about", "about me", "who am i", "/about"]
  },
  {
    label: "Contact",
    href: "/contact",
    aliases: [
      "contact",
      "contact me",
      "get in touch",
      "message",
      "/contact"
    ]
  },
  {
    label: "TGG HUB",
    href: "/tgg-hub",
    aliases: ["tgg hub", "tgg-hub", "hub", "ecosystem", "/tgg-hub"]
  }
];

const projectAliases: Record<string, string[]> = {
  agore: ["agore"],
  "ai-arena": ["ai arena", "ai-arena"],
  "trading-tools": ["trading tools", "trading-tools"],
  clutchtopup: ["clutch top up", "clutch top-up", "clutchtopup"],
  meayu: ["meayu"],
  craftmish: ["craftmish"],
  "testing-ground": ["testing ground", "testing-ground"],
  "cv-generator": ["cv generator", "cv-generator"],
  auren: ["auren"],
  "fake-os": ["fake os", "fake-os"]
};

export const commandExamples = [
  {
    command: "open projects",
    description: "Browse products and systems."
  },
  {
    command: "open project Agoré",
    description: "Open a specific project record."
  },
  {
    command: "open experiments",
    description: "Browse the experiments collection."
  },
  {
    command: "open TGG HUB",
    description: "Open the wider ecosystem page."
  },
  {
    command: "set theme dark",
    description: "Change the portfolio theme."
  },
  {
    command: "help",
    description: "Show command guidance."
  }
] as const;

function normalizeCommand(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9/\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findNavigationTarget(
  candidate: string
): NavigationTarget | undefined {
  return navigationTargets.find((target) =>
    target.aliases.some(
      (alias) => normalizeCommand(alias) === candidate
    )
  );
}

function findProject(
  candidate: string
): (typeof projects)[number] | undefined {
  const normalizedCandidate = candidate
    .replace(/^(?:the\s+)?project\s+/, "")
    .trim();

  return projects.find((project) => {
    const aliases = [
      project.name,
      project.slug,
      ...(projectAliases[project.slug] ?? [])
    ];

    return aliases.some(
      (alias) => normalizeCommand(alias) === normalizedCandidate
    );
  });
}

function resolveThemeCommand(
  command: string
): CommandAction | undefined {
  const match =
    command.match(
      /^(?:set|change|switch)\s+(?:the\s+)?theme(?:\s+to)?\s+(light|dark|system)$/
    ) ??
    command.match(/^theme(?:\s+to)?\s+(light|dark|system)$/);

  if (!match) return undefined;

  return {
    type: "set-theme",
    theme: match[1] as CommandTheme
  };
}

export function resolveCommand(input: string): CommandAction {
  const command = normalizeCommand(input);

  if (
    command === "help" ||
    command === "commands" ||
    command === "show commands" ||
    command === "what can you do"
  ) {
    return { type: "help" };
  }

  const themeAction = resolveThemeCommand(command);

  if (themeAction) return themeAction;

  const directNavigation = findNavigationTarget(command);

  if (directNavigation) {
    return {
      type: "navigate",
      href: directNavigation.href,
      label: directNavigation.label
    };
  }

  const directProject = findProject(command);

  if (directProject) {
    return {
      type: "navigate",
      href: `/work/${directProject.slug}`,
      label: directProject.name
    };
  }

  const navigationCommand = command.match(
    /^(?:open|go to|navigate to|visit|show|show me)\s+(.+)$/
  );

  if (navigationCommand) {
    const target = navigationCommand[1].replace(/^the\s+/, "").trim();
    const navigation = findNavigationTarget(target);

    if (navigation) {
      return {
        type: "navigate",
        href: navigation.href,
        label: navigation.label
      };
    }

    const project = findProject(target);

    if (project) {
      return {
        type: "navigate",
        href: `/work/${project.slug}`,
        label: project.name
      };
    }
  }

  return {
    type: "unknown",
    input: command
  };
}

export function dispatchCommand(
  input: string,
  handlers: CommandHandlers
): CommandDispatchResult {
  const action = resolveCommand(input);

  try {
    switch (action.type) {
      case "navigate":
        handlers.navigate(action.href);

        return {
          status: "success",
          message: `Opening ${action.label}.`,
          action
        };

      case "set-theme":
        handlers.setTheme(action.theme);

        return {
          status: "success",
          message: `Theme set to ${action.theme}.`,
          action
        };

      case "help":
        return {
          status: "help",
          message:
            "Commands use a defined set of navigation, project, and theme actions.",
          examples: commandExamples
        };

      case "unknown":
        return {
          status: "unknown",
          message:
            "I don't recognize that command. Try a listed example or enter help."
        };
    }
  } catch {
    return {
      status: "error",
      message:
        "The command was recognized, but its action could not be completed."
    };
  }
}