# Public README Process

**Status:** Canonical bootstrap contract  
**Version:** 1.0  
**Date:** 11 September 2026

This process governs how a Production Skills project designs, scaffolds and validates its public root `README.md`.

It exists to keep two different concerns separate:

```text
README.md
→ public product surface
→ explains the production system to a user
→ provides installation, quick start, examples and product navigation


docs/research-logs/
→ bootstrap execution record
→ stage status
→ maturity evidence
→ verification reports
→ implementation gaps and publication gates
```

Do not merge those surfaces.

## 1. Bootstrap README versus target public README

A new repository starts with the minimal bootstrap README defined by the project bootstrap process. That file may state only the project identity, provisional purpose and bootstrap/research status.

Once the canonical specifications make the product surface defensible, the bootstrap must design a **complete target public README** using [`public-readme-template.md`](public-readme-template.md).

The target public README is a design artefact for the finished Production Skills product. During bootstrap it does **not** need to narrate the repository's current intermediate stage or maturity. Bootstrap progress and evidence remain in `docs/research-logs/`.

This distinction is mandatory:

```text
bootstrap state changes
≠
public README content changes
```

Do not add implementation-stage caveats to the public README merely because a later bootstrap stage has not yet executed.

## 2. Required public structure

Adapt the canonical template to the domain rather than copying another repository mechanically.

The target README must contain, where applicable:

```text
project positioning
production capabilities
domain control model
installation
strong Level 1 quick start with complete prompt
Learn by Producing
  Level 1 — 3 primary examples
  Level 2 — 3 primary examples
  Level 3 — 3 primary examples
  Level 4 — 3 primary examples
  Level 5 — 3 primary examples
project structure grows with the work
substantive core-skill sections
Extension Packs
execution layer
testing / benchmark entry points
documentation index
project boundaries
contributing
licence
```

The domain control model should expose the decisions users need to understand before production. Examples include approval and cost control for Video, selection/canon control for Narrative, or claim/proof/commercial constraints for Advertising.

## 3. Product-facing writing rule

Write for somebody deciding whether to install and use the project.

The README should answer:

```text
What does this project produce?
How does its production model work?
What decisions stay under human/project control?
How do I install it?
What is the smallest useful production I can run?
How does responsibility grow across the examples?
What does each skill do?
Which execution capabilities does it compose?
Where are the deeper specifications?
What does this project deliberately not own?
```

Do not use the root README as a bootstrap diary, implementation plan or conformance report.

## 4. Bootstrap-state leakage is prohibited

After the target public README replaces the minimal bootstrap README, public product copy must not expose internal bootstrap mechanics as user-facing content.

Do not include material such as:

```text
Stage 12 / Stage 13 / Stage N
feat/bootstrap
bootstrap progress
production scaffold status
maturity promotion steps
completion commit SHA
validator check counts
"not-run" suite bookkeeping
"this will be implemented in Stage N"
```

A public section may describe a genuine product limitation or prerequisite when users need it, but express that limitation in product terms rather than bootstrap-process terms.

Bad:

```text
Stage 16 has not validated installation yet.
```

Good when the limitation is genuinely relevant at publication:

```text
Supported installation targets are listed below.
```

If no supported installation target can honestly be published at the final release gate, resolve the product/release decision there rather than leaking the bootstrap schedule into the README.

## 5. Public examples must use public paths

The README quick start and Learn by Producing progression are product navigation.

They must not require a user to understand bootstrap research logs.

Use stable public paths such as:

```text
examples/level-1-<example>/README.md
examples/level-2-<example>/README.md
```

Research logs may remain the historical source for selection reasoning and original prompt design, but the public README should point to the public example surface once that surface is scaffolded.

The Level 1 quick start must contain the **complete copyable prompt inline**. A pointer to a research log is not a quick start.

## 6. Skills need substantive sections

Do not reduce the core skill surface to a name table when the family reference pattern calls for explanation.

For every core skill, explain:

```text
what it owns
when to use it
what decision or production problem it resolves
important boundaries or preservation behaviour
```

Short tables may supplement these sections but do not replace them.

