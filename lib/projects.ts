export type Project = {
  name: string;
  type: string;
  description: string;
  shortDescription: string;
  status: string;
  live?: string;
  source: string;
  category: "work" | "experiment";
  featuredInHub: boolean;
};

export const projects: Project[] = [
  {
    name: "AI Arena",
    type: "AI / Product",
    description:
      "I was already using multiple AI models at the same time. The idea of putting them together in one workspace came to me, so I started building it.",
    shortDescription:
      "A workspace for running and comparing different AI models.",
    status: "Ongoing",
    live: "https://ai-arena-red.vercel.app/",
    source: "https://github.com/JJTGG/ai-arena",
    category: "work",
    featuredInHub: true
  },
  {
    name: "Trading Tools",
    type: "Trading / Product",
    description:
      "I wanted to build something around trading that was actually useful to me. I started with the decision-making side — risk, position sizing, market data, and journaling — and gradually turned those pieces into a system.",
    shortDescription:
      "Tools for trading decisions, risk, market data, and analysis.",
    status: "Ongoing",
    live: "https://trading-tools-xi.vercel.app/",
    source: "https://github.com/JJTGG/trading-tools",
    category: "work",
    featuredInHub: true
  },
  {
    name: "ClutchTopUp",
    type: "Gaming / Commerce",
    description:
      "A gaming top-up service I'm rebuilding from the ground up. The first version lived on Wapka; the current version is being rebuilt as a proper standalone system.",
    shortDescription:
      "A gaming top-up service I'm rebuilding from the ground up.",
    status: "Rebuilding",
    source: "https://github.com/JJTGG/clutchtopup",
    category: "work",
    featuredInHub: true
  },
  {
    name: "AUREN",
    type: "Storefront / Experiment",
    description:
      "A premium storefront concept built to explore product presentation, ecommerce interaction, and how a product experience can feel when the interface itself is part of the idea.",
    shortDescription:
      "A storefront experiment exploring product presentation and ecommerce experiences.",
    status: "Experiment",
    live: "https://auren-store-delta.vercel.app/",
    source: "https://github.com/JJTGG/auren-store",
    category: "experiment",
    featuredInHub: true
  },
  {
    name: "Fake OS",
    type: "Browser / Technical",
    description:
      "A browser experiment built around the idea of a tiny operating-system-like environment using only vanilla HTML, CSS, and JavaScript.",
    shortDescription:
      "A browser-based experiment built around the idea of a fake operating system.",
    status: "Experiment",
    live: "https://jjtgg.github.io/fake-os/",
    source: "https://github.com/JJTGG/fake-os",
    category: "experiment",
    featuredInHub: false
  }
];