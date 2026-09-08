# Legal Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.1  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `legal-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository** for evidence-backed legal production across Production Skills projects and Pactwright-governed delivery.

The project should help AI agents treat legal work as a production discipline rather than reducing it to template generation, generic disclaimers or unverified legal answers.

The target production loop is expected to resemble:

```text
project reality / proposed change
→ legal scope and jurisdiction
→ material facts and assumptions
→ issue spotting
→ authoritative legal research
→ applicability analysis
→ obligations / rights / risks / options
→ project recommendations and constraints
→ legal drafting or review where required
→ implementation-to-legal traceability
→ adversarial legal stress test
→ bounded correction / escalation
→ legal evidence package valid as of a known date
```

The exact workflow must be validated through domain research before it becomes a skill contract.

`legal-skills` owns reusable legal-production expertise: scoping, issue spotting, legal research, legal analysis, drafting, review, legal-product traceability, legal risk communication, legal evaluation and escalation. It does **not** own a consuming project's product decisions, Pactwright lifecycle, regulated professional representation, court advocacy or project-specific legal knowledge.

The repository must never imply that an AI system is a solicitor, barrister, trade mark attorney or other regulated legal professional. Where professional judgement, reserved legal activity, filing authority, representation or risk justifies specialist review, the workflow must make that handoff explicit.

---

## 2. Governing Sources

Use the current Production Skills bootstrap and family contracts as canonical:

- `production-skills/docs/bootstrap/README.md`
- `production-skills/docs/bootstrap/new-project-process.md`
- `production-skills/docs/bootstrap/domain-research-process.md`
- `production-skills/docs/bootstrap/shared-abstraction-process.md`
- `production-skills/docs/specs/01-production-skills-family-system.md`
- `production-skills/docs/specs/02-production-skills-project-contract.md`
- `production-skills/docs/specs/03-production-skills-evaluation-and-extension-packs.md`
- `production-skills/docs/specs/04-cross-domain-orchestration-and-integration.md`

Use mature Video, Narrative and Music Production Skills as evidence for proven family patterns only after the legal domain model has been independently understood. Use the UI/UX, Deep Research, Software Engineering and Game Development bootstraps as structural depth references.

Newer family requirements take precedence, especially:

```text
bootstrap workspace before substantive research
research logs as durable stage outputs
six canonical specs
5 levels × 3 primary examples
first-class Extension Packs
pack-authoring capability
core-vs-pack differential evaluation
clean external installation smoke tests
cross-domain integration without centralising consuming-project state
```

---

## 3. Initial Domain Evidence

The bootstrap begins from professional legal practice and authoritative sources rather than current LLM behaviour.

### AI-assisted legal work requires verification and supervision

The Solicitors Regulation Authority warning notice on misuse of AI, published 17 August 2026, identifies inaccurate or fabricated legal authorities and confidentiality failures as material risks and emphasises continuing professional accountability.

Design consequence:

```text
LLM output
≠ legal authority
≠ verified legal proposition
```

Reference:

- https://media.sra.org.uk/solicitors/guidance/misuse-ai/

### Privacy documents must reflect actual processing

ICO guidance on the right to be informed requires privacy information to reflect matters such as purposes, lawful basis, recipients, retention and rights. Current ICO guidance also notes changes arising from the Data (Use and Access) Act and that some guidance remains under review.

Design consequence:

```text
privacy notice
↔ actual data flows
↔ processors / recipients
↔ retention
↔ user controls
↔ valid-as-of legal guidance
```

References:

- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/

### Consumer terms are not merely contract templates

The Competition and Markets Authority updated its unfair contract terms guidance on 22 July 2026. The guidance focuses on fairness and transparency and sits alongside the Consumer Rights Act 2015 and the wider consumer-enforcement framework.

Design consequence:

Terms must be derived from the actual commercial model and evaluated for substantive fairness and transparency, not only completeness or prose quality.

References:

- https://www.gov.uk/government/publications/unfair-contract-terms-cma37
- https://www.gov.uk/guidance/writing-a-fair-contract-for-customers

### Trade mark analysis requires territory and goods/services

UK IPO guidance requires applicants to identify relevant goods/services and check identical or similar marks. Similar marks may justify professional advice before filing.

Design consequence:

```text
candidate mark
+ territory
+ goods / services
+ classification
+ search evidence
+ similarity analysis
+ uncertainty / escalation
```

References:

- https://www.gov.uk/search-for-trademark
- https://www.gov.uk/how-to-register-a-trade-mark/before-you-apply

### Copyright and AI are temporally sensitive

The UK government published its Copyright and Artificial Intelligence report and impact assessment on 18 March 2026. Policy, legislation, licensing practice and litigation can evolve independently.

Design consequence:

Legal Skills must resolve the law and authoritative guidance **valid for the matter date** rather than embedding apparently current conclusions into durable prompts.

Reference:

- https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence

### Domain implication

