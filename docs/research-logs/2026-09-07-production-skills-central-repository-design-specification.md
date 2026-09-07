# Production Skills

## 1. Purpose

`production-skills` is the central design, research and orchestration repository for the Production Skills project family.

It exists to:

- define the common Production Skills architecture;
- govern boundaries between Production Skills projects;
- hold cross-domain research;
- hold family-level canonical design specifications;
- define the process for creating new Production Skills projects;
- define common Extension Pack conventions;
- define common testing and evaluation expectations;
- maintain the Production Skills project registry;
- coordinate cross-domain development programmes such as Worldstack;
- identify reusable abstractions only after multiple production domains prove they are required;
- define optional integration with Pactwright without making Production Skills dependent on Pactwright.

It does **not** implement production-domain skills itself.

---

# 2. System Boundary

The family architecture is:

```text
                         production-skills
                    central design + research
                              │
          ┌───────────────────┼────────────────────┐
          │                   │                    │
          ▼                   ▼                    ▼
       common              project             programme
       contracts           bootstrap           orchestration
          │                   │                    │
          └───────────────────┼────────────────────┘
                              │
                              ▼
                    Production Skills Projects
                              │
        ┌─────────────────────┼──────────────────────┐
        │                     │                      │
        ▼                     ▼                      ▼
 narrative-production   music-production      video-production
        │                     │                      │
        ├─────────────────────┼──────────────────────┤
        │                     │                      │
        ▼                     ▼                      ▼
 game-development       software-engineering    deep-research
        │
        ├── ui-ux-design
        ├── world-environment-production
        ├── 3d-production
        ├── character-production
        ├── animation-production
        ├── sound-production
        └── qa-evaluation
```

Each domain repository remains an independent Agent Skills product.

---

# 3. Core Ownership Rule

The central repository owns:

```text
family architecture
family contracts
cross-domain abstractions
cross-domain research
project bootstrap process
project registry
integration conventions
programme orchestration
shared conformance requirements
```

Individual Production Skills repositories own:

```text
domain workflow
domain artefacts
skills
commands
references
tools
provider interaction
Extension Packs
examples
benchmarks
domain evaluation
domain research
```

Pactwright owns:

```text
Contract-driven Delivery
authority
lifecycle
Evidence
Project Intelligence
cross-project delivery governance
```

Worldstack owns:

```text
game-specific knowledge
game implementation
world data
engine architecture
production assets
project decisions
```

These ownership boundaries must not be collapsed.

---

# 4. Common Production Skills Design

The existing production domains support the following family-level principles.

## 4.1 Domain first

Production workflows come from real production practice.

Current AI models and provider APIs do not define the domain workflow.

```text
domain practice
      ↓
production workflow
      ↓
AI/tool execution
```

Not:

```text
available model
      ↓
invent workflow around model
```

---

## 4.2 Cheapest adequate representation

Resolve uncertainty at the cheapest useful resolution.

Examples:

```text
Narrative
concept → outline → scene → prose

Music
motif → MIDI → demo → production

Video
direction → storyboard → reference → shot

Game
mechanic sketch → greybox → PoC → test game

World
map → footprint → blockout → procedural shell → production asset

3D
primitive → proxy → generated draft → game-ready asset
```

This is a family principle.

The exact stages remain domain-owned.

---

## 4.3 Preserve approved work

Approved decisions constrain later production until deliberately reopened.

```text
approved upstream decision
           ↓
downstream constraint
```

A later failure must not casually erase previously approved work.

---

## 4.4 Correct the smallest responsible unit

The common repair strategy is:

```text
evaluate
↓
locate owning production layer
↓
preserve unaffected work
↓
repair smallest sufficient unit
↓
re-evaluate
```

The central repository defines the principle.

The domain repository defines what the correction unit means.

Examples:

```text
Narrative → scene / beat / decision
Music     → section / arrangement / phrase
Video     → frame / shot / edit
Game      → system / interaction / integration edge
3D        → mesh / material / LOD
```

The central system must not attempt to model all such units.

---

## 4.5 Production intelligence above execution

Production Skills should direct tools rather than recreate them.

```text
Production Skill
      ↓
production decision
      ↓
provider skill / deterministic tool / engine
```

Provider registries, model APIs and generic execution frameworks should remain below the production layer.

---

## 4.6 Vertical implementation before abstraction

A new Production Skills family should first solve its own production domain.

Only extract a shared abstraction after at least two independent production domains require substantially the same concept.

