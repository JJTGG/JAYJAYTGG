import type { PartnerRelationshipRecord } from "./types";

type PublicPartnerRecord = PartnerRelationshipRecord & {
  /**
   * Public affiliate or referral tracking destination.
   * When present, this should be the primary destination used by the Partners page.
   */
  referralUrl?: string;
};

export const partners = [
  {
    slug: "exness",
    name: "Exness",

    relationshipKind: "Partner relationship",

    summary:
      "An established partner relationship with a multi-asset brokerage.",

    websiteUrl: "https://www.exness.com/",
    referralUrl: "https://one.toexness.com/a/stunu39f4h",

    disclosure:
      "This listing discloses a partner relationship. The link may provide a commercial benefit to the publisher. This is not financial advice or a recommendation to trade."
  },
  {
    slug: "tradingview",
    name: "TradingView",

    relationshipKind: "TradingView Partner Program",

    summary:
      "An established relationship under the TradingView Partner Program. TradingView provides charting and market-community tools for traders and investors.",

    websiteUrl: "https://www.tradingview.com/",
    referralUrl: "https://www.tradingview.com/?aff_id=155955",

    disclosure:
      "This listing discloses a programme relationship. The link may provide a commercial benefit to the publisher. It does not guarantee any market outcome."
  },
  {
    slug: "lbank",
    name: "LBank",

    relationshipKind: "Affiliate relationship",

    summary:
      "An established affiliate relationship with a cryptocurrency exchange.",

    websiteUrl: "https://www.lbank.com/",

    disclosure:
      "This listing discloses an affiliate relationship. It does not constitute a trading recommendation or a claim about investment outcomes."
  },
  {
    slug: "chemicloud",
    name: "ChemiCloud",

    relationshipKind: "Affiliate relationship",

    summary:
      "An established affiliate relationship with a web hosting provider.",

    websiteUrl: "https://chemicloud.com/",
    referralUrl: "https://chemicloud.com/#65035d108ab2e",

    disclosure:
      "This listing discloses an affiliate relationship. Purchases through the affiliate link may generate a commission for the publisher. Hosting plans, prices, availability, and terms should be checked directly with the provider."
  },
  {
    slug: "domainking",
    name: "DomainKing",

    relationshipKind: "Affiliate relationship",

    summary:
      "An established affiliate relationship.",

    websiteUrl: "https://www.domainking.ng/",
    referralUrl: "https://www.domainking.ng/web-hosting/?aff=5613",

    disclosure:
      "This listing discloses an affiliate relationship. Eligible purchases through the affiliate link may generate a commission for the publisher."
  },
  {
    slug: "monetag",
    name: "Monetag",

    relationshipKind: "Referral programme relationship",

    summary:
      "An established referral-programme relationship with a publisher monetisation and advertising platform.",

    websiteUrl: "https://monetag.com/",
    referralUrl: "https://monetag.com/?ref_id=nXwq",

    disclosure:
      "This is a referral-programme relationship, not an affiliate designation. Eligible referrals may generate a referral benefit for the publisher. It is separate from any publisher monetisation activity or earnings."
  },
  {
    slug: "sl8",
    name: "SL8",

    relationshipKind: "Referral programme relationship",

    summary:
      "An established referral-programme relationship.",

    websiteUrl: "https://sl8.online/",
    referralUrl: "https://sl8.online/invite/MYNIcz",

    disclosure:
      "This is a referral-programme relationship. Eligible referrals may generate a referral benefit for the publisher. It does not imply ambassador status or promise a specific visitor reward."
  }
] satisfies PublicPartnerRecord[];