# Production Skills Project Contract

**Status:** Canonical  
**Version:** 1.4  
**Date:** 11 September 2026

## 1. Purpose

This specification defines the minimum contract for an independent Production Skills project. It standardises discoverability, packaging, evaluation and family integration while leaving domain workflow design to the project.

## 2. Required responsibilities

A Production Skills project must:

1. define its domain boundary and non-goals;
2. encode a real production workflow rather than a model-centric workflow;
3. expose at least one installable core skill;
4. keep installable skills self-contained;
5. define evaluation appropriate to the domain;
6. preserve standalone use without Pactwright;
7. document installation and examples;
8. separate project-specific instructions from reusable expertise;
9. keep domain-specific artefacts and stages domain-owned;
10. participate in the family registry;
11. define a first-class Extension Pack architecture for mature use;
12. demonstrate progressive production responsibility through public examples;
13. validate installation from outside the source repository before maturity claims are made;
14. preserve substantive bootstrap research and staged design outputs under `docs/research-logs/` so later work can rely on durable repository evidence rather than conversation history alone.

## 3. Canonical specification model

Mature projects should converge semantically on:

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

Existing mature repositories do not require immediate cosmetic migration. Equivalent existing documents may satisfy these responsibilities.

### Spec 01 owns

- purpose and scope;
- domain boundary;
- production principles;
- skill architecture;
- execution architecture;
- cost / fidelity / commitment policy;
- non-goals;
- system acceptance.

### Spec 02 owns

- domain workflow;
- artefacts;
- production state;
- approval/selection where relevant;
- cheap representations;
- lineage;
- handoffs;
- failure taxonomy;
- domain repair behaviour.

### Spec 03 owns

- repository structure;
- `SKILL.md` and command contracts;
- skill self-containment;
- installation;
- tools and scripts;
- CI expectations;
- technical acceptance.

### Spec 04 owns

- testing layers;
- domain benchmark;
- regression strategy;
- progressive-example coverage;
- Extension Pack evaluation;
- release quality;
- measured evidence and limitations.

### Spec 05 owns

- Extension Pack semantics for the domain;
- pack dimensions and activation;
- precedence against explicit instructions and approved work;
- pack boundaries;
- core-skill effects;
- pack-aware evaluation;
- pack packaging;
- pack creation and validation.

### Spec 06 owns

- current pack catalogue;
- production profile for each pack;
- showcase examples;
- exact copyable generation prompts;
- pack-specific evaluation expectations;
- maturity/status.

The pack contract and the actual catalogue remain separate because they evolve for different reasons.

## 4. Bootstrap workspace baseline

Before substantial bootstrap research begins, create the target repository in a deliberately minimal form:

```text
<domain>-production-skills/
├── README.md
└── docs/
    └── research-logs/
        └── README.md
```

The bootstrap workspace exists to persist:

- the domain-specific bootstrap specification;
- domain research;
- capability/tool comparisons;
- workflow and artefact reasoning;
- example candidate/coverage analysis;
- benchmark design;
- material architectural decisions.

The root README is provisional and should state only the project identity, purpose and bootstrap/research status.

The bootstrap workspace is **not** the production scaffold and does not by itself justify `scaffolded` maturity.

Do not add production surfaces such as `skills/`, `examples/`, `evals/`, `benchmarks/`, CI or package metadata until the bootstrap has designed them, unless one is genuinely required to perform the bootstrap.

## 5. Production repository baseline

After the canonical specs and public repository design exist, evolve the bootstrap workspace into the smallest useful production form of:

```text
<domain>-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── package.json                 # where useful
├── docs/
│   └── research-logs/
├── skills/
├── examples/
├── evals/                       # where useful
├── benchmarks/                  # where useful
├── tests/
├── tools/                       # where useful
├── integrations/                # optional
└── .github/
```

Directories must not be created solely for visual symmetry. Add them when they contain working material.

Preserve `docs/research-logs/` as the design record that led to the production scaffold.

## 6. Public README contract

The root README is a **public product surface**. Apply the canonical [`public-readme-process.md`](../bootstrap/public-readme-process.md) and adapt [`public-readme-template.md`](../bootstrap/public-readme-template.md) to the domain.

Keep the product surface and bootstrap state separate:

```text
README.md
→ public product positioning, onboarding and navigation


docs/research-logs/
→ bootstrap stages, maturity evidence, verification and implementation gaps
```

The target README designed during bootstrap represents the intended finished Production Skills product. It does **not** need to mirror each intermediate bootstrap stage or maturity label. Do not contaminate it with stage-number caveats, branch names, completion SHAs, validator counts, `not-run` bookkeeping or statements such as “implemented in Stage N”.

The target README should make visible, where relevant:

- project positioning and production capabilities;
- the domain-native approval, cost, fidelity, evidence or commitment control model;
- canonical installation;
- a strong Level 1 quick start with the complete copyable prompt inline;
- five progressive example levels;
- exactly three primary examples per level;
- project structure that grows with the work;
- substantive sections for every core skill;
- Extension Packs;
- execution layer;
- testing and benchmark entry points;
- documentation index;
- project boundary;
- contributing and licence information.

Public example navigation should resolve to public example surfaces rather than requiring users to understand bootstrap research logs.

The README-design stage must produce:

1. the complete target public README;
2. a domain README contract describing required sections and justified domain-specific adaptations;
3. an internal public-claims ledger mapping material public claims to the implementation/evidence gates required before final publication.

The production-scaffold stage adopts the accepted README design. It may perform mechanical publication changes such as link rebasing, repository-name substitution, licence linking or switching to newly created public example paths. It must not independently redesign positioning, quick start, progression, skill explanations or product limitations around current bootstrap status.

If an active historical bootstrap has already completed its README/scaffold stages before adopting this family rule, append an explicit conformance or migration stage. Do not rewrite or renumber completed stages.

During bootstrap, the target README may describe intended product capabilities whose proof belongs to later implementation stages. Before final publication, reconcile the internal public-claims ledger against actual implementation and evaluation evidence. Unsupported release claims must then be completed, narrowed, removed or allowed to block publication. Do not use bootstrap-stage leakage as a substitute for that final reconciliation.

Projects should add deterministic README conformance checks once the production scaffold exists. Structural checks should verify the canonical/domain-approved section order, inline Level 1 prompt, 5 × 3 progression, substantive skill sections, public example links and absence of internal bootstrap-process leakage. Deterministic checks do not replace evidence validation for the claims ledger.

## 7. Progressive example contract

Mature projects target:

```text
5 progressive levels
×
3 primary examples per level
=
15 primary progressive examples
```

The exact level names and meaning remain domain-owned.

The three examples at each level should be selected as a complementary set that maximises capability coverage rather than as three cosmetic variants of the same production pattern.

Across the 15 primary examples, the repository should demonstrate the important combination of:

- core skills;
- commands;
- artefacts;
- execution paths;
- production challenges;
- preservation and repair behaviour;
- quality dimensions;
- Extension Pack interaction;
- cross-domain handoffs where relevant.

Every primary example must include its complete copyable generation prompt.

Additional examples may exist as supplementary showcases, benchmark fixtures or regressions without appearing in the primary README progression.

## 8. Skill package contract

An installable skill should normally be self-contained:

```text
skills/<skill>/
├── SKILL.md
├── commands/
├── references/
├── assets/
├── scripts/
└── evals/
```

Only include subdirectories used by the skill.

A skill must not require undocumented repository-relative files that disappear when the skill is installed independently.

## 9. Command contract

Commands are bounded production operations internal to the skill architecture.

They exist to improve:

- composition;
- isolated evaluation;
- diagnosis;
- targeted repair;
- benchmark precision.

Commands must not silently become lifecycle stages in Pactwright or a universal family workflow engine.

## 10. References and assets

Reusable domain knowledge should be placed near the skills that consume it. Shared repository-level references are acceptable when multiple skills genuinely need the same source.

Project-specific briefs, research or accepted project decisions must not be promoted into reusable skill references unless they have been generalised and validated.

## 11. Tools and provider interaction

Production Skills may use:

- provider-specific skills;
- CLIs;
- APIs;
- deterministic scripts;
- domain engines;
- local models;
- remote models.

Provider capabilities should stay below the production layer. A Production Skill should express the production decision and select the execution mechanism rather than make the provider implementation the workflow.

## 12. Extension Pack contract

A mature Production Skills project defines a domain-native specialisation mechanism through Extension Packs or equivalent semantics.

The core skills must remain useful without a pack.

Each implemented catalogue pack should:

- materially change production behaviour;
- remain self-contained and installable where applicable;
- respect explicit instructions and approved work;
- define pack-aware evaluation;
- include at least one realistic showcase;
- include the exact copyable generation prompt for that showcase;
- have behavioural evaluation coverage;
- support meaningful comparison of core vs core+pack behaviour.

A mature project should also provide a domain-native pack-authoring skill or equivalent authoring workflow that checks whether an existing pack already satisfies the need before creating a new one.

## 13. Standalone installation

README documentation must show how to install or consume the skills without Pactwright.

Before a project is considered mature, installation must be proven from outside the source checkout.

The project should distinguish:

```text
local repository validation
```

from:

```text
clean consumer-project installation smoke test
```

where the selected Agent Skills can be discovered and used without undocumented repository-local dependencies.

Pactwright-compatible repositories may additionally expose:

```text
integrations/
└── pactwright.yml
```

The integration is optional and one-way.

