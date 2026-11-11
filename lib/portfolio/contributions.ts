import type { OpenSourceContribution } from "./types";

export const contributions = [
  {
    slug: "inalpha-pr-257",
    projectName: "Inalpha",

    repositoryName: "mirror29/inalpha",
    repositoryUrl: "https://github.com/mirror29/inalpha",

    pullRequestNumber: 257,
    pullRequestUrl: "https://github.com/mirror29/inalpha/pull/257",

    mergedAt: "2026-11-06",
    mergeCommitSha: "fe3a4e030ee7ea498615992462c4a6b0dc2d5849",

    summary:
      "A merged contribution establishing a proposed E1 accounting contract and a run-scoped candidate-lookup integration test. The work defines and tests a boundary; it does not implement the project's runtime accounting system.",

    contributionScope: [
      "Proposed E1 accounting contract.",
      "Run-scoped candidate-lookup integration test.",
      "Documentation and evidence clarifying the accounting boundary."
    ],

    outsideContributionScope: [
      "Runtime accounting implementation.",
      "Append-only attempt ledger.",
      "DSR or PBO calculations.",
      "Statistical integration.",
      "Changes to LLM behaviour.",
      "Ownership or maintainership of the Inalpha project."
    ],

    verification: [
      "The pull request was merged on November 6, 2026.",
      "The contribution contained four commits across two files.",
      "The pull request recorded 1,376 additions.",
      "The 13-job CI workflow passed.",
      "Maintainer review reported that two storage integration tests passed."
    ]
  }
] satisfies OpenSourceContribution[];