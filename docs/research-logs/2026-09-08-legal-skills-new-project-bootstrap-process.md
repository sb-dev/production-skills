# Legal Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `legal-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository** for legal production support across Production Skills projects and Pactwright-governed delivery.

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

Compare mature family implementations only after the legal domain model has been independently understood:

- `video-production-skills`
- `narrative-production-skills`
- `music-production-skills`

Use the 7 September 2026 domain bootstraps as structural depth references, especially:

- `deep-research-skills`
- `game-development-skills`
- `software-engineering-skills`
- `ui-ux-design-skills`

Newer family requirements take precedence, especially:

```text
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

The bootstrap must begin from professional legal practice and authoritative legal sources rather than current LLM behaviour.

Initial evidence already establishes several design constraints.

### AI-assisted legal work requires verification and supervision

The Solicitors Regulation Authority's 17 August 2026 warning notice on misuse of AI identifies fabricated or inaccurate legal authorities and confidentiality failures as material risks. It emphasises that regulated professionals remain accountable for AI-assisted work and that named legal authorities must be genuine, relevant and verifiable.

Design consequence:

```text
LLM output
≠ legal authority
≠ verified legal proposition
```

The project therefore needs source verification, authority provenance, confidentiality-aware tool selection and explicit escalation / review semantics.

Reference:

- https://media.sra.org.uk/solicitors/guidance/misuse-ai/

### Privacy documents must reflect actual processing

ICO guidance on the right to be informed requires privacy information to describe matters such as processing purposes, lawful basis, recipients, retention, rights and, where applicable, automated decision-making. Current ICO guidance also flags areas under review following the Data (Use and Access) Act.

Design consequence:

A privacy notice cannot be evaluated only as prose. It must be tested against the product's real data flows, retention behaviour, processors and user-facing controls, with temporal validity preserved.

References:

- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/

### Consumer terms are not merely contract templates

The Competition and Markets Authority updated its unfair contract terms guidance on 22 July 2026. The guidance focuses on fairness and transparency and sits alongside the Consumer Rights Act 2015 and the wider consumer-enforcement framework.

Design consequence:

Terms and conditions must be derived from the actual commercial model and reviewed for substantive fairness and transparency, not only completeness or grammatical quality.

References:

- https://www.gov.uk/government/publications/unfair-contract-terms-cma37
- https://www.gov.uk/guidance/writing-a-fair-contract-for-customers

### Trade mark analysis requires marks, goods/services and territory

UK IPO guidance requires checking identical or similar marks and considering the goods and services for which protection is sought. Similar marks can require professional advice before filing.

Design consequence:

Trade mark work must preserve:

```text
candidate mark
+ territory
+ goods / services
+ classification
+ search evidence
+ similarity analysis
+ uncertainty / escalation
```

A name-only web search is not a trade mark clearance workflow.

References:

- https://www.gov.uk/search-for-trademark
- https://www.gov.uk/how-to-register-a-trade-mark/before-you-apply

### Copyright and AI are temporally sensitive

The UK government published a Copyright and Artificial Intelligence report and impact assessment on 18 March 2026. Policy, legislation, licensing practice and litigation can evolve independently.

Design consequence:

The project must resolve **law and authoritative guidance valid as of the matter date** rather than embedding apparently current copyright/AI conclusions into durable core prompts.

Reference:

- https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence

### Domain implication

Legal production needs stronger evidence discipline than a generic document-writing family:

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

The legal conclusion must never become more certain than the facts, authority or jurisdictional analysis supporting it.

---

## 4. Required Bootstrap Outputs

The staged process must produce:

1. a clear Legal Skills goal, scope and professional boundary;
2. research into real legal practice across advisory, transactional, regulatory, IP and legal-operations work;
3. a jurisdiction, governing-law and temporal-validity model;
4. an authority and legal-source hierarchy model;
5. a matter, fact, issue, proposition, authority, conclusion and action model;
6. a legal research and verification workflow;
7. a legal drafting, review and redlining workflow;
8. a project-to-law traceability model;
9. a risk, uncertainty, escalation and human-review model;
10. a confidentiality, privilege and sensitive-data handling model;
11. current legal AI, research database, registry, filing/search, document and deterministic-tool research;
12. execution-layer decisions and gap analysis;
13. a justified core Agent Skills set;
14. decomposed commands where useful;
15. a first-class Extension Pack architecture;
16. a rule separating jurisdiction context from Extension Pack specialisation;
17. an initial Extension Pack catalogue strategy;
18. a legal Extension Pack authoring skill or equivalent workflow;
19. five progressive legal-production example levels;
20. three complementary primary examples per level selected by capability coverage;
21. Kakeibo as a canonical consumer-finance/privacy/AI stress-test fixture;
22. Worldstack as a canonical IP/media/real-world-simulation stress-test fixture;
23. deterministic and semantic evaluation;
24. authority/citation, temporal-validity and legal-product consistency benchmarks;
25. adversarial legal regression fixtures;
26. six canonical specifications;
27. a public README following the proven Video Production Skills structure;
28. an open-source repository scaffold design;
29. Agent Skills installation and selective-installation contracts;
30. local validation and clean external installation smoke tests;
31. optional Pactwright integration kept outside core legal semantics;
32. cross-domain abstraction candidates only after implementation evidence;
33. evidence-based maturity and publication gates.

---

# 5. Governing Principles

Retain the Production Skills family rules and specialise them for legal work.

## Facts before conclusions

Do not start from the desired legal answer and search for support.

The workflow must establish material facts, assumptions, actors, jurisdictions, dates and project behaviour before reaching a legal conclusion.

## Jurisdiction before rule application

No legal proposition is globally valid merely because it sounds general.

Resolve, where applicable:

```text
territory / jurisdiction
governing law
forum
actor location
user / customer location
place of establishment
market offered into
data-subject location
asset / right territory
transaction location
relevant dates
```

Conflict-of-laws analysis is specialist work and must be researched rather than reduced to a universal rule.

## Authority before assertion

Prefer authoritative and primary legal sources where available.

Potential source classes include:

```text
legislation / regulations
binding case law
official court materials
regulator rules and guidance
official registries / filing systems
treaties and international instruments
formal government guidance
recognised legal commentary / practitioner texts
secondary summaries
```

The hierarchy and binding effect vary by jurisdiction and matter. Do not impose one universal numeric authority score.

## Currency is part of legal correctness

Every material legal conclusion should preserve enough temporal context to distinguish:

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

A once-authoritative source can be stale.

## Legal research and legal judgement remain distinguishable

The system should separate:

```text
what an authority says
what facts are known
what facts are assumed
what rule or principle is derived
how it may apply
what remains ambiguous
what risk follows
what action is recommended
what requires specialist judgement
```

## The document must match the product

Legal artefacts are not independent of implementation.

Examples:

```text
privacy notice ↔ actual data flows / retention / processors
terms ↔ actual subscription / cancellation / refund behaviour
cookie notice ↔ actual tracking technologies
open-source notice ↔ actual dependency licences
trade mark statement ↔ actual ownership / registration status
AI disclosure ↔ actual automated behaviour
```

A polished document that contradicts product behaviour is a legal-production defect.

## Cheapest adequate legal representation

Resolve uncertainty using the cheapest representation capable of answering the current question.

Examples:

```text
matter brief before full memo
issue list before exhaustive research
authority table before polished advice
clause inventory before full redraft
redline before replacement agreement
trade mark knockout search before filing strategy
data-flow inventory before privacy notice drafting
licence inventory before open-source compliance report
```

## Preserve verified work

If one proposition, clause or authority fails, preserve unaffected verified facts, research, clauses and implementation decisions.

Do not regenerate an entire legal package because one retention period, clause or trade mark class changed.

## Correct the smallest responsible unit

A legal defect should be repaired at the layer that owns it:

```text
wrong fact
→ fact model