## 14. Pactwright manifest boundary

A Pactwright integration manifest may declare:

- repository identity;
- compatibility;
- Pactwright capability-to-skill bindings;
- Extension Pack discovery where applicable.

It must not define:

- Pactwright agents;
- Pactwright prompts;
- Pactwright commands;
- lifecycle stages or shapes;
- Project Graph semantics;
- provider routing;
- the domain production workflow itself.

## 15. New-project bootstrap lifecycle

Every new family project first creates a minimal target repository and then generates a domain-specific bootstrap specification using [`docs/bootstrap/README.md`](../bootstrap/README.md), [`public-readme-process.md`](../bootstrap/public-readme-process.md) and the source recipes under `docs/bootstrap/`.

The family-level progression is:

```text
minimal bootstrap workspace repository
→ boundary
→ bounded reconnaissance + complementary five-book selection
→ direct book extraction + reconciliation
→ broader challenge + gap research
→ evidence-qualified domain model
→ AI/tool research
→ workflow + artefacts
→ core skills + commands
→ Extension Pack architecture
→ 5×3 progressive examples
→ benchmarks/evals
→ six canonical specs
→ target public README + domain README contract + claims ledger
→ production repository scaffold preserving accepted README design
→ core vertical
→ progressive + pack implementation
→ local and clean external validation
→ optional Pactwright integration
→ registry promotion
→ shared-abstraction review
```

The detailed [Seed → Five → Challenge contract](../bootstrap/domain-research-process.md) governs corpus selection, explicit permission for supplied-book substitutions, source access, direct examination, reconciliation and broader research. Five foundational books supplement rather than replace other evidence and do not determine skill or pack counts.

Selection, extraction and challenge are distinct stages. Execute each bootstrap stage as a standalone task, committing substantive outputs and completion evidence under `docs/research-logs/` before proceeding. Generating a bootstrap specification is not proof of stage execution; assess existing evidence before reusing it.

The exact domain-specific stages may differ while preserving these research gates. Existing bootstraps require explicit migration decisions that preserve completed work, corpus decisions and stage identifiers. This requirement does not automatically change existing projects' maturity.

The [family research decision](../research-logs/2026-09-10-five-book-bootstrap-research-foundation.md) records the evidence basis, affected projects and migration boundary.

## 16. Working-project minimum

A project may move to `working` only when it can demonstrate at least one meaningful end-to-end domain workflow using its installed skills.

The demonstrated behaviour must come from implemented repository surfaces, not only planned specifications.

## 17. Benchmarked-project minimum

A project may move to `benchmarked` only when:

- its domain benchmark exists;
- benchmark fixtures are reproducible enough to compare changes;
- command-level or skill-level failures can be isolated where applicable;
- at least one regression can be detected;
- structural correctness and domain quality remain distinguishable;
- implemented Extension Packs have corresponding evaluation coverage.

## 18. Mature-project minimum

A project may move to `mature` when evidence demonstrates that:

- the core workflow works end to end;
- the six specification responsibilities are represented;
- the public README accurately exposes the product after final public-claims reconciliation;
- five progressive levels and three primary examples per level are represented or an explicit temporary migration note exists for an older mature repository;
- primary examples contain copyable prompts;
- domain evaluation and regression protection are operational;
- the Extension Pack contract and catalogue are represented;
- implemented catalogue packs have showcases and behavioural eval coverage;
- a pack-authoring capability or equivalent workflow exists;
- the core remains useful without packs;
- installation works from a clean consumer project;
- quality claims are backed by measured evidence or explicitly marked unmeasured.

`mature` does not mean feature-complete.

## 19. Release compatibility

A project should version changes that materially alter:

- skill contracts;
- installation;
- command behaviour;
- Extension Pack compatibility;
- benchmark interpretation;
- Pactwright bindings.

Historical revisions should remain obtainable where practical because orchestrated systems may lock exact Production Skills revisions for reproducibility.

## 20. Central conformance

The central repository may audit structural family requirements. It must not grade domain quality.

Examples of valid conformance checks:

- README exists;
- public README follows the canonical/domain-approved product structure;
- public README does not leak internal bootstrap-stage or branch bookkeeping after the target README replaces the minimal bootstrap README;
- the Level 1 quick-start prompt is complete and inline;
- public example links resolve to public example surfaces where those surfaces exist;
- core skills receive substantive README sections;
- six specification responsibilities are represented;
- skills are independently packageable;
- progressive example structure is represented;
- primary example prompts are present;
- Extension Pack contract/catalogue surfaces exist for mature projects;
- pack-authoring capability is represented for mature projects;
- benchmark definition exists for benchmarked/mature projects;
- installation guidance exists;
- optional Pactwright integration stays within its boundary.

A conformance result should report evidence and status rather than only opaque booleans.
