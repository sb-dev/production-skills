---
name: <domain>-pack-author
description: Create or revise self-contained <Domain> Production Skills Extension Packs from proven reusable production needs and evidence-qualified research.
---

# <Domain> Pack Author

Create coherent Extension Packs that specialise the core production workflow without replacing it.

## Operating sequence

1. Read the domain contracts, core baseline, catalogue, existing packs and relevant research/evaluation evidence before changing them.
2. Assess complementary catalogue coverage and decide reuse, refinement, project instructions, core improvement or a new reusable specialisation. Do not redesign the entire catalogue for an isolated pack request.
3. Define intended use/non-use, relevant core skills, the specialised behavioural difference and what must remain stable.
4. Select exactly five complementary foundational books for the pack from a broader candidate pool. Assess source access and each contribution; relevant core-domain or other-pack books may be reused without a quota of new books.
5. Examine and reconcile all five for their intended contributions, or review adequate persisted direct-source evidence for reuse. Record actual reading coverage, source locations, assumptions, conflicts and limitations.
6. Challenge material guidance and research gaps using independent professional evidence, counterexamples and current authoritative sources where needed. Keep qualified methods and unresolved claims distinguishable.
7. Define domain-native dimensions, hard constraints, soft defaults, relevant core-skill effects, handoffs and smallest-sufficient repair.
8. Define pack-aware evaluation and acceptance cases before implementation or showcase execution. Map source findings to observable behaviour and tests.
9. Create a self-contained installable package with only the guidance, references, assets and evals it needs.
10. Create a realistic showcase with the exact generation prompt, run it and preserve outputs and provenance. Include a distinct additional brief or fixture to test reuse beyond that premise.
11. Compare core-only and core-plus-pack production under the same substantive brief and comparable execution conditions. Run behavioural evals and record failures, regressions and limitations.
12. Validate locally and through clean consumer-project installation/use, then update the catalogue with separate research, implementation, evaluation and readiness status.

Selection, extraction and challenge are separate substantive stages with separate completion evidence and commits before dependent work proceeds. A later entry point may reuse adequate completed evidence after review; do not rebuild a pack or reread unrelated material merely to preserve the sequence. Missing required approval, source access or execution capability must remain explicit blockers rather than fabricated completion.

## Research and permission rules

- Five means five distinct books for this pack, not five unique books across the catalogue, five packs or a five-source bibliography limit. Different editions do not count as additional books.
- User-provided books remain included until explicit permission authorises removal, replacement or demotion. A request must identify the change, evidence, expected gain, potential loss and alternatives. Apply only approved changes; retain declined sources; unanswered requests remain pending and block selection completion. More than five supplied books requires a decision before excluding any from the foundational corpus. Filling empty slots needs no extra approval unless separately required.
- Source availability is not reading evidence. Record full-text/excerpt/secondary-only/unavailable access separately from material actually examined. Secondary summaries, contents pages and model memory cannot substitute for direct extraction. Inadequate access blocks extraction completion.
- Reused findings need identifiable source locations, edition, examined scope, assumptions, limitations and a pack-specific applicability decision. Examine missing material; do not copy a bibliography and call the research complete.
- Record each source-to-behaviour-to-test relationship and distinguish source observation, interpretation and production hypothesis. Creative exemplars do not establish that a technique caused commercial or artistic success.
- Broader research must challenge claims and investigate uncovered requirements, not only confirm the books. Non-book material may supplement but cannot fill a book slot.
- Publish independently expressed synthesis, not source books, substantial copied expression, private source locations or credentials. Preserve the domain's existing creative, licensing and voice safeguards.

## Core rules

- Do not create a new pack when an existing pack plus project-specific instructions is sufficient.
- A pack must materially change production behaviour rather than only add labels.
- Explicit project instructions and approved / locked production decisions outrank pack defaults.
- Keep the core usable without the pack.
- Keep the pack self-contained; necessary runtime guidance belongs locally, not only in research logs, original books or another pack.
- Do not duplicate provider execution logic already owned by lower-level tools or provider skills.
- Do not take over responsibilities owned by adjacent Production Skills domains.
- Planned catalogue entries must be labelled. Ready-to-use claims require actual showcase, behavioural/comparative and clean-installation evidence, not merely files or prompts.
- Preserve existing pack identities, accepted examples and installed contracts unless an explicit migration decision authorises their change.

## Minimum output

```text
skills/<pack-slug>/
├── SKILL.md
├── references/          # only when needed; include required runtime guidance locally
├── assets/              # only when needed
└── evals/

<pack-showcase-surface>/<pack-slug>/
└── README.md            # exact prompt; link actual artefacts after execution

docs/research-logs/       # stage evidence; not a runtime dependency
```

## Pack profile

Define the domain-relevant subset of:

```text
identity
intended use / non-use
selection rationale and complementary coverage
five-book source contributions and research provenance
core baseline and specialised behavioural difference
production grammar
format / medium / use context
genre / style / production language
audience / platform / performance profile
hard constraints and soft defaults
qualified methods and limitations
core-skill effects
artefact / workflow effects
evaluation behaviour and acceptance cases
repair behaviour
downstream handoffs
external requirements
conflicts / incompatibilities
research, implementation, evaluation and readiness status
```

## Precedence

```text
1. explicit project instructions
2. approved / locked production decisions
3. selected Extension Pack
4. core Production Skills defaults
```

Surface conflicts instead of silently resolving them against stronger decisions.

## Evaluation

A pack is not ready merely because its files exist.

Verify that it activates when requested and remains inactive otherwise; changes relevant production behaviour; preserves stronger decisions; adapts evaluation without hiding genuine defects; respects domain boundaries; supports bounded refinement; and produces useful specialisation without unacceptable regressions.

Use the same substantive brief and comparable conditions for core-only and packed runs. Record revisions, prompts, tool/model versions and settings where relevant, resource constraints, outputs, evaluator limitations and deviations. Do not give the packed run a richer brief or score the appearance of pack metadata as quality. Add a core-plus-project-instructions comparison where useful. Preserve failed and inconclusive results; do not claim general superiority from one favourable sample.

Test a distinct additional brief/fixture as well as the showcase, then record local checks and clean external installation/use separately. Research completion, implementation and measured behaviour are separate claims.

## Template adaptation

When generating a domain authoring skill, specialise this template using the family Extension Pack process and the domain's specification 05. Keep required operational rules in the installed skill or its local references; do not leave a dependency on family templates or repository-level documents. Retain existing domain command names and direct-entry behaviour unless a change is justified.
