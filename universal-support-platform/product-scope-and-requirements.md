---
description: >-
  Product purpose, user roles, scope and functional requirements with decision
  status.
---

# Product scope and requirements

> **Status:** Product direction partly confirmed; detailed behaviour remains partly proposed or undecided.

## 1. Product purpose

Provide a service through which people can financially support eligible individuals, creators, developers, projects, organisations and communities. The product direction includes one-time and recurring contributions, multiple recipients, private-by-default contribution information and voluntary contributions to sustain the platform itself.

The platform is not automatically a charity, charitable trust, regulated financial institution or tax-deductible donation service. Its legal and product classification must be established for each relevant jurisdiction.

## 2. Target audience and recipient model

**CONFIRMED — USER-SELECTED**

* The recipient model is multi-recipient.
* The intended audience is everyone, subject to eligibility, provider restrictions and applicable law.
* The product must support one-time and recurring contributions.
* All recipients must complete required verification before payouts.
* Contribution visibility is private by default.
* The geographic ambition is global.

**PROPOSED recipient categories — NOT YET APPROVED**

Potential categories include individuals, creators, developers, open-source projects, research projects, community groups, nonprofit organisations and other organisations. These are examples, not an approved exhaustive taxonomy.

A project or community may not be a legal person. The product must identify the accountable individual or legal entity legally entitled to receive funds. The precise representation model is **UNDECIDED**.

## 3. Conceptual user roles

The following roles are a proposed access model:

| Role                     | Proposed capability                                                              |
| ------------------------ | -------------------------------------------------------------------------------- |
| Guest                    | View eligible public recipient pages and initiate supported contributions.       |
| Supporter                | View own contribution records, receipts and recurring contribution controls.     |
| Recipient owner          | Manage a recipient profile, support pages and permitted financial reports.       |
| Recipient member         | Perform explicitly delegated tasks for an organisation or project.               |
| Administrator / reviewer | Perform controlled verification support, moderation, risk and operational tasks. |

A single account acting as both supporter and recipient is a **PROPOSED** convenience, not yet approved. Role separation and least-privilege permissions are still required regardless of the final account model.

## 4. Product surfaces

**PROPOSED — NOT APPROVED**

* Public recipient profile.
* One or more support pages per recipient.
* One-time contribution checkout.
* Recurring contribution management.
* Supporter receipt and history view.
* Recipient dashboard.
* Recipient verification / connected-account onboarding.
* Administrative and trust-and-safety console.
* Separate platform sustainability page.

A responsive web application is the simplest initial delivery proposal. Native Android and iOS applications, public discovery feeds, mobile-specific functionality and embeddable widgets have not been selected.

## 5. Functional requirements register

| ID     | Requirement                                                                 | Status                                                                     |
| ------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| PR-001 | Support multiple independent recipients.                                    | **CONFIRMED**                                                              |
| PR-002 | Serve a broad audience, subject to eligibility and law.                     | **CONFIRMED**                                                              |
| PR-003 | Support one-time contributions.                                             | **CONFIRMED**                                                              |
| PR-004 | Support recurring contributions.                                            | **CONFIRMED**                                                              |
| PR-005 | Keep contribution information private by default.                           | **CONFIRMED**                                                              |
| PR-006 | Require applicable recipient verification before payouts.                   | **CONFIRMED**                                                              |
| PR-007 | Aim for global reach, controlled by country/provider capability.            | **CONFIRMED goal / rollout details undecided**                             |
| PR-008 | Provide recipient profiles and public support pages.                        | **PROPOSED**                                                               |
| PR-009 | Allow recipients to operate multiple support pages.                         | **PROPOSED**                                                               |
| PR-010 | Allow custom contribution amounts and suggested amounts.                    | **PROPOSED**                                                               |
| PR-011 | Allow optional supporter messages.                                          | **PROPOSED**                                                               |
| PR-012 | Allow supporters to opt into public display while private remains default.  | **Selected direction; exact consent UX and fields undecided**              |
| PR-013 | Provide receipts and transaction confirmations.                             | **PROPOSED operational requirement; final receipt rules undecided**        |
| PR-014 | Provide recipient dashboards and financial reporting.                       | **PROPOSED**                                                               |
| PR-015 | Allow cancellation of recurring support.                                    | **Required for responsible recurring billing; detailed process undecided** |
| PR-016 | Provide refund and dispute workflows.                                       | **Required for launch; authority and allocation undecided**                |
| PR-017 | Provide a separate voluntary contribution flow for platform sustainability. | **CONFIRMED**                                                              |
| PR-018 | Provide funding goals, progress bars, badges, analytics and discovery.      | **OPTIONAL / NOT APPROVED**                                                |

## 6. Recipient onboarding and lifecycle

**CONFIRMED:** All recipients must complete the applicable verification required for payouts.

**UNDECIDED:** Whether a recipient may publish a public page, accept a payment, or only receive payouts after each specific verification milestone. The application must not invent its own financial permissions. It must enforce the actual payment provider's requirements and capability states.

A recommended lifecycle to review is:

1. Account created.
2. Recipient profile drafted.
3. Recipient type and country declared.
4. Connected-account onboarding initiated.
5. Identity or business checks completed by the provider or approved verification service.
6. Payment acceptance capability checked.
7. Payout capability checked.
8. Recipient receiving status activated only when all required controls are satisfied.
9. Ongoing restrictions, re-verification, suspension and offboarding handled explicitly.

The terms “identity verified”, “payments enabled” and “payouts enabled” must remain separate states.

## 7. Product boundaries

Unless later explicitly changed, the initial product should be understood as a voluntary support and sponsorship platform. Do not imply that supporters receive equity, repayment, ownership, guaranteed rewards, charitable tax deductions or control over a recipient in exchange for a contribution.

Whether reward/perk tiers, memberships, commissions, fundraising campaigns or charitable collection are in scope is **UNDECIDED**.

## 8. Open product questions

* Final recipient taxonomy and prohibited recipient types.
* Individual versus organisation versus project account model.
* Whether one recipient can have several administrators.
* Public profile and support-page publication rules.
* Custom amount minimums, maximums and preset suggestions.
* Supported recurring intervals.
* Supporter account requirement for one-time checkout.
* Exact anonymous/public display choices.
* Messages, moderation and abuse handling.
* Fundraising goals and progress display.
* Discovery/search and embeddable buttons.
* Whether web alone is sufficient for the first release.
* Final product name, brand and domain.
