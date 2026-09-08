# Advertising Production Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.0  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `advertising-production-skills` moves from a project idea to a **specified, scaffolded, benchmarked, installable open-source Production Skills repository** for evidence-driven advertising production.

The project should help AI agents turn an approved business offer and acquisition objective into coherent advertising campaigns rather than treating advertising as isolated copy generation, image prompts or ad-platform button pushing.

The target production loop is expected to resemble:

```text
approved business / offer / acquisition objective
→ campaign brief
→ audience and context evidence
→ message / claim architecture
→ creative hypotheses
→ cheapest useful ad representations
→ concept selection
→ cross-format creative production
→ media / placement plan
→ landing / destination handoff
→ launch-ready campaign package
→ measurement
→ diagnosis
→ smallest sufficient creative / media correction
→ scaled or retired campaign
```

The exact workflow must be validated through professional advertising practice before it becomes a skill contract.

`advertising-production-skills` owns reusable production expertise for:

```text
advertising briefs
campaign strategy within approved business constraints
audience / context translation
message and claim architecture
creative strategy
ad concepts
copy / visual / video / audio ad direction
creative variants
format and placement adaptation
media planning at campaign level
targeting / audience hypotheses
creative testing
campaign measurement contracts
creative and media diagnosis
advertising optimisation
campaign handoffs and evidence
```

It does **not** own:

- the underlying customer, offer, pricing, money model or business-wide acquisition strategy owned by Business Building Skills;
- general market research owned by Deep Research Skills;
- legal conclusions about advertising, privacy or regulated claims owned by Legal Skills;
- specialist long-form narrative craft owned by Narrative Production Skills;
- specialist video, image, audio or UI production owned by the relevant Production Skills;
- ad-platform account administration, billing or autonomous spend execution;
- CRM, analytics, attribution or marketing-automation infrastructure;
- consuming-project product truth;
- Pactwright lifecycle authority.

The project may define implementation-ready campaign, creative, placement, measurement and optimisation contracts for advertising platforms without becoming an ad network or media-buying platform.

---

## 2. Production Skills Family Position and Boundaries

`advertising-production-skills` is a **Production Skills family project**.

Its family role is:

```text
Business Building Skills
→ customer / offer / business acquisition objective / economics / growth constraint

Advertising Production Skills
→ campaign strategy / creative system / media plan / tests / optimisation

Narrative / Video / Audio / UIUX / other Production Skills
→ specialist campaign assets and destinations

Legal Skills
→ legal / regulatory constraints

Pactwright
→ optional lifecycle, Contracts and Evidence
```

Advertising must remain independently installable and useful without Pactwright or any specific asset-production skill.

### Boundary with Business Building Skills

Business Building owns questions such as:

```text
who is the target customer?
what problem/value/offer are we selling?
what is the price / money model?
should paid advertising be used at all?
what CAC / payback / margin constraints apply?
which acquisition channel class is strategically justified?
```

Advertising owns questions such as:

```text
what advertising objective follows from those constraints?
what messages / claims / proof should be tested?
what creative concepts and variants should run?
which placements / formats / audience hypotheses should be used?
how should spend be staged within an authorised budget?
what campaign evidence proves or falsifies the hypothesis?
what is the smallest creative / media change after failure?
```

Advertising must not silently rewrite the approved offer, price or target customer to improve ad metrics. If campaign evidence challenges those upstream decisions, it should return an evidence-backed handoff to Business Building.

---

## 3. Initial Domain Evidence

The bootstrap begins from professional advertising practice, current platform constraints and advertising standards rather than current generative-model capabilities.

### Advertising claims require substantiation and must not materially mislead

The UK CAP Code requires marketing communications not to materially mislead, and current ASA/CAP guidance emphasises substantiation of objective claims, material information, pricing and comparisons. The relevant framework now reflects the Digital Markets, Competition and Consumers Act 2024.

Design consequence:

```text
campaign claim
→ evidence / qualification
→ legal / standards review where material
→ approved copy / creative
```

Advertising evaluation must fail persuasive creative that depends on unsupported or misleading claims.

References:

- https://www.asa.org.uk/type/non_broadcast/code_section/03.html
- https://www.asa.org.uk/advice-online/misleading-advertising.html

### Platform policy is part of campaign validity

Google Ads policies prohibit misleading representation and impose changing restrictions on personalised advertising and sensitive targeting. Google published multiple personalised-ad policy updates during 2026, including changes effective on different dates.

Design consequence:

Platform policy cannot be frozen permanently into prompts. Campaign production must preserve:

```text
platform
market / jurisdiction
policy area
policy source
retrieved-at
valid-as-of / effective date
campaign implication
```

and re-check current platform rules for material launches.

References:

