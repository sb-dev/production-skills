# Production Skills Project Contract

**Status:** Canonical  
**Version:** 1.0  
**Date:** 7 September 2026

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
10. participate in the family registry.

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
- non-goals.

### Spec 02 owns

- domain workflow;
- artefacts;
- production state;
- approval/selection where relevant;
- lineage;
- handoffs;
- domain repair behaviour.

### Spec 03 owns

- repository structure;
- SKILL.md and command contracts;
- installation;
- tools and scripts;
- technical acceptance.

### Spec 04 owns

- testing layers;
- domain benchmark;
- regression strategy;
- release quality.

### Spec 05 owns

- Extension Pack semantics for the domain;
- pack boundaries;
- creation and validation.

### Spec 06 owns

- current pack catalogue;
- showcase examples;
- example prompts;
- maturity/status.

## 4. Repository baseline

A new repository should begin from the smallest useful form of:

```text
<domain>-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── package.json                 # where useful
├── docs/
├── skills/
├── examples/
├── evals/
├── tests/
├── tools/                       # where useful
├── integrations/                # optional
└── .github/
```

Directories must not be created solely for visual symmetry. Add them when they contain working material.

## 5. Skill package contract

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

## 6. Command contract

Commands are bounded production operations internal to the skill architecture.

They exist to improve:

- composition;
- isolated evaluation;
- diagnosis;
- targeted repair;
- benchmark precision.

Commands must not silently become lifecycle stages in Pactwright or a universal family workflow engine.

## 7. References and assets

Reusable domain knowledge should be placed near the skills that consume it. Shared repository-level references are acceptable when multiple skills genuinely need the same source.

Project-specific briefs, research or accepted project decisions must not be promoted into reusable skill references unless they have been generalised and validated.

## 8. Tools and provider interaction

Production Skills may use:

- provider-specific skills;
- CLIs;
- APIs;
- deterministic scripts;
- domain engines;
- local models;
- remote models.

Provider capabilities should stay below the production layer. A Production Skill should express the production decision and select the execution mechanism rather than make the provider implementation the workflow.

## 9. Standalone installation

README documentation must show how to install or consume the skills without Pactwright.

Pactwright-compatible repositories may additionally expose:

```text
integrations/
└── pactwright.yml
```

The integration is optional and one-way.

## 10. Pactwright manifest boundary

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

## 11. New-project bootstrap lifecycle

Every new family project follows the central bootstrap process:

```text
boundary
→ domain research
→ AI/tool research
→ workflow model
→ canonical specs
→ repository scaffold
→ core skills
→ command decomposition
→ benchmarks/evals
→ Extension Packs
→ optional Pactwright integration
→ registry promotion
```

The detailed process lives in `docs/bootstrap/new-project-process.md`.

## 12. Working-project minimum

A project may move to `working` only when it can demonstrate at least one meaningful end-to-end domain workflow using its installed skills.

## 13. Benchmarked-project minimum

A project may move to `benchmarked` only when:

- its domain benchmark exists;
- benchmark fixtures are reproducible enough to compare changes;
- command-level or skill-level failures can be isolated;
- at least one regression can be detected.

## 14. Mature-project minimum

A project may move to `mature` when its core workflow, evaluation approach, examples and specialisation mechanism have been demonstrated in practice.

`mature` does not mean feature-complete.

## 15. Release compatibility

A project should version changes that materially alter:

- skill contracts;
- installation;
- command behaviour;
- Extension Pack compatibility;
- Pactwright bindings.

Historical revisions should remain obtainable where practical because orchestrated systems may lock exact Production Skills revisions for reproducibility.

## 16. Central conformance

The central repository may audit structural family requirements. It must not grade domain quality.

Examples of valid conformance checks:

- README exists;
- canonical responsibilities are documented;
- skills are independently packageable;
- benchmark definition exists for benchmarked/mature projects;
- optional Pactwright integration stays within its boundary.