Legal production requires an evidence chain such as:

```text
material fact
→ legal issue
→ proposition
→ authority
→ applicability
→ conclusion / risk
→ project action
→ implementation / legal artefact
```

The conclusion must never become more certain than the facts, authority, jurisdiction or temporal analysis supporting it.

---

## 4. Governing Principles

Retain the Production Skills family rules and specialise them for legal work.

### Facts before conclusions

Establish material facts, assumptions, actors, jurisdictions, dates and project behaviour before reaching a legal conclusion.

### Jurisdiction before rule application

Resolve applicable territory, governing law, forum, actor and user locations, place of establishment, market offered into, asset/right territory and relevant dates where material. Do not build a universal conflict-of-laws engine during bootstrap.

### Authority before assertion

Prefer primary and authoritative legal sources where available. Distinguish legislation, case law, regulator rules/guidance, official registries, treaties, government guidance and secondary commentary. Their binding effect varies by jurisdiction and matter.

### Currency is part of correctness

Preserve, where relevant:

```text
law made
law commenced / effective
law amended / repealed
judgment date
appeal / later treatment
guidance publication / update date
retrieved-at date
analysis valid-as-of date
```

### Legal research and judgement remain distinguishable

Separate what an authority says, known facts, assumptions, derived propositions, application, uncertainty, risk, recommended action and specialist judgement.

### The document must match the product

Legal artefacts are production artefacts, not isolated prose:

```text
privacy notice ↔ data flows / retention / processors
terms ↔ subscriptions / cancellation / refunds
cookie notice ↔ actual tracking
open-source notice ↔ dependency licences
trade mark statement ↔ registry / ownership evidence
AI disclosure ↔ actual automated behaviour
UGC terms ↔ actual moderation / enforcement capabilities
```

### Cheapest adequate legal representation

Use the cheapest artefact capable of resolving the current uncertainty:

```text
matter brief before full memo
issue list before exhaustive research
authority table before polished advice
clause inventory before full redraft
redline before replacement agreement
trade mark knockout search before filing strategy
data-flow inventory before privacy notice
licence inventory before compliance report
```

### Preserve verified work and repair the smallest responsible unit

If one fact, proposition, authority or clause fails, preserve unaffected verified work and update only dependent conclusions, requirements and artefacts.

### Risk must remain inspectable

Do not collapse legal quality into one score. Keep dimensions such as authority strength, factual completeness, jurisdiction certainty, temporal currency, interpretive uncertainty, harm/exposure, reversibility and need for specialist review visible.

### Escalation is a production capability

When specialist review is required, produce a useful escalation package containing the question, facts, jurisdiction, authorities, analysis, conflicts/uncertainty, options and precise decision required.

### Confidentiality and privilege are design constraints

Tool selection must account for confidential, privileged, personal and commercially sensitive information, including provider retention/training terms, access control, data location and whether local/private execution is required.

### Professional boundary is explicit

Legal Skills may support legal research, analysis, drafting and review. It must not claim regulated professional status or silently cross into reserved activities, filing representation or advocacy requiring authorised practitioners.

---

# 5. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Project Goal, Users and Professional Boundary
    ↓
2. Research Professional Legal Practice
    ↓
3. Define Jurisdiction, Authority and Temporal-Validity Model
    ↓
4. Define Matter, Fact, Issue and Legal-Reasoning Artifacts
    ↓
5. Map Legal Research, Advice, Drafting and Review Workflows
    ↓
6. Define Project-to-Law Traceability and Change Impact
    ↓
7. Define Risk, Uncertainty, Escalation and Human Review
    ↓
8. Define Confidentiality, Privilege and Sensitive-Data Handling
    ↓
9. Research Legal AI Skills, Databases, Registries and Tools
    ↓
10. Choose Execution Layer
    ↓
11. Gap Analysis + Over-Engineering Guardrails
    ↓
12. Design Core Skills and Commands
    ↓
13. Design Extension Packs and Pack Authoring
    ↓
14. Design Progressive Examples
    ↓
15. Design Kakeibo + Worldstack Canonical Stress Tests
    ↓
16. Design Evals, Benchmarks and Regression Fixtures
    ↓
17. Generate Six Canonical Specs
    ↓
18. Design Public README
    ↓
19. Cross-Project Review
    ↓
20. Scaffold Production Repository
    ↓
21. Configure Skill Installation
    ↓
22. Local Validation
    ↓
23. Publish + Clean External Install Smoke Test
    ↓
24. Optional Pactwright Integration + Registry Promotion
    ↓
25. Review Shared-Abstraction Candidates
    ↓
READY FOR IMPLEMENTATION / MATURITY PROGRESSION
```

The Stage 0 repository is a **bootstrap workspace**, not the production scaffold created at Stage 20.

---

# 6. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/legal-skills` before substantive bootstrap research begins.

Initial structure:

```text
legal-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-legal-skills-new-project-bootstrap-process.md
```

