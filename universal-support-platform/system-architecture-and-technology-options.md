---
description: >-
  Proposed system boundaries, infrastructure approach, provider abstraction and
  technology options requiring approval.
---

# System architecture and technology options

> **Status:** Architecture direction is proposed, not approved. No implementation has started.

## 1. Architectural objectives

The system should eventually support:

* Multiple independent recipients and support pages.
* One-time and recurring contribution experiences.
* Direct settlement through approved payment providers.
* Country-specific capability and eligibility.
* Recipient onboarding and verification states.
* Private-by-default contribution records.
* A financially separate platform sustainability flow.
* Auditable financial events and settlement reconciliation.
* Multiple client applications if approved.

The system must not imply that global provider availability, a specific legal structure or a specific technology choice has already been settled.

## 2. Proposed architecture: modular monolith

**PROPOSED — NOT APPROVED**

Start with a modular monolith rather than microservices. Keep domain boundaries explicit and separate application deployments from domain rules. This reduces distributed-system complexity while allowing individual modules to be extracted later if a measured need arises.

Proposed logical modules:

| Module               | Responsibility                                                 |
| -------------------- | -------------------------------------------------------------- |
| Identity and access  | Accounts, sessions, roles, access control                      |
| Recipient management | Recipient profiles, memberships, legal type                    |
| Verification         | Provider onboarding references and verification status         |
| Support pages        | Public pages and recipient content                             |
| Contributions        | One-time and recurring support records                         |
| Payments             | Checkout orchestration and provider adapters                   |
| Accounting           | Financial journal and reconciliation                           |
| Settlements          | Provider settlement evidence and recipient payout status       |
| Platform funding     | Separate platform sustainability contributions                 |
| Trust and safety     | Reports, moderation, fraud signals and restrictions            |
| Notifications        | Receipts, security alerts and lifecycle notifications          |
| Administration       | Restricted operational controls and auditability               |
| Analytics            | Aggregated, privacy-respecting product and financial reporting |

## 3. Proposed high-level architecture

```
Web client / optional native mobile clients
                  |
            Versioned API
                  |
     Authentication and authorization
                  |
        Modular application layer
  ------------------------------------------------
  Identity | Recipients | Pages | Contributions
  Payments | Accounting | Settlements | Safety
  Platform funding | Notifications | Admin
  ------------------------------------------------
                  |
         Persistence and jobs
                  |
  PostgreSQL | Object storage | Job queue
                  |
         External integrations
                  |
  Payment providers | Verification | Email
```

Financial state changes must be controlled by server-side domain operations. Client applications must never be authoritative for payment success, recipient eligibility, fee calculations or settlement state.

## 4. Technology options — NOT APPROVED

These were recommendations from preliminary planning, not accepted stack decisions.

| Layer           | Earlier proposal                               | Status                                    |
| --------------- | ---------------------------------------------- | ----------------------------------------- |
| Web             | Next.js + TypeScript                           | **PROPOSED**                              |
| Mobile          | React Native                                   | **PROPOSED / mobile scope undecided**     |
| Backend         | TypeScript modular API                         | **PROPOSED**                              |
| Database        | PostgreSQL, with Neon considered               | **PROPOSED**                              |
| ORM             | Drizzle                                        | **PROPOSED**                              |
| Authentication  | Better Auth                                    | **PROPOSED**                              |
| Validation      | Zod                                            | **PROPOSED**                              |
| API             | Versioned REST                                 | **PROPOSED**                              |
| File storage    | S3-compatible object storage                   | **PROPOSED**                              |
| Background jobs | PostgreSQL-backed queue initially              | **PROPOSED**                              |
| Hosting         | Vercel or portable/self-managed infrastructure | **UNDECIDED**                             |
| Monitoring      | Structured logs, metrics and error tracking    | **REQUIRED CAPABILITY; vendor undecided** |

Re-evaluate the stack when implementation resumes. Consider expected scale, cost, mobile requirements, deployment portability, operational burden, available provider SDKs and AGPL-compatible dependency licences.

## 5. Payment-provider adapter boundary

**PROPOSED**

Keep provider-specific APIs behind a payment adapter. The domain layer should work with internal concepts such as payment intent, connected account, capability, subscription, refund and settlement rather than leaking provider-specific payloads into product code.

Provider adapters must explicitly declare supported capabilities. Do not pretend all providers support the same countries, currencies, recurring flows, direct settlement, refunds or connected-account lifecycle.

Illustrative interface:

```ts
interface PaymentProviderAdapter {
  createCheckout(input: CheckoutInput): Promise<CheckoutResult>;
  verifyPayment(reference: string): Promise<PaymentResult>;
  verifyWebhook(input: WebhookInput): Promise<VerifiedEvent>;
  createRecipientAccount(input: RecipientInput): Promise<RecipientAccountResult>;
  getRecipientCapabilities(accountId: string): Promise<Capabilities>;
  createRecurringAgreement(input: RecurringInput): Promise<RecurringResult>;
  cancelRecurringAgreement(id: string): Promise<void>;
  refund(reference: string, amount?: Money): Promise<RefundResult>;
  getSettlement(reference: string): Promise<SettlementResult>;
}
```

The interface must be adapted to each provider's actual supported operations; unsupported methods must fail explicitly rather than simulate success.

## 6. Country-capability registry

**PROPOSED**

Maintain data/configuration for each country and provider pair. Track:

* Recipient onboarding availability.
* Individual and business eligibility.
* Payment acceptance.
* Recurring support.
* Payout capability.
* Supported presentment and settlement currencies.
* Verification requirements.
* Provider restrictions and effective dates.

A recipient's country, legal structure and provider capability must be evaluated before enabling financial functions.

## 7. Client applications

**UNDECIDED**

The support platform has not yet been explicitly scoped for native Android and iOS applications. A responsive web application is a reasonable initial proposal. Native mobile clients should be added only after their value, maintenance cost and required native capabilities are settled.

If multiple clients are approved, keep one authoritative backend and shared API contracts. Do not duplicate financial business logic in clients.

## 8. Deployment and operations

**UNDECIDED**

Choose hosting, regions, network architecture, database plan, backups, disaster recovery, secrets management, CI/CD, logging and monitoring later. The platform should remain portable enough to avoid unnecessary lock-in, but portability must not become an excuse to build excessive infrastructure before it is needed.

## 9. Architecture decision record policy

When work resumes, record consequential decisions with:

* Decision ID and date.
* Context and constraints.
* Options considered.
* Chosen option.
* Reasoning and rejected alternatives.
* Security, cost and operational effects.
* Status: proposed, approved, superseded or rejected.
* Approval owner.

No recommendation in this page should be treated as approved until it has an explicit decision record.