stale authority
→ proposition / authority link

bad clause
→ clause

product contradiction
→ implementation or disclosure, depending on authority

missing legal requirement
→ requirement + affected implementation / document
```

## Risk must remain inspectable

Do not collapse legal quality or risk into one opaque score.

Useful dimensions may include:

```text
authority strength
factual completeness
jurisdiction certainty
temporal currency
interpretive uncertainty
financial / operational impact
consumer / user harm
enforcement exposure
reputational impact
reversibility
need for specialist review
```

## Escalation is a production capability

A mature legal workflow knows when not to invent certainty.

Escalation should produce a useful package:

```text
question
material facts
jurisdiction
relevant authorities
analysis performed
conflicts / uncertainty
options
specific decision required
```

rather than a generic "consult a lawyer" message.

## Confidentiality and privilege are design constraints

Tool selection must account for confidential, privileged, personal and commercially sensitive information. Provider terms, retention, training use, access controls and data location may affect whether a tool is suitable.

The project should minimise sensitive disclosure and preserve a route for local/private tooling where the matter requires it.

## Professional boundary is explicit

The system may support legal analysis, drafting and review. It must not present itself as holding professional status it does not possess or silently cross into reserved activities, filing representation or advocacy requiring authorised practitioners.

---

# 6. Bootstrap Flow

```text
PROJECT IDEA
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
20. Scaffold Repository
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

Do not scaffold `legal-skills` while generating this bootstrap. Execute the stages later, one at a time.

---

# 7. Stage 1 — Define Project Goal, Users and Professional Boundary

## Purpose

Define reusable legal production before proposing skills or documents.

## Resolve

```text
What legal outcomes does the repository own?
Who are the intended users?
Which legal matter classes are in core scope?
Which jurisdictions are initial proving grounds?
What is legal advice versus legal information in the product model?
What requires human review?
What requires a regulated practitioner?
What is explicitly out of scope?
Where does reusable legal knowledge end and project-specific legal knowledge begin?
How should Legal Skills interact with Pactwright and other Production Skills?
```

Investigate whether core responsibility should include at least:

```text
legal scoping / issue spotting
authoritative legal research
legal analysis / option framing
legal drafting
legal review / redlining
legal-product consistency checking
legal change impact
risk / uncertainty communication
specialist escalation packaging
```

Do not assume litigation, tax, criminal, family, immigration, employment, corporate transactions, patent prosecution or other specialist practice belongs in core merely because it is "legal".

## Intended user classes to research

```text
software / product teams
open-source maintainers
creative-production teams
founders / small businesses
project managers / delivery agents
legal operations / in-house legal collaborators
regulated legal professionals using AI as support
```

## Outputs

- project charter;
- professional-boundary map;
- intended user / use-case map;
- initial jurisdiction strategy;
- quality definition;
- human review / escalation points;
- non-goals.

## Exit

A defensible legal-production boundary exists without a fixed skill count or template catalogue.

---

# 8. Stage 2 — Research Professional Legal Practice

## Purpose

Understand how strong legal work is actually performed before designing AI workflows.

## Research streams

Study complementary legal practices rather than assuming one workflow covers all law:

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

Use specialist domains such as litigation or employment as comparison points only if they expose reusable production behaviour relevant to the target scope.

## For each stream capture

```text
roles
professional duties
matter intake
fact gathering
issue spotting
jurisdiction analysis
research sources
research methods
authority hierarchy
analysis methods
working artifacts
drafting / negotiation
review / approval
filing / registration where relevant
risk communication
handoffs
change monitoring
failure modes
repair strategies
```

## Questions

- How do lawyers separate facts from assumptions and legal conclusions?
- When is a short advice note sufficient versus a formal memo?
- How is authority checked for currency and later treatment?
- How are uncertain or conflicting authorities presented?
- How are contractual positions compared during redlining?
- How do legal teams translate law into engineering/product requirements?
- How are implementation changes detected when they invalidate a legal document?
- How is proportionality applied to research depth and review effort?
- When must specialist counsel or regulated professionals take over?
- How do confidentiality and privilege constrain tool usage?

## Outputs

- professional-practice research log;
- legal-practice comparison matrix;
- terminology glossary;
- failure taxonomy draft;
- candidate legal-quality dimensions;
- candidate core versus specialist boundaries.

## Exit

The production model is grounded in legal practice rather than LLM chat patterns or document-template websites.

---

# 9. Stage 3 — Define Jurisdiction, Authority and Temporal-Validity Model

## Purpose

Make legal applicability and source authority explicit enough to prevent plausible but context-free answers.

## Jurisdiction context

Model the smallest useful context, investigating fields such as:

```text
matter jurisdiction / territory
governing law
forum / regulator
actor / entity location
consumer / user location
place of establishment / offering
data-subject location
asset / right territory
contractual choice-of-law terms
relevant dates
cross-border questions
```

Do not implement a universal conflict-of-laws engine at bootstrap.

## Authority record

Candidate fields:

```text
authority identity
source URL / citation / registry reference
authority type
jurisdiction
issuing body / court / regulator
binding / persuasive / guidance status where knowable
publication / judgment date
effective / commencement date
amendment / repeal status where applicable
appeal / later treatment where applicable
retrieved-at
valid-as-of
proposition supported
source excerpt / pinpoint reference where permitted
verification status
```

## Source ecology to research

```text
legislation.gov.uk and equivalent official legislation sources
judiciary / official court sources
BAILII / trusted case-law repositories
regulators such as ICO, CMA, FCA and equivalents
official IP registries such as UK IPO, EUIPO, WIPO, USPTO
EUR-Lex and EU regulator sources
company / corporate registries
standards / codes with legal relevance
commercial legal databases where licensed
reputable legal commentary as secondary support
```

## Required distinctions

Do not collapse:

```text
jurisdiction ≠ governing law ≠ forum
authority ≠ proposition ≠ interpretation
publication date ≠ effective date
regulator guidance ≠ legislation
registration database result ≠ clearance opinion
current source ≠ current law automatically
```

## Outputs