The root README should state only the project name, provisional purpose and bootstrap status. `docs/research-logs/README.md` should explain that the directory is the durable store for bootstrap research and decisions.

Do not create yet:

```text
skills/
examples/
evals/
benchmarks/
extension-packs/
tools/
tests/
integrations/
.github/
package metadata
production CI
```

unless genuinely required by bootstrap research itself.

### Research-log rule

Every substantive later stage should persist detailed findings before the next stage begins. Conversation should carry summaries, decisions and corrections; the repository should carry the durable evidence, matrices, alternatives and architecture analysis later stages must consume.

Suggested stage-log pattern:

```text
docs/research-logs/
├── 2026-09-08-legal-skills-new-project-bootstrap-process.md
├── YYYY-MM-DD-stage-01-domain-boundary.md
├── YYYY-MM-DD-stage-02-professional-practice.md
├── YYYY-MM-DD-stage-03-jurisdiction-authority-temporal-model.md
└── ...
```

Creating this repository does **not** make `legal-skills` `scaffolded` in the family registry.

**Exit:** the workspace repository exists and later stages can persist research without relying on long conversation context.

---

# 7. Stage 1 — Define Project Goal, Users and Professional Boundary

Resolve:

```text
owned legal outcomes
intended users
core matter classes
initial proving jurisdictions
human review requirements
regulated-practitioner handoffs
explicit non-goals
boundary between reusable legal production and project-specific legal knowledge
interfaces with Pactwright and other Production Skills
```

Investigate whether core responsibility should include:

```text
legal scoping / issue spotting
authoritative legal research
analysis / option framing
drafting
review / redlining
legal-product consistency
legal change impact
risk / uncertainty communication
specialist escalation packaging
```

Do not assume litigation, tax, criminal, family, immigration, employment, corporate transactions or patent prosecution belongs in core merely because it is legal.

Persist the project charter, professional-boundary map, intended-user map, jurisdiction strategy, quality definition, review/escalation points and non-goals.

**Exit:** a defensible legal-production boundary exists without a fixed skill count or template catalogue.

---

# 8. Stage 2 — Research Professional Legal Practice

Study complementary practices rather than forcing one universal workflow:

```text
in-house product / technology counsel
commercial contracting
privacy / data protection
consumer / digital commerce
intellectual property and trade marks
copyright / licensing / media
open-source compliance
financial-services / fintech regulatory analysis
AI / automated-system regulation
legal research and memorandum practice
legal operations / matter management
transactional due diligence
regulatory compliance / controls
```

For each stream capture roles, professional duties, matter intake, fact gathering, issue spotting, jurisdiction analysis, source hierarchy, research method, drafting/review, filing/registration boundaries, risk communication, handoffs, change monitoring, failure modes and repair strategies.

Key questions include:

- How are facts separated from assumptions and legal conclusions?
- How is authority checked for currency and later treatment?
- How are conflicting authorities presented?
- How are law and contracts translated into product/engineering requirements?
- How are product changes detected when they invalidate legal documents?
- When must specialist counsel or a regulated professional take over?
- How do confidentiality and privilege constrain tools?

Persist professional-practice research, a practice comparison matrix, terminology glossary, failure taxonomy and candidate quality dimensions.

**Exit:** the production model is grounded in legal practice rather than chat patterns or template websites.

---

# 9. Stage 3 — Define Jurisdiction, Authority and Temporal-Validity Model

Model the smallest useful jurisdiction context, authority record and temporal-validity contract.

Candidate jurisdiction fields:

```text
matter territory
governing law
forum / regulator
actor / entity location
consumer / user location
place of establishment / offering
data-subject location
asset / right territory
choice-of-law terms
material dates
cross-border questions
```

Candidate authority fields:

```text
authority identity
source URL / citation / registry reference
authority type
jurisdiction
issuing body / court / regulator
binding / persuasive / guidance status where knowable
publication / judgment date
effective / commencement date
amendment / repeal status
appeal / later treatment where material
retrieved-at
valid-as-of
proposition supported
pinpoint reference where permitted
verification status
```

Research official legislation, judiciary/case-law sources, regulators, UK IPO/EUIPO/WIPO/USPTO and equivalent registries, EUR-Lex, corporate registries and licensed legal databases where available.

Do not collapse:

```text
jurisdiction ≠ governing law ≠ forum
authority ≠ proposition ≠ interpretation
publication date ≠ effective date
regulator guidance ≠ legislation
registry search ≠ legal clearance
current source ≠ current law automatically
```

**Exit:** a material proposition can be tied to verified authority and a defined jurisdiction/time context.

---

# 10. Stage 4 — Define Matter, Fact, Issue and Legal-Reasoning Artifacts

Define minimal durable artefacts for:

```text
matter brief
fact / assumption record
legal issue
legal proposition + authority
legal conclusion / risk item
legal requirement / project constraint
legal document / clause state
escalation package
```

