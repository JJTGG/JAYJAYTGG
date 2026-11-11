export type ProjectLifecycle =
  | "Concept"
  | "Experiment"
  | "In development"
  | "Testing"
  | "Beta"
  | "Launched"
  | "Maintenance"
  | "Paused"
  | "Archived";

export type ProjectAvailability =
  | "Public"
  | "Private"
  | "Preview"
  | "Internal"
  | "Unavailable";

export type PublicationLevel =
  | "Featured"
  | "Catalogue"
  | "Archive / Private";

export type ProjectCategory =
  | "Products & Platforms"
  | "Tools & Utilities"
  | "Learning & Knowledge"
  | "Research & Engineering"
  | "Experiments";

export type EvidenceKind =
  | "live-product"
  | "source-repository"
  | "pull-request"
  | "collaboration-site";

export type EvidenceLink = {
  label: string;
  url: string;
  kind: EvidenceKind;
  note?: string;
};

export type ProjectRecord = {
  slug: string;
  name: string;
  typeLabel: string;
  description: string;
  shortDescription: string;

  category: ProjectCategory;
  lifecycle: ProjectLifecycle;
  availability: ProjectAvailability;
  publicationLevel: PublicationLevel;

  statusLabel: string;

  websiteUrl?: string;
  repositoryUrl?: string;

  technologies?: string[];
  capabilities: string[];
  limitations: string[];

  evidence: EvidenceLink[];

  tggHubEcosystem: boolean;
  credit?: string;
};

export type OpenSourceContribution = {
  slug: string;
  projectName: string;
  repositoryName: string;
  repositoryUrl: string;

  pullRequestNumber: number;
  pullRequestUrl: string;

  mergedAt: string;
  mergeCommitSha: string;

  summary: string;
  contributionScope: string[];
  outsideContributionScope: string[];
  verification: string[];
};

export type CollaborationRecord = {
  slug: string;
  name: string;

  publicUrl: string;
  repositoryUrl: string;

  projectOwner: string;
  userRole: string;
  summary: string;

  attribution: string;
  permissions: string[];
};

export type PartnerRelationshipKind =
  | "Partner relationship"
  | "TradingView Partner Program"
  | "Affiliate relationship"
  | "Referral programme relationship";

export type PartnerRelationshipRecord = {
  slug: string;
  name: string;
  relationshipKind: PartnerRelationshipKind;

  summary: string;
  websiteUrl?: string;

  disclosure: string;
};

export type PublicCampaignStatus =
  | "Upcoming"
  | "Ongoing"
  | "Ended"
  | "Unverified";

export type PublicCampaign = {
  slug: string;
  partnerSlug: string;

  name: string;
  summary: string;
  status: PublicCampaignStatus;

  campaignUrl: string;
  termsUrl?: string;

  startsAt?: string;
  endsAt?: string;

  visitorBenefit?: string;
  eligibilitySummary?: string;

  lastVerifiedAt: string;
};