- jurisdiction context contract;
- legal source taxonomy;
- authority record;
- temporal-validity rules;
- source verification rules;
- jurisdiction fallback / ambiguity behaviour.

## Exit

A material legal proposition can be tied to a verified authority and a defined jurisdiction/time context.

---

# 10. Stage 4 — Define Matter, Fact, Issue and Legal-Reasoning Artifacts

## Purpose

Define the intellectual objects that legal production must preserve.

## Matter brief

Candidate fields:

```text
request / decision needed
project / product context
actors / entities
jurisdiction context
material dates
known facts
assumptions
unknowns
constraints
risk tolerance where appropriate
deliverables
review / escalation requirements
```

## Fact record

```text
fact statement
source / project evidence
known / assumed / disputed / unknown
materiality
owner / system of record
last verified
```

## Issue

```text
legal question
triggering facts
jurisdiction
priority
research status
dependent decisions
```

## Legal proposition

```text
proposition
supporting authority
contrary / limiting authority
jurisdiction
temporal validity
interpretive notes
confidence rationale
```

## Legal conclusion / risk item

```text
issue
applicable facts
propositions relied on
analysis
conclusion
uncertainty
risk / consequence
options
recommended action
review requirement
```

## Legal requirement / project constraint

```text
requirement
legal basis
applicability conditions
project owner
affected artifact / component
acceptance evidence
valid-as-of
change triggers
```

## Legal document / clause

Track, where useful:

```text
purpose
parties / audience
jurisdiction / governing law
source requirements
clause identifiers
legal basis / business basis
dependencies on product behaviour
negotiated / approved state
review owner
last reviewed
```

## Escalation package

```text
specific question
facts and assumptions
jurisdiction
research performed
material authorities
analysis
conflicting evidence / uncertainty
options
recommended next step
professional specialty required
```

## Outputs

- legal artifact model;
- traceability relationships;
- minimum metadata rules;
- approval / lock semantics where useful;
- repair ownership rules.

## Exit

Legal work can be audited from project fact to authority to conclusion to action without requiring one universal legal graph.

---

# 11. Stage 5 — Map Legal Research, Advice, Drafting and Review Workflows

## Purpose

Derive the smallest credible legal production workflows.

## A. Legal advice workflow

Candidate:

```text
intake
→ scope matter
→ resolve facts / assumptions
→ resolve jurisdiction
→ issue spot
→ prioritise
→ research authorities
→ verify currency / applicability
→ analyse
→ identify options / risks
→ recommend action
→ independent review where required
→ deliver
→ record valid-as-of / change triggers
```

## B. Legal drafting workflow

Candidate:

```text
purpose / parties / audience
→ product / transaction facts
→ required rights / obligations
→ source law / policy constraints
→ clause plan
→ draft
→ clause-level review
→ cross-document consistency
→ product / commercial consistency
→ redline / revise
→ approval
→ publish / execute
→ change monitoring
```

## C. Legal review workflow

Candidate:

```text
review brief
→ identify document authority / version
→ map clauses / obligations
→ detect omissions / conflicts / unfairness / ambiguity
→ verify legal assertions
→ compare against project behaviour
→ propose smallest sufficient changes
→ preserve unaffected approved text
→ re-evaluate
```

## D. Trade mark / brand workflow

Candidate to validate:

```text
candidate mark
→ intended territories
→ goods / services
→ classification
→ identical / similar mark search
→ relevant result triage
→ similarity / conflict analysis
→ non-registrability / other issue checks
→ risk and options
→ professional escalation where warranted
→ filing / monitoring handoff
```

## E. Privacy / data workflow

Candidate to validate:

```text
product data-flow inventory
→ actors / controller-processor roles
→ purposes / data categories
→ legal basis / special conditions where relevant
→ sharing / transfers
→ retention
→ user rights / controls
→ risk assessment / DPIA trigger analysis where relevant
→ requirements
→ privacy artefacts
→ implementation consistency check
```

## Outputs

- workflow maps;
- artifact lifecycle;
- decision / approval points;
- smallest repair routes;
- handoff contracts.

## Exit

The project supports actual legal work loops rather than a flat list of document generators.

---

# 12. Stage 6 — Define Project-to-Law Traceability and Change Impact

## Purpose

Make legal requirements actionable inside production and detectable when project behaviour changes.

## Required traceability direction

```text
project behaviour / fact
        ↓
legal issue
        ↓
authority / proposition
        ↓
legal requirement or risk
        ↓
project implementation / process / document
        ↓
acceptance evidence
```

Also support reverse impact analysis:

```text
project change
→ affected facts
→ affected legal issues / requirements
→ affected implementation
→ affected legal documents
→ targeted re-review
```

## Important consistency classes

```text
privacy notice ↔ architecture / telemetry / processors / retention
terms ↔ product commercial flows
consumer disclosures ↔ UI/UX
licence obligations ↔ repository dependencies / distributed assets
trade mark claims ↔ registry / ownership evidence
AI disclosures ↔ actual AI use
age / child protections ↔ audience and UX controls
UGC terms ↔ moderation / enforcement capabilities
```

## Pactwright hypothesis

When Pactwright is present, legal requirements may become inputs to authorised Contracts / acceptance criteria, while Pactwright remains owner of lifecycle and Evidence semantics.

Legal Skills should not create its own competing project graph.

## Outputs

- legal-to-project traceability contract;
- legal change-impact model;
- consistency-test catalogue;
- Pactwright handoff hypothesis;
- project-knowledge boundary.

## Exit

Legal advice can change implementation, and later implementation changes can identify legal artefacts that need re-review.

---

# 13. Stage 7 — Define Risk, Uncertainty, Escalation and Human Review

## Purpose

Prevent false certainty while still producing useful project decisions.

## Risk model

Do not default to one numeric legal-risk score.

Evaluate dimensions such as:

```text
legal authority / clarity
factual uncertainty
jurisdiction uncertainty
enforcement likelihood / regulator interest where supportable
financial exposure
user / consumer harm
operational impact
brand / reputation impact
irreversibility
filing / limitation / launch deadlines
need for specialist judgement
```

## Confidence language

Define controlled language that distinguishes:

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

Avoid invented percentages unless a specific evidence-based method supports them.

## Mandatory escalation triggers to research

Potential triggers include:

```text
reserved legal activity / representation
high-value or irreversible transaction
material litigation / enforcement threat
conflicting high-level authority
uncertain cross-border applicability
trade mark conflict requiring filing strategy
financial-regulatory perimeter uncertainty
sensitive employment / criminal / tax / immigration / patent matters
novel AI / IP issue with unsettled law
insufficient facts for safe conclusion
```

These are hypotheses to validate with professional research.

## Human review levels

Investigate a proportionate model such as:

```text
self-check
→ independent AI/evaluator check
→ knowledgeable project-owner review
→ legal professional review
→ specialist regulated professional
```

The relevant level depends on matter risk and activity, not document length.

## Outputs

- risk dimensions;
- uncertainty vocabulary;
- escalation rules;
- human-review matrix;
- escalation artifact contract.

