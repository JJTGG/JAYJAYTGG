import type { CollaborationRecord } from "./types";

export const collaborations = [
  {
    slug: "beyond-the-page",
    name: "Beyond the Page",

    publicUrl: "https://beyond-the-page-two.vercel.app/",
    repositoryUrl: "https://github.com/JJTGG/beyond-the-page",

    projectOwner: "Sofiyah Bakare",

    userRole: "Website design and technical implementation",

    summary:
      "An independent storytelling and reading experience. The website design and technical implementation were contributed by JAYJAYTGG, while the underlying story and creative ownership remain with the project's owner.",

    attribution:
      "The original story and creative ownership belong to Sofiyah Bakare. JAYJAYTGG is credited for website design and technical implementation.",

    permissions: [
      "Text-only public presentation is permitted.",
      "Do not reproduce screenshots or photographs.",
      "Do not reproduce other project media.",
      "Do not imply ownership of the original story or creative work."
    ]
  }
] satisfies CollaborationRecord[];