# Production Skills Bootstrap

This directory contains the reusable processes used to create a **custom bootstrap specification for each new Production Skills repository**.

The files here are not themselves the final bootstrap for a production domain. They are source recipes that must be researched, interpreted and specialised for the new discipline.

A new domain now begins by creating a **minimal target repository** that acts as the durable bootstrap workspace. The bootstrap specification and later stage outputs are saved directly into that repository as research logs.

Initial repository shape:

```text
<domain>-production-skills/
├── README.md
└── docs/
    └── research-logs/
        └── README.md
```

The first substantive bootstrap output should look like:

```text
docs/research-logs/YYYY-MM-DD-<domain>-new-project-bootstrap-process.md
```

For example:

```text
docs/research-logs/2026-09-07-ui-ux-design-skills-new-project-bootstrap-process.md
```

The custom bootstrap then becomes the staged design process used to research, specify, scaffold, implement, evaluate and publish that domain repository.

The minimal repository is **not** the production scaffold. Its purpose is to keep bootstrap research durable, reduce dependence on long conversation context and give later stages a canonical source to read.

---

## Source processes

Use all relevant files in this directory when generating a bootstrap:

- [`new-project-process.md`](new-project-process.md) — family-level project progression and maturity model;
- [`domain-research-process.md`](domain-research-process.md) — how to understand the production discipline before designing Agent Skills;
- [`shared-abstraction-process.md`](shared-abstraction-process.md) — how to prevent premature cross-domain abstractions.

Also read the current family specifications under [`../specs/`](../specs/) and the most recent relevant research logs under [`../research-logs/`](../research-logs/).

Within research logs, prefer newer relevant findings over older ones when they conflict. Do not silently carry superseded assumptions into a new bootstrap.

---

## Bootstrap workspace principle

Conversation is an interaction surface, not the authoritative bootstrap record.

Persist substantive outputs as research logs while the bootstrap progresses. This includes, where useful:

```text
domain-boundary analysis
production-practice research
AI/tool/provider landscape
workflow and artefact model
skill and command decomposition
Extension Pack analysis
example candidate pools and coverage matrices
benchmark design
cross-domain comparisons
material architectural decisions
```

Later stages should read these files rather than depending on the entire conversation history.

This improves:

- context efficiency;
- traceability;
- recovery across sessions;
- consistency between stages;
- final specification quality;
- separation between research evidence and conversational discussion.

Do not create production surfaces early merely because the repository already exists. `skills/`, `examples/`, `evals/`, `benchmarks/`, CI and similar structures are added only when the bootstrap has designed them.

---

## Reference implementations

Before finalising a new bootstrap, compare the proposed process with mature Production Skills repositories, especially:

