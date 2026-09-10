# Extension Pack Bootstrap Research Foundation

**Status:** Accepted family process decision  
**Version:** 1.0  
**Date:** 10 September 2026

## Decision

Extend Seed → Five → Challenge to Extension Pack authoring through a focused [Extension Pack process](../bootstrap/extension-pack-process.md). Curate complementary catalogue coverage first, then select, extract and challenge five justified foundational books per pack, define specialised behaviour, implement it and evaluate its effect.

Five books per pack does not mean five new or globally unique books. Reuse adequate examined evidence after pack-specific applicability review. Catalogue size is determined by useful complementary coverage, not the book count.

This is a normative process decision requested after review, not a measured claim that the five-book approach improves creative or technical quality. No new shared runtime, central domain-knowledge platform or generic pack interpreter is justified by this decision.

## Evidence basis

The decision builds on the previously adopted [five-book research foundation](2026-09-10-five-book-bootstrap-research-foundation.md), the existing [family pack qualification and authoring contract](../specs/03-production-skills-evaluation-and-extension-packs.md), and these Narrative Production references on the user-selected `feat/extension-packs-and-benchmark` branch:

- [Pack catalogue](https://github.com/sb-dev/narrative-production-skills/blob/feat/extension-packs-and-benchmark/docs/06-extension-pack-catalogue.md), observed blob `a0225e8b89c56836cf4cc8ba79fa1b71cd23b074`.
- [Pack semantics](https://github.com/sb-dev/narrative-production-skills/blob/feat/extension-packs-and-benchmark/docs/05-customisation-packs-spec.md), observed blob `7f10a6a4e2792550ee30903a900d11d6be92876b`.
- [Existing authoring skill](https://github.com/sb-dev/narrative-production-skills/blob/feat/extension-packs-and-benchmark/skills/narrative-pack-create/SKILL.md), observed blob `88c647f404d2fafdd3fc3ce42fe2a28fef9b73cd`.
- [Authoring workflow](https://github.com/sb-dev/narrative-production-skills/blob/feat/extension-packs-and-benchmark/skills/narrative-pack-create/references/authoring-workflow.md), observed blob `2f2fa8362d06d4df58c1fd021d3a0768fdbf0aba`.

Those references already define coherent profiles, exact showcase prompts, precedence, core-skill effects, domain boundaries and an authoring capability. The catalogue describes 12 packs but does not establish a five-book contribution record for each. The repeated generic success sections motivate more specific source-to-behaviour-to-test evidence. These are document observations, not claims that the described packs have been implemented or evaluated.

The catalogue spans several media while repeatedly using mystery/investigation and restrained or naturalistic production profiles. That is a coverage question to investigate, not evidence that those entries are wrong or permission to replace them automatically.

## Alternatives reviewed

| Option | Assessment |
|---|---|
| One five-book corpus for the entire catalogue | Economical but may leave individual specialisations without sufficient direct support. |
| Five entirely new books for every pack | Gives attention to each pack but needlessly prohibits relevant source reuse and repeats adequate research. |
| Five justified books per pack with reviewed evidence reuse | Selected: maintains pack-specific depth and coverage while avoiding artificial source novelty and runtime coupling. |

A separate focused recipe is justified because pack work also occurs after the domain's initial bootstrap. It is not a second full project-bootstrap system or a new competing authoring skill.

## Contract decisions

Catalogue curation assesses complementary production behaviour against the core, neighbouring packs and project-specific prompting. Per-pack stages define the baseline, select five sources, extract/reconcile, challenge/extend, specify behaviour and evaluation, implement/demonstrate, then compare/validate/catalogue.

The existing general research contract remains authoritative for source access, meaningful direct examination, supplied-book substitution/removal/demotion permissions and publication safeguards. Reuse requires source identity, examined scope, assumptions, limitations and applicability, not just shared titles. Creative exemplars can supply observed techniques but do not prove causal explanations of success or universal rules.

Guidance must map to an observable change in a core-skill decision and an evaluation case. Core-only and packed runs receive the same substantive brief and comparable conditions. A distinct additional brief/fixture tests reuse beyond the showcase premise. Actual outputs, failures, regressions and limitations remain visible.

Research, implementation, evaluation and readiness are separate claims. Planned catalogue entries remain allowed but cannot be presented as proven. Clean consumer-project installation/use is separate from local validation. Necessary runtime guidance remains inside each installed pack.

## Affected surfaces

The central change adds `docs/bootstrap/extension-pack-process.md`, connects it to the bootstrap generation guide and project stages, aligns the family evaluation/pack contract, and updates the authoring, showcase and specification 05/06 templates. Navigation and the changelog expose the change.

The detailed method remains in one focused process rather than duplicated throughout the family. The installed authoring template carries enough operational guidance to avoid depending on central documentation at runtime. No package release, execution implementation, registry promotion, CI change or new service is part of this update.

## Migration and Narrative application

New pack authoring uses the process. Existing packs and catalogues adopt it through explicit migration decisions in their owning repositories, preserving accepted identities, interfaces, examples, book choices, stage history and evidence. Adequate previous research can be reused after review; unrelated completed work is not invalidated.

The Narrative catalogue is the reference application, not an automatically regenerated deliverable of this family change. A subsequent authorised domain task should inspect its current branch, curate coverage, run the substantive per-pack stages and align specification 05, catalogue 06, `narrative-pack-create` and its local references/evaluations together. No Narrative files, supplied books or pack identities are changed here, and no book research or production benchmarks are claimed to have run.

Project-level stage identifiers, six canonical specification responsibilities, 5×3 progressive examples, independent installation, Pactwright boundaries and maturity rules remain intact. Pack design/research can use specified core contracts; actual demonstration and comparison wait for the relevant implemented core vertical, avoiding a circular dependency.

## Contract review scenarios

These scenarios define review expectations for the process; they are not reported results of executing a future research agent.

| Scenario | Required outcome |
|---|---|
| Two packs use the same relevant book | Reuse permitted, with separate contribution and applicability decisions; no new-book quota. |
| All five core books are copied without specialist assessment | Insufficient: assess coverage and examine missing specialist material. |
| A supplied book overlaps or more than five are supplied | Propose a concrete change with gains/losses; require approval before exclusion, replacement or demotion. |
| Substitution is declined or unanswered | Retain a declined source; keep an unanswered decision pending and selection incomplete. |
| A source is available only through a summary | Do not count the summary as direct extraction; obtain adequate access or resolve a permitted alternative. |
| Reused extraction lacks source locations or relevant context | Reuse is not adequate completion evidence; examine the missing source material. |
| A successful novel exhibits a technique | Record observation and hypothesis; do not infer causality, universal rules or permission to reproduce expression. |
| A shared finding changes | Review affected pack guidance and tests at bounded scope; retain unaffected work. |
| Catalogue contains prompts but no production outputs | Label planned/unproven; no demonstration or readiness claim. |
| Packed run receives a richer brief | Comparison is confounded; use equivalent substantive inputs and record deviations. |
| Pack works only on its showcase or breaks core quality | Refine/retest or defer; test a distinct reuse brief and retain regressions. |
| No useful difference from ordinary project instructions | Reassess pack qualification rather than publish redundant specialisation. |
| Core exists only as a specification | Research/design may proceed; actual comparative production remains blocked. |
| Pack requires another pack's files or original books at runtime | Repair self-containment and test clean consumer installation. |
| Existing pack needs only a bounded evaluation revision | Review prerequisites, reuse adequate evidence and run affected stages; do not restart the full bootstrap. |
| Family policy is adopted | Do not silently migrate Narrative or change any project's maturity. |

## Verification boundary

Document integration and repository CI can check structural consistency. They cannot establish that future pack research is accurate or that a pack improves domain quality. Those claims require the actual per-pack research, production, comparison and installation evidence specified by the process.
