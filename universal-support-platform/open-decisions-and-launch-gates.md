---
description: >-
  Outstanding product, legal, payment, operational and technical decisions with
  current status.
---

# Open decisions and launch gates

> **Purpose:** Preserve unresolved matters so they are not mistaken for approved decisions when development resumes.\
> **Status:** Many items deliberately remain open. Resolve them after BuildTrace, before the relevant implementation or launch milestone.

## 1. Status vocabulary

* **CONFIRMED:** Explicitly selected by the product owner.
* **PROPOSED:** Suggested approach; no approval yet.
* **UNDECIDED:** No choice has been made.
* **EXTERNAL APPROVAL REQUIRED:** Depends on a provider, regulator, lawyer or other external party.
* **DEFERRED:** Work intentionally waits until BuildTrace is completed.

## 2. Product decisions

| Item                                   | Status                  | What must be decided                                                |
| -------------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| Multi-recipient model                  | **CONFIRMED**           | Preserve.                                                           |
| Audience: everyone                     | **CONFIRMED**           | Preserve broad intent; define eligibility and prohibited uses.      |
| One-time contributions                 | **CONFIRMED**           | Preserve.                                                           |
| Recurring contributions                | **CONFIRMED**           | Preserve; choose intervals and provider implementation.             |
| Direct settlement                      | **CONFIRMED direction** | Select and obtain approval for the exact provider settlement model. |
| All recipients verified before payouts | **CONFIRMED**           | Define onboarding lifecycle and capability rules with provider.     |
| Private by default                     | **CONFIRMED**           | Define exact public display consent fields and admin access rules.  |
| Global ambition                        | **CONFIRMED goal**      | Define initial countries and staged launch.                         |
| Voluntary platform contributions       | **CONFIRMED**           | Define platform beneficiary, accounting and payment handling.       |
| Product name and brand                 | **UNDECIDED**           | Select name, domain, identity and positioning.                      |
| Recipient taxonomy                     | **UNDECIDED**           | Approve categories, legal entities and project representation.      |
| Supporter account requirement          | **UNDECIDED**           | Decide whether guest one-time checkout is allowed.                  |
| Support-page features                  | **PROPOSED**            | Approve custom amounts, goals, messages, multiple pages, etc.       |
| Mobile applications                    | **UNDECIDED**           | Decide web-first versus Android/iOS native clients.                 |
| Discovery and embeddable buttons       | **PROPOSED**            | Decide whether and when to include.                                 |

## 3. Legal and regulatory gates

**EXTERNAL APPROVAL / LEGAL REVIEW REQUIRED**

1. Country of establishment and operating legal entity.
2. Legal classification of the service (support platform, marketplace, payment facilitation, crowdfunding or other classification as applicable).
3. Whether any financial-services, payment facilitation, money transmission, crowdfunding or charity-related permission is required.
4. Platform role in the flow: technology provider, marketplace operator, agent or another legal position.
5. Recipient eligibility and permitted jurisdictions.
6. KYC/KYB, beneficial ownership and sanctions-screening duties.
7. Anti-money-laundering obligations, reporting and suspicious activity processes where applicable.
8. Tax treatment of recipient contributions and platform sustainability contributions.
9. Consumer protection, electronic commerce, privacy and cross-border data transfer obligations.
10. Recordkeeping and retention periods.
11. Applicable refund, chargeback and dispute rights.
12. Whether any contribution can lawfully be described as a donation and whether any tax-deductibility representation is permitted.

Do not assume the word “donation” determines legal classification or tax treatment.

## 4. Payment-provider gates

**EXTERNAL APPROVAL REQUIRED**

* Provider selection and written approval for the exact business model.
* Platform onboarding and underwriting.
* Individual and business connected-account availability.
* Country-by-country recipient onboarding.
* Direct settlement configuration.
* Supported one-time and recurring payment flows.
* Presentment and settlement currencies.
* Provider reserve, negative balance and dispute policies.
* Refund and chargeback APIs and operating procedures.
* Platform sustainability contribution account structure.
* Provider fees and payout charges.
* Account closure, restrictions and funds handling.