```text
Domain A proves concept
        +
Domain B proves concept
        ↓
shared abstraction candidate
        ↓
cross-domain review
        ↓
family contract if justified
```

This is the primary defence against premature framework design.

---

# 5. Common Skill Architecture

An installable Production Skill remains self-contained.

```text
skills/<skill>/
├── SKILL.md
├── commands/
├── references/
├── assets/
├── scripts/          # only where needed
└── evals/
```

The common layers are:

```text
Skill
→ installable user-facing production capability

Command
→ bounded independently testable production operation

Reference
→ reusable specialised knowledge

Asset
→ reusable template, fixture or structured input

Script
→ deterministic operation better implemented as code

Eval
→ behavioural test of the skill or command
```

Commands must not become another workflow engine.

They are internal contracts used for:

- composition;
- testing;
- diagnosis;
- evaluation;
- benchmark isolation.

---

# 6. Common Project Specification Set

Every mature Production Skills repository should converge on the following specification model.

```text
docs/
├── 01-production-skills-system-spec.md
├── 02-production-skills-workflows-and-artifacts-spec.md
├── 03-production-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-extension-packs-spec.md
├── 06-extension-pack-catalogue.md
└── research-logs/
```

Existing repositories do not need immediate filename churn.

For example, existing:

```text
01-creative-skills-system-spec.md
```

may remain until a normal project change justifies migration.

The common semantic ownership is more important than identical filenames.

### Spec 01

Owns:

```text
purpose
scope
non-goals
production principles
skill architecture
system boundaries
```

### Spec 02

Owns:

```text
domain workflow
artefacts
production state
approval
lineage
repair
handoffs
```

### Spec 03

Owns:

```text
repository structure
SKILL.md contracts
command contracts
installation
tooling
technical acceptance
```

### Spec 04

Owns:

```text
testing layers
benchmarks
evals
regression strategy
release quality
```

### Spec 05

Owns:

```text
Extension Pack semantics
pack boundaries
pack creation
pack evaluation
```

### Spec 06

Owns:

```text
current Extension Pack catalogue
showcase examples
example prompts
pack maturity
```

---

# 7. Common Repository Baseline

New projects should start from:

```text
<domain>-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── package.json
│
├── docs/
│   ├── 01-production-skills-system-spec.md
│   ├── 02-production-skills-workflows-and-artifacts-spec.md
│   ├── 03-production-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-extension-packs-spec.md
│   ├── 06-extension-pack-catalogue.md
│   └── research-logs/
│
├── skills/
├── examples/
├── benchmarks/
├── evals/
├── tests/
├── tools/
├── scripts/
│
├── integrations/
│   └── pactwright.yml
│
└── .github/
```

Directories should only be added when they contain working material.

Do not create structural symmetry for its own sake.

---

# 8. Evaluation Model

Every Production Skills family owns its own domain benchmark.

The common testing hierarchy is:

```text
deterministic validation
        ↓
command conformance
        ↓
skill orchestration
        ↓
production correctness
        ↓
domain quality
        ↓
Extension Pack fidelity
        ↓
end-to-end production
```

The benchmark should distinguish:

```text
contract correctness
≠
production quality
```

Examples:

```text
narrative continuity
≠ prose quality

music workflow correctness
≠ musical quality

video continuity
≠ cinematographic quality

game system correctness
≠ game feel

3D validity
≠ artistic quality
```

No single aggregate quality score should hide material failures.

---

# 9. Regression Principle

Every meaningful escaped production defect should become a reproducible evaluation fixture where practical.

```text
production defect
↓
diagnosis
↓
smallest reproducible fixture
↓
benchmark / eval
↓
future regression protection
```

Tests should expose failures as early and cheaply as possible.

A subsystem defect should not require a complete production run merely to discover it.

---

# 10. Extension Packs

Production Extension Packs add reusable specialisation to one Production Skills family.

They do not replace the owning production workflow.

```text
Production Skill
→ knows HOW to perform the production discipline

Extension Pack
→ specialises HOW that discipline behaves for a reusable context
```

A pack may encode:

- format;
- genre;
- production style;
- audience;
- technology;
- platform;
- specialised workflow rules;
- evaluation adjustments;
- domain-specific conventions.

A pack must represent reusable knowledge.

It must not merely contain project instructions.

---

# 11. Extension Pack Qualification

Create an Extension Pack only when:

1. the knowledge is reusable across projects;
2. it changes meaningful production behaviour;
3. the core skill would become unnecessarily specialised if the knowledge were embedded directly;
4. examples can demonstrate its effect;
5. evaluation can distinguish pack-enabled behaviour from the core baseline.

