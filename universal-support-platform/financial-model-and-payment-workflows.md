---
description: >-
  Direct settlement model, payment flows, recurring contributions, accounting,
  fees and provider dependencies.
---

# Financial model and payment workflows

> **Status:** Core funding choices confirmed; provider configuration, fee allocation and operating rules are not established.

## 1. Confirmed financial direction

* Recipient contributions should use a **direct settlement** arrangement.
* One-time and recurring support are in scope.
* All recipients must complete applicable verification before payouts.
* The platform itself is sustained through separate voluntary contributions.
* The platform sustainability flow must not be confused with recipient support.
* Global reach is intended but limited by actual provider and country capabilities.

The selected sustainability model is voluntary platform contributions. A mandatory platform commission has not been separately authorised. Do not introduce one without an explicit product decision.

## 2. Direct settlement: meaning and limits

The platform intends to use a payment provider's approved connected-account or marketplace arrangement so recipient funds settle directly to the recipient's eligible payment account.

This does **not** yet select a specific provider product. “Direct” must not be translated automatically into a particular provider charging model. Direct charges, destination charges, separate charges and transfers, or other connected-account mechanisms can have different legal, accounting, fee and risk consequences.

**EXTERNAL APPROVAL REQUIRED:** The provider must approve the exact business model, platform role, recipient types, recipient countries and settlement arrangement.

The platform should not create an internal custodial wallet or describe an application balance as cash held by the platform. Where a provider offers a connected-account balance, the provider's legal and operational model governs it.

## 3. Financial flows

### A. Recipient contribution

1. Supporter opens an eligible recipient support page.
2. Platform validates the recipient, support page, amount, currency and country.
3. Platform checks current payment-provider and recipient capabilities.
4. Platform creates a provider payment or checkout session with an idempotent reference.
5. Supporter completes provider-hosted or provider-tokenized checkout.
6. Platform verifies the authoritative provider result.
7. Platform records the payment and provider references.
8. Provider settles funds directly according to the approved arrangement.
9. Platform records settlement evidence when available and reconciles it.
10. Supporter and recipient receive appropriate confirmations.

A browser redirect is not proof of payment. Only authenticated provider webhooks and/or authoritative server-to-server verification can establish payment status.

### B. Recurring support

1. Supporter chooses a recurring amount and an interval supported by the provider.
2. Platform checks recipient and provider capability.
3. Provider creates and controls the recurring billing agreement.
4. Platform stores the provider subscription reference and local status.
5. Provider sends billing lifecycle events.
6. Each successful billing event creates a separately identifiable contribution/payment record.
7. Failed billing, retries, cancellation and subscription status are reconciled.
8. Funds settle under the approved connected-account arrangement.

Do not implement a second independent recurring charge scheduler that could charge a supporter twice. Provider support for recurring settlement to the relevant recipient must be proven before the feature is released.

### C. Platform sustainability contribution

1. Supporter chooses to contribute to the platform itself.
2. Checkout clearly identifies the platform as the beneficiary.
3. Payment is processed under an approved account and provider arrangement.
4. The transaction is recorded in a platform-specific funding ledger.
5. It is never assigned to a recipient profile or recipient balance.

This flow needs its own legal, tax, provider and accounting treatment.

## 4. Financial separation

At minimum, maintain separate accounting classifications for:

* Recipient contribution activity.
* Recipient settlement activity.
* Platform sustainability contributions.
* Provider processing fees.
* Refunds and reversals.
* Chargebacks and disputes.
* Currency conversion and settlement adjustments.
* Operational expenses funded by platform contributions.

Recipient funds must not be diverted to platform operations. Platform contributions must not be credited to recipient accounts.

## 5. Processing fees and commission

**UNDECIDED — MUST BE SETTLED BEFORE CHECKOUT LAUNCH**

Questions include:

* Does the recipient bear provider processing fees?
* Can the supporter optionally cover the provider fee?
* Does the provider deduct fees before settlement?
* How are cross-border, FX and payout fees presented?
* Are fee amounts estimates or exact values at confirmation?
* What happens when a refund does not return the original processing fee?
* Who bears chargeback fees and negative balances?

A provider fee is not platform commission. The platform must disclose the applicable fee treatment clearly before the supporter confirms payment.

## 6. Payment and settlement state model

**PROPOSED internal state vocabulary — validate against provider capabilities:**

* created
* requires\_action
* processing
* succeeded
* failed
* cancelled
* partially\_refunded
* refunded
* disputed
* settlement\_pending
* settled
* settlement\_failed

Do not collapse payment success and recipient settlement into one status. A payment may succeed while settlement is pending, blocked or later reversed.

## 7. Financial integrity controls

**PROPOSED mandatory technical safeguards:**

* Idempotency keys for payment creation and event processing.
* Unique provider event identifiers.
* Webhook signature verification.
* Server-to-server payment verification.
* Immutable financial event history.
* Reversal entries rather than editing historical accounting entries.
* Currency-safe amount handling using integer minor units or exact decimal arithmetic.
* Provider settlement reconciliation.
* Explicit treatment of refunds, disputes and chargebacks.
* Alerting for unmatched, duplicated or out-of-balance records.

A double-entry ledger is the recommended accounting foundation, but the final accounting model and account chart still require review. If adopted, each journal transaction must balance per currency and be posted atomically.

## 8. Refunds, chargebacks and disputes

**UNDECIDED — POLICY AND CONTRACT REQUIRED**

Define who can request, approve and execute refunds; when recipients can authorise them; whether administrators can intervene; how provider fees are treated; how partial refunds work; how disputed transactions affect reporting; how negative balances are handled; and who bears the cost of chargebacks.

Provider terms and local law may constrain these choices. Never promise a refund outcome that the payment provider cannot execute.

## 9. Country and provider capability

The platform needs a country-capability registry rather than a hardcoded “global enabled” flag.

A country may differ by:

* Platform onboarding eligibility.
* Individual and business recipient eligibility.
* Supported recipient legal structures.
* Payment acceptance methods.
* Presentment currencies.
* Settlement currencies.
* Recurring payment support.
* Connected-account and payout support.
* KYC/KYB requirements.
* Cross-border restrictions.

**EXTERNAL APPROVAL REQUIRED:** Validate each intended country with the actual provider and appropriate legal advice. A provider accepting an international card payment does not necessarily mean it can onboard and pay out a recipient in that cardholder's country.

## 10. Provider selection

No payment provider has been approved. Stripe Connect and Paystack were mentioned as examples for later investigation only. Neither is approved. Their suitability for this precise platform, country coverage, business classification and direct-settlement structure has not been established.

## 11. Required financial acceptance tests

Before real-money activation, test at minimum:

* Successful one-time payment and recipient settlement.
* Failed, abandoned and pending checkout.
* Duplicate and out-of-order webhooks.
* Webhook signature failure.
* Recipient verification incomplete.
* Payment capability disabled.
* Settlement delayed or failed.
* Refund and partial refund.
* Chargeback and dispute.
* Currency mismatch and FX.
* Recurring payment success, failure, retry and cancellation.
* Platform contribution kept separate from recipient funds.
* Provider statement reconciliation.
