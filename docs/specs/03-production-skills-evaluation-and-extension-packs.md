# Production Skills Evaluation and Extension Packs Specification

**Status:** Canonical  
**Version:** 1.2  
**Date:** 10 September 2026

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
→ preservation / root-cause / repair
→ Extension Pack activation and fidelity
→ core-vs-pack differential behaviour
→ end-to-end production
→ installation smoke tests
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
- root-cause diagnosis;
- targeted correction behaviour;
- Extension Pack activation and adherence;
- clean installation behaviour.

## 6. Progressive example coverage

A mature Production Skills repository should use its progressive examples as a public capability surface and as part of regression coverage.

The family target is:

```text
5 levels × 3 primary examples = 15 primary examples
```

The three examples at a level should complement one another and collectively demonstrate the level's capability surface.

Every primary example should contain its complete copyable generation prompt.

Examples should exercise behaviour, not only produce attractive outputs.

## 7. Regression principle

Every meaningful escaped defect should become a reproducible fixture when practical.

```text
escaped production defect
→ diagnosis
→ smallest reproducible fixture
→ eval or benchmark case
→ future regression protection
```

The fixture should exercise the smallest responsible production unit whenever possible.

## 8. Cheap failure detection

Evaluation should detect defects at the cheapest stage capable of revealing them.

A subsystem defect should not require a complete end-to-end production run merely to become visible.

## 9. Production Extension Pack definition

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

## 10. Pack ownership

The owning domain repository defines:

- pack schema or format;
- pack dimensions;
- activation and precedence;
- pack content;
- pack loading/selection behaviour;
- pack-specific examples;
- pack-specific evaluation;
- pack authoring skill or process.

The central family defines only the cross-domain semantic contract.

## 11. Pack qualification

Create a pack only when all of the following are true:

1. the knowledge is reusable across projects;
2. it materially changes production behaviour;
3. embedding it in the core skill would add irrelevant specialisation;
4. examples can demonstrate its effect;
5. evaluation can distinguish the specialised behaviour from the core baseline.

A project-specific brief or style note is not sufficient.

For newly authored packs, apply the [Extension Pack bootstrap process](../bootstrap/extension-pack-process.md): curate complementary catalogue coverage, then select, extract and challenge a five-book foundation for each pack. Books and adequate examined findings may be reused after pack-specific applicability review; five does not mean five new books or five packs. The general [research contract](../bootstrap/domain-research-process.md) continues to govern supplied-book permission, access, direct examination and publication safeguards.

## 12. Pack precedence

Domain repositories must define precedence explicitly.

The common expectation is:

```text
explicit project instructions
→ approved / locked production decisions
→ selected Extension Pack
→ core Production Skills defaults
```

A pack must not silently reopen approved work or override stronger project intent.

## 13. Required comparison

Where meaningful, evaluate:

```text
core Production Skill
vs
core Production Skill + Extension Pack
```

The pack should survive only if it produces a useful and intended specialised improvement without unacceptable regressions.

The comparison should test production behaviour, not merely whether pack metadata appears in output.

For pack readiness under the bootstrap process, use the same substantive brief and comparable execution conditions in core-only and packed runs. Define acceptance criteria before execution; record revisions, exact prompts, tool/model settings where relevant, resource constraints, deviations, outputs, failures and evaluator limitations. Do not give the packed run a richer task brief. A core-plus-project-instructions baseline may additionally test whether a reusable pack is justified. Preserve inconclusive and negative results; one favourable sample is not evidence of general superiority.

## 14. Pack showcase contract

Every implemented catalogue pack should include at least one realistic showcase that makes the specialisation observable.

The showcase must include:

- the production premise or brief;
- pack-specific production constraints;
- the exact copyable generation prompt;
- expected specialised behaviour;
- relevant evaluation priorities.

A pack that cannot produce a convincing showcase is not ready for publication as a ready-to-use catalogue pack. Planned entries may remain explicitly labelled.

Keep expected behaviour separate from actual outputs and observed evaluation. Include a distinct additional brief or fixture to test reuse beyond the showcase premise; a prompt alone does not prove execution or reusable specialisation.

## 15. Pack behavioural evaluation