The required evaluation pattern is:

```text
core Production Skill
        vs
core Production Skill + Extension Pack
```

The pack must demonstrate meaningful specialised value.

---

# 12. Extension Pack Creator

Every Production Skills family should eventually provide:

```text
<domain>-pack-create
```

or equivalent.

The pack-creation process should cover:

```text
identify reusable specialisation
↓
research
↓
define production grammar
↓
define boundaries
↓
create pack
↓
create examples
↓
create evals
↓
benchmark against core
↓
validate
```

Do not introduce one universal runtime `pack-create` implementation until multiple domains prove their authoring mechanics can actually be shared.

The central repository may define the **contract**.

Domain repositories own the implementation.

---

# 13. Pactwright Integration

Pactwright integration is optional.

A compatible project may expose:

```text
integrations/
└── pactwright.yml
```

The manifest may declare:

```text
identity
Pactwright compatibility
capability → skill bindings
Extension Pack discovery
```

It must not define:

```text
Pactwright agents
Pactwright prompts
Pactwright lifecycle stages
Pactwright lifecycle shapes
Project Graph semantics
provider routing
domain production workflow
```

Without Pactwright:

```text
AI agent
→ Production Skills
```

With Pactwright:

```text
Pactwright
→ Agent Pack
→ Production Skills
```

The production skill itself remains the same.

---

# 14. Central Repository Responsibilities

The central repository is organised around six responsibilities.

## 14.1 Family specifications

Define stable cross-domain contracts.

## 14.2 Research

Compare domains and identify repeated design patterns.

## 14.3 Project bootstrap

Provide the process used to research and create new Production Skills projects.

## 14.4 Registry

Maintain the authoritative list of Production Skills projects and their maturity.

## 14.5 Programme orchestration

Coordinate families needed by major cross-domain programmes such as Worldstack.

## 14.6 Conformance

Check that repositories satisfy family-level contracts without evaluating their domain quality.

---

# 15. Central Repository Structure

```text
production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── package.json
│
├── docs/
│   ├── specs/
│   │   ├── 01-production-skills-family-system.md
│   │   ├── 02-production-skills-project-contract.md
│   │   ├── 03-production-skills-evaluation-and-extension-packs.md
│   │   └── 04-cross-domain-orchestration-and-integration.md
│   │
│   ├── research-logs/
│   │   ├── cross-domain/
│   │   └── architecture/
│   │
│   ├── bootstrap/
│   │   ├── new-project-process.md
│   │   ├── domain-research-process.md
│   │   ├── skill-research-process.md
│   │   ├── gap-analysis-process.md
│   │   └── repository-scaffolding-process.md
│   │
│   └── decisions/
│
├── registry/
│   ├── projects/
│   └── README.md
│
├── programmes/
│   └── worldstack/
│       ├── README.md
│       ├── capability-map.md
│       ├── project-roadmap.md
│       ├── extension-pack-roadmap.md
│       ├── integration-map.md
│       └── research-logs/
│
├── templates/
│   ├── specs/
│   ├── repository/
│   ├── benchmark/
│   └── pactwright/
│
├── schemas/
│   ├── project-registry.schema.json
│   └── family-conformance.schema.json
│
├── tooling/
│   ├── validate-registry.ts
│   └── audit-project.ts
│
├── tests/
│
├── .pactwright/
└── .github/
```

Do not add multi-repository orchestration services, databases or complex automation at bootstrap.

---

# 16. Canonical Central Specs

Keep the central canonical specification set deliberately small.

## `01-production-skills-family-system.md`

Owns:

- family purpose;
- terminology;
- production principles;
- abstraction extraction rule;
- ownership boundaries;
- relationship between projects;
- relationship to tools/providers;
- relationship to Pactwright.

## `02-production-skills-project-contract.md`

Owns:

- required project responsibilities;
- canonical per-project spec model;
- skill packaging;
- command model;
- repository baseline;
- standalone installation;
- project bootstrap contract;
- project maturity states.

## `03-production-skills-evaluation-and-extension-packs.md`

Owns:

- common evaluation layers;
- benchmark expectations;
- regression principles;
- Extension Pack semantics;
- pack qualification;
- pack-authoring expectations.

## `04-cross-domain-orchestration-and-integration.md`

Owns:

- multi-Production-Skills composition;
- cross-project handoffs;
- programme orchestration;
- Pactwright integration;
- family registry;
- cross-domain conformance;
- extraction and promotion of shared abstractions.

Do not move domain workflows into these specs.

---

# 17. Research Ownership

