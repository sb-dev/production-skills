# New Production Skills Project Bootstrap Process

**Status:** Canonical process  
**Date:** 7 September 2026

This process creates a new Production Skills project without prematurely forcing it into abstractions derived from other domains.

## Stage 0 — Define the domain boundary

Write a short project charter answering:

- What production discipline does this project own?
- What does it explicitly not own?
- What adjacent Production Skills will it hand work to or receive work from?
- What makes this discipline reusable across projects?

**Exit:** a defensible boundary exists.

## Stage 1 — Research real production practice

Study how strong practitioners perform the work before focusing on AI tooling.

Capture:

- real workflow stages;
- expensive commitment points;
- cheaper representations;
- review/approval points;
- common failure modes;
- repair scope;
- specialist terminology;
- quality criteria.

**Exit:** the production model is grounded in the discipline rather than current model APIs.

## Stage 2 — Research AI skills, tools and providers

Find existing Agent Skills, repositories, CLIs, APIs, engines and deterministic tools that can implement parts of the production workflow.

Evaluate:

- capability;
- maturity;
- licensing;
- installation;
- composability;
- deterministic vs generative role;
- missing capabilities.

**Exit:** a tool/skill landscape and gap analysis exist.

## Stage 3 — Model the domain workflow

Define the smallest end-to-end workflow that preserves the domain's real decision structure.

Identify:

- cheap uncertainty-reduction stages;
- deliberate commitment points;
- production stages;
- evaluation points;
- targeted repair routes;
- durable artefacts.

Do not copy another Production Skills project's stage names unless the domain independently requires them.

**Exit:** a domain-owned workflow model exists.

## Stage 4 — Write the canonical specs

Create the project's system, workflow/artifact and repository/contracts specifications first. Add testing and Extension Pack specs when those designs are sufficiently understood.

**Exit:** implementation can proceed without inventing architecture in code.

## Stage 5 — Scaffold the repository

Create only directories that are immediately useful. Establish README, installation, skills root, docs, examples and evaluation surfaces.

**Exit:** a contributor can navigate the intended project structure.

## Stage 6 — Implement the minimum core skills

Implement the smallest skill set that can complete one meaningful end-to-end workflow.

Prefer a thin orchestration skill plus specialist evaluator where the domain needs both execution and review.

**Exit:** one real example can be produced end-to-end.

## Stage 7 — Decompose commands

Extract bounded internal commands only where doing so improves testing, reuse or diagnosis.

Avoid creating a generic workflow runtime.

**Exit:** important production operations can be tested independently where useful.

## Stage 8 — Build evaluation and benchmarks

Create deterministic checks first, then specialist quality evaluation. Add progressive examples and a regression fixture process.

**Exit:** meaningful regressions can be detected and diagnosed.

## Stage 9 — Design Extension Packs

Only after the core workflow is stable, identify reusable specialisations that should not bloat the core skill.

Add pack examples and compare core vs core+pack behaviour.

**Exit:** at least one pack can prove its specialised value, or the project explicitly records that packs are not yet justified.

## Stage 10 — Add optional Pactwright integration

If useful, add `integrations/pactwright.yml` for capability bindings only.

The project must continue to work independently.

**Exit:** Pactwright compatibility does not leak into the domain workflow.

## Stage 11 — Register and promote maturity

Add or update the Production Skills project entry in the central registry. Consuming-project dependencies are not recorded here.

Promotion is evidence-based:

```text
proposed → researching → specified → scaffolded → working → benchmarked → mature
```

## Stage 12 — Extract only proven family abstractions

After implementation, report any concepts that independently reproduce needs already observed in other Production Skills domains.

Do not modify family specs solely because the new project used a convenient local design.