Stripe Connect and Paystack were named in earlier discussion as candidates for investigation only. Neither is approved. Do not rely on generic country lists or ordinary international card acceptance as proof that a provider supports the intended recipient marketplace.

## 5. Fees and financial policy

**UNDECIDED**

* Explicitly ratify whether platform commission is always zero.
* Confirm whether platform sustainability contributions are the only intended platform funding source.
* Decide who bears payment-processing, FX and payout fees.
* Decide whether supporters may optionally cover processing fees.
* Decide how fees are disclosed before checkout.
* Define recipient settlement reporting and available balance terminology.
* Define refund fee treatment.
* Define chargeback, reserve and negative-balance responsibility.
* Define platform contribution refunds and expense reporting.

The product owner's selected sustainability answer was voluntary donations / contributions. Do not quietly introduce a commission or mandatory supporter surcharge.

## 6. Payment and recipient lifecycle

**UNDECIDED / PROVIDER-DEPENDENT**

* Can an unverified recipient publish a support page?
* Can a recipient accept payment before payout capability is enabled?
* What exact capability states must be active to start checkout?
* What happens when provider verification is later revoked?
* Can recurring billing continue while a recipient is restricted?
* How are outstanding balances and future payments treated after recipient suspension?
* What is the recipient offboarding and account closure process?

The confirmed rule is verification before payouts. The payment provider's actual requirements may require verification before accepting payments as well.

## 7. Privacy and trust

**UNDECIDED**

* Exact supporter public identity controls.
* Whether supporters can be anonymous publicly.
* Recipient access to supporter identity and messages.
* Data retention and deletion process.
* Prohibited uses and high-risk recipient categories.
* Moderation and appeals.
* Fraud monitoring thresholds and manual review.
* Admin roles and audit review.
* Incident response and regulator request procedures.

## 8. Technical choices

**PROPOSED — NOT APPROVED**

* Modular monolith versus another deployment shape.
* Next.js, React Native and TypeScript.
* Neon/PostgreSQL, Drizzle, Better Auth and Zod.
* REST API and API versioning.
* Provider adapter interface.
* Double-entry accounting implementation.
* Country-capability registry.
* Hosting, storage, job queue and monitoring.
* Repository name and branch/release conventions.

Do not initialise the project around this stack until the product owner reviews and approves it.

## 9. Product principles previously stated but not separately ratified

Earlier planning summaries treated the following as fixed, but they were not all explicitly selected in the user's decision prompts. Keep them **UNCONFIRMED** until revisited:

* No advertisements.
* No paid feature tiers or subscriptions.
* No sale of personal data.
* Permanent 0% commission as an immutable policy.
* Supporter option to cover processing fees.
* Specific recipient categories and feature set.
* Exact web/Android/iOS delivery requirement.

The voluntary platform-support model is confirmed; additional monetisation restrictions should be explicitly recorded when the product owner approves them.

## 10. Launch gates — must all pass

| Gate                 | Required evidence                                            |
| -------------------- | ------------------------------------------------------------ |
| Legal model          | Documented legal review for platform and target markets      |
| Provider approval    | Written approval for exact activity and recipient countries  |
| Recipient onboarding | Successful KYC/KYB and capability testing                    |
| Settlement           | Verified direct settlement in each activated market          |
| Payment correctness  | Idempotent payment processing and authoritative verification |
| Accounting           | Reconciled provider records and balanced postings            |
| Refunds/disputes     | Tested operational responsibility and recovery               |
| Privacy              | Reviewed privacy controls and disclosures                    |
| Security             | Security testing and incident procedures                     |
| Country activation   | Country-specific capability and compliance sign-off          |

## 11. Re-entry rule

When the product owner returns after BuildTrace:

1. Reconfirm the documented decisions still stand.
2. Review every **PROPOSED** item.
3. Resolve product and financial policy questions.
4. Obtain legal/provider feasibility before committing to payment implementation.
5. Approve the architecture and repository plan.
6. Update this page and the decision log before code is treated as authoritative.
