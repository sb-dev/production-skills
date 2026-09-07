# Production Skills Evaluation and Extension Packs Specification

**Status:** Canonical  
**Version:** 1.0  
**Date:** 7 September 2026

## 1. Purpose

This specification defines the cross-family expectations for evaluation, regression protection and Production Extension Packs. Domain quality criteria remain owned by each Production Skills project.

## 2. Layered evaluation

A mature project should distinguish at least the following layers where applicable:

```text
deterministic validation
→ command conformance
→ skill orchestration
→ production correctness
→ domain quality
→ Extension Pack fidelity
→ end-to-end production
```

Not every domain needs identical tooling at each layer.

## 3. Correctness is not quality

The benchmark must not collapse structural correctness and specialist quality into one opaque score.

Examples:

```text
narrative continuity ≠ prose quality
music workflow validity ≠ musical quality
video continuity ≠ cinematographic quality
software correctness ≠ architecture quality
game system correctness ≠ game feel
3D validity ≠ artistic quality
```

A material failure in one dimension must remain visible.

## 4. Domain benchmark ownership

Each Production Skills repository owns the benchmark that answers:

> Is this specialised production capability good enough at its own discipline?

Pactwright or another orchestrator may separately evaluate whether the resolved skills satisfy an orchestration responsibility. It must not duplicate domain benchmarks.

## 5. Evaluation characteristics

Domain evaluation should cover the applicable subset of:

- correctness;
- quality;
- constraint adherence;
- continuity and consistency;
- production efficiency;
- regression resistance;
- appropriate tool selection;
- scope discipline;
- preservation of approved work;
- targeted correction behaviour.

## 6. Regression principle

Every meaningful escaped defect should become a reproducible fixture when practical.

```text
escaped production defect
→ diagnosis
→ smallest reproducible fixture
→ eval or benchmark case
→ future regression protection
```

The fixture should exercise the smallest responsible production unit whenever possible.

## 7. Cheap failure detection

Evaluation should detect defects at the cheapest stage capable of revealing them.

A subsystem defect should not require a complete end-to-end production run merely to become visible.

## 8. Production Extension Pack definition

A Production Extension Pack is reusable specialised knowledge that changes how one Production Skills family performs its discipline for a coherent context.

Possible specialisations include:

- genre;
- style;
- format;
- audience;
- platform;
- production technology;
- specialised workflow rules;
- evaluation adjustments;
- domain conventions.

A Production Extension Pack is not a Pactwright Extension.

## 9. Pack ownership

The owning domain repository defines:

- pack schema or format;
- pack content;
- pack loading/selection behaviour;
- pack-specific examples;
- pack-specific evaluation;
- pack authoring skill or process.

The central family defines only the cross-domain semantic contract.

## 10. Pack qualification

Create a pack only when all of the following are true:

1. the knowledge is reusable across projects;
2. it materially changes production behaviour;
3. embedding it in the core skill would add irrelevant specialisation;
4. examples can demonstrate its effect;
5. evaluation can distinguish the specialised behaviour from the core baseline.

A project-specific brief or style note is not sufficient.

## 11. Required comparison

Where meaningful, evaluate:

```text
core Production Skill
vs
core Production Skill + Extension Pack
```

The pack should survive only if it produces a useful and intended specialised improvement without unacceptable regressions.

## 12. Extension Pack creator

Each family that supports packs should eventually provide a domain-owned pack creation capability.

The common authoring logic is:

```text
identify reusable specialisation
→ research
→ define production grammar
→ define boundaries
→ implement pack
→ create examples
→ create evals
→ compare against core baseline
→ validate
```

The central repository does not provide one universal pack runtime until multiple domains prove that their mechanics can genuinely be shared.

## 13. Pack catalogue

A domain catalogue should record enough information to answer:

- what the pack specialises;
- who it is for;
- what core skills it affects;
- representative example prompts;
- representative outputs/examples;
- evaluation status;
- maturity.

## 14. Pack composition

A consuming project may select packs from several Production Skills families. Each pack remains interpreted only by its owning family.

Example:

```text
consumer project
├── domain-a/specialisation-x
├── domain-b/specialisation-y
└── domain-c/specialisation-z
```

The consuming project owns that selection. The central repository does not maintain project-specific pack roadmaps, and no cross-domain pack interpreter is implied.

## 15. Avoid universal scoring

The family must not define one numeric quality score across narrative, music, video, software, games, 3D or other domains.

Cross-domain product decisions may combine evidence, but the original domain dimensions must remain inspectable.
