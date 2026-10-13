
export type PortfolioSection = "featured" | "systems" | "experiments";

export type Project = {
  name: string;
  slug: string;
  type: string;
  description: string;
  shortDescription: string;
  status: string;
  live?: string;
  source?: string;
  category: "work" | "experiment" | "system";
  portfolioSection: PortfolioSection;
  featuredInHub: boolean;
  credit?: string;
};

export const projects: Project[] = [
  {
    name: "Agoré",
    slug: "agore",
    type: "Social Platform",
    description:
      "A global social platform centred on people, public content, discovery, and private communication. Its public release is out, and the product is still being refined.",
    shortDescription:
      "A social platform built around people, content, discovery, and communication.",
    status: "Launched · Refinement",
    live: "https://agore.vercel.app/",
    source: "https://github.com/JJTGG/Agore",
    category: "system",
    portfolioSection: "featured",
    featuredInHub: false
  },
  {
    name: "AI Arena",
    slug: "ai-arena",
    type: "AI / Product",
    description:
      "A multi-model AI workspace built to let people ask the same question across AI models and compare their responses in one place. The product is evolving as its core experience and longer-term direction take shape.",
    shortDescription:
      "One question, multiple AI models, and a shared space to compare their responses.",
    status: "Ongoing",
    live: "https://ai-arena-red.vercel.app/",
    source: "https://github.com/JJTGG/ai-arena",
    category: "work",
    portfolioSection: "featured",
    featuredInHub: true
  },
  {
    name: "Trading Tools",
    slug: "trading-tools",
    type: "Trading / Product",
    description:
      "A trading decision-support workspace connecting market information, calculations, risk planning, trade records, and review. It focuses on helping people define and assess decisions rather than executing trades or selling signals.",
    shortDescription:
      "A connected workspace for market analysis, trading calculations, risk planning, and review.",
    status: "Ongoing",
    live: "https://trading-tools-xi.vercel.app/",
    source: "https://github.com/JJTGG/trading-tools",
    category: "work",
    portfolioSection: "featured",
    featuredInHub: true
  },
  {
    name: "ClutchTopUp",
    slug: "clutchtopup",
    type: "Gaming / Commerce",
    description:
      "A gaming top-up service being rebuilt as a standalone commerce system. The intended workflow connects product selection, orders, payments, fulfillment, provider responses, reconciliation, and final results.",
    shortDescription:
      "A gaming top-up service being rebuilt around a standalone ordering and fulfillment system.",
    status: "Rebuilding",
    source: "https://github.com/JJTGG/clutchtopup",
    category: "work",
    portfolioSection: "featured",
    featuredInHub: true
  },
  {
    name: "Meayu",
    slug: "meayu",
    type: "Product / System",
    description:
      "A product for turning what you know about someone into a personal digital experience. The creator supplies the context and selected material, then prepares, reviews, approves, and shares the result.",
    shortDescription:
      "A way to turn personal context and selected material into a tailored digital experience.",
    status: "V0 · Foundation",
    source: "https://github.com/JJTGG/meayu",
    category: "system",
    portfolioSection: "systems",
    featuredInHub: false
  },
  {
    name: "NEXVARIN",
    slug: "nexvarin",
    type: "Infrastructure",
    description:
      "An early infrastructure initiative exploring how build and deployment workflows can be developed as a coherent platform. Its implementation is at an early stage, with the initial specification guiding the first build.",
    shortDescription:
      "An infrastructure initiative exploring build and deployment systems.",
    status: "Early development",
    category: "system",
    portfolioSection: "systems",
    featuredInHub: false
  },
  {
    name: "Prospect Scout",
    slug: "prospect-scout",
    type: "Research / Tooling",
    description:
      "An early research tool focused on finding public evidence of potential web-development opportunities. The initial scope is deliberately narrow: discover evidence before attempting to build a larger workflow around it.",
    shortDescription:
      "An early tool for finding public evidence of web-development opportunities.",
    status: "MVP-0",
    source: "https://github.com/JJTGG/prospect-scout",
    category: "system",
    portfolioSection: "systems",
    featuredInHub: false
  },
  {
    name: "AUREN",
    slug: "auren",
    type: "Storefront / Experiment",
    description:
      "A fashion and lifestyle storefront experiment exploring product presentation, catalogue discovery, and an ecommerce experience designed around the idea of The New Everyday.",
    shortDescription:
      "A storefront experiment exploring product presentation and ecommerce experiences.",
    status: "Experiment",
    live: "https://auren-store-delta.vercel.app/",
    source: "https://github.com/JJTGG/auren-store",
    category: "experiment",
    portfolioSection: "experiments",
    featuredInHub: true,
    credit: "by TGG HUB"
  },
  {
    name: "Fake OS",
    slug: "fake-os",
    type: "Browser / Technical",
    description:
      "A small desktop-like environment that runs inside a webpage, built with vanilla HTML, CSS, and JavaScript. It explores window management, built-in utilities, draggable interfaces, and persistent settings without a framework.",
    shortDescription:
      "A browser-based desktop environment built with vanilla HTML, CSS, and JavaScript.",
    status: "Experiment",
    live: "https://jjtgg.github.io/fake-os/",
    source: "https://github.com/JJTGG/fake-os",
    category: "experiment",
    portfolioSection: "experiments",
    featuredInHub: false
  }
];
