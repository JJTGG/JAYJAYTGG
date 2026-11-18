---
description: >-
  Proposed domain entities, financial data rules, privacy boundaries and API
  surface.
---

# Data model and API blueprint

> **Status:** Preliminary blueprint only. Schema, naming, constraints and API contracts are not approved.

## 1. Data design principles

* Treat financial records as auditable business records, not ordinary editable profile data.
* Keep recipient financial data isolated by recipient and authorised role.
* Separate recipient contribution records from platform sustainability contributions.
* Separate payment status from provider settlement status.
* Store provider references and capability snapshots needed for audit and reconciliation.
* Use UTC timestamps.
* Use UUID or another reviewed opaque identifier strategy.
* Never use floating-point arithmetic for money.
* Do not store raw card data or sensitive authentication data that belongs with a compliant provider.

## 2. Proposed logical entities

These names are illustrative and may change.

### Identity and recipient domain

| Entity                | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| users                 | User identity and account state                   |
| user\_sessions        | Session and expiry information                    |
| recipient\_profiles   | Recipient's public and legal profile metadata     |
| recipient\_members    | Delegated access to recipient accounts            |
| recipient\_categories | Approved recipient taxonomy                       |
| support\_pages        | Public recipient support pages                    |
| verification\_cases   | Verification process references and state         |
| connected\_accounts   | Provider connected-account references             |
| payment\_capabilities | Provider-reported payment/payout capability state |

### Contribution and payment domain

| Entity                   | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| contributions            | One-time contribution and each successful recurring charge |
| contribution\_visibility | Public identity-display consent and visibility settings    |
| contribution\_messages   | Optional supporter messages if feature is approved         |
| payment\_intents         | Provider payment initiation and result                     |
| payment\_events          | Verified provider webhook events and processing state      |
| subscriptions            | Provider recurring-agreement references and lifecycle      |
| refunds                  | Refund requests, provider references and result            |
| disputes                 | Chargeback/dispute state and evidence references           |

### Settlement and accounting domain

| Entity                | Purpose                                                 |
| --------------------- | ------------------------------------------------------- |
| settlements           | Provider settlement records                             |
| settlement\_items     | Allocation/reference from settlement to payment records |
| ledger\_accounts      | Accounting account definitions                          |
| journal\_transactions | Atomic financial posting groups                         |
| journal\_entries      | Debit and credit entries                                |
| reconciliation\_runs  | Provider reconciliation batch metadata                  |
| reconciliation\_items | Matched, unmatched or discrepant external records       |

### Platform funding and operations domain

| Entity                     | Purpose                                                             |
| -------------------------- | ------------------------------------------------------------------- |
| platform\_contributions    | Voluntary contributions to platform operations                      |
| platform\_payment\_intents | Separate platform-payment references                                |
| platform\_expenses         | Internal operating-cost records, if published reporting is approved |
| notifications              | Delivery and user notification records                              |
| reports                    | Abuse and content reports                                           |
| audit\_logs                | Sensitive administrative and security actions                       |

## 3. Data relationships and isolation

A recipient owns one or more support pages. A contribution references one recipient and one support page. Each payment attempt references the contribution it attempts to fulfil. Recurring billing creates a sequence of distinct charge/contribution records under one recurring agreement.

Provider connected-account IDs must be unique within the appropriate provider namespace. A recipient member may access a recipient only with an explicit active membership and permitted role.

Platform sustainability contributions must not share recipient ownership or recipient balance logic.

Enforce tenant isolation in the application and, where appropriate, through PostgreSQL row-level security or equivalent safeguards. Do not rely on client-supplied recipient IDs as proof of access.

## 4. Money representation

Store amount and currency together. Prefer integer minor units when the currency's exponent is well-defined and provider-compatible, or a carefully selected exact decimal representation. Currency exponents and rounding rules must be explicit; not every currency has two decimal places.

Never calculate money with JavaScript binary floating-point arithmetic.

## 5. Ledger proposal

**PROPOSED — requires accounting review**

A double-entry journal is recommended for reliable financial records. Each posted journal transaction should balance within each currency. Posted entries should be immutable; corrections should be represented by reversals or adjusting entries.

The platform's ledger is an accounting record. It is not evidence that the platform holds recipient funds or provides an internal wallet.

Before adopting this design, define the account chart and posting rules for:

* Provider clearing.
* Recipient payable / settlement tracking where appropriate to the provider contract.
* Provider processing fees.
* Refunds and reversals.
* Chargebacks and dispute costs.
* FX and rounding adjustments.
* Platform sustainability receipts.
* Platform operating expenses.

The ledger's exact treatment must match the legal and contractual payment flow.

## 6. Proposed API groups

The following is a possible REST API surface, not an approved contract:

| Route group                 | Responsibility                              |
| --------------------------- | ------------------------------------------- |
| /api/v1/auth                | Authentication and sessions                 |
| /api/v1/users               | User account management                     |
| /api/v1/recipients          | Recipient profiles and memberships          |
| /api/v1/verification        | Provider onboarding and verification status |
| /api/v1/support-pages       | Public support pages                        |
| /api/v1/contributions       | Contribution records                        |
| /api/v1/checkout            | Payment initiation                          |
| /api/v1/subscriptions       | Recurring agreement management              |
| /api/v1/transactions        | Private transaction history                 |
| /api/v1/settlements         | Settlement references and status            |
| /api/v1/refunds             | Refund workflows                            |
| /api/v1/receipts            | Receipts and confirmations                  |
| /api/v1/platform-support    | Platform sustainability contributions       |
| /api/v1/notifications       | Notification preferences                    |
| /api/v1/admin               | Restricted administration                   |
| /api/v1/webhooks/{provider} | Provider event ingress                      |

## 7. API safety requirements

* Validate all request bodies and path parameters on the server.
* Authorise every private recipient and supporter resource.
* Use idempotency for financial creation operations.
* Verify webhook signatures against the raw request body as required by the provider.
* Deduplicate provider events using provider-scoped event identifiers.
* Return stable internal error codes without leaking secrets or provider-sensitive details.
* Apply rate limits and abuse controls.
* Never let a client mark a payment successful or a recipient verified.
* Avoid returning full provider objects to public clients.
* Version contracts and maintain backward compatibility where practical.

## 8. Schema constraints to consider

* Unique provider event ID within a provider.
* Unique provider payment reference within a provider.
* Positive contribution amounts and valid currency codes.
* Referential integrity between recipient, page and contribution.
* Immutable posted journal entries.
* Atomic, balanced journal posting.
* Explicit state-transition rules.
* Foreign-key and access checks for recipient membership.
* Separate namespaces and access policies for platform funding.

Exact indexes, partitioning, retention and migration strategy should be designed against measured query patterns and data volumes rather than guessed in advance.