## Exit

The system can remain useful when the correct answer is uncertain or professionally sensitive.

---

# 14. Stage 8 — Define Confidentiality, Privilege and Sensitive-Data Handling

## Purpose

Treat legal information handling as part of production architecture rather than an afterthought.

## Investigate

```text
client / project confidentiality
legal professional privilege and its jurisdictional limits
personal data
special-category / highly sensitive data
commercial secrets
M&A / market-sensitive information
security-sensitive information
provider retention and training terms
connector / MCP access boundaries
logging / observability leakage
prompt / output storage
local or private execution options
redaction / minimisation
access control
retention / deletion
```

## Tool eligibility record

For tools that may process legal matter data, record where knowable:

```text
data sent
provider / subprocessors
storage / retention
training use
access controls
region / transfer implications
enterprise contractual controls
local / offline option
matter classes permitted
matter classes prohibited
```

## Required behaviour

The workflow should be able to say:

```text
this task can use public web research
this task requires redaction
this task requires an approved private provider
this task should remain local
this material should not be provided to the selected AI tool
```

## Outputs

- legal-data classification;
- tool eligibility policy;
- minimisation / redaction rules;
- local/private execution strategy;
- logging and retention requirements.

## Exit

The project can route legal work without casually exposing confidential or privileged material.

---

# 15. Stage 9 — Research Legal AI Skills, Databases, Registries and Tools

## Purpose

Find reusable execution capability before implementing native legal infrastructure.

## Search categories

```text
Agent Skills for legal research / drafting / contract review
legal research databases and APIs
case-law sources and citators
legislation sources
regulator databases / guidance
trade mark / patent / design registries
company / corporate registries
contract drafting / redlining tools
open-source licence scanners
SBOM / dependency tooling
privacy / data-mapping tools
policy-as-code / compliance tooling
document parsing / diffing / clause extraction
citation / authority verification tools
legal AI providers
MCPs / connectors
benchmark / eval frameworks for legal AI
```

## Provider / tool evaluation record

| Field | Meaning |
|---|---|
| Capability | What it actually does |
| Source | Provider / repository / authority |
| Licence / terms | Reuse and data constraints |
| Jurisdictions | Real coverage |
| Authority coverage | Cases, legislation, regulation, registry data, commentary |
| Currency | Update behaviour |
| Access | Skill, CLI, API, web, MCP, subscription |
| Legal role | Research, drafting, review, search, filing, evaluation |
| Citation behaviour | Authority provenance / pinpoint support |
| Confidentiality controls | Data handling suitability |
| Deterministic vs generative | Execution character |
| Cost / latency | Operational implications |
| Composability | Fit beneath Production Skills |
| Maintenance | Current state |
| Gaps | Missing behaviour |
| Decision | USE / ADAPT / REFERENCE / REJECT |

## Important separation

A legal database or AI assistant may provide excellent retrieval or drafting execution without owning this project's reusable legal-production semantics.

Production Skills should orchestrate specialist tools rather than replicate licensed legal databases or official registries.

## Outputs

- current legal-tool landscape;
- authoritative-source map;
- shortlist;
- capability matrix;
- data/confidentiality matrix;
- integration decisions;
- explicit gaps.

## Exit

The project knows what it should orchestrate rather than rebuild.

---

# 16. Stage 10 — Choose the Execution Layer

## Purpose

Separate legal-production intelligence from retrieval, registry and document-processing execution.

## The repository should own

```text
matter scoping
fact / assumption discipline
issue spotting
jurisdiction-resolution workflow
authority and currency requirements
legal reasoning artifacts
risk / uncertainty communication
drafting / review production grammar
project-to-law traceability
change impact
smallest-sufficient repair
legal quality evaluation
escalation semantics
```

## Existing tools should execute where suitable

```text
web / database search
legislation retrieval
case-law retrieval
citator / later-treatment checks
official registry search
trade mark image / text search
company lookup
document parsing
redline / diff
licence scanning / SBOM
structured data analysis
private document retrieval
provider legal-research runs
filing systems under authorised human control
```

## Outputs

- execution architecture;
- authority-source selection policy;
- provider/tool boundary;
- fallback behaviour;
- private/local execution path;
- deterministic tooling opportunities.

## Exit

Legal Skills remains provider-independent at the production layer without trying to become a universal legal database or filing platform.

---

# 17. Stage 11 — Gap Analysis and Over-Engineering Guardrails

## Purpose

Compare required legal production with available execution capabilities and identify only the gaps the repository should own.

## Classify

```text
covered
partially covered
missing
```

Pay particular attention to gaps in:

```text
jurisdiction resolution
authority verification
effective-date / currency checks
case later-treatment checks
fact-assumption separation
claim-to-authority traceability
product-to-document consistency
cross-document consistency
trade mark search interpretation
licence / provenance reasoning
legal change impact
uncertainty / escalation
confidentiality-aware provider routing
smallest-sufficient legal repair
```

## Defer unless evidence proves necessary

Flag as likely early over-engineering:

```text
universal legal knowledge graph
custom case-law database
custom legislation mirror
custom trade mark search engine
universal citator
universal jurisdiction / conflict-of-laws engine
universal compliance ontology
universal regulatory change monitoring service
one numeric legal-risk score
fully autonomous legal sign-off
filing automation by default
persistent cross-project matter database
universal legal workflow DSL
multi-agent law-firm simulation
provider registry owned by Legal Skills
```

These may become valid later only if examples and benchmarks demonstrate a concrete need.

## Outputs

- gap matrix;
- native capability shortlist;
- reuse decisions;
- deferred-improvement register;
- proof required before expensive architecture.

## Exit

The project owns legal-production intelligence rather than rebuilding the legal information industry.

---

# 18. Stage 12 — Design Core Skills and Commands

## Purpose

Derive the smallest installable skill set capable of the workflow.

Do not begin with a fixed number of legal skills.

## Lean starting hypothesis

Investigate whether the initial system can be expressed as:

```text
legal-production
legal-evaluate
legal-extension-pack-creator
```

This is provisional until Stages 1–11 validate it.

### Possible `legal-production` commands

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

### Possible `legal-evaluate` commands

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

Commands should exist only where isolated execution, reuse or evaluation improves the system.

## Split questions

Research whether any responsibility deserves an independent installable skill, for example:

```text
legal-research
legal-drafting
legal-review
legal-ip
privacy-legal
```

A split is justified only if the capability has a coherent independent user need, installation value, context boundary and benchmark surface.

Do not create one skill per area of law by default; Extension Packs may be the better specialisation mechanism.

## Independent evaluation

Legal evaluation should be separable from production where practical so the same agent is not the only reviewer of its own authority use, reasoning and drafting.

## Outputs

- skill responsibility map;
- command contracts;
- self-containment rules;
- skill dependency rules;
- initial SKILL.md outlines.

## Exit

Every installable skill owns a coherent legal-production responsibility and every command has a reason to exist.

---

# 19. Stage 13 — Design Extension Packs and Pack Authoring