- https://support.google.com/adspolicy/answer/6020955
- https://support.google.com/adspolicy/answer/17135641
- https://support.google.com/adspolicy/answer/17598957

### Campaign measurement needs consistent semantics

IAB finalised Campaign Data Standards 1.0 in August 2026 to improve consistency in how advertising experiences and inventory are described across channels and campaign systems.

Design consequence:

The project should define stable campaign-measurement semantics and provider adapters rather than embed one platform's naming as the universal model.

Reference:

- https://www.iab.com/guidelines/campaign-data-standards/

### Advertising quality is not one metric

A high click-through rate can coexist with poor lead quality, weak conversion, misleading creative or unprofitable downstream economics.

Design consequence:

Advertising evaluation must distinguish:

```text
attention
engagement
click / response
qualified response
conversion
cost
downstream quality
creative quality
claim / policy validity
incremental business value where measurable
```

The consuming business remains the authority for economics and customer value.

---

## 4. Governing Principles

### Campaign objective before creative

Resolve what the campaign is expected to change before producing ads:

```text
awareness
consideration
qualified demand
lead generation
purchase / signup
app install / activation
retargeting / re-engagement
launch / event response
```

Do not use a generic "make an ad" workflow.

### Approved offer before advertising optimisation

Advertising should consume an approved customer/value/offer model. If the offer is incoherent, advertising should diagnose the upstream dependency rather than hide it with more aggressive creative.

### Evidence before claims

Separate:

```text
product fact
customer evidence
objective claim
subjective positioning / puffery
proof asset
qualification / limitation
```

Do not invent testimonials, endorsements, statistics, scarcity, awards, savings or performance outcomes.

### Cheapest useful creative representation

Use the cheapest artefact capable of answering the current uncertainty:

```text
campaign brief
→ message matrix
→ headline / hook variants
→ static storyboard / rough layout
→ script / animatic / audio sketch
→ low-cost ad mockup
→ representative finished variant
→ production campaign asset set
```

Do not produce ten polished videos to discover that the value proposition is unclear.

### Creative concept and asset execution are separate

Advertising owns concept, message hierarchy, CTA, proof, format adaptation and campaign role. Specialist Production Skills may own the final video, image, audio, copy-heavy narrative or landing-page implementation.

### One creative variable at a time when learning requires attribution

Where an experiment is intended to learn why performance changed, avoid uncontrolled simultaneous changes to:

```text
hook
offer framing
visual concept
CTA
audience
placement
bid / budget
landing destination
```

unless the test explicitly compares complete creative systems.

### Creative fatigue is a production state

Repeated exposure can reduce performance. Preserve creative lineage and variation so a campaign can rotate, refresh or branch without losing evidence about what has already been tested.

### Audience is a hypothesis, not a stereotype

Targeting should be based on authorised evidence and platform/legal constraints. Avoid inferring sensitive traits or using discriminatory proxies.

### Media plan and creative plan are coupled

Creative must fit actual inventory, context, attention pattern, aspect ratio, duration, interaction mode and audience state. A concept proven in one placement does not automatically transfer to another.

### Destination consistency is part of advertising quality

The ad, offer and destination should agree on:

```text
product / service
price / terms
claim
CTA
availability
identity / brand
expected next action
```

Advertising may define destination requirements; UI/UX/Web/Software Production owns specialist destination implementation.

### Metrics do not outrank business outcomes

Advertising should optimise within Business Building constraints such as lead quality, contribution margin, payback, capacity and retention. Cheap clicks are not success if they produce poor customers.

### Spend is authorised commitment

The skills may design budgets, staging and test allocations, but actual account spend or bid changes should require explicit authorised execution through the chosen platform/tooling.

### Platform policy and law are execution context

Rules vary by market, product category, targeting method and platform, and can change over time. Verify current requirements rather than treating old policy snapshots as permanent truth.

### Preserve approved campaign work

An accepted claim, concept, proof asset, audience definition, landing requirement or winning creative should not be silently rewritten during an unrelated optimisation.

### Correct the smallest responsible layer

Examples:

```text
low impression delivery
→ media / targeting / bid / eligibility diagnosis

high impressions, low attention
→ hook / format / creative

strong clicks, weak qualified conversion
→ message-to-offer / audience / destination consistency

strong conversion, poor downstream customer quality
→ return evidence to Business Building / targeting diagnosis

policy rejection
→ claim / creative / targeting / platform-policy layer

creative fatigue
→ variant / concept refresh

landing-page friction
→ UIUX / destination handoff

video craft weak but concept sound
→ Video Production
```

---

# 5. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Advertising Domain and Cross-Family Boundaries
    ↓
2. Research Professional Advertising Practice
    ↓
3. Define Campaign Brief, Audience and Objective Model
    ↓
