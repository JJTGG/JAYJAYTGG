---
description: >-
  Private-by-default contribution handling, verification, security controls,
  trust and safety and operational readiness.
---

# Security, privacy and operations

> **Status:** Private-by-default direction and recipient verification requirement confirmed. Detailed controls and policies require implementation design and review.

## 1. Privacy direction

**CONFIRMED — USER-SELECTED:** Contribution visibility is private by default.

The selected direction allows supporters to choose whether they appear publicly, but the precise consent interface and fields have not been designed. Public display must be an affirmative choice, not an accidental consequence of making a payment.

A supporter choosing an anonymous or private public identity is not necessarily anonymous to the payment provider. Providers may still need payer identity and transaction information for verification, fraud, legal and payment-processing purposes.

## 2. Privacy access matrix — proposed

| Information              | Public visitor        | Supporter                   | Recipient                            | Administrator                         |
| ------------------------ | --------------------- | --------------------------- | ------------------------------------ | ------------------------------------- |
| Public recipient profile | Public fields         | Public fields               | Own profile                          | Authorised                            |
| Contribution amount      | Not public by default | Own records                 | Only as permitted for own recipient  | Restricted                            |
| Supporter identity       | Not public by default | Own identity                | Only as permitted by product policy  | Restricted                            |
| Supporter message        | Not public by default | Own message                 | If delivered to recipient            | Moderation access only when justified |
| Payment instrument data  | Never                 | Provider-managed view only  | Never                                | Never                                 |
| Provider references      | Never                 | Own receipt references only | Own transaction references as needed | Restricted                            |
| Payout/account details   | Never                 | Never                       | Own connected-account view           | Restricted operational access         |

This matrix is a proposed policy baseline and needs review before launch. Public pages must not expose private transaction details through API responses, HTML source, metadata, analytics events or caches.

## 3. Recipient verification

**CONFIRMED:** Every recipient must complete applicable verification before payouts.

The provider or approved verification partner should remain authoritative for its own KYC/KYB results and payment capabilities. Store only the minimum status and reference data needed by the application. Avoid collecting identity-document copies unless there is a lawful, operationally necessary and approved reason.

Keep these states distinct:

* Identity/business verification.
* Payment acceptance capability.
* Payout capability.
* Recipient account status.

**UNDECIDED:** Exact verification provider, document requirements, manual review process, re-verification interval, retention and appeals.

## 4. Security controls — required before real-money operation

* Strong authentication and account recovery.
* Role-based access control and least privilege.
* Multi-factor authentication for sensitive operations where feasible.
* Secure sessions and revocation.
* TLS in transit and encryption at rest.
* Secrets stored outside source control and client bundles.
* Webhook signature verification.
* Idempotent payment processing.
* Server-authoritative payment and capability checks.
* Rate limiting and bot/abuse protection.
* Secure file upload and content handling.
* Audit trails for administrative and financial actions.
* Dependency and vulnerability management.
* Backups with tested restoration.
* Monitoring and alerting for payment and reconciliation failures.
* Incident response and security disclosure procedures.

## 5. Threats to design against

* Account takeover and credential stuffing.
* Recipient impersonation.
* Fake project or charity claims.
* Stolen payment instruments.
* Card testing and payment fraud.
* Duplicate, replayed or forged webhooks.
* Cross-recipient data access.
* Privilege escalation through recipient membership.
* Malicious content and unsafe uploads.
* Refund abuse and chargeback abuse.
* Insider misuse of admin privileges.
* Secret leakage through logs, telemetry or error reports.

Fraud scoring and automated restriction policies should be reviewed for false positives and provide an appropriate human review/appeal path.

## 6. Trust and safety policies — undecided

Before accepting real contributions, define:

* Prohibited recipients and uses.
* Impersonation and misrepresentation rules.
* Restricted/high-risk categories.
* Fraud and suspicious activity handling.
* Content moderation responsibilities.
* Report and appeal workflows.
* Law-enforcement and regulator request handling.
* Sanctions screening responsibilities where applicable.
* Account suspension, termination and fund restriction procedures consistent with provider contracts and law.

Do not assume that “everyone” means every purpose or activity is eligible.

## 7. Refund, dispute and incident operations

Define ownership across the platform, recipient and payment provider for refunds, partial refunds, chargebacks, payment disputes, evidence submission, deadlines and negative balances.

Operational runbooks should cover:

* Provider outage.
* Delayed or failed settlement.
* Reconciliation mismatch.
* Suspected fraud incident.
* Data breach.
* Account compromise.
* Accidental public disclosure.
* Incorrect refund or duplicate charge.

## 8. Data retention and user rights

**UNDECIDED — legal review required**

Define retention periods for identity references, payment metadata, transaction records, messages, audit logs, support tickets and security logs. Financial record retention obligations may conflict with account deletion requests; design deletion, anonymisation and retention around applicable law rather than promising unconditional deletion.

Collect only what the product and legal obligations need. Do not sell personal information. The precise privacy policy, legal basis, data processor agreements and cross-border transfer measures remain to be drafted and reviewed.

## 9. Production readiness

Do not activate real-money payments until security testing, access-control testing, payment lifecycle tests, reconciliation checks, backup restoration, incident response, monitoring and provider operations are validated.
