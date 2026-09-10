# New Production Skills Project Bootstrap Process

**Status:** Canonical process  
**Version:** 1.4  
**Date:** 10 September 2026

This process creates a new Production Skills project without prematurely forcing it into abstractions derived from other domains.

It is the family-level source process. Start by creating a minimal target repository that acts as the durable bootstrap workspace. Then use [`README.md`](README.md) to turn this process and the other bootstrap recipes into a **domain-specific bootstrap specification** under that repository's `docs/research-logs/`.

The domain-specific bootstrap is then executed stage by stage, with substantive stage outputs persisted as research logs rather than left only in conversation context.

## Governing rules

- Create the durable bootstrap workspace before substantial research begins.
- Persist substantive bootstrap findings in `docs/research-logs/` as the work progresses.
- Treat conversation as an interaction surface, not the authoritative store of bootstrap research.
- Understand the production discipline before designing Agent Skills.
- Establish a complementary five-book foundation through Seed → Five → Challenge; books supplement rather than replace broader research.
- Require explicit permission before removing or replacing any user-provided book.
- Distinguish source availability, direct examination, qualified findings and implemented capabilities.
- Reuse existing execution capabilities before rebuilding them.
- Prove vertical production behaviour before extracting shared abstractions.
- Use the cheapest representation capable of resolving the current uncertainty.
- Preserve approved work and correct the smallest sufficient scope.
- Treat examples, evaluation, Extension Packs and installability as product behaviour.
- Keep Production Skills independently usable without Pactwright.
- Share abstractions only after at least two independent production domains demonstrate substantially the same need.

## Stage execution and compatibility

The detailed research contract is owned by [`domain-research-process.md`](domain-research-process.md). Keep corpus selection, book extraction and broader challenge as distinct stages with separate completion gates.

Execute every stage as a standalone task. Read its required inputs and prior decisions, complete the substantive work, verify its exit criteria, and commit its detailed outputs and completion evidence before starting the next stage. A stage summary or bibliography is not a substitute for its research. Record blockers and ask for required decisions; never interpret unanswered permission requests as approval.

Generating a domain-specific bootstrap defines the stages; it does not mark them complete. Review and reuse existing persisted evidence where it satisfies a stage, without claiming unperformed work or repeating adequate research unnecessarily.

This sequence applies to newly generated bootstraps. Existing domain projects require explicit migration decisions that preserve their corpus, completed work and stage identifiers. This family revision does not automatically renumber active bootstraps or alter project maturity.

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

## Stage 2 — Select the complementary five-book corpus

**Inputs:** domain charter, provided book titles/files and any persisted source-selection evidence.

Apply the selection and source-access rules in [`domain-research-process.md`](domain-research-process.md).

Conduct bounded reconnaissance and derive the domain knowledge-coverage map. Assess provided books, research a broader candidate pool and select the combination that best covers the owned outcomes. Fill empty slots without an extra approval request unless the user requires one. Any removal, replacement or demotion of a supplied book requires explicit permission; unresolved requests block completion.

Record bibliographic identity, edition, source access and intended contribution for each selected book. Exactly five books form the foundational corpus; wider research is not limited to five sources. Keep candidate assessments provisional where direct access is still missing.

**Research-log output:** coverage map, candidate comparison, five-book corpus, source-access register and substitution decisions with rationale, gains, losses and approval evidence.

**Exit:** exactly five books are selected; required permissions are resolved; remaining coverage gaps and source-access needs are explicit. Missing access must be resolved before extraction can be completed.

## Stage 3 — Extract and reconcile the five-book corpus

**Inputs:** completed corpus-selection log, the five selected sources and their access/reading records.

Apply the extraction and publication rules in [`domain-research-process.md`](domain-research-process.md). Examine each book sufficiently for its intended contribution and record the material actually read. Secondary summaries or model memory are not direct-source examination.

Extract independently expressed methods, assumptions, workflow implications, metrics, failure conditions and repair strategies. Map material findings to provisional capabilities with source locations. Reconcile overlap and investigate tensions without creating one skill per book or forcing every source to contribute a core rule.

**Research-log output:** per-book findings, reading coverage, source-to-capability matrix, overlap/conflict analysis and provisional capability model.

**Exit:** all five books have been meaningfully examined for their contributions; material findings are traceable; gaps, limitations and unresolved claims remain explicit. Inadequate access blocks completion rather than justifying invented extraction.

## Stage 4 — Challenge and extend through broader production research

**Inputs:** domain charter and original coverage map, corpus synthesis, conflicts and unresolved claims.

Apply the challenge rules in [`domain-research-process.md`](domain-research-process.md). Test the book-derived model against independent professional and empirical evidence where applicable, and research important responsibilities absent from the books. Include current authoritative sources for change-sensitive practices; investigate criticism and failure conditions, not just supporting material.

Study how strong practitioners perform the work before focusing on AI tooling. Preserve the complete production-practice scope:

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