4. Define Message, Claim, Proof and Creative Strategy Model
    ↓
5. Define Creative Production and Cross-Format Adaptation
    ↓
6. Define Media, Placement, Targeting and Budget Model
    ↓
7. Define Destination and Cross-Domain Handoffs
    ↓
8. Define Experiment, Measurement and Attribution Model
    ↓
9. Define Optimisation, Fatigue and Campaign-Learning Model
    ↓
10. Define Legal, Standards and Platform-Policy Handoffs
    ↓
11. Research Advertising AI Skills, Platforms and Tools
    ↓
12. Choose Execution Layer and Tool Boundaries
    ↓
13. Gap Analysis + Over-Engineering Guardrails
    ↓
14. Design Core Skills and Commands
    ↓
15. Design Extension Packs and Pack Authoring
    ↓
16. Design Five Progressive Example Levels
    ↓
17. Design Canonical Advertising Stress Tests
    ↓
18. Design Evals, Benchmarks and Regression Fixtures
    ↓
19. Generate Six Canonical Specifications
    ↓
20. Design Public README
    ↓
21. Cross-Project Review
    ↓
22. Scaffold Production Repository
    ↓
23. Implement and Prove Core Vertical
    ↓
24. Expand Progressive Coverage and Extension Packs
    ↓
25. Validate Installation and Repository Integrity
    ↓
26. Optional Pactwright Integration + Registry Promotion
    ↓
27. Review Shared-Abstraction Candidates
    ↓
MATURE ADVERTISING PRODUCTION SKILLS PROJECT
```

The Stage 0 repository is the durable bootstrap workspace, not the production scaffold created at Stage 22.

---

# 6. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/advertising-production-skills` before substantive bootstrap research begins.

Initial structure:

```text
advertising-production-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-advertising-production-skills-new-project-bootstrap-process.md
```

Do not create `skills/`, `examples/`, `benchmarks/`, `extension-packs/`, platform integrations, CI or package metadata until later stages justify them.

Every substantive stage should persist detailed findings under `docs/research-logs/`.

Repository creation alone does **not** make the project `scaffolded`.

**Exit:** later stages can continue primarily from durable research logs.

---

# 7. Stage 1 — Define Advertising Domain and Cross-Family Boundaries

Resolve ownership across:

```text
campaign briefing
advertising objectives
creative strategy
message / claim hierarchy
ad copy direction
visual / video / audio creative direction
creative variants
media planning
audience / targeting hypotheses
placement / format adaptation
campaign testing
measurement
optimisation
creative fatigue
campaign learning
```

Define explicit handoffs with:

```text
Business Building Skills
Deep Research Skills
Legal Skills
Narrative Production Skills
Video Production Skills
Audio Production Skills
UI/UX Design Skills
Software Engineering Skills
QA / Evaluation Skills
Pactwright
```

Key questions:

- Does Advertising own media planning but not autonomous media buying?
- Where does ad copy end and general Narrative/copywriting production begin?
- Does Advertising own landing-page requirements but not implementation?
- Which audience research belongs to Deep Research versus campaign translation?
- Which conversion diagnosis returns to Business Building?
- Which platform constraints remain execution configuration rather than core semantics?

**Research-log output:** domain charter, ownership map, handoff contracts, intended users and non-goals.

**Exit:** Advertising can explain its role without duplicating Business Building or specialist asset Production Skills.

---

# 8. Stage 2 — Research Professional Advertising Practice

Research complementary disciplines rather than one platform playbook:

```text
account / campaign planning
creative strategy
copywriting
art direction
brand advertising
direct-response advertising
performance marketing
search advertising
social advertising
video / CTV advertising
display / programmatic
out-of-home
print / audio / podcast advertising
B2B demand generation
app-install / mobile acquisition
retargeting / re-engagement
media planning
media buying as an execution comparison domain
ad operations
creative testing
measurement / attribution
brand lift / incrementality
campaign trafficking / QA
```

For each stream capture:

```text
roles
briefing
research inputs
working artefacts
cheap representations
creative-development stages
approval points
media decisions
measurement
common failures
repair scopes
legal / platform gates
handoffs
quality criteria
```

Do not infer the domain from Meta/Google campaign-manager UIs.

**Exit:** the production model is grounded in advertising practice rather than platform configuration screens.

---

# 9. Stage 3 — Define Campaign Brief, Audience and Objective Model

Define the minimum campaign brief.

Candidate fields:

```text
business objective
advertising objective
target customer / approved audience evidence
offer / product / price
campaign market / jurisdiction
budget / test budget
CAC / payback / capacity constraints supplied by Business Building
campaign period
channel / placement constraints
brand requirements
claim / proof inventory
landing destination
measurement events
platform / policy context
approval owners
```

Audience records should distinguish:

```text
approved business segment
audience hypothesis
platform targeting representation
exclusions
sensitive / prohibited targeting constraints
remarketing eligibility
observed performance segment
```

Do not convert platform audience labels into customer truth.

**Exit:** advertising work begins from explicit business and evidence constraints.

---

# 10. Stage 4 — Define Message, Claim, Proof and Creative Strategy Model

Research artefacts such as:

```text
message hierarchy
claim inventory
proof inventory
objection map
creative territory
hook / angle matrix
CTA architecture
brand consistency constraints
creative hypothesis
```

Preserve the chain:

```text
business/customer evidence
→ message hypothesis
→ claim
→ substantiation / proof
→ creative expression
→ placement adaptation
```

Classify claims by evidence burden and legal/policy sensitivity rather than treating all copy as interchangeable.

Do not use synthetic social proof or fabricated user stories as evidence.

**Exit:** creative concepts can be audited back to approved facts and campaign hypotheses.

---

# 11. Stage 5 — Define Creative Production and Cross-Format Adaptation

Define the advertising production hierarchy:

```text
campaign idea
→ creative concept
→ master message / script / visual direction
→ format-specific variants
→ placement-specific adaptations
→ production assets
```

Research:

```text
static image ads
short-form social video
longer video / CTV
search text ads
display
carousels
vertical video
native / sponsored content
audio / podcast ads
OOH / print as comparison formats
```

Advertising should define asset contracts such as:

```text
message
hook
proof
CTA
brand elements
format / duration / aspect ratio
safe zones
required supers / disclosures
visual / audio hierarchy
landing destination
variant identity
```

Specialist Production Skills may execute final asset craft.

**Exit:** one campaign concept can become appropriate channel/placement variants without uncontrolled message drift.

---

# 12. Stage 6 — Define Media, Placement, Targeting and Budget Model

Research campaign-level media decisions:

```text
channel role
placement role
inventory type
audience hypothesis
geography
schedule / daypart where relevant
frequency
reach
bid / optimisation objective
test allocation
budget staging
exclusions
brand safety / suitability
```

Separate:

```text
business-wide acquisition-channel choice
→ Business Building

campaign media plan within authorised advertising strategy
→ Advertising Production

actual spend / bid / account mutation
→ authorised execution tooling
```

Do not build a universal media-buying algorithm.

**Exit:** the skills can design a testable media plan while preserving authorised spend boundaries.

---

# 13. Stage 7 — Define Destination and Cross-Domain Handoffs

Advertising must define what the destination must preserve:

```text
message continuity
offer / price consistency
claim / proof consistency
CTA continuation
tracking requirements
load / mobile constraints where relevant
required disclosures / terms handoff
```

Cross-domain handoffs:

```text
Business Building
→ offer / target / economic constraints
→ Advertising
```

```text
Advertising
→ script / creative brief
→ Video / Audio / Narrative
→ campaign asset
```

```text
Advertising
→ destination contract
→ UIUX / Software Engineering
→ landing / app / product destination
```

```text
Legal
→ claim / targeting / disclosure constraints
→ Advertising
```

```text
Advertising
→ measurement contract
→ Software / Analytics execution layer
```

**Exit:** campaign production composes with specialist domains without transferring ownership.

---

# 14. Stage 8 — Define Experiment, Measurement and Attribution Model

Define advertising experiments such as:

```text
creative concept test
hook / headline test
proof test
CTA test
audience hypothesis test
placement test
format test
landing-message continuity test
budget / delivery-stage test
```

For each experiment capture:

```text
hypothesis
changed variable(s)
audience / placement
control / comparison where applicable
primary metric
guardrail metrics
minimum evidence requirement
business downstream metric if available
decision rule
confounders
```

Measurement must distinguish platform-reported metrics from verified downstream business outcomes.

Research attribution and incrementality limits; do not present last-click or platform self-attribution as ground truth by default.

**Exit:** campaign learning is designed before results are interpreted.

---

# 15. Stage 9 — Define Optimisation, Fatigue and Campaign-Learning Model

Define diagnostic paths for:

```text
delivery / eligibility
attention / viewability
engagement
click / response
qualified response
conversion
cost
frequency / fatigue
creative saturation
placement quality
landing continuity
lead / customer quality
```

Preserve campaign lineage:

```text
parent concept
variant
changed elements
launch period
audience / placement context
result
learning
status: active / winner / loser / fatigued / invalid / superseded
```

Do not declare a creative "winner" across all channels/audiences when the evidence applies only to one context.

**Exit:** optimisation preserves learning rather than generating endless untraceable variants.

---

# 16. Stage 10 — Define Legal, Standards and Platform-Policy Handoffs

Model campaign compliance context:

```text
jurisdiction
advertising standard / regulator
product category
platform
placement
claim type
targeting method
audience age / sensitivity
required disclosure
policy source
retrieved-at / valid-as-of / effective date
```

Legal Skills owns legal conclusions. Advertising owns applying approved constraints to campaign production and verifying current platform policy where required.

Priority risks include:

```text
misleading claims
pricing omissions
false scarcity
fake testimonials / endorsements
comparative claims
health / finance / earnings claims
children / vulnerable audiences
sensitive targeting
political / issue advertising where relevant
alcohol / gambling / regulated products
privacy / tracking / remarketing
native-ad disclosure
influencer / sponsored-content disclosure
```

**Exit:** campaign optimisation cannot silently outrank law, standards or platform policy.

---

# 17. Stage 11 — Research Advertising AI Skills, Platforms and Tools

Research current capabilities:

```text
advertising Agent Skills
creative-strategy skills
copywriting skills
image / video / audio generation
ad mockup / variant tooling
Google Ads / Meta / TikTok / LinkedIn / Reddit / Amazon Ads tooling where relevant
programmatic / DSP tooling
ad libraries / transparency centres
creative intelligence platforms
keyword / audience research
media planning
campaign management
ad QA / preview tools
analytics / attribution
experimentation
brand lift / incrementality
creative-performance analysis
landing-page analysis
```

Evaluate:

```text
capability
licence
maturity
automation surface
account / spend permissions
provider coupling
policy freshness
creative quality
measurement reliability
privacy
cost
composability
maintenance
USE / ADAPT / REFERENCE / REJECT
```

**Exit:** the project knows what should be orchestrated rather than rebuilt.

---

# 18. Stage 12 — Choose Execution Layer and Tool Boundaries

Advertising Production Skills should own:

```text
campaign brief
creative strategy
claim / proof discipline
creative hypothesis
format adaptation
media-plan reasoning
targeting hypotheses
experiment design
measurement interpretation
creative / media diagnosis
campaign-learning preservation
repair scope
```

External tools should execute, where suitable:

```text
asset generation / editing
campaign upload
account administration
spend / bidding
ad serving
analytics collection
conversion tracking
attribution computation
A/B assignment
landing-page hosting
```

Do not build an ad server, DSP, CRM, analytics platform or universal platform adapter prematurely.

**Exit:** changing ad platforms does not require redesigning advertising production semantics.

---

# 19. Stage 13 — Gap Analysis and Over-Engineering Guardrails

Test for gaps in:

```text
business-to-campaign translation
claim substantiation traceability
creative hypothesis design
cross-format adaptation
asset-contract handoffs
media / creative coupling
platform-policy freshness
experiment validity
platform-vs-business measurement separation
creative fatigue
campaign lineage
smallest-scope optimisation
```

Defer unless proven necessary:

```text
universal ad platform API
custom DSP / ad server
universal audience graph
identity resolution platform
custom attribution engine
universal creative generator
central ad asset database
universal policy engine
cross-platform bid optimiser
one universal campaign score
autonomous spend agent
```

**Exit:** native skills address production-intelligence gaps rather than advertising infrastructure.

---

# 20. Stage 14 — Design Core Skills and Commands

Lean hypothesis:

```text
advertising-build
advertising-optimise
advertising-evaluate
advertising-pack-author
```

Possible `advertising-build` commands:

```text
frame-campaign
ingest-business-brief
define-objective
model-audience
build-message-map
build-claim-proof-map
generate-creative-territories
design-concept
build-creative-brief
adapt-placement
build-media-plan
design-test
prepare-launch-package
```

Possible `advertising-optimise` commands:

```text
ingest-results
diagnose-delivery
diagnose-creative
diagnose-audience
diagnose-placement
diagnose-destination
detect-fatigue
propose-next-test
refresh-creative
reallocate-test-budget
preserve-learning
```

Possible `advertising-evaluate` commands:

```text
audit-brief
audit-claims
audit-proof
audit-creative-strategy
audit-format-fit
audit-destination-consistency
audit-test-validity
audit-measurement
audit-policy-context
audit-downstream-quality
verify-preservation
diagnose-advertising-failure
```

Retain commands only when they improve independent testing, reuse, diagnosis, repair or benchmark precision.

**Exit:** every skill has a coherent campaign-production responsibility.

---

# 21. Stage 15 — Design Extension Packs and Pack Authoring

Extension Packs should represent coherent reusable **advertising production grammars**, not platform labels alone.

Candidate packs to research:

```text
direct-response-performance-campaign
brand-awareness-campaign
b2b-demand-generation-campaign
consumer-app-acquisition-campaign
product-launch-campaign
retargeting-and-reengagement-campaign
local-service-lead-generation
creator-native-social-campaign
```

A valid pack may change:

