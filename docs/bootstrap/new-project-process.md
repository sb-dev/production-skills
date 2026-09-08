# New Production Skills Project Bootstrap Process

**Status:** Canonical process  
**Version:** 1.2  
**Date:** 8 September 2026

This process creates a new Production Skills project without prematurely forcing it into abstractions derived from other domains.

It is the family-level source process. Start by creating a minimal target repository that acts as the durable bootstrap workspace. Then use [`README.md`](README.md) to turn this process and the other bootstrap recipes into a **domain-specific bootstrap specification** under that repository's `docs/research-logs/`.

The domain-specific bootstrap is then executed stage by stage, with substantive stage outputs persisted as research logs rather than left only in conversation context.

## Governing rules

- Create the durable bootstrap workspace before substantial research begins.
- Persist substantive bootstrap findings in `docs/research-logs/` as the work progresses.
- Treat conversation as an interaction surface, not the authoritative store of bootstrap research.
- Understand the production discipline before designing Agent Skills.
- Reuse existing execution capabilities before rebuilding them.
- Prove vertical production behaviour before extracting shared abstractions.
- Use the cheapest representation capable of resolving the current uncertainty.
- Preserve approved work and correct the smallest sufficient scope.
- Treat examples, evaluation, Extension Packs and installability as product behaviour.
- Keep Production Skills independently usable without Pactwright.
- Share abstractions only after at least two independent production domains demonstrate substantially the same need.

---

## Stage 0 — Create the bootstrap workspace repository

Create the target Production Skills repository before running the substantive bootstrap stages.

The repository exists initially to provide durable storage for bootstrap research and decisions. It is **not yet the production repository scaffold**.

Keep the initial repository deliberately small:

```text
<domain>-production-skills/
├── README.md
└── docs/
    └── research-logs/
        └── README.md
```

The root README should state only the project name, provisional purpose and current bootstrap status. `docs/research-logs/README.md` should explain that the directory contains bootstrap research, decisions and staged design outputs.

Do not create at this stage:

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

unless one of those files is genuinely required to conduct the bootstrap itself.

### Persist bootstrap work as research logs

The first substantive file should be the domain-specific bootstrap specification:

```text
docs/research-logs/YYYY-MM-DD-<domain>-new-project-bootstrap-process.md
```

As later bootstrap stages are executed, write their detailed findings and decisions into research logs before proceeding.

Use concise conversation updates for:

- decisions;
- unresolved questions;
- stage summaries;
- corrections.

Use repository research logs for:

- detailed research;
- source comparisons;
- capability matrices;
- candidate lists;
- architecture analysis;
- example selection evidence;
- benchmark design;
- decisions that later stages must consume.

Later stages should read the relevant research logs rather than relying on the full conversation history.

This reduces context growth, prevents decisions from being lost between sessions and makes the final repository architecture traceable to the research that produced it.

Creating this repository does **not** make the project `scaffolded`. The production scaffold is created only after the bootstrap has designed the repository architecture.

**Exit:** the target repository exists, the research-log surface is writable, and the custom bootstrap specification can be persisted there.

## Stage 1 — Define the domain boundary

Write a short project charter answering:

- What production discipline does this project own?
- What outcomes does it produce?
- What does it explicitly not own?
- What adjacent Production Skills will it hand work to or receive work from?
- What makes this discipline reusable across projects?
- Where are the important human approval or commitment points?
- What quality means in this discipline?

Persist the detailed domain-boundary findings as a research log.

**Exit:** a defensible production boundary exists.

## Stage 2 — Research real production practice

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

Persist the detailed research and synthesis before moving on.

**Exit:** the production model is grounded in the discipline rather than current model APIs.

## Stage 3 — Research AI skills, tools and providers

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

Persist the capability landscape, comparisons and gap analysis.

**Exit:** a tool/skill landscape and gap analysis exist.

## Stage 4 — Model the domain workflow and artefacts

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

Persist the workflow and artefact reasoning so later specification work does not have to reconstruct it from conversation context.

**Exit:** a domain-owned workflow and artefact model exists.

## Stage 5 — Design core skills and commands

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

Persist the skill/command responsibility model and rejected alternatives.

**Exit:** core skill responsibilities and useful command boundaries are justified.

## Stage 6 — Design Extension Pack architecture and catalogue strategy

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

Persist the pack model, catalogue candidates and the evidence for selecting coherent reusable profiles.

**Exit:** the project can explain what a valid pack is, how it differs from project-specific prompting, how it will be demonstrated, and how new packs will be authored.

## Stage 7 — Design progressive examples

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

Persist the candidate pool, coverage matrix, selection rationale and final 5×3 set.

**Exit:** the planned example set demonstrates the breadth and progression of the production system rather than one repeated house pattern.

## Stage 8 — Design evaluation and benchmarks

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

Persist the benchmark architecture, capability-to-case mapping and acceptance gates.

**Exit:** meaningful regressions can be detected and the project knows what evidence will support quality claims.

## Stage 9 — Generate six canonical specifications

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

Generate these specifications from the persisted research logs, not by reconstructing earlier bootstrap decisions from memory.

**Exit:** implementation can proceed without inventing production architecture in code.

## Stage 10 — Design the public README

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

The minimal bootstrap README is replaced or expanded only now, once the product surface is designed from canonical specifications.

**Exit:** the repository has a clear public product surface rather than only a bootstrap status page.

## Stage 11 — Scaffold the production repository

Create only directories that are immediately useful.

This is the point where the minimal bootstrap workspace becomes the actual Production Skills repository scaffold.

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

Preserve `docs/research-logs/` as the historical design record.

Do not create empty structure solely for visual symmetry.

**Exit:** a contributor can navigate the intended production project structure.

## Stage 12 — Implement and prove the core vertical

Implement the minimum core skills and supporting commands needed to complete one meaningful end-to-end domain workflow.

Use one representative progressive example to prove the vertical path before broad implementation.

**Exit:** installed core skills can produce and evaluate one realistic production end to end.

## Stage 13 — Implement progressive coverage and Extension Packs

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

## Stage 14 — Validate installation and repository integrity

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

## Stage 15 — Add optional Pactwright integration

If useful, add `integrations/pactwright.yml` for compatibility and capability bindings only.

The project must continue to work independently.

**Exit:** Pactwright compatibility does not leak into the domain workflow or skill contracts.

## Stage 16 — Register and promote maturity

Add or update the Production Skills project entry in the central registry.

Promotion is evidence-based:

```text
proposed → researching → specified → scaffolded → working → benchmarked → mature
```

Repository creation alone does not change maturity. A bootstrap workspace may remain `proposed`; `researching` requires substantive research evidence, and `scaffolded` requires the production scaffold from Stage 11.

A maturity label must describe demonstrated repository behaviour, not planned architecture.

## Stage 17 — Review shared abstraction candidates

After implementation evidence exists, apply [`shared-abstraction-process.md`](shared-abstraction-process.md).

Report concepts that independently reproduce needs already observed in other Production Skills domains.

Do not modify family architecture merely because one project found a convenient local design.

**Exit:** reusable evidence is captured without prematurely coupling independent domain repositories.