Distinguish deterministic, generative, judgement-heavy and tool-dependent work. Separate durable production knowledge from provider-specific behaviour. Keep evidential standing separate from whether a method is retained, adapted, qualified or rejected.

Add domain-specific research stages when the discipline requires them. Do not collapse the three research gates into one summary task.

**Research-log output:** broader professional-practice map, supporting and contrary evidence, gap analysis, claim dispositions and evidence-qualified domain model.

**Exit:** material findings are assessed, important gaps are addressed or explicitly bounded, and unresolved claims are not promoted to unconditional core rules. The production model is grounded in the discipline rather than the books or current model APIs alone.

## Stage 5 — Research AI skills, tools and providers

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

## Stage 6 — Model the domain workflow and artefacts

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

## Stage 7 — Design core skills and commands

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

## Stage 8 — Design Extension Pack architecture and catalogue strategy

Extension Packs are a first-class target capability of a mature Production Skills repository.

Apply [`extension-pack-process.md`](extension-pack-process.md) at two levels: curate complementary catalogue coverage, then research and specify each selected pack. Catalogue size is not fixed by the five-book requirement.

Schedule its P1–P5 stages explicitly in the custom bootstrap. Each pack selects five justified complementary books, with reviewed evidence reuse allowed from the domain or other packs; it does not require five new books. Selection, extraction and challenge retain separate substantive outputs, permission/access gates and commits. Do not hide the per-pack research inside this architecture-stage summary. Record further catalogue candidates as planned rather than researched.

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

Persist the pack model, candidate pool, combined coverage matrix, per-pack research and source-to-behaviour-to-test mapping. Specification 05 owns semantics; specification 06 records the curated entries, five-book contributions and separate research, implementation, evaluation and readiness status. Extend the existing domain authoring capability rather than creating a competing system.

**Exit:** the project can explain what a valid pack is, how it differs from project-specific prompting, how it will be demonstrated, and how new packs will be authored. Selected packs have traceable research and testable profiles; unresolved work is explicitly planned. Actual demonstration and comparative evaluation follow the implemented core vertical at Stage 15.

## Stage 9 — Design progressive examples

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

## Stage 10 — Design evaluation and benchmarks

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

## Stage 11 — Generate six canonical specifications

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

## Stage 12 — Design the public README

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

## Stage 13 — Scaffold the production repository

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

## Stage 14 — Implement and prove the core vertical

Implement the minimum core skills and supporting commands needed to complete one meaningful end-to-end domain workflow.

Use one representative progressive example to prove the vertical path before broad implementation.

**Exit:** installed core skills can produce and evaluate one realistic production end to end.

## Stage 15 — Implement progressive coverage and Extension Packs

Expand from the proven vertical to the planned progressive examples and representative Extension Packs.

Complete P6–P7 of [`extension-pack-process.md`](extension-pack-process.md) for implemented packs using the evidence-qualified profiles from Stage 8. Run actual showcases and a distinct additional reuse brief/fixture, then compare core-only and packed production on the same substantive brief under comparable conditions. Record failures, regressions and limitations rather than treating a prompt or package as proof. Later additions use the same research gates without rerunning unrelated core bootstrap work.

Implement enough pack capability to prove:

```text
core works without pack
core + pack changes intended behaviour
explicit instructions and approved work outrank pack defaults
pack-aware evaluation recognises intentional specialisation
pack authoring can create or revise a valid pack
```

Every implemented catalogue pack must include a realistic showcase with the exact generation prompt and behavioural evaluation coverage. Catalogue readiness also requires clean consumer-project installation/use evidence; keep local checks, research completion, implementation and measured evaluation distinct.

**Exit:** the project's main production capabilities and specialisation mechanism are demonstrated rather than merely specified.

## Stage 16 — Validate installation and repository integrity

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

## Stage 17 — Add optional Pactwright integration

If useful, add `integrations/pactwright.yml` for compatibility and capability bindings only.

The project must continue to work independently.

**Exit:** Pactwright compatibility does not leak into the domain workflow or skill contracts.

## Stage 18 — Register and promote maturity

Add or update the Production Skills project entry in the central registry.

Promotion is evidence-based:

```text
proposed → researching → specified → scaffolded → working → benchmarked → mature
```

Repository creation alone does not change maturity. A bootstrap workspace may remain `proposed`; `researching` requires substantive research evidence, and `scaffolded` requires the production scaffold from Stage 13.

A maturity label must describe demonstrated repository behaviour, not planned architecture.

## Stage 19 — Review shared abstraction candidates

After implementation evidence exists, apply [`shared-abstraction-process.md`](shared-abstraction-process.md).

Report concepts that independently reproduce needs already observed in other Production Skills domains.

Do not modify family architecture merely because one project found a convenient local design.

**Exit:** reusable evidence is captured without prematurely coupling independent domain repositories.