A catalogue pack should be tested for at least:

- activation when requested;
- non-activation when not requested;
- meaningful changes to relevant production behaviour;
- preservation of explicit instructions and approved work;
- correct precedence;
- pack-aware evaluation;
- domain and cross-domain boundary discipline;
- refinement without unnecessary regeneration.

Where applicable, also test negative and incompatibility cases.

## 16. Extension Pack authoring capability

Each mature Production Skills family should provide a domain-owned pack creation skill or equivalent authoring workflow.

The common authoring logic is:

```text
inspect existing catalogue and complementary coverage
→ justify reusable specialisation and core baseline
→ select five complementary books
→ extract and reconcile specialised knowledge
→ challenge claims and research gaps
→ define dimensions, boundaries and core-skill effects
→ define pack-aware evaluation and acceptance cases
→ implement the pack and behavioural fixtures
→ run showcase with exact prompt and preserve outputs
→ compare against core baseline and test independent reuse
→ validate local and clean external installation
→ catalogue with accurate evidence status
```

The [Extension Pack process](../bootstrap/extension-pack-process.md) owns the detailed stages and gates. Selection, extraction and challenge remain distinct standalone stages with substantive committed evidence. Extend an existing domain authoring skill rather than creating a competing system. Permit direct entry after reviewing adequate prerequisite evidence; a bounded revision does not require a full project bootstrap or repeated unrelated research.

The authoring capability should avoid creating a new pack when an existing pack plus project-specific instructions is sufficient.

The central repository does not provide one universal pack runtime until multiple domains prove that their mechanics can genuinely be shared.

## 17. Pack catalogue

A domain catalogue should record enough information to answer:

- what the pack specialises and when it should or should not be used;
- why it complements the catalogue rather than duplicating core or neighbouring packs;
- which five books contribute to its foundation and where examined/challenged evidence is recorded;
- what production grammar, hard constraints, defaults and qualified methods it defines;
- what core skills it affects and what must remain stable;
- which exact prompts, acceptance cases and actual outputs demonstrate its behaviour;
- what comparative, behavioural and installation evidence exists;
- what its research, implementation, evaluation and readiness status mean;
- which limitations, conflicts or migration requirements remain.

The catalogue is a curated product surface, not merely an inventory of labels. Specification 05 owns pack semantics; specification 06 owns the actual curated entries. Keep detailed research in the domain's research logs, not in repeated catalogue summaries or runtime dependencies. Pack count is coverage-driven rather than fixed at five or inherited without review.

A planned or partially researched entry must not imply completed extraction, implemented behaviour or passed evaluation. Readiness requires the actual proof gates; it does not automatically promote the owning project's maturity.

### Adoption and migration

This is a normative process update for new pack authoring, not measured evidence that the method improves production quality. The [family decision log](../research-logs/2026-09-10-extension-pack-bootstrap-research-foundation.md) records its basis and affected surfaces. Existing catalogues and packs require explicit adoption decisions preserving approved identities, examples, installed interfaces, corpus decisions and stage history. Do not silently retire or recertify them. Detailed domain adoption and catalogue regeneration remain in their owning repositories.

## 18. Pack composition

A consuming project may select packs from several Production Skills families. Each pack remains interpreted only by its owning family.

Example:

```text
consumer project
├── domain-a/specialisation-x
├── domain-b/specialisation-y
└── domain-c/specialisation-z
```

The consuming project owns that selection. The central repository does not maintain project-specific pack roadmaps, and no cross-domain pack interpreter is implied.

## 19. Installation evaluation

Repository correctness is incomplete if skills work only from the source checkout.

A mature project should distinguish:

```text
local repository validation
```

from:

```text
clean consumer-project installation smoke test
```

The external smoke test should detect missing skill-local references, undocumented repository-relative dependencies and selective-installation failures.

Research reuse does not permit runtime coupling: each installed pack must carry necessary guidance locally rather than depend on central documents, another pack's files, research logs or access to the source books.

## 20. Avoid universal scoring

The family must not define one numeric quality score across narrative, music, video, software, games, 3D or other domains.

Cross-domain product decisions may combine evidence, but the original domain dimensions must remain inspectable.
