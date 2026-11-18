---
description: >-
  Selected AGPL licensing direction, source governance, documentation controls
  and return-to-project procedure.
---

# Licensing and project governance

> **Status:** AGPL-3.0-or-later selected by the product owner. Detailed repository, contributor and compliance procedures remain to be established.

## 1. Licence decision

**CONFIRMED — USER-SELECTED DIRECTION:** AGPL-3.0-or-later.

The intended licence expression is:

> GNU Affero General Public License version 3 or (at your option) any later version.

Before the first source release:

* Include the complete AGPL-3.0 licence text in the LICENSE file.
* Use appropriate copyright and licence notices.
* Review dependency licences and notices.
* Provide corresponding source access for modified network-served versions as required by AGPL section 13.
* Document how contributors and users can obtain the corresponding source.
* Review all included assets, SDKs and third-party code for compatibility and provenance.

The final repository should not use a shortened licence summary in place of the complete licence text.

## 2. Legal review

The selected licence direction is recorded, but final legal review is still appropriate for:

* Whether all intended code and assets can be released under AGPL.
* Third-party dependency compatibility.
* Copyright ownership and contributor authority.
* Trademarks, brand assets and project name.
* Whether a contributor agreement or Developer Certificate of Origin is desirable.
* Source-code availability and deployment notices.
* Any separately licensed mobile SDKs or external components.

AGPL licensing does not automatically relicense independently operated payment providers, identity services, hosting platforms or other external services.

## 3. Open-source scope

**PROPOSED:** Release the platform's own application and infrastructure code under AGPL-3.0-or-later, including:

* Frontend and backend code.
* Database schemas and migrations.
* API contracts.
* Provider adapters.
* Deployment and operational configuration.
* Documentation and tests.

Final scope must distinguish the project's own code from third-party services, SDKs, branding, user content, secrets and personal data.

## 4. Governance and repository

**UNDECIDED:**

* Repository name and owner.
* Monorepo versus multiple repositories.
* Default branch and protection policy.
* Required CI checks.
* Release/versioning strategy.
* Security disclosure channel.
* Contribution review process.
* Contributor agreement or DCO.
* Maintainer permissions and succession.

No dedicated source-code repository for this platform has been created as part of this planning work.

## 5. Documentation governance

This private GitBook section is the working record of the support-platform decisions. Keep statuses explicit:

* **CONFIRMED — USER-SELECTED**
* **PROPOSED — NOT APPROVED**
* **UNDECIDED — NOT ESTABLISHED**
* **EXTERNAL APPROVAL / VERIFICATION REQUIRED**
* **DEFERRED**
* **NOT STARTED**

When a decision changes, update the appropriate page and record the reason and date. Never leave a superseded proposal looking current.

## 6. Project sequencing and resumption

**CONFIRMED:** BuildTrace remains the first development priority. This project is deferred until BuildTrace has been built and the product owner resumes the support-platform work.

At resumption:

1. Re-read the main overview and the open-decisions page.
2. Confirm the user-selected product direction remains unchanged.
3. Settle proposals and undecided items with the product owner.
4. Complete initial legal and payment-provider feasibility.
5. Approve the implementation stack and repository structure.
6. Update this documentation before implementation.
7. Create the source repository and establish CI, security and licensing controls.

## 7. Current status

* Product direction: documented.
* Preliminary architecture: documented as proposed.
* Outstanding decisions: documented.
* GitBook project section: being added to the private JAYJAYTGG space.
* Dedicated source repository: not created.
* Application code: not started.
* Provider approval: not obtained.
* Legal/regulatory review: not completed.
* Production operation: not started.