## Purpose

Make reusable specialist legal-production modes first-class without embedding every area of law in core.

## Critical rule: jurisdiction is context, not a normal Extension Pack

Do not default to:

```text
legal-skills + uk-law-pack
legal-skills + eu-law-pack
legal-skills + us-law-pack
```

as though jurisdiction were stylistic specialisation.

Every legal run must resolve jurisdiction as part of the matter context. Authorities must be current for that context.

A repository may use jurisdiction-specific references, adapters or source profiles internally, but the Extension Pack concept should be reserved for reusable **matter specialisations that materially change legal production behaviour**.

This distinction must be validated during implementation rather than treated as permission to build a universal jurisdiction engine.

## Candidate pack families

Research and narrow an initial catalogue from candidates such as:

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

These are hypotheses, not committed catalogue entries.

## A valid legal pack may alter

```text
issue-spotting checklist
specialist source ecology
required project facts
legal artifacts
research questions
review / escalation thresholds
specialist drafting grammar
product-consistency tests
quality criteria
benchmark cases
```

## Pack precedence

Retain the family expectation while adding legal context:

```text
verified applicable law / authority
+ explicit project instructions that are legally permissible
→ approved / locked legal and product decisions
→ selected Extension Pack
→ core Legal Skills defaults
```

A project instruction cannot make an applicable legal requirement disappear. The final precedence semantics must be researched carefully because legal authority is not simply another user preference.

## Pack authoring workflow

The repository should eventually provide `legal-extension-pack-creator` or equivalent:

```text
inspect catalogue
→ determine whether reusable specialisation is justified
→ research professional specialist practice
→ define source ecology and jurisdiction interactions
→ define required facts / artifacts
→ define changed core behaviour
→ define escalation boundaries
→ define pack-aware evaluation
→ implement
→ create showcase
→ include exact generation prompt
→ compare core vs core+pack
→ validate
→ catalogue
```

## Required differential evaluation

Every catalogue pack must demonstrate:

```text
core
vs
core + pack
```

The comparison must show improved specialist issue spotting, source selection, analysis, artifacts or evaluation rather than merely injecting legal vocabulary.

## Outputs

- legal-pack semantics;
- jurisdiction-vs-pack rule;
- pack format / packaging;
- initial catalogue strategy;
- pack authoring contract;
- showcase contract;
- pack evaluation plan.

## Exit

The project can explain why a legal pack exists and prove that it materially specialises legal production.

---

# 20. Stage 14 — Design Five Progressive Example Levels

## Purpose

Teach and benchmark progressively broader legal-production responsibility.

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Do not lock examples by intuition. For each level:

1. derive required capabilities;
2. research a broad candidate pool;
3. map candidates to a capability-coverage matrix;
4. remove redundant examples;
5. select the strongest complementary three;
6. verify coverage across all 15 examples.

Every primary example must contain the complete copyable generation prompt.

## Proposed level semantics

### Level 1 — Verify one bounded legal question

Demonstrate:

```text
fact scoping
jurisdiction
primary / authoritative source recovery
currency
bounded conclusion
citation
uncertainty / escalation where necessary
```

Candidate example classes:

```text
verify whether a privacy notice needs a specific disclosure for a stated processing fact
check one open-source licence obligation for a defined distribution model
run a bounded UK trade mark knockout search for a candidate mark / class
```

### Level 2 — Review a bounded artifact or decision

Demonstrate:

```text
multiple legal issues
artifact review
source-backed findings
smallest sufficient edits
preservation
project consistency
```

Candidate classes:

```text
review a short consumer-terms section for fairness / transparency
review a cookie / analytics UX against stated tracking behaviour
review a product name shortlist for trade mark screening and escalation
```

### Level 3 — Produce an end-to-end legal package for a focused project

Demonstrate complete responsibility for a contained matter.

Candidate classes should span different legal ecologies, for example:

```text
small web service privacy + terms package derived from product behaviour
open-source project licence / notices / trade mark boundary review
creator / asset licensing workflow for a small production
```

### Level 4 — Handle cross-functional complexity and legal change impact

Demonstrate:

```text
multiple artifacts
multiple legal issues
project specs / implementation evidence
conflicts and missing facts
legal-to-product requirements
change impact
repair
specialist escalation
```

Candidate classes:

```text
consumer fintech-style application
UGC / AI-enabled digital product
multi-provider product with international data flows
```

### Level 5 — Govern legal production across a complex cross-domain project

Demonstrate the complete thesis:

```text
multi-domain issue spotting
cross-jurisdiction questions
IP / privacy / consumer / AI interactions
legal requirements feeding production
Pactwright-compatible handoffs
adversarial stress testing
change-driven re-review
human specialist escalation
```

Candidate classes:

```text
real-world open-world simulation / game
multi-market consumer product launch
complex Production Skills programme with generated and licensed assets
```

## Coverage matrix dimensions

Across the 15 examples cover:

```text
core skills and commands
stable vs changing law
legislation / cases / regulator guidance / registries
fact incompleteness
jurisdiction ambiguity
authority verification
privacy / consumer / IP / licensing / AI matters
trade marks
open-source
financial-regulatory boundary questions
drafting / review / redlining
project consistency
change impact
confidentiality-aware tooling
Extension Packs
professional escalation
cross-domain handoffs
Pactwright-compatible evidence
```

## Outputs

- five domain-native levels;
- candidate pool per level;
- capability matrix;
- selected 15 primary examples;
- exact prompts;
- expected artifacts;
- benchmark mappings.

## Exit

The examples demonstrate legal production rather than fifteen variants of document drafting.

---

# 21. Stage 15 — Design Kakeibo and Worldstack Canonical Stress Tests

## Purpose

Use two substantially different consuming projects to test whether `legal-skills` is genuinely reusable across product, software, AI and creative production.

These are **benchmark/stress-test fixtures**, not central-repository ownership of those projects. Their project-specific legal conclusions and requirements remain in the consuming projects.

## Stress Test A — Kakeibo

Kakeibo is an open-source personal-finance product with a consumer-facing service, financial activity data, the Kei assistant, mobile/web surfaces, operator-owned provider accounts and an explicit separation between Apache-2.0 software licensing and project trade marks.

Reference project:

- https://github.com/sb-dev/kakeibo

### Legal capability areas to exercise

```text
privacy / UK GDPR-style transparency
data roles and processors
data retention and deletion
international transfers where applicable
cookies / analytics / telemetry
security and privacy representations
consumer terms
subscription / payment / cancellation / refund behaviour
unfair terms / commercial practices
financial-regulatory perimeter issue spotting
boundaries of Kei explanations / recommendations
AI disclosures and automated behaviour
open-source licensing
third-party dependency / asset licensing
Kakeibo / Kei trade mark and brand protection
marketing claims
accessibility / vulnerable consumer implications where legally relevant
```

### Required stress-test behaviour

Given the actual Kakeibo specs and repository evidence, Legal Skills should be able to:

```text
1. derive a legal matter map from project behaviour;
2. distinguish facts, assumptions and missing facts;
3. identify jurisdictions requiring analysis;
4. research current authoritative sources;
5. identify legal requirements / risks / options;
6. generate project changes and legal artifacts where justified;
7. trace material clauses and requirements to evidence;
8. detect contradictions between legal text and implementation/specs;
9. identify what can be corrected automatically;
10. prepare precise specialist-escalation questions for unresolved matters;
11. rerun only affected legal analysis when project behaviour changes.
```

### Adversarial fixtures

Include cases such as:

```text
privacy notice says 12-month retention while architecture retains indefinitely
terms claim no refunds while product flow / law creates cancellation or refund rights
Kei is described as non-advisory while behavioural fixtures become materially personalised
open-source licence inventory omits a dependency with notice obligations
marketing says data is never shared while a processor receives it
trade mark recommendation ignores goods/services and only searches exact text
outdated privacy guidance is cited after newer authoritative guidance exists
```

### Success

Kakeibo proves that Legal Skills can connect law, product behaviour, data architecture, UX, commercial terms, AI behaviour, open-source and brand concerns without becoming the Kakeibo legal database.

## Stress Test B — Worldstack

Worldstack is a real-world systems modelling and experimentation platform whose development model composes multidisciplinary research into executable simulations and games. It is a strong legal stress case because realistic world reconstruction can combine maps, photographs, architecture, brands, people, public bodies, cultural references, generated assets, social systems and experiments.

Reference project:

- https://github.com/sb-dev/worldstack

### Legal capability areas to exercise

```text
map / geographic-data licences and database rights
photography / reference-image copyright
architecture / public-space representation
trade marks, logos, signage and trade dress
copyright in creative references
real-person likeness / privacy / publicity questions
defamation / false factual implication
news / social-media / government-body representation
music / sound / broadcast references
UGC and moderation
AI-generated assets and provenance
training / reference dataset permissions
open-source and engine / asset licences
platform terms
children / age-related concerns where applicable
virtual economy / monetisation issues where introduced
jurisdiction differences for worldwide distribution
```

### Required stress-test behaviour

Given a Worldstack production plan such as reconstructing a recognisable part of London from mixed real-world sources, Legal Skills should:

```text
1. inventory source and asset classes;
2. distinguish ownership, licence, exception and uncertainty;
3. identify real-person / brand / public-body concerns;
4. map legal constraints to production domains;
5. propose lowest-cost safe alternatives where appropriate;
6. preserve provenance requirements for downstream asset production;
7. identify specialist issues requiring counsel;
8. produce testable legal constraints for Pactwright / production workflows;
9. re-evaluate only affected assets / systems when source provenance or distribution changes.
```

### Cross-domain handoff examples to test

```text
Deep Research
→ source evidence and provenance

Legal Skills
→ permissible-use constraints / uncertainties

World / Environment Production
→ geometry / signage / location production constraints

Character / Narrative
→ real-person / fictionalisation / defamation constraints

3D / Video / Audio
→ asset licensing and provenance constraints

Game Development / Software Engineering
→ UGC, consent, controls, logging, enforcement capabilities

UI/UX
→ disclosures, consent and user-control requirements

Pactwright
→ authorised implementation / verification lifecycle
```

### Adversarial fixtures

Include cases such as:

```text
"publicly visible" photograph assumed free to reuse
"public data" map assumed free of database/licence restrictions
brand signage copied without analysing context or distribution
fictional allegation remains obviously linked to an identifiable real person
AI-generated asset loses its training/reference provenance trail
third-party asset licence permits editorial but not game distribution
source licence changes after an asset has been approved
UK-only legal analysis is incorrectly applied to worldwide distribution
```

### Success

Worldstack proves that Legal Skills can translate complex, mixed-source real-world production into actionable legal constraints and provenance without taking ownership of creative or game-production decisions.

## Combined stress-test value

```text
Kakeibo
→ consumer + privacy + fintech boundary + AI assistant + open source + brand

Worldstack
→ IP + licensing + real-world representation + media + UGC + generated assets + cross-domain production
```

Passing both is stronger evidence of reusable legal-production architecture than a large set of privacy-policy generation tests.

## Outputs

- Kakeibo benchmark plan;
- Worldstack benchmark plan;
- fixture inventory;
- legal-capability coverage matrix;
- cross-domain handoff tests;
- expected escalation points;
- regression seeds.

## Exit

The architecture survives two deliberately different real consuming projects without adding project-specific logic to core Legal Skills.

---

# 22. Stage 16 — Design Evals, Benchmarks and Regression Fixtures

## Purpose

Define legal quality evidence before large implementation.

## Evaluation layers

### Deterministic repository / artifact validation

Test where practical:

```text
required matter metadata
jurisdiction present where required
authority identities / URLs / citations
retrieved-at / valid-as-of metadata
fact-source references
proposition-to-authority references
requirement-to-project references
missing clause identifiers
invalid artifact structure
duplicate identifiers
selective-installation integrity
skill self-containment
```

### Authority verification

Evaluate:

```text
authority exists
citation / URL resolves
source is what the analysis says it is
jurisdiction matches
quoted/pinpoint material supports the proposition
primary / official source preferred where appropriate
later updates / amendments / treatment are checked where material
fabricated authorities are rejected
```

### Temporal validity

Create cases where:

```text
old regulator guidance conflicts with newer guidance
legislation exists but is not yet commenced
rule changed after a document was drafted
case was appealed or limited
project analysis is valid for one launch date but not another
```

### Legal reasoning quality

Evaluate separately:

```text
fact completeness
fact / assumption separation
issue spotting
jurisdiction correctness
rule selection
authority strength
application of facts to rule
counterarguments / exceptions
uncertainty calibration
scope discipline
option / recommendation usefulness
```

### Drafting / review quality

Evaluate:

```text
purpose and audience fit
required subject coverage
internal consistency
cross-document consistency
fairness / transparency where relevant
plain-language quality where required
preservation of negotiated / approved positions
absence of invented facts
absence of unsupported legal claims
```

### Legal-product consistency

This should be a first-class suite.

Fixtures should compare legal artifacts against product evidence, for example:

```text
privacy notice vs data-flow fixture
terms vs cancellation-flow fixture
licence notices vs dependency manifest
trade mark claim vs registry evidence
AI disclosure vs assistant behaviour fixture
UGC terms vs actual moderation capabilities
```

### Trade mark evaluation

Test:

```text
territory captured
goods / services captured
classification considered
identical and similar search performed
relevant results not discarded because spelling differs
result evidence preserved
search distinguished from final legal clearance
professional escalation when conflicts are material
```

### Licence / provenance evaluation

Test:

```text
source identity
licence identity / version
permissions / restrictions / obligations
distribution model relevance
notice / attribution duties
provenance continuity
incompatible assumptions
```

### Confidentiality routing

Test that sensitive fixtures cause correct routing, redaction, local/private execution or refusal to send material to an unsuitable provider.