```text
campaign objective
creative grammar
proof / CTA pattern
media assumptions
sales-cycle relationship
measurement model
variant strategy
frequency / fatigue logic
landing requirements
quality criteria
```

`Google Ads`, `Meta Ads`, `TikTok Ads` or other provider names should normally remain execution profiles rather than packs unless provider mechanics materially alter the reusable production workflow.

Pack precedence:

```text
verified legal / standards / platform constraints
+ explicit business / campaign requirements
→ approved offer / audience / brand decisions
→ selected Advertising Extension Pack
→ core Advertising defaults
```

Pack authoring must inspect the catalogue, justify a reusable grammar, define core behaviour changes, create a realistic showcase with exact prompt, add behavioural/negative evals and compare core vs core+pack.

**Exit:** packs represent campaign-production specialisations rather than channel tags.

---

# 22. Stage 16 — Design Five Progressive Example Levels

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Choose examples through capability coverage.

### Level 1 — Produce one bounded advertising unit

Candidate classes:

```text
search-ad message set
static social ad concept
15-second vertical-video ad script/storyboard
```

### Level 2 — Build one coherent creative test

Candidate classes:

```text
three-hook test around one approved offer
creative concept adapted to three placements
claim/proof/CTA variant system
```

### Level 3 — Build one complete campaign

Candidate classes:

```text
local-service lead-generation campaign
B2B demand-generation campaign
consumer app acquisition campaign
```

### Level 4 — Diagnose and repair campaign performance

Candidate classes:

```text
high CTR / poor conversion
creative fatigue after initial success
strong platform conversions / poor downstream lead quality
```

### Level 5 — Deliver the full advertising-production thesis

Candidate classes:

```text
Kakeibo consumer subscription launch campaign
one-person FDE consultancy B2B campaign
Production Skills open-source ecosystem adoption/commercial campaign
```

Across all 15 cover:

```text
brand / performance
B2B / B2C
search / social / video / audio / display considerations
creative strategy
claim / proof
cross-format adaptation
media planning
audience hypotheses
experimentation
measurement
fatigue
optimisation
landing handoff
legal / policy constraints
cross-domain asset production
preservation and repair
Extension Packs
```

Every primary example must include the complete copyable prompt.

**Exit:** the example set teaches campaign production rather than fifteen pieces of ad copy.

---

# 23. Stage 17 — Design Canonical Advertising Stress Tests

## Stress Test A — Kakeibo consumer subscription campaign

Exercise:

```text
consumer trust
subscription pricing / refund consistency
financial-product sensitivity
app acquisition
creative variants
proof / claims
privacy / targeting constraints
retention-aware downstream quality
```

Adversarial cases:

```text
unsupported savings claim
hidden renewal implication
creative gets cheap installs but poor activation / retention
ad contradicts product or refund terms
financial targeting violates policy / legal constraints
```

## Stress Test B — One-person FDE consultancy campaign

Exercise:

```text
high-ticket B2B
narrow ICP
outbound / paid-social / search options
lead qualification
proof / credibility
capacity constraints
longer sales cycle
```

Adversarial cases:

```text
optimises lead volume beyond delivery capacity
invented enterprise logos / testimonials
click metrics mistaken for qualified pipeline
creative changes approved service scope to improve response
```

## Stress Test C — Production Skills ecosystem campaign

Exercise:

```text
open-source adoption
technical audience
GitHub / developer channels
education / services / marketplace value
brand + performance tension
multi-product messaging
```

Adversarial cases:

```text
commercial message damages open-source trust
GitHub stars treated as revenue evidence
campaign promises unsupported capabilities
multiple CTAs destroy message hierarchy
```

**Exit:** the architecture survives consumer subscription, professional services and open-source/developer ecosystem advertising.

---

# 24. Stage 18 — Design Evals, Benchmarks and Regression Fixtures

Separate evaluation layers.

### Deterministic campaign validation

Check where possible:

```text
required brief fields
approved offer / price references
claim-to-proof links
asset dimensions / duration / copy limits
UTM / measurement-contract completeness
variant IDs
experiment variable consistency
policy valid-as-of metadata
pack structure
prompt completeness
installation integrity
```

### Creative quality

Keep dimensions separate:

```text
attention / hook
message clarity
value relevance
brand fit
claim credibility
proof strength
CTA clarity
format fit
visual / audio hierarchy
memorability
```

### Campaign reasoning

Evaluate:

```text
objective fit
audience fit
media / placement fit
creative hypothesis quality
budget staging
frequency logic
destination consistency
measurement quality
learning value
```

### Business alignment

Verify that campaign optimisation respects supplied:

```text
customer definition
offer / price
margin / CAC / payback constraints
lead-quality criteria
capacity
retention / downstream value
```