Preserve relationships such as:

```text
project fact
→ issue
→ proposition
→ authority
→ analysis
→ conclusion / risk
→ project requirement
→ implementation / document
→ acceptance evidence
```

Avoid a universal legal knowledge graph unless implementation evidence later proves it necessary.

**Exit:** legal work can be audited from project fact to authority to conclusion to action.

---

# 11. Stage 5 — Map Legal Research, Advice, Drafting and Review Workflows

Validate at least these workflow families.

### Legal advice

```text
intake
→ facts / assumptions
→ jurisdiction
→ issue spotting
→ research
→ authority verification
→ application
→ options / risks
→ recommendation
→ review / escalation
→ valid-as-of delivery
```

### Drafting

```text
purpose / parties / audience
→ project facts
→ rights / obligations
→ authority / policy constraints
→ clause plan
→ draft
→ clause review
→ cross-document consistency
→ product consistency
→ redline / revise
→ approval
```

### Review / redlining

```text
review brief
→ authoritative document/version
→ clause / obligation map
→ omissions / conflicts / ambiguity
→ verify legal assertions
→ compare with product behaviour
→ smallest sufficient changes
→ preserve unaffected approved text
→ re-evaluate
```

### Trade mark / brand

```text
candidate mark
→ territory
→ goods / services
→ classification
→ identical / similar search
→ result triage
→ similarity / conflict analysis
→ risk / options
→ professional escalation / filing handoff
```

### Privacy / data

```text
data-flow inventory
→ roles / actors
→ purposes / data categories
→ legal basis / conditions
→ sharing / transfers
→ retention
→ rights / controls
→ risk / DPIA questions
→ requirements
→ privacy artefacts
→ implementation consistency
```

**Exit:** the repository has credible legal work loops rather than a list of document generators.

---

# 12. Stage 6 — Define Project-to-Law Traceability and Change Impact

Support both directions:

```text
project behaviour
→ legal issue
→ authority / proposition
→ legal requirement / risk
→ implementation / process / document
→ acceptance evidence
```

and:

```text
project change
→ changed facts
→ affected legal issues / requirements
→ affected implementation
→ affected legal documents
→ targeted re-review
```

Important consistency surfaces include privacy/data, consumer terms/commercial flows, disclosures/UI, licence obligations/dependencies/assets, trade mark claims/registry evidence, AI disclosures/actual AI use, age/child protections and UGC moderation/enforcement.

When Pactwright is present, Legal Skills should supply legal requirements, constraints, review findings and verification inputs. Pactwright remains owner of lifecycle, Contracts and Evidence semantics.

**Exit:** legal analysis can drive production changes and later product changes can trigger bounded legal re-review.

---

# 13. Stage 7 — Define Risk, Uncertainty, Escalation and Human Review

Do not use a single numeric legal-risk score by default.

Research dimensions such as:

```text
authority clarity
factual uncertainty
jurisdiction uncertainty
financial / operational exposure
consumer or user harm
enforcement exposure
brand / reputation impact
irreversibility
deadlines
need for specialist judgement
```

Define controlled confidence language, for example:

```text
clear requirement
strong interpretation
reasonable but contestable interpretation
open / unsettled question
insufficient facts
insufficient authority
jurisdiction unresolved
professional opinion required
```

Research escalation triggers including reserved activity/representation, material enforcement or litigation risk, conflicting high-level authority, uncertain cross-border applicability, trade mark conflicts, financial-regulatory perimeter questions and novel AI/IP issues.

**Exit:** the system can remain useful without inventing certainty.

---

# 14. Stage 8 — Define Confidentiality, Privilege and Sensitive-Data Handling

Research confidentiality, privilege, personal data, commercial secrets, security-sensitive information, provider retention/training, connector access, logs, prompt/output storage, local/private execution, redaction, minimisation and retention/deletion.

For every material execution provider/tool, record where knowable:

```text
data sent
storage / retention
training use
access controls
region / transfer implications
enterprise controls
local / offline option
permitted matter classes
prohibited matter classes
```

The workflow must be able to select public research, redaction, approved private provider, local execution or non-disclosure of sensitive material.

**Exit:** legal work can be routed without casually exposing confidential or privileged information.

---

# 15. Stage 9 — Research Legal AI Skills, Databases, Registries and Tools

Research existing capability before implementing native infrastructure:

```text
legal research / drafting / contract-review Agent Skills
legal databases and APIs
case-law sources / citators
legislation sources
regulator sources
trade mark / design / patent registries
company registries
contract diff / redlining tools
open-source licence scanners / SBOM tooling
privacy / data-mapping tools
policy / compliance tools
document parsing / clause extraction
authority verification tools
legal AI providers
MCPs / connectors
legal-AI evaluation frameworks
```

Evaluate jurisdiction coverage, authority coverage, currency, citation behaviour, confidentiality controls, cost, composability, maintenance and whether each capability should be `USE`, `ADAPT`, `REFERENCE` or `REJECT`.

