# Universal Support Platform

> **Document status:** Baseline specification — pre-implementation\
> **Last documented:** 19 November 2026\
> **Working name:** Universal Support Platform (not an approved product name)\
> **Development priority:** Deferred until BuildTrace has been built and the product owner returns to resume this project.

This documentation records the current product direction, distinguishes decisions explicitly selected by the product owner from recommendations that still require approval, and lists the matters that must be settled before implementation or launch.

**Important:** A recommendation appearing in this document is not automatically an approved decision. Use the status labels below. Do not silently promote a proposal or unresolved item to an implementation requirement.

## Decision-status legend

| Status                                        | Meaning                                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------------------- |
| **CONFIRMED — USER-SELECTED**                 | Explicitly selected by the product owner in this planning discussion.                   |
| **PROPOSED — NOT APPROVED**                   | Recommended as a possible design or implementation approach; requires a later decision. |
| **UNDECIDED — NOT ESTABLISHED**               | No definitive decision has been made.                                                   |
| **EXTERNAL APPROVAL / VERIFICATION REQUIRED** | Depends on a payment provider, regulator, legal adviser, or other external party.       |
| **DEFERRED**                                  | Intentionally postponed until BuildTrace is completed.                                  |
| **NOT STARTED**                               | No repository implementation or production operation has been established.              |

## Executive definition

A multi-recipient support platform that allows people to support eligible individuals, creators, developers, projects, organisations and communities through one-time and recurring contributions. Recipients are to receive funds through an approved payment-provider arrangement that settles directly to their connected payment accounts. Contributions are private by default. The platform's own sustainability is intended to come from voluntary contributions made separately to the platform.

The global ambition is conditional on country-specific provider availability, recipient eligibility, payment capabilities and applicable law. “Global” is a product goal, not a claim that every country can be activated at launch.

## Decisions confirmed by the product owner

| Area                    | Current decision                                   | Qualification                                                                                                                                               |
| ----------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recipient model         | **Multi-recipient**                                | The platform is intended to serve multiple independent recipients.                                                                                          |
| Audience                | **Everyone**                                       | Open audience ambition; actual recipient eligibility and prohibited-use rules remain to be defined.                                                         |
| Contribution types      | **One-time and recurring**                         | Recurring intervals and provider mechanics remain undecided.                                                                                                |
| Fund handling           | **Direct**                                         | Recipient funds should settle directly through an approved connected-account / marketplace payment arrangement; the exact provider product is not selected. |
| Recipient verification  | **All recipients must be verified before payouts** | People may register; precise activation rules for accepting payments must follow provider capabilities and compliance requirements.                         |
| Contribution visibility | **Private by default**                             | Public supporter display is not the default. The exact consent and display controls still need a policy.                                                    |
| Geographic ambition     | **Global**                                         | Launch coverage must be capability-gated country by country.                                                                                                |
| Platform sustainability | **Voluntary platform contributions / donations**   | This is a separate funding flow from support sent to recipients.                                                                                            |
| Licence direction       | **AGPL-3.0-or-later**                              | Selected by the product owner; final notices, dependency review and compliance procedure remain to be completed.                                            |
| Development order       | **BuildTrace first**                               | Full implementation of this platform is deferred until BuildTrace has been built and the product owner returns to resume this project.                      |

### Important interpretation of the financial model

The selected sustainability model is voluntary platform contributions. It does **not** authorise silently adding a mandatory platform commission. The intended approach is donation-supported operation, but the precise fee policy still needs explicit ratification.

Payment-provider processing fees are separate from platform revenue. Who bears those fees, how they are displayed, and whether supporters can optionally cover them are **UNDECIDED**.

## Current product boundaries

The intended product is a support and sponsorship service, not automatically a registered charity, charitable giving intermediary, custodial wallet, bank, or tax-deductible donation vehicle. The legal classification must be established for the actual operating model and jurisdictions.

The platform must not claim a contribution is tax-deductible unless the recipient, transaction and relevant jurisdiction genuinely qualify.

The intended direct-settlement model means the platform should not create an internal wallet that represents recipient funds as held by the platform. The platform still needs accurate records of contribution intent, payment status, provider fees, refunds, disputes and settlement evidence.

## What is not yet approved

The following are **not approved** merely because they appeared in earlier architectural suggestions:

* Product name, brand identity, domain and visual design.
* Initial launch countries, currencies and payment methods.
* Any specific payment provider or provider account configuration.
* Any specific legal entity, country of establishment, merchant-of-record or marketplace structure.
* Exact payment flow type (for example, the provider's direct-charge, destination-charge or other connected-account mechanism).
* Exact provider and platform processing-fee allocation.
* Recipient categories, eligibility rules, prohibited activities and appeal policies.
* Exact verification documents, verification vendor and re-verification policy.
* Whether an unverified recipient may publish a page or accept payments before payout capability is enabled.
* Public supporter identity options beyond the private-by-default direction.
* Optional messages, funding goals, progress indicators, analytics, badges, embeddable buttons and public discovery features.
* Whether there will be any paid features, advertisements or other revenue mechanisms. Voluntary platform donations are the selected sustainability model; additional monetisation has not been approved.
* Specific technology stack and hosting choices.
* Database schema, API details and internal service boundaries.
* Exact delivery schedule and launch date.

## Proposed architecture posture — not approved

The working recommendation is to start with a modular monolith, explicit financial boundaries, a provider-adapter layer, a country-capability registry, and an auditable accounting model. These are recommendations for later review, not final technology approvals.

The suggested technologies (Next.js, React Native, TypeScript, PostgreSQL/Neon, Drizzle, Better Auth, Zod and REST APIs) are **PROPOSED — NOT APPROVED**. They must be reconsidered against the product's actual requirements, infrastructure constraints, maintainability and licensing needs before implementation.

## Primary launch gates

1. Establish the platform's country of establishment, legal structure and regulatory classification.
2. Obtain written payment-provider confirmation for the exact voluntary-support / multi-recipient business model.
3. Confirm recipient onboarding, KYC/KYB, connected-account, payment acceptance and direct payout coverage for each launch country.
4. Define fees, refunds, chargebacks, reserves, disputes, taxes and who is responsible for each operation.
5. Demonstrate accurate payment-event handling, idempotency, ledger integrity and provider reconciliation.
6. Complete privacy, security, terms, recipient eligibility and prohibited-use policies.
7. Test end-to-end settlement in each country before activating that country.

## Project status and sequencing

**Status: DEFERRED / NOT STARTED.**

The product direction and preliminary architecture have been documented. No dedicated source-code repository, implementation, payment-provider approval, production deployment or real-money operation has been established in this planning work.

BuildTrace remains the active priority. Return to this project after BuildTrace is built and the product owner resumes this work. At that point, review every item marked **PROPOSED**, **UNDECIDED** or **EXTERNAL APPROVAL / VERIFICATION REQUIRED** before implementation begins.

## Documentation map

* Product scope and requirements
* Financial model and payment workflows
* System architecture and technology options
* Data model and API blueprint
* Security, privacy and operations
* Open decisions and launch gates
* Delivery plan and acceptance criteria
* Licensing and project governance