Research belongs centrally when it answers questions such as:

```text
What behaviour is shared across domains?

Should a repeated concept become a family abstraction?

How should Production Skills integrate with Pactwright?

How do Production Skills compose in a video game?

What project boundaries prevent duplicated responsibilities?

What common benchmark conventions are justified?
```

Research stays in a domain repository when it asks:

```text
How should character locomotion be animated?

How should narrative continuity work?

How should a music demo be represented?

How should road networks be constructed?

How should a video storyboard be evaluated?
```

The central repository should maintain an index of relevant domain research rather than copying all domain research.

---

# 18. Project Registry

The registry records the family, not its implementation state in detail.

Example:

```yaml
id: narrative-production-skills
repository: sb-dev/narrative-production-skills

domain: narrative

status: mature

canonical_specs:
  system: true
  workflows: true
  repository: true
  benchmark: true
  extension_packs: true
  catalogue: true

capabilities:
  - narrative-development
  - narrative-writing
  - narrative-continuity
  - narrative-evaluation
  - narrative-revision

pactwright:
  integration: planned

programmes:
  - worldstack
```

Do not copy every issue, release or skill file into the registry.

GitHub and the owning repository remain authoritative for those.

---

# 19. Project Maturity

Use a small maturity model.

```text
proposed
↓
researching
↓
specified
↓
scaffolded
↓
working
↓
benchmarked
↓
mature
```

Definitions:

### Proposed

Project boundary exists.

### Researching

Production domain and relevant AI/tool ecosystem are being studied.

### Specified

Canonical project specs exist.

### Scaffolded

Repository structure and initial skills exist.

### Working

At least one meaningful end-to-end workflow succeeds.

### Benchmarked

Domain benchmark exists and produces useful evidence.

### Mature

Core workflow, evaluation, examples and extension mechanisms are demonstrated.

Maturity must not imply completeness.

---

# 20. Existing Production Skills Projects

Initial mature evidence base:

```text
music-production-skills
narrative-production-skills
video-production-skills
```

These repositories should be treated as production evidence for family abstractions.

They should not be rewritten merely to conform cosmetically to the new central repository.

Convergence should happen through normal improvements.

---

# 21. Worldstack Production Skills Programme

Worldstack requires a coordinated set of Production Skills.

## Existing

```text
narrative-production-skills
music-production-skills
video-production-skills
```

## New priority projects

```text
game-development-skills
software-engineering-skills
deep-research-skills
ui-ux-design-skills
world-environment-production-skills
3d-production-skills
character-production-skills
animation-production-skills
qa-evaluation-skills
sound-production-skills
```

`music-production-skills` and `sound-production-skills` should remain separate initially.

The existing Music Production Skills boundary explicitly treats general game audio/SFX production as outside its domain.

Worldstack therefore needs:

```text
music-production-skills
→ composition, score, themes, adaptive music

sound-production-skills
→ SFX, ambience, Foley, vehicle audio, spatial audio
```

Do not broaden Music Production Skills solely because Worldstack needs both.

---

# 22. Worldstack Project Waves

The central programme should orchestrate project development by dependency rather than attempting to complete all projects simultaneously.

## Wave 1 — Foundation

```text
deep-research-skills
software-engineering-skills
game-development-skills
qa-evaluation-skills
```

These enable:

- technical PoCs;
- engine research;
- implementation;
- test games;
- integration games;
- reliable evaluation.

## Wave 2 — World

```text
world-environment-production-skills
ui-ux-design-skills
3d-production-skills
```

These enable:

- world research;
- city graph development;
- greyboxing;
- modular environment production;
- usable player interaction.

## Wave 3 — Living World

```text
character-production-skills
animation-production-skills
sound-production-skills
```

These enable:

- NPC production;
- character behaviour presentation;
- locomotion;
- ambient world audio.

## Wave 4 — Integrated Experience

Existing:

```text
narrative-production-skills
music-production-skills
video-production-skills
```

are extended with game-specific Extension Packs for:

- open-world narrative;
- adaptive score;
- runtime cinematography.

---

# 23. Extension Pack Roadmap for Worldstack

The Worldstack programme should identify **requirements for packs**, but each pack remains owned by its domain repository.

Example:

```text
programmes/worldstack/extension-pack-roadmap.md
```

may state:

```text
game-development-skills
├── open-world-systems
├── systemic-gameplay
├── test-game-development
└── integration-game-development

world-environment-production-skills
├── real-world-to-game-world
├── modular-city-production
└── procedural-environment-production

animation-production-skills
├── locomotion
└── active-ragdoll

music-production-skills
└── adaptive-game-score

video-production-skills
└── runtime-game-cinematography
```