**Exit:** the project knows what it should orchestrate rather than rebuild.

---

# 16. Stage 10 — Choose the Execution Layer

Legal Skills should own:

```text
matter scoping
fact / assumption discipline
issue spotting
jurisdiction workflow
authority / currency requirements
legal reasoning artefacts
risk / uncertainty communication
drafting / review grammar
project-to-law traceability
change impact
smallest-sufficient repair
legal quality evaluation
escalation semantics
```

Existing tools should execute, where suitable, search/retrieval, citator checks, official registry queries, document parsing/diffing, licence/SBOM scans, private document retrieval and authorised filing systems.

Do not build a universal legal database, registry mirror or provider framework.

**Exit:** execution tools can change without redesigning legal-production semantics.

---

# 17. Stage 11 — Gap Analysis and Over-Engineering Guardrails

Classify required capabilities as:

```text
covered
partially covered
missing
```

Pay particular attention to jurisdiction resolution, authority verification, effective-date checks, later-treatment checks, fact/assumption separation, claim-to-authority traceability, product/document consistency, trade mark search interpretation, licence/provenance reasoning, legal change impact, uncertainty/escalation, confidentiality-aware routing and bounded repair.

Defer unless proven necessary:

```text
universal legal knowledge graph
custom case-law database
custom legislation mirror
custom trade mark engine
universal citator
universal jurisdiction engine
universal compliance ontology
regulatory-change SaaS
one legal-risk score
autonomous legal sign-off
filing automation by default
persistent cross-project matter database
universal legal workflow DSL
multi-agent law-firm simulation
```

**Exit:** native skills are justified by production gaps rather than platform ambition.

---

# 18. Stage 12 — Design Core Skills and Commands

Lean hypothesis to validate:

```text
legal-production
legal-evaluate
legal-extension-pack-creator
```

Possible `legal-production` commands:

```text
scope-matter
resolve-jurisdiction
build-fact-model
spot-issues
plan-research
research-authorities
verify-authority
analyse
identify-requirements
advise
draft
review
redline
trace-requirements
check-product-consistency
analyse-change-impact
trade-mark-screen
licence-review
refresh-analysis
prepare-escalation
```

Possible `legal-evaluate` commands:

```text
audit-facts
audit-jurisdiction
audit-authorities
audit-citations
audit-currency
audit-reasoning
audit-risk-language
audit-document-completeness
audit-clause-fairness
audit-cross-document-consistency
audit-product-consistency
audit-licence-compliance
audit-trade-mark-analysis
audit-confidentiality-route
diagnose-legal-failure
```

Retain a command only when it improves isolated evaluation, reuse, composition, diagnosis, targeted repair or benchmark precision.

Do not create one skill per area of law by default. Split only when a capability has coherent independent installation value and its own benchmark surface.

**Exit:** every installable skill and command has a defensible production responsibility.

---

# 19. Stage 13 — Design Extension Packs and Pack Authoring

## Jurisdiction is context, not a normal Extension Pack

Do not model ordinary operation as:

```text
legal-skills + uk-law-pack
legal-skills + eu-law-pack
legal-skills + us-law-pack
```

Every run must resolve jurisdiction and current authority as matter context. Jurisdiction-specific references/source profiles may exist internally, but a pack should represent a reusable **matter specialisation that materially changes production behaviour**.

Candidate pack families to research:

```text
privacy-data-protection
consumer-digital-commerce
trademark-and-brand
copyright-and-content-licensing
open-source-licensing
games-media-and-ugc
financial-products-and-fintech
ai-and-automated-systems
commercial-contracts
```

A valid pack may alter issue spotting, specialist source ecology, required facts, artefacts, research questions, drafting grammar, review/escalation thresholds, product-consistency tests and evaluation criteria.

Precedence must respect applicable authority:

```text
verified applicable law / authority
+ legally permissible explicit project instructions
→ approved legal / product decisions
→ selected Extension Pack
→ core Legal Skills defaults
```

Pack authoring should follow:

```text
inspect catalogue
→ justify reusable specialisation
→ research specialist practice
→ define source ecology + jurisdiction interaction
→ define required facts / artifacts
→ define changed core behaviour
→ define escalation boundaries
→ define pack-aware evals
→ create showcase + exact prompt
→ compare core vs core+pack
→ validate / catalogue
```

**Exit:** a legal pack is demonstrably different from a jurisdiction label, project brief or generic legal prompt.

---

# 20. Stage 14 — Design Progressive Examples

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Select examples through capability coverage, not intuition.

Proposed levels:

### Level 1 — Verify one bounded legal question

Examples may include one privacy disclosure question, one open-source licence obligation and one bounded trade mark screening task.

### Level 2 — Review one bounded artefact or decision

Examples may include consumer terms, cookie/analytics UX consistency and product-name screening.

### Level 3 — Produce a focused end-to-end legal package