### Legal / policy behaviour

Fail:

```text
unsupported claims
false scarcity
fake testimonials
misleading prices
policy-ineligible targeting
missing required disclosures
stale material platform-policy assumptions
```

### Experiment quality

Test falsifiability, changed-variable control, decision rules, guardrails, confounders and context-limited conclusions.

### Optimisation and repair

Verify that a local campaign defect leads to the smallest responsible correction and preserves unaffected winning creative / business decisions.

### Extension Packs

Test activation, non-activation, precedence, changed campaign behaviour, pack-aware evaluation and core-vs-pack differential behaviour.

### End to end

Use progressive examples plus all three canonical stress tests.

Priority regressions include:

```text
CTR optimisation despite poor downstream quality
claim without proof
wrong offer price
creative drift across placements
fatigue ignored
platform conversion treated as verified revenue
multiple variables changed in an attribution test
policy snapshot used after material update
broad campaign rewrite after one placement fails
```

Do not publish one universal advertising quality score.

**Exit:** persuasive-looking but strategically, legally or experimentally weak advertising can fail the benchmark.

---

# 25. Stage 19 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-advertising-production-skills-system-spec.md
├── 02-advertising-production-skills-workflows-and-artifacts-spec.md
├── 03-advertising-production-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-advertising-production-customisation-packs-spec.md
└── 06-advertising-production-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, boundaries, principles, campaign architecture, core skills, execution boundary, Business Building relationship, legal/policy context and build order.
2. **Workflows and Artifacts:** briefs, audiences, message/claim/proof, concepts, creative variants, media plans, tests, measurement, learning, fatigue, repair and handoffs.
3. **Repository and Contracts:** structure, SKILL.md/command contracts, asset briefs, platform/tool integration, policy metadata, self-containment, installation and CI.
4. **Testing and Benchmark:** deterministic checks, creative/campaign quality, business alignment, legal/policy behaviour, experiments, optimisation, progressive examples, packs and regressions.
5. **Customisation / Extension Packs:** pack model, campaign dimensions, activation, precedence, core effects, evaluation, packaging and authoring.
6. **Catalogue:** curated campaign-production packs, showcases, exact prompts, differential evals and maturity state.

Generate these specs from persisted research logs rather than conversation memory.

**Exit:** implementation can proceed without inventing campaign architecture in code.

---

# 26. Stage 20 — Design Public README

Target structure:

```text
# Advertising Production Skills
positioning
campaign-production capabilities
Business Building / creative-production boundary
truthful / policy-aware advertising
installation
quick start
5 × 3 Learn by Producing
project structure grows with the campaign
core skills
Extension Packs
execution platforms / asset Production Skills
measurement / optimisation
evaluation / benchmark
canonical stress tests
documentation
boundary
contributing
licence
```

A positioning direction to test:

> Turn approved offers into testable, policy-aware advertising campaigns with traceable creative strategy and measurable learning.

**Exit:** a public user can understand that the project produces advertising systems, not merely copy snippets.

---

# 27. Stage 21 — Cross-Project Review

Compare with:

```text
Business Building Skills
Deep Research Skills
Legal Skills
Narrative Production Skills
Video Production Skills
Audio Production Skills
UI/UX Design Skills
QA / Evaluation Skills
Pactwright
```

Likely reusable-but-not-yet-shared candidates include:

```text
claim / evidence handoff
experiment contract
variant lineage
valid-as-of policy metadata
state / decision preservation
```

Apply the family extraction rule before centralising any abstraction.

**Exit:** integration opportunities are recorded without creating a universal marketing platform.

---

# 28. Stage 22 — Scaffold Production Repository

Only now expand Stage 0 into the production scaffold justified by the six specs.

Likely baseline:

```text
advertising-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-advertising-production-skills-system-spec.md
│   ├── 02-advertising-production-skills-workflows-and-artifacts-spec.md
│   ├── 03-advertising-production-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-advertising-production-customisation-packs-spec.md
│   ├── 06-advertising-production-extension-pack-catalogue.md
│   └── research-logs/
├── skills/
├── examples/
├── benchmarks/
├── tests/
├── tools/                 # only if justified
├── extension-packs/       # once implemented
├── integrations/          # optional
└── .github/
```

Do not create a CRM, DSP, ad server, analytics warehouse or platform-account store.

**Exit:** every production directory has an immediate justified role.

---

# 29. Stage 23 — Implement and Prove Core Vertical

Implement the smallest meaningful campaign workflow:

```text
approved offer + audience
→ campaign brief
→ message / claim / proof map
→ 2–3 cheap creative concepts
→ select one
→ produce representative ad variant(s)
→ define media / audience test
→ define measurement
→ evaluate
→ bounded correction
```