## 7. README design outputs

The README-design stage must produce three separate artefacts:

1. **Complete target README** — the exact intended public product surface.
2. **Domain README contract** — required sections, domain-specific control section, skill sections, example progression and permitted deviations from the canonical template.
3. **Public claims ledger** — important public claims and the evidence gate that must be satisfied before final publication.

Example claims ledger:

| Public claim | Evidence owner / gate |
|---|---|
| canonical installation command works | clean external installation validation |
| Level 1 quick start produces the shown output | proven core vertical |
| an Extension Pack changes the stated behaviour | pack differential evaluation |
| benchmark result | executed benchmark report |
| provider/host support | tested compatibility evidence |

The claims ledger is an **internal bootstrap artefact**. Do not paste it into the public README.

## 8. Scaffold handoff is preservation, not redesign

The production-scaffold stage adopts the accepted target README.

Allowed scaffold-time changes are limited to mechanical publication changes such as:

```text
rebase links from the design location to repository-root paths
replace intentional repository-name placeholders
link the chosen repository licence
point to public example paths created by the scaffold
correct a factual repository path that changed during scaffolding
```

The scaffold stage must not independently:

```text
change the product positioning
replace the quick start
remove the complete quick-start prompt
change the 5 × 3 progression
collapse substantive skill sections into a table
introduce bootstrap-stage or maturity prose
rewrite product limitations around current bootstrap status
```

A substantive public-content change belongs to the README-design responsibility. If that responsibility is already completed in an active historical bootstrap, append a new repair/migration stage; do not rewrite or renumber completed stages.

## 9. Bootstrap target claims versus publication claims

During bootstrap, the target README represents the intended public product. It may therefore contain product capabilities that later implementation stages are responsible for proving.

Do not distort the target README to mirror each intermediate bootstrap stage.

Before merging or otherwise publishing the completed product, reconcile the public claims ledger against actual implementation and evaluation evidence:

```text
claim supported
→ keep it

claim partially supported
→ narrow it to the supported scope

claim unsupported but mandatory for release
→ finish the owning work or block publication

claim unsupported and non-essential
→ remove it before publication
```

This final reconciliation is where demonstrated availability constrains public claims. It is not a reason to expose bootstrap-stage bookkeeping in the target README during construction.

## 10. Deterministic README conformance

Each new Production Skills project should include deterministic checks for its public README once the production scaffold exists.

At minimum verify:

- required canonical sections exist in the domain-approved order;
- the Level 1 quick-start prompt is complete and inline;
- five progressive levels exist;
- exactly three primary examples are represented per level unless the family contract explicitly records a migration exception;
- all public example links resolve to public example surfaces;
- every core skill has a substantive section;
- installation, Extension Packs, execution, documentation, boundaries, contributing and licence are represented where applicable;
- local links resolve;
- internal bootstrap mechanics do not leak into public product copy.

The leakage check should reject obvious process language such as stage-number references, `feat/bootstrap`, completion SHAs and direct bootstrap-progress narration unless the repository is still intentionally in the minimal Stage-0 README state.

A deterministic checker verifies structure and prohibited leakage. It does not prove domain quality or truth of the public claims ledger; those remain evidence-gated separately.

## 11. Existing repositories and active bootstraps

This process governs newly generated bootstraps immediately.

Do not silently rewrite completed stages in an active domain bootstrap merely because this family process improved. Preserve the project's accepted history.

When an existing active bootstrap needs to adopt this contract:

```text
last completed stage
→ append explicit README conformance / migration stage
→ repair the public surface
→ continue subsequent stages under the new contract
```

Mature repositories may adopt the template through a normal documentation change when their existing README already represents implemented behaviour.

## 12. Family-template evolution

Use one family-level template until repeated evidence demonstrates a genuinely different public structure is needed by at least two independent domains.

Do not create Creative, Engineering, Research or Commercial README templates merely because those labels exist.

Apply the normal shared-abstraction rule:

> Share a specialised template only after at least two independent Production Skills domains need substantially the same structural variation.

Until then, keep domain-specific adaptations in the domain README contract.