Examples should span substantially different legal ecologies such as a small web-service privacy/terms package, open-source project licensing/brand review and creator/asset licensing workflow.

### Level 4 — Handle cross-functional complexity and change impact

Examples may include a consumer fintech-style application, UGC/AI digital product and multi-provider product with international data flows.

### Level 5 — Govern legal production across a complex cross-domain project

Examples may include real-world open-world simulation, multi-market consumer launch and a complex Production Skills programme with generated/licensed assets.

Across all 15 cover authority types, changing vs stable law, jurisdiction ambiguity, fact incompleteness, privacy, consumer, IP, licensing, AI, trade marks, open source, fintech boundaries, drafting/review, product consistency, change impact, confidentiality, packs, escalation, cross-domain handoffs and Pactwright-compatible evidence.

Every primary example must contain its complete copyable prompt.

**Exit:** the example set teaches legal production, not fifteen variants of document drafting.

---

# 21. Stage 15 — Design Kakeibo and Worldstack Canonical Stress Tests

These are deliberately different consuming-project fixtures. Their project-specific conclusions remain in those projects.

## Kakeibo

Exercise:

```text
privacy / data protection
data roles / processors / retention / transfers
cookies / telemetry
consumer terms
subscription / cancellation / refund behaviour
financial-regulatory perimeter issue spotting
Kei assistant boundaries and AI disclosures
open-source licensing
third-party dependency / asset licensing
Kakeibo / Kei brand and trade marks
marketing claims
vulnerable-consumer implications where relevant
```

Adversarial examples should include legal text contradicting retention, refunds, processor sharing or assistant behaviour; missing open-source obligations; exact-match-only trade mark analysis; and stale privacy guidance.

Success means Legal Skills connects law, actual product behaviour, architecture, UX, commercial terms, AI, open source and brand concerns without becoming Kakeibo-specific infrastructure.

## Worldstack

Exercise:

```text
map / geographic-data licences and database rights
photography / reference-image copyright
architecture / public-space representation
trade marks / signage / trade dress
creative-reference copyright
real-person likeness / privacy / publicity
defamation / false implication
news / social / public-body representation
music / broadcast references
UGC / moderation
AI-generated asset provenance
training / reference dataset permissions
open-source / engine / asset licences
platform terms
age-related concerns where applicable
worldwide distribution / jurisdiction differences
```

The stress test should verify provenance, ownership/licence/exception distinctions, brand/person/public-body issues, cross-domain legal constraints, lowest-cost safe alternatives, specialist escalation, Pactwright-compatible requirements and bounded re-review when source provenance or distribution changes.

Adversarial examples should challenge assumptions such as "publicly visible means reusable", "public data means unrestricted", "generated means rights-free", or "UK analysis automatically covers worldwide distribution".

Combined value:

```text
Kakeibo
→ consumer + privacy + fintech boundary + AI assistant + open source + brand

Worldstack
→ IP + licensing + real-world representation + media + UGC + generated assets + cross-domain production
```

**Exit:** the architecture survives two substantially different consuming projects without embedding either project's legal conclusions into core.

---

# 22. Stage 16 — Design Evals, Benchmarks and Regression Fixtures

Separate evaluation layers.

### Deterministic repository / artefact validation

Check required matter metadata, jurisdictions, authority identities, retrieved-at/valid-as-of data, fact/proposition/requirement references, document identifiers, self-containment and installation integrity.

### Authority verification

Test that authorities exist, match the stated jurisdiction/type, support the proposition, prefer primary/official sources where appropriate and are checked for updates/later treatment when material.

### Temporal validity

Include fixtures involving updated regulator guidance, legislation not yet commenced, changed rules, appealed/limited cases and analysis valid for one launch date but not another.

### Legal reasoning

Keep fact completeness, issue spotting, jurisdiction correctness, rule selection, authority strength, application, counterarguments/exceptions, uncertainty calibration and scope discipline separate.

### Drafting / review

Evaluate purpose/audience fit, subject coverage, internal/cross-document consistency, fairness/transparency where relevant, preservation of approved positions, and absence of invented facts or unsupported legal claims.

### Legal-product consistency

First-class fixtures should compare:

```text
privacy notice ↔ data-flow fixture
terms ↔ cancellation/refund fixture
licence notices ↔ dependency manifest
trade mark claim ↔ registry evidence
AI disclosure ↔ assistant behaviour
UGC terms ↔ moderation capability
```

### Trade mark, licence and provenance

Test territory, goods/services, classification, similar-mark searching, search-vs-clearance distinction, licence version, permissions/restrictions/obligations, distribution-model relevance and provenance continuity.

### Confidentiality routing

Sensitive fixtures should trigger correct redaction, approved private/local execution or prohibition on unsuitable provider use.

### Preservation and repair

Test that one wrong fact, stale authority, defective clause or inconsistent implementation can be repaired without regenerating unaffected verified legal work.

