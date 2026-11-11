import type { ProjectRecord } from "./types";

export const projectRecords: ProjectRecord[] = [
  {
    slug: "agore",
    name: "Agoré",
    typeLabel: "Social platform",

    description:
      "An 18+ social platform with authenticated profiles, connections, public conversations, and private communication. Access relies on self-attested age rather than independent age verification.",

    shortDescription:
      "An 18+ social platform for profiles, connections, public conversations, and private communication.",

    category: "Products & Platforms",
    lifecycle: "Beta",
    availability: "Public",
    publicationLevel: "Featured",

    statusLabel: "Beta · Public",

    websiteUrl: "https://agore.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/Agore",

    capabilities: [
      "Authenticated user profiles",
      "Connections between users",
      "Public conversations",
      "Private communication"
    ],

    limitations: [
      "18+ access relies on self-attested age; age is not independently verified.",
      "Do not describe the platform as an anonymous feed or claim public post previews.",
      "The privacy policy was still a draft at the audit checkpoint and must not be presented as approved."
    ],

    evidence: [
      {
        label: "Live platform",
        url: "https://agore.vercel.app/",
        kind: "live-product"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/Agore",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: false
  },
  {
    slug: "ai-arena",
    name: "AI Arena",
    typeLabel: "AI product",

    description:
      "A multi-model AI workspace whose public BYOK experience lets users submit prompts to supported providers using their own API keys, compare responses, and maintain independent model histories. Hosted Arena remains a separate development track.",

    shortDescription:
      "A multi-model AI workspace for comparing responses using your own provider API keys.",

    category: "Products & Platforms",
    lifecycle: "Beta",
    availability: "Public",
    publicationLevel: "Featured",

    statusLabel: "Beta · Public BYOK",

    websiteUrl: "https://ai-arena-red.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/ai-arena",

    technologies: [
      "Neon",
      "Better Auth"
    ],

    capabilities: [
      "Bring-your-own-key provider access",
      "Parallel response comparison",
      "Independent model histories",
      "Partial success and error handling"
    ],

    limitations: [
      "The public experience is the BYOK experience; users supply their own provider API keys.",
      "Provider API keys are stored in browser localStorage.",
      "Conversation history is stored in sessionStorage.",
      "Hosted Arena remains in development and is not part of the current public offering."
    ],

    evidence: [
      {
        label: "Public BYOK experience",
        url: "https://ai-arena-red.vercel.app/",
        kind: "live-product"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/ai-arena",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: true
  },
  {
    slug: "trading-tools",
    name: "Trading Tools",
    typeLabel: "Trading decision-support tools",

    description:
      "A trading decision-support workspace combining practical calculations, risk planning, market information, and review tools. It is designed to help users assess decisions rather than execute trades or provide trading signals.",

    shortDescription:
      "A collection of trading calculations, risk-planning tools, and market information.",

    category: "Tools & Utilities",
    lifecycle: "Beta",
    availability: "Public",
    publicationLevel: "Featured",

    statusLabel: "Beta · Public",

    websiteUrl: "https://trading-tools-xi.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/trading-tools",

    technologies: [
      "Supabase",
      "PostgreSQL",
      "Vercel Functions",
      "Twelve Data",
      "NOWPayments"
    ],

    capabilities: [
      "Position Size Calculator",
      "Risk/Reward Calculator",
      "Profit and Loss Calculator",
      "Leverage Calculator",
      "Currency Converter",
      "Coin Viewer",
      "Market Terminal"
    ],

    limitations: [
      "The product does not execute trades.",
      "The product does not provide trading signals.",
      "Market information depends on external data availability.",
      "An observed market-data edge case can display missing volume as zero; displayed data should be checked against its provider."
    ],

    evidence: [
      {
        label: "Live tools",
        url: "https://trading-tools-xi.vercel.app/",
        kind: "live-product"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/trading-tools",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: true
  },
  {
    slug: "meayu",
    name: "Meayu",
    typeLabel: "Personal digital experience platform",

    description:
      "A developing product for creating tailored digital experiences from personal context and selected material. Its current foundation includes public marketing pages, passwordless authentication, a protected area, and basic people-management functionality.",

    shortDescription:
      "A developing platform for creating tailored digital experiences from personal context.",

    category: "Products & Platforms",
    lifecycle: "In development",
    availability: "Public",
    publicationLevel: "Catalogue",

    statusLabel: "In development · Public marketing site",

    websiteUrl: "https://meayu.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/Meayu",

    technologies: [
      "Supabase"
    ],

    capabilities: [
      "Public marketing pages",
      "Passwordless authentication",
      "Protected application area",
      "People listing",
      "Basic people creation and detail views"
    ],

    limitations: [
      "The current implementation is a foundation rather than a complete product.",
      "Memory and messaging workflows are not complete.",
      "Photo uploads and the full composition workflow are not complete.",
      "Approval and sharing workflows are not complete."
    ],

    evidence: [
      {
        label: "Public website",
        url: "https://meayu.vercel.app/",
        kind: "live-product"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/Meayu",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: false
  },
  {
    slug: "craftmish",
    name: "Craftmish",
    typeLabel: "Learning and knowledge system",

    description:
      "A developing knowledge and learning system connecting technologies, concepts, skills, learning resources, roadmaps, challenges, and projects. Its current public implementation includes learning content and a CSS practice activity.",

    shortDescription:
      "A developing knowledge and learning system for people who build.",

    category: "Learning & Knowledge",
    lifecycle: "In development",
    availability: "Public",
    publicationLevel: "Catalogue",

    statusLabel: "In development · Public learning content",

    websiteUrl: "https://craftmish.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/craftmish",

    technologies: [
      "Neon",
      "Drizzle ORM"
    ],

    capabilities: [
      "Technical content",
      "Concept and skill references",
      "Learning-path content",
      "CSS practice activity"
    ],

    limitations: [
      "The current public implementation is not a complete learning management system.",
      "Multiple planned routes remain unavailable or incomplete.",
      "Learner authentication is not implemented.",
      "Persistent learner progress is not implemented.",
      "Do not claim certifications or saved learning progress."
    ],

    evidence: [
      {
        label: "Public website",
        url: "https://craftmish.vercel.app/",
        kind: "live-product"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/craftmish",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: false
  },
  {
    slug: "testing-ground",
    name: "Testing Ground",
    typeLabel: "Research and experimentation system",

    description:
      "An evolving environment for registering experiments, connecting test workflows, and preserving observations. Its current foundation includes an experiment registry, Inalpha integration, GitHub Actions workflows, and synthetic tests against disposable TimescaleDB infrastructure.",

    shortDescription:
      "An access-restricted environment for controlled technical experiments and testing workflows.",

    category: "Research & Engineering",
    lifecycle: "In development",
    availability: "Preview",
    publicationLevel: "Catalogue",

    statusLabel: "In development · Access-restricted preview",

    websiteUrl: "https://testing-ground-gilt.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/testing-ground",

    technologies: [
      "GitHub Actions",
      "TimescaleDB",
      "Inalpha integration"
    ],

    capabilities: [
      "Experiment registry",
      "Test workflow integration",
      "GitHub Actions workflows",
      "Synthetic tests against disposable TimescaleDB infrastructure"
    ],

    limitations: [
      "Access is restricted.",
      "The current implementation is not a general-purpose benchmarking platform.",
      "Do not claim a completed benchmark engine or public SDK.",
      "Do not claim live LLM or production-market performance results."
    ],

    evidence: [
      {
        label: "Restricted preview",
        url: "https://testing-ground-gilt.vercel.app/",
        kind: "live-product",
        note: "Access is restricted."
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/testing-ground",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: false
  },
  {
    slug: "auren",
    name: "AUREN",
    typeLabel: "Storefront experiment",

    description:
      "A fictional fashion and lifestyle storefront used to explore product presentation, catalogue discovery, and ecommerce interface design. The public demo contains illustrative products and enquiry links rather than a functioning commerce backend.",

    shortDescription:
      "A fictional storefront experiment exploring product presentation and ecommerce interfaces.",

    category: "Experiments",
    lifecycle: "Experiment",
    availability: "Public",
    publicationLevel: "Catalogue",

    statusLabel: "Experiment · Public demo",

    websiteUrl: "https://auren-store-delta.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/auren-store",

    capabilities: [
      "Illustrative storefront",
      "22 sample products",
      "Four product categories",
      "Product presentation and catalogue browsing",
      "WhatsApp enquiry links"
    ],

    limitations: [
      "Products and catalogue information are illustrative.",
      "There is no functional shopping cart.",
      "There is no checkout or payment processing.",
      "There is no real order management, inventory, or fulfilment system.",
      "WhatsApp links are enquiry links, not order-fulfilment functionality."
    ],

    evidence: [
      {
        label: "Public demo",
        url: "https://auren-store-delta.vercel.app/",
        kind: "live-product"
      },
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/auren-store",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: true,
    credit: "An experiment by TGG HUB."
  },
  {
    slug: "fake-os",
    name: "Fake OS",
    typeLabel: "Browser interface experiment",

    description:
      "A browser-based desktop simulation exploring window management and familiar desktop utilities. It includes mock versions of Notes, Calculator, Files, and Settings rather than operating-system-level functionality.",

    shortDescription:
      "A browser-based desktop simulation exploring window management and mock utilities.",

    category: "Experiments",
    lifecycle: "Experiment",
    availability: "Unavailable",
    publicationLevel: "Catalogue",

    statusLabel: "Experiment · Deployment unverified",

    repositoryUrl: "https://github.com/JJTGG/fake-os",

    capabilities: [
      "Browser-based desktop interface",
      "Window management",
      "Mock Notes application",
      "Mock Calculator application",
      "Mock Files application",
      "Settings interface"
    ],

    limitations: [
      "The Files application uses a mock file tree and does not access the real filesystem.",
      "This is a browser interface experiment, not an operating system.",
      "The public deployment could not be verified at the audit checkpoint."
    ],

    evidence: [
      {
        label: "Source repository",
        url: "https://github.com/JJTGG/fake-os",
        kind: "source-repository"
      }
    ],

    tggHubEcosystem: false
  }
];