The actual pack specifications and implementation remain in their owning repositories.

---

# 24. Cross-Domain Integration

The central repository should specify handoff expectations, not universal domain artefacts.

Example:

```text
Narrative
→ character intent
→ Character Production

Character Production
→ character model requirements
→ 3D Production

Animation
→ movement capability
→ Game Development

World Environment
→ spatial world
→ Game Development

Music
→ adaptive score artefacts
→ Game runtime

Video
→ runtime cinematic design
→ Game Development
```

The central project records:

```text
who owns the handoff
what minimum contract must be preserved
how integration is evaluated
```

It should not define every domain's internal artefact schema.

---

# 25. Common Abstraction Extraction

Every proposed shared abstraction must include evidence.

Example:

```yaml
candidate: approved-production-decision

observed_in:
  - narrative-production-skills
  - music-production-skills
  - video-production-skills

shared_need:
  preserve selected upstream decisions during downstream production

domain_variations:
  narrative: story decision
  music: musical decision
  video: creative production decision

recommendation:
  family principle

not_recommended:
  universal approved-artifact schema
```

This allows the central project to share the principle without forcing domains into one data model.

---

# 26. Extraction Candidate Lifecycle

Use:

```text
observed
↓
cross-domain candidate
↓
researched
↓
accepted
   or
rejected / domain-specific
```

Do not create a complex graph or workflow engine for this initially.

A Markdown record is sufficient.

---

# 27. Central Conformance

The central repository may eventually provide a thin:

```text
audit-project
```

tool.

It may verify:

```text
required specs exist
skills are self-contained
commands stay inside skills
benchmark definition exists
Extension Pack contract exists where packs are supported
Pactwright integration manifest follows the family boundary
README declares installation
repository has no broken internal references
```

It must not decide:

```text
Is the music good?
Is the narrative compelling?
Is the game fun?
Is the animation believable?
```

Those remain domain benchmark responsibilities.

---

# 28. Pactwright Dogfooding

The central `production-skills` repository should itself be a Pactwright project.

Pactwright governs changes to:

```text
family architecture
bootstrap process
central canonical specs
new project proposals
cross-domain abstractions
Worldstack programme requirements
```

Individual Production Skills repositories remain independent Pactwright projects when they adopt Pactwright.

The central repository does not become their Project Graph.

---

# 29. Anti-Overengineering Rules

Do not introduce initially:

```text
shared production runtime
universal production workflow
universal artefact graph
central provider registry
central model catalogue
multi-repository database
cross-project dependency service
universal Extension Pack interpreter
universal benchmark score
centralised domain knowledge
```

Start with:

```text
Markdown specs
research logs
registry metadata
templates
thin validation
GitHub
Pactwright
```

Add infrastructure only after actual multi-project friction demonstrates a need.

---

# 30. Success Criteria

The central repository succeeds when:

1. a new Production Skills project can be bootstrapped consistently;
2. ownership between projects is clear;
3. existing mature projects remain independently usable;
4. cross-domain abstractions are evidence-backed;
5. common architectural drift can be detected;
6. Extension Packs remain domain-owned but follow common family principles;
7. Worldstack can determine which skills and packs it requires without owning those skills;
8. Production Skills integrate with Pactwright without depending on it;
9. domain-specific research remains close to its domain;
10. cross-domain and programme research has one authoritative home;
11. new projects become easier to create without making existing projects more coupled.

---

# 31. Initial Deliverables

The first central-repository implementation should produce only:

```text
README.md

docs/specs/
├── 01-production-skills-family-system.md
├── 02-production-skills-project-contract.md
├── 03-production-skills-evaluation-and-extension-packs.md
└── 04-cross-domain-orchestration-and-integration.md

docs/bootstrap/
└── new-project-process.md

docs/research-logs/
└── 2026-09-04-pactwright-production-skills-integration-and-cross-domain-delivery-research.md

registry/projects/
├── music-production-skills.yml
├── narrative-production-skills.yml
└── video-production-skills.yml

programmes/worldstack/
├── README.md
├── capability-map.md
├── project-roadmap.md
└── extension-pack-roadmap.md
```

Then use the central bootstrap process to create the first missing Worldstack Production Skills project.

Recommended first project:

```text
game-development-skills
```

with `deep-research-skills`, `software-engineering-skills` and `qa-evaluation-skills` developed immediately alongside it because those four form the foundation for the PoC → test game → integration game development loop.