### Extension Packs

Test activation, non-activation, precedence, specialist issue spotting/source selection, jurisdiction interaction, changed review criteria and core-vs-pack differential behaviour.

### End to end

Use progressive examples plus Kakeibo and Worldstack stress-test slices.

Priority adversarial regressions include fabricated authority, wrong-proposition citation, stale guidance, law-before-commencement, wrong jurisdiction, template assumptions, exact-match-only trade mark search, wrong licence version, confidential material routed through unsuitable tools, false certainty and generic escalation.

**Exit:** authority, reasoning, drafting and implementation-consistency failures can fail independently.

---

# 23. Stage 17 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-legal-skills-system-spec.md
├── 02-legal-skills-workflows-and-artifacts-spec.md
├── 03-legal-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-legal-skills-customisation-packs-spec.md
└── 06-legal-skills-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, boundaries, principles, core skills, authority/jurisdiction strategy, execution, confidentiality, human review, build order.
2. **Workflows and Artifacts:** matter intake, facts, issues, authorities, research, advice, drafting/review, requirements, traceability, change impact, uncertainty, escalation and repair.
3. **Repository and Contracts:** structure, SKILL.md/command contracts, self-containment, references/scripts/evals, installation, CI and confidentiality-sensitive execution notes.
4. **Testing and Benchmark:** authority/citation validation, temporal validity, reasoning, drafting/review, product consistency, trade mark/licence evaluation, progressive examples, stress tests, packs and regressions.
5. **Customisation / Extension Packs:** pack model, jurisdiction-vs-pack distinction, activation/precedence, specialist sources/artifacts, core effects, evaluation, packaging and authoring.
6. **Catalogue:** curated packs, production profiles, jurisdiction interactions, showcases, exact prompts, pack-specific evals and maturity.

Generate these specs from persisted research logs rather than reconstructing decisions from conversation history.

**Exit:** implementation can proceed without inventing legal architecture in code.

---

# 24. Stage 18 — Design Public README

Follow the proven family README structure, adapted to legal production:

```text
# Legal Skills
positioning
legal-production capabilities
jurisdiction / authority / verification model
professional boundary
installation
quick start
5 × 3 Learn by Doing Legal Production
project structure grows with the work
core skills
Extension Packs
execution / authoritative sources
evaluation / benchmarks
Kakeibo + Worldstack stress tests
documentation
boundary
contributing
licence
```

A positioning direction to test:

> Turn project reality into traceable legal requirements, advice and documents.

Do not claim autonomous legal representation or generic compliance certification.

**Exit:** a public user can understand the product and its professional boundary before implementation scaffolding.

---

# 25. Stage 19 — Cross-Project Review

Compare the independently derived legal model with Deep Research, Software Engineering, UI/UX, Game Development and mature creative Production Skills.

Pay particular attention to the likely boundary:

```text
Deep Research
→ general evidence acquisition / synthesis

Legal Skills
→ legal authority, applicability, legal reasoning and legal artefacts
```

Record but do not prematurely promote candidates such as valid-as-of metadata, evidence/provenance handoff, requirement-to-implementation traceability, change-impact handoff and confidentiality-aware execution metadata.

Apply the family extraction rule: share only after multiple independent domains demonstrate substantially the same need.

**Exit:** shared evidence is captured without turning the central Production Skills repo into a compliance platform.

---

# 26. Stage 20 — Scaffold Production Repository

Only now expand the Stage 0 workspace into the production scaffold justified by the six specs.

Likely baseline:

```text
legal-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-legal-skills-system-spec.md
│   ├── 02-legal-skills-workflows-and-artifacts-spec.md
│   ├── 03-legal-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-legal-skills-customisation-packs-spec.md
│   ├── 06-legal-skills-extension-pack-catalogue.md
│   └── research-logs/
├── skills/
├── examples/
├── benchmarks/
├── tests/
├── tools/                 # only when justified
├── extension-packs/       # once implemented
├── integrations/          # optional
└── .github/
```

Do not create a jurisdiction directory tree, legal database, persistent matter store or empty pack catalogue for symmetry.

This is the point at which `scaffolded` maturity may become appropriate if the family evidence requirements are met.

**Exit:** every committed production directory has an immediate purpose.

---

# 27. Stages 21–23 — Installation and Validation

## Stage 21 — Configure Skill Installation

Validate Agent Skills installation and selective installation. The provisional names remain:

```bash
npx skills add sb-dev/legal-skills \
  --skill legal-production \
  --skill legal-evaluate \
  --agent claude-code
```

Installation success must not imply that the selected AI/provider is suitable for every legal matter; preserve the confidentiality/tool-eligibility model.

## Stage 22 — Local Validation

Validate repository contracts, skill/command discovery, references, authority/artifact validators, benchmark fixtures, Extension Packs when implemented, prompt completeness, stress-test integrity and README claims.

## Stage 23 — Clean External Install Smoke Test

