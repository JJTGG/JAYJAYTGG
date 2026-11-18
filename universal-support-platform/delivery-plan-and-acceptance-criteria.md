---
description: >-
  Deferred delivery sequence, preliminary effort estimates, MVP definition and
  production acceptance criteria.
---

# Delivery plan and acceptance criteria

> **Status:** DEFERRED until BuildTrace is completed. Timeline figures below are rough planning estimates only, not a commitment or approved schedule.

## 1. Development sequencing

**CONFIRMED priority:** BuildTrace is to be built first. The Universal Support Platform remains deferred until the product owner returns after BuildTrace has been built and the product owner returns to resume this project.

Do not split the primary 12-hour development workload across both products by default. Keep the active focus on BuildTrace. This document preserves the support-platform plan so work can resume without reconstructing the product direction.

## 2. Preliminary effort estimate

The earlier planning conversation estimated roughly:

* Around 60 days for a narrow working web MVP, assuming provider feasibility and scope are settled.
* Around 120–160 days for a broader first production version.
* Around 150–180 days for a more hardened international launch.

These estimates assumed a workload of approximately 12 hours per day, one primary developer, and AI assistance for planning, implementation, debugging, reviews and testing. They are highly provisional. They exclude or cannot reliably predict provider underwriting, legal reviews, regulatory approvals, payment onboarding delays and other external dependencies.

**Do not treat these estimates as delivery promises.** Re-estimate after BuildTrace and after scope, stack, provider and initial country decisions are approved.

## 3. Proposed implementation phases

| Phase                    | Proposed deliverable                      | Exit condition                                     |
| ------------------------ | ----------------------------------------- | -------------------------------------------------- |
| 0. Feasibility           | Legal, provider and country feasibility   | Viable initial operating model established         |
| 1. Foundation            | Repository, auth, roles, recipient model  | Secure identity and tenant boundaries tested       |
| 2. Recipient experience  | Profiles and support pages                | Private data and access controls validated         |
| 3. Payment foundation    | Provider adapter and one-time checkout    | Authoritative payment verification works           |
| 4. Financial core        | Records, accounting and reconciliation    | Provider activity reconciles reliably              |
| 5. Settlement            | Connected accounts and direct payout flow | Approved recipient receives correct settlement     |
| 6. Recurring support     | Subscription lifecycle                    | Billing, retries, cancellation and failures tested |
| 7. Platform funding      | Separate sustainability flow              | Platform funds are financially separated           |
| 8. Operations            | Admin, moderation, reporting and alerts   | Operational runbooks and access controls tested    |
| 9. Client expansion      | Additional clients if approved            | Shared backend and client acceptance tests pass    |
| 10. Production hardening | Security, resilience and launch           | All launch gates signed off                        |

## 4. Proposed MVP scope

**PROPOSED — NOT APPROVED**

A narrow MVP could contain:

* Account registration and authentication.
* Recipient profile and onboarding.
* Provider-hosted or provider-tokenized recipient verification.
* Public support page.
* One-time contribution checkout.
* Authoritative payment verification.
* Private recipient transaction history.
* Direct settlement through an approved connected-account arrangement.
* Basic receipts and notifications.
* Administrative review and basic abuse controls.
* Financial reconciliation sufficient for the chosen provider and country.

Recurring support, platform sustainability funding, multiple providers, mobile applications, public discovery, embeddable buttons and advanced analytics may be staged depending on the final approved MVP.

## 5. MVP acceptance scenario

A release candidate is not accepted merely because the checkout UI looks functional. The full lifecycle should pass:

1. A person creates an account.
2. The person creates a recipient profile.
3. The recipient completes all provider-required onboarding.
4. Payment acceptance and payout capabilities are checked separately.
5. The recipient publishes an eligible support page.
6. A supporter opens the page and sees the correct currency and fee disclosure.
7. The supporter makes a one-time contribution.
8. The provider processes the payment.
9. The platform receives and verifies the provider event.
10. The contribution is recorded exactly once.
11. The provider settles funds directly to the recipient under the approved arrangement.
12. The settlement is reconciled.
13. The recipient sees the private transaction record.
14. The supporter receives a confirmation/receipt.
15. A repeated webhook does not duplicate the contribution or accounting entry.
16. A failed payment does not appear as a successful contribution.
17. An unverified or payout-disabled recipient cannot bypass provider restrictions.

## 6. Production acceptance criteria

### Functional

* Recipient and supporter flows work end to end.
* One-time and recurring lifecycle tests pass for the approved MVP scope.
* Private-by-default contribution behaviour is enforced on the server.
* Platform contributions are separate from recipient contributions.
* All recipient capability restrictions are respected.

### Financial

* Payment events are authenticated and deduplicated.
* Financial amounts are currency-safe.
* Successful payment and settlement are distinct states.
* Provider records reconcile.
* Refund and dispute flows are tested.
* No unauthorised platform fee is deducted.
* No recipient money is represented as held by an unsupported internal wallet.

### Security and privacy

* Cross-recipient access tests fail safely.
* Public APIs expose no private contribution or payout data.
* Secrets and sensitive provider payloads do not leak to clients or logs.
* Admin actions are auditable.
* Backup restoration is demonstrated.
* Incident response procedures exist.

### Operational

* Provider onboarding and support escalation are documented.
* Failed webhook and background job recovery is tested.
* Monitoring and alerting are active.
* Country activation is independently controllable.
* Terms, privacy, recipient eligibility and support procedures are published and reviewed.

## 7. Release strategy

Use feature flags and country-level activation. Start with a limited approved market and recipient cohort. Do not enable additional countries based only on a code-level currency list.

No real-money production launch until legal and provider gates are satisfied and the complete payment-to-settlement lifecycle has been tested in the actual target market.
