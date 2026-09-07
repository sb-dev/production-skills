# New Production Skills Project Bootstrap Process

**Status:** Canonical process  
**Version:** 1.1  
**Date:** 7 September 2026

This process creates a new Production Skills project without prematurely forcing it into abstractions derived from other domains.

It is the family-level source process. Before starting a new domain repository, use [`README.md`](README.md) to turn this process and the other bootstrap recipes into a **domain-specific bootstrap specification** under `docs/research-logs/`.

The domain-specific bootstrap is then executed stage by stage.

## Governing rules

- Understand the production discipline before designing Agent Skills.
- Reuse existing execution capabilities before rebuilding them.
- Prove vertical production behaviour before extracting shared abstractions.
- Use the cheapest representation capable of resolving the current uncertainty.
- Preserve approved work and correct the smallest sufficient scope.
- Treat examples, evaluation, Extension Packs and installability as product behaviour.
- Keep Production Skills independently usable without Pactwright.
- Share abstractions only after at least two independent production domains demonstrate substantially the same need.

---

## Stage 0 — Define the domain boundary

Write a short project charter answering:

- What production discipline does this project own?
- What outcomes does it produce?
- What does it explicitly not own?
- What adjacent Production Skills will it hand work to or receive work from?
- What makes this discipline reusable across projects?
- Where are the important human approval or commitment points?
- What quality means in this discipline?

**Exit:** a defensible production boundary exists.

## Stage 1 — Research real production practice

Apply [`domain-research-process.md`](domain-research-process.md).

Study how strong practitioners perform the work before focusing on AI tooling.

Capture:

- specialist roles and terminology;
- real workflow stages;
- working artefacts;
- cheap representations;
- expensive commitment points;
- review and approval points;
- common failure modes;
- repair scope;
- quality criteria;
- cross-discipline handoffs.

Add domain-specific research stages when the discipline requires them.

**Exit:** the production model is grounded in the discipline rather than current model APIs.

## Stage 2 — Research AI skills, tools and providers

Find existing Agent Skills, repositories, CLIs, APIs, MCPs, engines, provider capabilities and deterministic tools that can implement parts of the production workflow.

Evaluate:

- capability;
- maturity;
- licensing;
- installation;
- composability;
- deterministic vs generative role;
- provider coupling;
- maintenance state;
- quality suitability;
- missing capabilities.

Classify candidates as:

```text
USE
ADAPT
REFERENCE
REJECT
```

**Exit:** a tool/skill landscape and gap analysis exist.

## Stage 3 — Model the domain workflow and artefacts

Define the smallest credible end-to-end workflow that preserves the discipline's real decision structure.

Identify:

- uncertainty-reduction stages;
- cheapest useful representations;
- meaningful alternatives;
- deliberate selection / approval / locking where relevant;
- higher-fidelity production stages;
- evaluation points;
- targeted repair routes;
- durable artefacts;
- delivery and handoff boundaries.

Do not copy another Production Skills project's stage names or artefacts unless the domain independently requires them.

**Exit:** a domain-owned workflow and artefact model exists.

## Stage 4 — Design core skills and commands

Derive the smallest installable skill set capable of performing the domain workflow.

Do not start from a fixed number of skills.

Decompose bounded skill-local commands only when this improves:

- isolated evaluation;
- reuse;
- composition;
- diagnosis;
- targeted repair;
- benchmark precision.

Commands are production operations, not a universal workflow runtime.

**Exit:** core skill responsibilities and useful command boundaries are justified.

## Stage 5 — Design Extension Pack architecture and catalogue strategy

Extension Packs are a first-class target capability of a mature Production Skills repository.

Define:

- reusable specialisation dimensions;
- pack activation and precedence;
- how packs alter relevant core-skill behaviour;
- what remains core behaviour;
- pack-aware evaluation;
- packaging and self-containment;
- cross-domain boundaries;
- catalogue entry requirements;
- showcase requirements;
- a domain-native pack-authoring skill or equivalent workflow.

The core must remain useful without a pack.

Do not implement a universal pack runtime. Each domain owns its own pack semantics.

**Exit:** the project can explain what a valid pack is, how it differs from project-specific prompting, how it will be demonstrated, and how new packs will be authored.

## Stage 6 — Design progressive examples

Define five domain-native levels of increasing production responsibility.

The family target is:

```text
5 progressive levels
×
3 primary examples per level
=
15 primary examples
```

For every level:

1. derive the capabilities that must be demonstrated;
2. research or generate a broader candidate pool;
3. map candidates against capability coverage;
4. remove redundant candidates;
5. select the three examples whose combined coverage best demonstrates the level.

Across all 15 examples, cover the important combination of:

- core skills;
- commands;
- artefacts;
- production challenges;
- execution paths;
- failure modes;
- preservation and repair behaviour;
- quality dimensions;
- Extension Pack interaction;
- cross-domain handoffs.

Every primary example must contain its complete copyable generation prompt.

Additional examples may exist as supplementary showcases, benchmark fixtures or regressions.

**Exit:** the planned example set demonstrates the breadth and progression of the production system rather than one repeated house pattern.

## Stage 7 — Design evaluation and benchmarks

Define evaluation before large-scale implementation.

Cover the applicable layers:

```text
deterministic repository validation
→ command behaviour
→ skill orchestration
→ production correctness
→ domain quality
→ preservation / root-cause / repair
→ Extension Pack activation and fidelity
→ core-vs-pack differential behaviour
→ end-to-end production
→ installation smoke tests
```

Do not collapse domain quality into one universal numeric score.

Define the regression loop:

```text
escaped defect
→ diagnosis
→ smallest reproducible fixture
→ benchmark / eval
→ permanent regression protection
```

**Exit:** meaningful regressions can be detected and the project knows what evidence will support quality claims.

## Stage 8 — Generate six canonical specifications

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

Equivalent domain-native filenames are acceptable when ownership remains clear.

The six responsibilities are:

1. system architecture and boundaries;
2. workflows and artefacts;
3. repository and skill contracts;
4. testing and benchmark design;
5. Extension Pack semantics and authoring;
6. curated Extension Pack catalogue and showcases.

**Exit:** implementation can proceed without inventing production architecture in code.

## Stage 9 — Design the public README

Use the proven `video-production-skills` README structure as the family reference while adapting the content to the domain.

The README should make visible:

- positioning and production capabilities;
- approval / cost / fidelity control;
- installation;
- a strong Level 1 quick start;
- five progressive levels with three primary examples each;
- project structure that grows with the work;
- core skills;
- Extension Packs;
- execution layer;
- testing / benchmark entry points;
- documentation index;
- project boundary;
- contribution and licence information.

**Exit:** the repository has a clear public product surface rather than only internal specifications.

## Stage 10 — Scaffold the repository

Create only directories that are immediately useful.

Establish at least the surfaces required by the designed architecture, such as:

```text
README.md
docs/
skills/
examples/
benchmarks/ or evals/
extension-pack showcase surface when implemented
tools/ and tests/ where useful
.github/
```

Do not create empty structure solely for visual symmetry.

**Exit:** a contributor can navigate the intended project structure.

## Stage 11 — Implement and prove the core vertical

Implement the minimum core skills and supporting commands needed to complete one meaningful end-to-end domain workflow.

Use one representative progressive example to prove the vertical path before broad implementation.

**Exit:** installed core skills can produce and evaluate one realistic production end to end.

## Stage 12 — Implement progressive coverage and Extension Packs

Expand from the proven vertical to the planned progressive examples and representative Extension Packs.

Implement enough pack capability to prove:

```text
core works without pack
core + pack changes intended behaviour
explicit instructions and approved work outrank pack defaults
pack-aware evaluation recognises intentional specialisation
pack authoring can create or revise a valid pack
```

Every implemented catalogue pack must include a realistic showcase with the exact generation prompt and behavioural evaluation coverage.

**Exit:** the project's main production capabilities and specialisation mechanism are demonstrated rather than merely specified.

## Stage 13 — Validate installation and repository integrity

Validate:

- repository contracts;
- deterministic checks;
- skill self-containment;
- selective installation where supported;
- project-local Skills CLI installation;
- execution from a clean consumer project;
- benchmark/eval entry points;
- no undocumented repository-relative runtime dependencies.

Keep local validation and clean external installation as separate gates.

**Exit:** the repository works as an installable Agent Skills product, not only inside its source checkout.

## Stage 14 — Add optional Pactwright integration

If useful, add `integrations/pactwright.yml` for compatibility and capability bindings only.

The project must continue to work independently.

**Exit:** Pactwright compatibility does not leak into the domain workflow or skill contracts.

## Stage 15 — Register and promote maturity

Add or update the Production Skills project entry in the central registry.

Promotion is evidence-based:

```text
proposed → researching → specified → scaffolded → working → benchmarked → mature
```

A maturity label must describe demonstrated repository behaviour, not planned architecture.

## Stage 16 — Review shared abstraction candidates

After implementation evidence exists, apply [`shared-abstraction-process.md`](shared-abstraction-process.md).

Report concepts that independently reproduce needs already observed in other Production Skills domains.

Do not modify family architecture merely because one project found a convenient local design.

**Exit:** reusable evidence is captured without prematurely coupling independent domain repositories.