From a clean consumer project, install from GitHub, run a bounded Level 1 task, verify matter/authority/output artifacts, run independent evaluation, test selective install, verify jurisdiction/valid-as-of metadata and confirm there are no source-checkout-relative dependencies.

**Exit:** Legal Skills behaves as an installable Agent Skills product rather than a source-repository-only workflow.

---

# 28. Stage 24 — Optional Pactwright Integration and Registry Promotion

If useful, add:

```text
integrations/pactwright.yml
```

It may describe compatibility and capability bindings only.

Integration hypothesis:

```text
Pactwright project change / Contract
→ Legal Skills scope / research / analysis
→ legal requirements / constraints / review points
→ authorised implementation work
→ implementation Evidence
→ Legal Skills consistency verification
→ Pactwright lifecycle gate
```

Pactwright owns lifecycle/governance; Legal Skills owns legal-production semantics.

Maturity remains evidence-based:

```text
proposed
→ researching
→ specified
→ scaffolded
→ working
→ benchmarked
→ mature
```

Repository creation alone does not promote maturity. `working` requires an installed end-to-end legal-production example using verified authority. `benchmarked` requires meaningful authority/reasoning/drafting/product-consistency regressions. `mature` requires the family contract, progressive examples, packs, pack authoring, benchmark coverage, Kakeibo and Worldstack stress-test programmes and clean external installation.

---

# 29. Stage 25 — Review Shared-Abstraction Candidates

After implementation evidence exists, apply `shared-abstraction-process.md`.

Potential candidates include:

```text
valid-as-of metadata
source / provenance handoff
evidence-backed requirement handoff
change-impact handoff
confidentiality-aware execution metadata
```

Do not centrally promote a legal runtime, legal knowledge database, universal jurisdiction engine, universal compliance graph, universal risk score, universal regulatory monitor or universal legal pack interpreter without repeated independent domain evidence.

---

# 30. Legal-Specific Acceptance Gates

Before `legal-skills` can be considered mature, demonstrate:

### Research and analysis

- facts and assumptions are distinguished;
- jurisdiction is resolved or explicitly unresolved;
- authoritative sources are preferred where appropriate;
- authorities are verified rather than invented;
- propositions trace to authority;
- temporal validity is explicit;
- conflicting/limiting authority is represented when material;
- conclusions do not exceed factual/legal certainty;
- requirements are actionable by consuming projects;
- escalation is specific and useful.

### Drafting and review

- documents derive from actual product/transaction behaviour;
- project facts are not invented to fill templates;
- clause repair preserves unaffected approved work;
- cross-document contradictions are detectable;
- legal-product inconsistencies are detectable;
- consumer documents are evaluated for transparency/fairness where applicable.

### IP and licensing

- trade mark analysis includes territory and goods/services;
- source/asset provenance survives production handoffs;
- licence obligations are applied to actual use/distribution;
- public availability is never treated as sufficient permission;
- uncertain conflicts escalate appropriately.

### Confidentiality

- tool routing accounts for sensitivity;
- public-provider use is not assumed safe;
- minimisation/redaction/private/local execution can be selected;
- public benchmarks use public or synthetic data.

### Evaluation and product behaviour

- fabricated authority, stale authority, wrong jurisdiction and unsupported reasoning can fail independently;
- drafting quality is separate from legal correctness;
- legal-product consistency is independently tested;
- verified unaffected work is preserved during repair;
- known defects become regression fixtures;
- packs materially change legal behaviour and are differentially evaluated;
- Kakeibo and Worldstack exercise distinct legal surfaces;
- core works without packs;
- jurisdiction does not depend on a jurisdiction pack;
- 15 primary examples exist with exact prompts;
- six canonical specs exist;
- professional boundaries are explicit;
- local and clean external installation pass.

---

# 31. Initial Non-Goals

Until evidence proves otherwise, `legal-skills` is not:

- a law firm or substitute for regulated professional representation;
- an autonomous court-filing or litigation-advocacy system;
- a tax, immigration, criminal, family, employment, patent or corporate-law omnibus;
- a universal legal research database;
- a replacement for commercial legal information providers;
- a central store of consuming-project legal matters;
- a regulatory-change SaaS platform;
- a universal policy-as-code engine;
- a jurisdiction ontology project;
- a compliance certification authority;
- a system that claims a product or document is "legally compliant" without scoped jurisdiction, facts, authority and valid-as-of context;
- a generic legal disclaimer generator.

---

# 32. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning `legal-skills` from first principles.

The resulting project should make AI-assisted legal production:

```text
more fact-aware
more jurisdiction-aware
more authority-backed
more temporally correct
more explicit about uncertainty
more consistent with actual product behaviour
more capable of translating law into production constraints
more resistant to fabricated or stale authority
more efficient to review and repair
more precise about when specialist counsel is required
```

while remaining a lean Agent Skills project rather than becoming a universal legal platform before the need is proven.