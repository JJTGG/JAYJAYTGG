---
description: >-
  Mandatory TGG HUB principles and qualification gates for product ideas,
  experiments, and hackathon projects.
keywords:
  - global first
  - product governance
  - problem discovery
  - hackathon strategy
  - open source
  - interoperability
---

# Global-first product and project principles

**Status:** Governing policy **Effective date:** 27 November 2026 **Applies to:** TGG HUB product ideas, software projects, experiments, integrations, and hackathon submissions

This page defines the standards a project must satisfy before it is selected for implementation. A hackathon deadline, prize pool, sponsor, technology trend, or ability to build something is not sufficient reason to create a product.

The governing sequence is:

**Problem → evidence → global relevance → alternatives and gaps → proposed intervention → qualification → approval → design and implementation.**

A project must earn its place in the roadmap. It must not be reverse-engineered from a competition brief.

## 1. Rule No. 1 — Global first

**Global first is mandatory.** Products are conceived for people and organisations across the world from the beginning, not designed around one country or market and treated as global only after expansion.

Global first means:

* **Globally relevant problem:** The underlying need must exist beyond one locality, or there must be a clearly defensible reason that solving a specific problem has broader international value.
* **Geographical neutrality:** Do not make one country, region, currency, language, payment rail, platform, or legal environment an unnecessary prerequisite for the product's core value.
* **Inclusive access:** Account for differences in devices, connectivity, bandwidth, affordability, languages, time zones, accessibility needs, and levels of technical experience where relevant.
* **Adaptable by design:** Accommodate legitimate local differences without fragmenting the product into unrelated regional versions.
* **Globally workable architecture:** Avoid assumptions that only hold in one market. Consider international data formats, time handling, localisation, provider availability, and regional constraints from the beginning.
* **Evidence, not slogans:** Do not call a product global merely because it is available on the internet. Validate the problem and the proposed value across more than one context.

Global first does **not** require launching in every country simultaneously. Legal, regulatory, safety, infrastructure, language, or provider constraints may justify a staged rollout. Such constraints must be explicit, evidence-based, and revisited; they must not become arbitrary geographical exclusion.

## 2. Core product principles

These principles guide product decisions alongside Rule No. 1.

### Independence and user choice

* Avoid unnecessary dependence on one company, platform, vendor, model, payment provider, or infrastructure provider.
* Do not impose lock-in where portable data, replaceable services, or user-selected alternatives are practical.
* Preserve user control over workflows, integrations, providers, and their own information.

### Interoperability

* Prefer open standards, documented interfaces, portable formats, and well-defined integration boundaries.
* Make cooperation with independent tools and services possible where it serves users.
* Do not bundle unrelated capabilities merely to force adoption of one ecosystem.

### Open-source commitment

* Public by default; open source always.
* Choose a suitable recognised open-source licence and document the project's governance.
* Do not make private-code licensing the product's business model.
* Never expose credentials, secrets, private user information, or sensitive operational data in the name of transparency.

### Responsible competition

* Compete through usefulness, quality, reliability, accessibility, and user choice.
* Do not manufacture artificial scarcity, lock-in, or dependency.
* Do not misrepresent capabilities, fabricate evidence, or make unsupported guarantees.

### Privacy and user autonomy

* Collect only information necessary for a clearly explained purpose.
* Do not sell user data.
* Do not make advertising or subscriptions foundational to the current TGG HUB product direction.
* Give users meaningful control over their information and interactions.

### Accessibility and economic inclusion

* Avoid avoidable paywalls, expensive hardware assumptions, mandatory paid APIs, and unnecessary infrastructure requirements.
* Consider low-bandwidth and constrained-device use where technically relevant.
* Do not equate accessibility with merely making a product free; usability, language, assistive technology, and technical barriers matter too.

### Long-term responsibility

* Build within a maintainable scope.
* Understand hosting, API, storage, security, support, and maintenance costs before committing.
* A project should have a credible continuation path beyond a launch, demo, grant, or hackathon.

## 3. Problem first — no product without a problem

A project proposal must begin with a clearly stated problem, not a preferred technology, a sponsor's API, a fashionable category, or a feature list.

The problem statement must identify:

1. **Who experiences the problem:** User groups, roles, organisations, or affected communities. Do not assume everyone experiences it in the same way.
2. **What happens today:** The task, failure, friction, risk, cost, delay, or unmet need.
3. **Why it matters:** The practical consequences of leaving the problem unsolved.
4. **Where it occurs:** Different countries, industries, resource levels, devices, or operating contexts in which the problem appears.
5. **What supports the claim:** Direct user evidence, observed workflows, credible research, public issue reports, datasets, documented incidents, or other verifiable material.
6. **What remains uncertain:** Separate confirmed facts from assumptions and questions requiring investigation.

A compelling-sounding idea is not evidence. A problem affecting one known user is a useful lead, not automatic proof of global relevance. Discovery must test whether the problem is shared, how it differs by context, and whether a proposed intervention is justified.

## 4. Existing solutions and the actual gap

Before proposing a new product, investigate how people currently solve the problem.

The investigation must cover:

* Existing products, open-source projects, services, manual processes, and workarounds.
* Who those solutions serve and the contexts in which they work well.
* Their documented limitations, costs, dependencies, accessibility barriers, or interoperability gaps.
* Whether the alleged gap is real, material, and evidenced.
* Whether improving, extending, integrating with, or contributing to an existing solution would serve users better than creating another product.