### Preservation, diagnosis and repair

Test that the system can:

```text
identify the wrong fact / stale authority / defective clause / inconsistent implementation
preserve verified unaffected work
rerun only necessary research
update dependent conclusions
update affected clauses / requirements
avoid full legal-package regeneration when unnecessary
```

### Extension Pack evaluation

Test:

```text
activation
non-activation
precedence
specialist issue spotting
specialist source selection
changed artifacts / review criteria
jurisdiction interaction
core-vs-pack differential behaviour
pack-aware quality evaluation
```

### End-to-end evaluation

Use progressive examples plus Kakeibo and Worldstack stress tests.

### External installation evaluation

Run from clean consumer projects with no source-checkout assumptions.

## Adversarial regression fixtures to prioritise

```text
fabricated case citation
real case cited for the wrong proposition
outdated regulator guidance
law cited before commencement
jurisdiction omitted
US rule applied to UK facts or vice versa
privacy notice generated from assumptions instead of actual product evidence
terms copied from another product with incompatible business behaviour
unfair / impossible exclusion clause accepted because common online
exact-match-only trade mark search misses a highly similar mark
"publicly available" confused with licensed for reuse
open-source licence family identified but wrong version analysed
commercial-use restriction missed
confidential document routed through an unsuitable public AI tool
legal conclusion stated as certain despite missing material fact
specialist escalation replaced by generic disclaimer
one defective clause causes unnecessary complete rewrite
```

## External legal-AI benchmark research

During Stage 16 investigate current legal-AI benchmark families, academic evaluations and practitioner studies covering areas such as:

```text
legal research accuracy
case / authority hallucination
retrieval and citation
contract review
legal reasoning
multi-jurisdiction performance
professional benchmark tasks
```

Do not optimise the repository narrowly to bar-exam-style question answering. Legal Production Skills must test production behaviour and project consequences.

## Regression rule

```text
escaped legal defect
→ diagnose owning layer
→ create smallest reproducible fixture
→ add deterministic or semantic eval
→ preserve as regression protection
```

## Outputs

- benchmark architecture;
- test taxonomy;
- legal quality dimensions;
- case format;
- authority/currency suite;
- product-consistency suite;
- progressive-example coverage map;
- Kakeibo/Worldstack suites;
- pack differential suite;
- regression policy;
- release gates.

## Exit

The project can detect authority, legal-reasoning, drafting and implementation-consistency failures independently.

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

## 01 — System

Owns:

```text
mission
scope and professional boundary
principles
core skills
jurisdiction / authority strategy
execution architecture
confidentiality / provider policy
human review / escalation
build order
system acceptance
```

## 02 — Workflows and Artifacts

Owns:

```text
matter intake
fact / assumption model
jurisdiction context
authority / proposition model
legal research
advice workflow
drafting / redlining / review
legal requirements
project traceability
change impact
risk / uncertainty
escalation
failure taxonomy
repair routes
cross-domain handoffs
```

## 03 — Repository and Contracts

Owns:

```text
repository structure
SKILL.md contracts
command contracts
references / scripts / evals
self-containment
installation
selective installation
tooling
CI
confidentiality-sensitive execution notes
technical acceptance
```

## 04 — Testing and Benchmark

Owns:

```text
evaluation layers
benchmark suites
case contracts
authority / citation validation
temporal-validity evaluation
legal reasoning dimensions
drafting / review evaluation
legal-product consistency
trade mark / licence evaluation
Kakeibo / Worldstack stress tests
progressive-example coverage
pack evaluation
regression policy
release gates
measured evidence
```

## 05 — Customisation / Extension Packs

Owns:

```text
legal-pack model
jurisdiction-vs-pack distinction
pack dimensions
activation and precedence
specialist source ecology
specialist artifacts / workflows
core-skill effects
pack packaging
pack-aware evaluation
pack-authoring workflow
professional boundaries
```

## 06 — Extension Pack Catalogue

Owns:

```text
curated initial packs
specialist legal-production profiles
selection rationale
jurisdiction interactions
showcases
exact generation prompts
pack-specific evaluation
maturity / implementation state
```

## Exit

Implementation can proceed without inventing legal architecture in code.

---

# 24. Stage 18 — Design the Public README

Follow the proven public structure of `video-production-skills`, adapted to legal production.

Target structure:

```text
# Legal Skills

positioning
legal-production capabilities
jurisdiction / authority / verification model
professional boundary
installation
quick start — strong Level 1 example

## Learn by doing legal production
### Level 1 — 3 examples
### Level 2 — 3 examples
### Level 3 — 3 examples
### Level 4 — 3 examples
### Level 5 — 3 examples

## Project structure grows with the work
## Skills
## Extension Packs
## Execution and authoritative sources
## Evaluation / benchmarks
## Kakeibo and Worldstack stress tests
## Documentation
## Project boundary
## Contributing
## Licence
```

## Positioning requirement

The README must make clear that the project coordinates **evidence-backed legal production**, not autonomous legal representation or legal template generation.

A positioning direction to test:

> Turn project reality into traceable legal requirements, advice and documents.

Do not finalise public wording until examples prove the implemented capability.

## Quick-start requirement

Choose a bounded task that visibly demonstrates:

```text
scope
→ resolve jurisdiction
→ verify authority
→ apply to project facts
→ produce a bounded result
→ cite / state valid-as-of
```

without requiring paid legal databases.

## Exit

The intended public product surface is clear before scaffolding.

---

# 25. Stage 19 — Cross-Project Review

Only now compare the independently derived Legal Skills model with:

```text
deep-research-skills
software-engineering-skills
ui-ux-design-skills
game-development-skills
video-production-skills
narrative-production-skills
music-production-skills
world-environment-production-skills when available
qa-evaluation-skills when available
```

Look for proven family patterns such as:

```text
cheap representation before expensive work
selection / approval semantics
artifact preservation
smallest-sufficient repair
skill-local commands
Extension Pack packaging
progressive examples
evaluation layering
clean installation
```

Pay special attention to interfaces with Deep Research.

A likely boundary hypothesis is:

```text
Deep Research
→ reusable evidence acquisition / synthesis production

Legal Skills
→ legal source authority, legal applicability, legal reasoning and legal artifacts
```

Legal Skills may invoke Deep Research capability, but legal authority and legal judgement remain domain-owned.

Record, but do not prematurely promote, candidates such as:

```text
valid-as-of metadata
evidence / provenance handoff
requirement-to-implementation traceability
change-impact handoff
confidentiality-aware tool-routing semantics
```

Apply the family extraction rule:

> Share abstractions only after at least two independent production domains need substantially the same concept.

## Exit

Useful family patterns are reused without turning Production Skills central into a compliance platform.

---

# 26. Stage 20 — Scaffold the Repository

Create only useful surfaces justified by the specs.