Prefer a low-budget bounded campaign fixture rather than automated multi-platform activation.

**Exit:** installed skills can produce and independently evaluate one campaign package end to end.

---

# 30. Stage 24 — Expand Progressive Coverage and Extension Packs

Expand gradually to the selected 15 examples and representative packs.

For each implemented pack prove:

```text
core works without pack
core + pack changes intended campaign behaviour
business / legal / approved campaign constraints outrank pack defaults
pack-aware evaluation recognises valid specialisation
pack authoring can create / revise a valid pack
```

**Exit:** the repository demonstrates several advertising grammars without becoming tied to one channel.

---

# 31. Stage 25 — Validate Installation and Repository Integrity

Validate:

```text
repository contracts
skill self-containment
command discovery
selective installation
clean consumer-project installation
skill-local references/scripts/assets
platform/tool prerequisites
benchmark entry points
example reproducibility
no undocumented source-checkout dependencies
```

Clean external installation remains distinct from source-repository tests.

**Exit:** the repository behaves as an installable Agent Skills product.

---

# 32. Stage 26 — Optional Pactwright Integration and Registry Promotion

If useful add:

```text
integrations/pactwright.yml
```

Potential composition:

```text
Business Building
→ approved acquisition objective / offer / economics

Pactwright
→ authorised advertising Contract

Advertising Production
→ campaign / creative / media / measurement work

Specialist Production Skills
→ campaign assets / destinations

Evidence
→ Advertising evaluation
→ Business Building downstream evaluation where relevant
```

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

Repository creation alone does not promote maturity.

**Exit:** Pactwright can govern campaign delivery without owning advertising semantics.

---

# 33. Stage 27 — Review Shared-Abstraction Candidates

Potential future candidates:

```text
claim / evidence contract
creative variant lineage
experiment contract
valid-as-of policy metadata
campaign-to-business evidence handoff
```

Do not centrally promote:

```text
universal marketing graph
universal campaign runtime
universal platform adapter
universal attribution model
universal creative score
```

without repeated independent evidence.

---

# 34. Advertising Production Acceptance Gates

Before maturity demonstrate:

### Business alignment

- campaign objective traces to approved business/customer/offer inputs;
- Advertising does not silently change price, offer or target customer;
- campaign metrics are interpreted using supplied downstream business constraints;
- upstream failures return evidence to Business Building.

### Claims and creative

- objective claims trace to evidence;
- fabricated proof/testimonials/scarcity fail evaluation;
- creative concepts remain distinguishable from final asset craft;
- placement adaptations preserve approved message and claim meaning;
- winning work is preserved during local repair.

### Media and experiments

- media plan matches campaign objective and creative context;
- audience hypotheses remain hypotheses rather than customer truth;
- spend plans remain within authorised budgets;
- experiments are falsifiable;
- context-limited results are not generalised without evidence;
- creative fatigue and variant lineage are represented.

### Legal / policy

- jurisdiction/platform/policy context is explicit when material;
- material policy is rechecked for current launches;
- misleading advertising and restricted targeting can fail independently;
- legal conclusions are handed to Legal Skills where required.

### Evaluation

- creative quality, campaign reasoning, business alignment, experiment validity, policy validity and downstream quality can fail independently;
- local defects trigger smallest-scope repair;
- known failures become regression fixtures;
- Extension Packs materially change behaviour and are differentially evaluated;
- all canonical stress tests pass meaningful slices.

### Product behaviour

- core works without packs;
- 15 primary progressive examples exist with exact prompts;
- six canonical spec responsibilities exist;
- public README matches implementation;
- skills are self-contained;
- local and clean external installation pass;
- platform/tool claims are backed by implementation evidence.

---

# 35. Initial Non-Goals

Until evidence proves otherwise, `advertising-production-skills` is not:

- a replacement for Business Building Skills;
- a generic marketing department;
- a CRM;
- an email marketing platform;
- a DSP or ad server;
- an ad-account administration system;
- an autonomous media-spend agent;
- an attribution vendor;
- a customer-data platform;
- a universal audience graph;
- a universal copy generator;
- a universal brand system;
- a legal advertising-compliance authority;
- a one-number campaign quality score;
- a platform-specific Google/Meta/TikTok automation repository.

---

# 36. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning `advertising-production-skills` from first principles.

The resulting repository should make advertising production:

```text
more strategy-led
more traceable to approved business decisions
more evidence-backed in its claims
cheaper to validate before expensive asset production
more coherent across formats and placements
more disciplined about experiments
more aware of platform / legal constraints
more resistant to vanity metrics
more capable of preserving campaign learning
more precise about cross-domain handoffs
more efficient to diagnose and repair
```

while remaining a lean Production Skills project rather than becoming a universal advertising platform before repeated production evidence justifies it.