Do not manufacture a competitive gap to justify building. Reuse and contribution are legitimate outcomes of discovery.

## 5. Project qualification gates

Every project proposal must pass the following gates before architecture or implementation is approved.

| Gate                                 | Required question                                                                                                          | Minimum evidence                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1. Problem validity                  | Is there a real, consequential problem?                                                                                    | Clear problem statement and credible evidence                                             |
| 2. Global relevance                  | Does the problem or its broader value extend across geographical contexts?                                                 | Evidence from more than one context, or a defensible global-use case with validation plan |
| 3. Existing alternatives             | What already addresses the problem, and where is the material gap?                                                         | Competitor, open-source, workflow, and workaround review                                  |
| 4. Intervention quality              | Why is this proposed intervention better than improving or connecting existing solutions?                                  | Specific mechanism of benefit and testable outcomes                                       |
| 5. Principle alignment               | Does the proposal uphold independence, interoperability, open source, privacy, accessibility, and responsible competition? | Explicit dependency, data, licensing, and access assessment                               |
| 6. Technical feasibility             | Can a useful and reliable version be built with available skills and resources?                                            | Scoped capability, validation plan, and known technical risks                             |
| 7. Sustainable value                 | Is it worth maintaining after the initial release or event?                                                                | Maintenance, operating-cost, governance, and continuation assessment                      |
| 8. Competition fit (when applicable) | Does the project genuinely solve the problem while meeting the event's rules?                                              | Verified eligibility, deliverables, judging criteria, IP terms, and deadline              |

A failed or unverified gate is not silently treated as passed. The proposal remains open, is deferred, or is rejected according to the evidence and the decision record.

**No architecture, repository creation, or implementation begins until the problem has been investigated, the qualification gates have been reviewed, and the project has received explicit approval.** Discovery work and non-binding research may happen before approval.

## 6. Hackathon participation rules

Hackathons are opportunities to demonstrate useful engineering and reach new communities. They do not override product governance.

Current participation constraints:

* **Solo participation:** Select individual-entry competitions. Do not assume team participation is acceptable.
* **Zero entry fees:** Reject competitions requiring payment to register or participate. Also inspect compulsory paid tools, APIs, credits, subscriptions, travel, or final-round fees; a free registration page does not prove a zero-cost route.
* **Global eligibility:** Verify that individual participants from Nigeria are eligible, including age, residency, sanctions, payment, identity, and tax requirements.
* **Broad technical scope:** Consider web development, AI and agents, software engineering, game development, cybersecurity, blockchain and Web3, data science and machine learning, IoT and embedded systems, and open-source engineering.
* **Flexible time allocation:** Choose a manageable number of active submissions. Do not sacrifice the reliability or governance of existing projects to chase deadlines.
* **Submission integrity:** Meet the actual rules for new work, source availability, demonstrations, documentation, attribution, and use of sponsor technologies.
* **Prize realism:** Treat prizes, interviews, jobs, exposure, and networking as possible outcomes, never guarantees.
* **IP and licensing:** Review ownership, submission licences, sponsor rights, third-party dependencies, and open-source licence compatibility before entering.

A hackathon's technology requirement may shape how an approved problem is demonstrated, but it must not manufacture the problem or force an unsuitable product direction.

## 7. Decision statuses

Use the existing project decision-register vocabulary consistently:

* **Approved:** The required evidence and gates have been reviewed; the project may proceed within its approved scope.
* **Supported in principle:** The direction is acceptable, but one or more material questions or gates remain open.
* **Open:** Under investigation; no commitment to build.
* **Deferred:** Deliberately postponed, with the reason recorded.
* **Rejected:** Does not meet the standard or is not worth pursuing; record the reason to avoid repeatedly reopening it without new evidence.

A competition deadline does not automatically change a proposal's status.

## 8. Current hackathon programme record

The current programme is governed by the following constraints:

| Item                            | Current decision                                                        |
| ------------------------------- | ----------------------------------------------------------------------- |
| Participation model             | Approved — solo entries                                                 |
| Entry cost                      | Approved — zero-fee only                                                |
| Technical categories            | Open — broad scope as listed above                                      |
| Available time                  | Flexible, subject to prioritisation                                     |
| Rule No. 1                      | Approved — global first                                                 |
| Problem-first development       | Approved — identify and validate the problem before selecting a product |
| Project selection               | Open — no hackathon project is approved by this policy alone            |
| Architecture and implementation | Not authorised until a problem and project pass review                  |

Previously discussed directions — including source-level repository auditing, Atlassian engineering tooling, agent interoperability, a Reddit game, and QNX developer tooling — remain **candidates for investigation only**. Their appearance here is not evidence that their underlying problems have been validated or that any project has been approved.

## 9. Review and change control

* Apply this standard before accepting a new product or hackathon project.
* Record evidence, assumptions, trade-offs, and decisions in the relevant project documentation.
* Any exception to a governing principle requires an explicit decision, a reason, an identified scope, and a review point. A competition deadline is not sufficient justification.
* Revisit decisions when materially new evidence appears.
* Keep the problem statement and its evidence separate from the proposed solution so that the solution can change without obscuring the original need.

**Governing directive:** We do not build because we can. We build because a problem deserves to be solved. We do not design for one market and later expand globally. We design for the world and accommodate its diversity from the beginning.