- [`video-production-skills`](https://github.com/sb-dev/video-production-skills)
- [`narrative-production-skills`](https://github.com/sb-dev/narrative-production-skills)
- [`music-production-skills`](https://github.com/sb-dev/music-production-skills)

Use them as evidence for proven family patterns, not as workflows to copy mechanically.

A new domain must first be understood on its own terms. Only then compare it with existing Production Skills to identify reusable architecture.

The UI/UX bootstrap is a useful example of the expected **depth and domain specificity**:

- [`2026-09-07-ui-ux-design-skills-new-project-bootstrap-process.md`](../research-logs/2026-09-07-ui-ux-design-skills-new-project-bootstrap-process.md)

It is an example, not a canonical template. Later family decisions and evidence from mature repositories take precedence over older assumptions inside an example bootstrap.

---

# Bootstrap generation process

## 0. Create the minimal target repository

Create the future domain repository before substantial bootstrap research begins.

Keep it deliberately small:

```text
README.md
docs/research-logs/README.md
```

The root README should contain only:

```text
project name
provisional one-line purpose
bootstrap / research status
```

The research-log README should explain that this directory is the durable store for bootstrap research and staged design outputs.

Do not add the production scaffold yet.

The repository's existence does not imply `scaffolded` maturity.

---

## 1. Define the new production discipline

Start from the project idea, not a proposed skill list.

Establish:

```text
production discipline
owned outcomes
professional responsibilities
adjacent disciplines
handoff boundaries
intended users
quality definition
human decision points
cost / fidelity constraints
non-goals
```

The bootstrap must state clearly what the repository owns and what it deliberately leaves to other Production Skills, provider skills, deterministic tools or consuming projects.

Persist the detailed boundary analysis as a research log.

---

## 2. Research real production practice

Apply [`domain-research-process.md`](domain-research-process.md) before designing the Agent Skills architecture.

Research strong professional practice, including:

```text
roles
workflow stages
working artefacts
cheap representations
commitment points
approval points
expensive operations
iteration loops
failure modes
repair strategies
quality criteria
specialist terminology
handoffs
```

Do not infer the production workflow from current AI model capabilities.

The resulting custom bootstrap should contain domain-specific research stages whenever the discipline requires them. UI/UX, for example, needs explicit human-problem and evidence modelling; another production discipline may need different specialist research stages.

Persist the detailed production research and synthesis before proceeding.

---

## 3. Research existing AI capabilities

Find and assess existing:

```text
Agent Skills
open-source projects
CLIs
APIs
MCPs
engines
provider capabilities
deterministic tools
specialist evaluators
```

Evaluate each capability by its actual production role rather than its popularity or naming.

Record at least:

```text
capability
source
licence
maturity
installation model
production role
deterministic vs generative role
provider coupling
composability
quality suitability
maintenance state
gaps
USE / ADAPT / REFERENCE / REJECT
```

The Production Skills repository should own production intelligence. Existing tools should execute specialist operations whenever they already solve the execution problem well.

Persist the capability landscape and gap analysis.

---

## 4. Derive the domain workflow and artefact model

Translate the research into the smallest credible end-to-end production workflow.

Identify:

```text
uncertainty
→ cheapest useful representation
→ alternatives where useful
→ selection / approval
→ increased fidelity
→ production
→ evaluation
→ diagnosis
→ smallest sufficient correction
→ delivery / handoff
```

The exact stages, terminology and artefacts must remain domain-native.

Do not import story beats into music, shot terminology into UI/UX, or any other domain-specific structure merely to make repositories look symmetrical.

Persist the workflow model and the reasoning behind it.

---

## 5. Design the core Agent Skills and commands

Derive the smallest installable skill set capable of performing the domain workflow.

Do not start from a fixed number of skills.

Use skill-local commands for bounded operations that benefit from independent testing, reuse, composition or diagnosis:

```text
skills/<skill>/
├── SKILL.md
├── commands/
├── references/
├── assets/
├── scripts/
└── evals/
```

Only create optional surfaces when the skill genuinely needs them.

Commands are decomposed production operations, not a generic workflow engine.

Persist the skill/command architecture and rejected alternatives.

---

## 6. Design Extension Packs as a first-class capability

Every new Production Skills bootstrap must investigate reusable domain specialisations and design the Extension Pack architecture.

The mature family model is:

```text
Core Production Skills
        +
Extension Packs
        +
Pack Authoring Skill
        +
Pack Showcases
        +
Pack Evals / Benchmarks
```

The core skills must remain useful without a pack, but Extension Packs are part of the target repository architecture rather than an optional documentation exercise.

The bootstrap must define:

```text
pack dimensions
pack activation
production behaviour changed by a pack
precedence against explicit instructions and approved work
core-skill integration
pack-aware evaluation
cross-domain boundaries
pack packaging
catalogue rules
showcase requirements
pack-authoring workflow
```

Every mature domain should provide a domain-native pack-authoring skill or equivalent capability.

Every catalogue pack must have at least one realistic showcase with the **exact copyable generation prompt** and behavioural evaluation coverage.

The bootstrap must include differential evaluation proving:

```text
core
vs
core + pack
```

A pack must materially specialise production behaviour rather than merely add a label.

Persist the pack architecture, candidate catalogue and selection reasoning.

---

## 7. Design five progressive example levels

Examples are part of the Production Skills product and must demonstrate progressively broader production responsibility.

The family target is:

```text
5 levels
×
3 primary examples per level
=
15 primary progressive examples
```

The meaning of each level must be adapted to the domain. A useful family-level progression is:

```text
Level 1 — bounded core production
Level 2 — composition / continuity / selection / preservation
Level 3 — complete production responsibility
Level 4 — scale / repair / multi-unit complexity
Level 5 — full production thesis and cross-domain composition
```

Do not choose the examples by intuition alone.

### Example discovery

For each level:

1. derive the capabilities that the level must demonstrate;
2. generate or research a broader candidate pool;
3. map candidates against a capability-coverage matrix;
4. remove examples that exercise substantially the same behaviour;
5. select the three examples whose **combined coverage** best demonstrates the level;
6. check that the complete 15-example set covers the major project capabilities.

Consider:

```text
core skills
commands
artefacts
production challenges
tools / execution paths
failure modes
repair behaviour
preservation behaviour
quality dimensions
Extension Pack interaction
cross-domain handoffs
use-case / genre diversity
showcase strength
benchmarkability
```

The goal is not three individually impressive examples. It is the strongest complementary trio for demonstrating the production system.

Additional useful examples may exist as supplementary demonstrations, regressions or benchmark fixtures, but the primary README progression should showcase three per level.

Every primary example must include its complete generation prompt.

Persist the candidate pool, coverage matrix and final selection rationale.

---

## 8. Design evaluation and benchmarks before implementation is considered complete

The custom bootstrap must define how the project will test both repository correctness and domain quality.

Cover at least:

```text
deterministic repository validation
command behaviour
skill orchestration
end-to-end production
preservation of approved work
root-cause diagnosis
smallest-sufficient repair
domain-quality evaluation
Extension Pack activation and adherence
core-vs-pack differential behaviour
regression fixtures
installation smoke tests
```

Do not collapse domain quality into one universal score.

When a real defect escapes:

```text
defect
→ diagnosis
→ smallest reproducible fixture
→ benchmark / eval
→ permanent regression protection
```

The bootstrap should define the benchmark architecture and acceptance gates before a large implementation is produced.

Persist the benchmark architecture and coverage mapping.

---

## 9. Generate six canonical project specifications

Every mature Production Skills project targets six specification responsibilities:

```text
docs/
├── 01-<domain>-system-spec.md
├── 02-<domain>-workflows-and-artifacts-spec.md
├── 03-<domain>-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-<domain>-customisation-packs-spec.md
└── 06-<domain>-extension-pack-catalogue.md
```

Domain-native filenames may vary, but the six responsibilities must remain clear.

### 01 — System

Owns:

```text
mission
scope and boundaries
principles
system architecture
core skills
execution architecture
cost / fidelity policy
approval model
build order
system acceptance
```

### 02 — Workflows and Artefacts

Owns:

```text
production workflow
artefacts
state / decision semantics
cheap representations
draft / alternative strategy
selection and approval
preservation
production stages
failure taxonomy
repair routes
handoffs
```

### 03 — Repository and Contracts

Owns:

```text
repository structure
skill contracts
command contracts
self-containment
references / assets / scripts
installation
runtime dependencies
tooling
CI
technical acceptance
```

### 04 — Testing and Benchmark

Owns:

```text
testing layers
benchmark suites
case contracts
quality model
progressive-example coverage
Extension Pack evaluation
regression policy
release gates
measured evidence
```

### 05 — Customisation / Extension Packs

Owns:

```text
pack model
pack dimensions
precedence
core-skill integration
production specialisation
pack-aware evaluation
pack packaging
pack-authoring contract
boundaries
```

### 06 — Extension Pack Catalogue

Owns:

```text
curated initial packs
pack production profiles
selection rationale
showcase production
exact generation prompt
pack-specific evaluation
implementation / maturity status
```

Specifications 05 and 06 are separate because the **pack contract** and the **actual curated catalogue** evolve for different reasons.

Generate the six specs from the persisted research logs rather than reconstructing earlier decisions from conversation context.

---

## 10. Define the target README

The bootstrap must include a README design based on the proven public structure of `video-production-skills`.

The target repository README should contain, where relevant:

```text
project positioning
production capabilities
approval and cost / fidelity control
installation
quick start using a strong Level 1 example
Learn by producing
  Level 1 — 3 examples
  Level 2 — 3 examples
  Level 3 — 3 examples
  Level 4 — 3 examples
  Level 5 — 3 examples
project structure grows with the work
core skills
Extension Packs
execution layer
repository checks / benchmarks
documentation index
project boundary
contributing
licence
```

The README is a product surface: it should explain what can be produced, demonstrate progression through real examples, and provide direct installation and execution paths.

The minimal bootstrap README should not be expanded into this public product surface until the specifications make the content defensible.

---

## 11. Cross-project review only after the domain architecture exists

Once the domain workflow, skills, artefacts, examples, evals and packs are understood, compare them with existing Production Skills.

Apply [`shared-abstraction-process.md`](shared-abstraction-process.md).

Use the governing extraction rule:

> Share abstractions only after at least two independent production domains need substantially the same concept.

Record candidates without forcing immediate centralisation.

Avoid introducing:

```text
shared production runtime
universal workflow engine
universal artefact graph
provider registry
model catalogue
universal pack interpreter
universal benchmark score
centralised domain knowledge
```

unless repeated production evidence later proves that sharing is simpler than independent implementations.

Persist material comparison and extraction findings as research logs.

---

## 12. Turn the findings into a staged custom bootstrap

The final research-log bootstrap should not merely repeat the generic stages from [`new-project-process.md`](new-project-process.md).

Rewrite them into a domain-specific sequence.

Each stage should define:

```text
purpose
questions to resolve
research / analysis required
inputs
activities
expected outputs
decisions made
what remains provisional
exit criteria
research-log output
```

Add domain-specific stages when necessary. Merge generic stages when the discipline does not need them separately.

The bootstrap should be detailed enough that a later session can execute one stage at a time without redesigning the overall process.

The minimal repository already exists at this point. Do **not** build its production scaffold while generating the bootstrap specification unless explicitly requested. The bootstrap defines how that repository will evolve.

---

# Required bootstrap outputs

Before a custom bootstrap is considered complete, it must define how the project will produce:

1. a minimal bootstrap workspace repository with `docs/research-logs/`;
2. a clear domain goal, scope and boundary;
3. production-domain research;
4. domain-native workflow and artefact architecture;
5. fidelity / cost / commitment strategy;
6. AI skill, tool and provider research;
7. execution-layer decisions and gap analysis;
8. justified core Agent Skills;
9. decomposed commands where useful;
10. Extension Pack architecture;
11. initial Extension Pack catalogue strategy;
12. a pack-authoring capability;
13. five progressive example levels;
14. three primary examples per level selected through capability coverage;
15. deterministic and semantic evaluation;
16. benchmark and regression architecture;
17. six canonical specifications;
18. a Video-style public README structure;
19. open-source production repository scaffold design;
20. Agent Skills installation and selective-installation contract;
21. local validation and clean external installation smoke tests;
22. cross-domain review and extraction candidates;
23. maturity and publication acceptance gates;
24. a research-log plan that persists substantive stage outputs as the bootstrap progresses.

---

# Suggested generation request

Use a request in this form when creating a new domain bootstrap:

```text
Create a custom bootstrap specification for <domain>-production-skills.

First create or use the minimal target repository as the bootstrap workspace. It should initially contain only a minimal README and docs/research-logs/README.md. Do not create the production scaffold yet.

Use production-skills/docs/bootstrap as the governing bootstrap source and read the current Production Skills family specifications and relevant recent research logs.

Research the real production discipline first. Then research existing AI skills, tools, providers and open-source implementations. Compare with Video, Narrative and Music Production Skills only after the domain model is independently understood.

Generate a domain-specific staged bootstrap comparable in depth to the UI/UX Design Skills bootstrap. Do not merely copy the generic stages.

Persist the bootstrap specification and substantive later stage outputs under docs/research-logs/ so subsequent stages can read canonical files instead of relying on the full conversation history.

The bootstrap must target:
- six canonical project specifications;
- a README following the Video Production Skills public structure;
- five progressive example levels with three carefully selected complementary examples per level;
- a first-class Extension Pack architecture and catalogue;
- a domain-native Extension Pack authoring skill or equivalent workflow;
- pack showcases with exact generation prompts;
- core-vs-pack differential evaluation;
- deterministic, semantic, regression and installation testing;
- local and clean external Skills CLI smoke tests;
- cross-domain review without premature shared abstractions.

Save the bootstrap specification as:
docs/research-logs/YYYY-MM-DD-<domain>-production-skills-new-project-bootstrap-process.md

Do not scaffold the production repository yet. The minimal repository already exists only as a durable bootstrap workspace.
```

Add domain-specific source material, constraints and existing repositories to that request when available.

---

# Success criterion

A successful custom bootstrap is not a generic checklist with the domain name substituted into it.

It should encode enough domain knowledge, research questions, architectural decisions, example strategy, Extension Pack strategy and acceptance gates that the repository can be built stage by stage while preserving the family principles without prematurely standardising the discipline.

The process is also successful when a later stage can continue primarily from repository research logs instead of requiring the entire original bootstrap conversation.