A likely baseline:

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
├── tools/                    # only when justified
├── extension-packs/          # once packs are implemented
├── integrations/             # optional
└── .github/
```

Do not create a jurisdiction directory tree, legal database, persistent matter store or empty pack catalogue merely to appear comprehensive.

## Exit

A contributor can understand where legal production logic, references, examples, packs and evaluation belong.

---

# 27. Stage 21 — Configure Skill Installation

The project must be usable through the Agent Skills installation model.

Validate canonical installation such as:

```bash
npx skills add sb-dev/legal-skills \
  --skill legal-production \
  --skill legal-evaluate \
  --agent claude-code
```

The exact skill names remain provisional until Stage 12.

Also test:

```text
selective installation
multiple supported agents where intended
skill-local references
skill-local commands
no undocumented repository-relative dependencies
pack installation where implemented
```

## Confidentiality caveat

Installation success does not imply a selected AI/provider is appropriate for every legal matter. The README and skills must preserve the tool-eligibility model from Stage 8.

## Exit

The intended installation contract is documented and testable.

---

# 28. Stage 22 — Local Validation

Before publication validate:

```text
repository structure
SKILL.md frontmatter / contracts
command discovery
required references
authority / artifact validators
benchmark fixtures
Extension Pack structure when implemented
example prompt completeness
Kakeibo / Worldstack fixture integrity
README claims
selective installation from local checkout / package
```

Keep this gate distinct from external installation.

## Exit

The source repository is internally coherent.

---

# 29. Stage 23 — Publish and Clean External Install Smoke Test

From a clean consumer project:

1. install Legal Skills from GitHub using the documented command;
2. verify selected skills are discoverable;
3. run the Level 1 quick-start task;
4. verify matter, authority and output artifacts are produced as documented;
5. run independent evaluation;
6. confirm no source-checkout-relative dependencies exist;
7. test selective installation;
8. test at least one Extension Pack when packs are implemented;
9. verify jurisdiction and valid-as-of metadata survive installation;
10. verify no confidential test data is required for the public smoke test.

## Exit

The repository works as an external Agent Skills product.

---

# 30. Stage 24 — Optional Pactwright Integration and Registry Promotion

If useful, add:

```text
integrations/pactwright.yml
```

It may describe compatibility and capability bindings only.

It must not move Legal Skills workflow semantics into Pactwright or move Pactwright lifecycle semantics into Legal Skills.

## Integration hypothesis

```text
Pactwright Contract / project change
→ Legal Skills scope / research / analysis
→ legal requirements / constraints / review points
→ authorised implementation work
→ implementation Evidence
→ Legal Skills consistency verification
→ Pactwright lifecycle gate
```

The exact Pactwright contract remains Pactwright-owned.

## Maturity progression

Promote only with evidence:

```text
proposed
→ researching
→ specified
→ scaffolded
→ working
→ benchmarked
→ mature
```

`working` requires at least one installed end-to-end legal-production example with verified authoritative sources.

`benchmarked` requires meaningful authority, reasoning, drafting and project-consistency regressions to be detectable, including at least one canonical stress-test slice.

`mature` requires the family contract, including six spec responsibilities, progressive examples, Extension Packs, pack authoring, benchmark coverage, both canonical stress-test programmes and clean external installation.

---

# 31. Stage 25 — Review Shared-Abstraction Candidates

After implementation evidence exists, apply `shared-abstraction-process.md`.

Potential future candidates may include:

```text
valid-as-of metadata
source / provenance handoff
evidence-backed requirement handoff
change-impact handoff
confidentiality-aware execution metadata
```

Do not promote them merely because Legal Skills is cross-cutting.

In particular, avoid centrally shared:

```text
legal runtime
legal knowledge database
universal jurisdiction engine
universal compliance graph
universal risk score
universal regulatory monitor
universal legal pack interpreter
```

without repeated independent domain evidence.

---

# 32. Legal-Specific Acceptance Gates

Before `legal-skills` can be considered mature, evidence should demonstrate all of the following.

## Legal research and analysis

- material facts and assumptions are distinguished;
- jurisdiction is resolved or explicitly left unresolved;
- authoritative sources are preferred where appropriate;
- material authorities are verified rather than invented;
- legal propositions are traceable to authority;
- temporal validity is explicit;
- conflicting or limiting authority is represented when material;
- conclusions do not exceed factual or legal certainty;
- legal requirements are actionable by consuming projects;
- specialist escalation is specific and useful.

## Drafting and review

- legal documents derive from actual product / transaction behaviour;
- documents do not invent project facts to complete a template;
- clause-level repair preserves unaffected approved work;
- legal and commercial purpose remain distinguishable;
- cross-document contradictions are detectable;
- legal-product inconsistencies are detectable;
- consumer-facing documents are evaluated for required transparency / fairness dimensions where applicable.

## IP / licence behaviour

- trade mark analysis includes territory and goods/services rather than exact-name search only;
- source / asset provenance can survive production handoffs;
- licence permissions, restrictions and obligations are applied to the actual use / distribution model;
- availability on the internet is never treated as sufficient permission by itself;
- uncertain conflicts escalate appropriately.

## Confidentiality

- tool routing accounts for matter sensitivity;
- public-provider use is not assumed safe for confidential legal material;
- minimisation / redaction or private execution can be selected;
- public benchmarks use synthetic or public data.

## Evaluation

- fabricated authority, stale authority, wrong jurisdiction and unsupported reasoning can fail independently;
- drafting quality is separate from legal correctness;
- legal-product consistency is independently tested;
- verified unaffected work is preserved during repair;
- known failures become regression fixtures;
- Extension Packs materially change legal-production behaviour and are differentially evaluated;
- Kakeibo and Worldstack stress tests exercise distinct legal capability surfaces.

## Product behaviour

- core skills work without Extension Packs;
- jurisdiction resolution does not depend on selecting a jurisdiction pack;
- 15 primary progressive examples exist with exact prompts;
- six canonical specification responsibilities exist;
- the README represents implemented capability accurately;
- professional boundaries are explicit;
- skills are self-contained;
- local validation passes;
- clean external installation passes;
- quality claims are backed by measured evidence or explicitly marked unmeasured.

---

# 33. Initial Non-Goals

Until domain evidence proves otherwise, `legal-skills` should not become:

- a law firm or substitute for regulated professional representation;
- an autonomous court filing or litigation-advocacy system;
- a tax, immigration, criminal, family, employment, patent or corporate-law omnibus merely because these are legal fields;
- a universal legal research database;
- a copy of Westlaw, Lexis, vLex or another legal information provider;
- a central store of consuming-project legal matters;
- a regulatory-change SaaS platform;
- a universal policy-as-code engine;
- a jurisdiction ontology project;
- a compliance certification authority;
- a system that claims a document is "legally compliant" without scope, jurisdiction, facts, evidence and valid-as-of context;
- a generic legal disclaimer generator.

---

# 34. Success Criterion

This bootstrap succeeds if a later session can execute each stage without redesigning the project from first principles.

The resulting `legal-skills` repository should make AI-assisted legal production:

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

while remaining a lean Agent Skills project rather than growing into a universal legal platform before the need is proven.
