---
name: <domain>-pack-author
description: Create or revise self-contained <Domain> Production Skills Extension Packs from proven reusable production needs.
---

# <Domain> Pack Author

Create coherent Extension Packs that specialise the core production workflow without replacing it.

## Operating sequence

1. Inspect the existing Extension Pack catalogue before proposing a new pack.
2. Decide whether the need is reusable or belongs in project-specific instructions.
3. Research and define the production grammar the pack should specialise.
4. Define the pack dimensions relevant to the domain.
5. Separate hard constraints from softer defaults.
6. Define how the pack affects relevant core skills.
7. Preserve explicit instructions and approved / locked work.
8. Define pack-aware evaluation and boundary behaviour.
9. Create a self-contained installable package with only the files it needs.
10. Create at least one realistic showcase with the exact generation prompt.
11. Create behavioural evals.
12. Compare core behaviour against core + pack behaviour.
13. Validate catalogue readiness.

## Core rules

- Do not create a new pack when an existing pack plus project-specific instructions is sufficient.
- A pack must materially change production behaviour rather than only add labels.
- Explicit project instructions and approved / locked production decisions outrank pack defaults.
- Keep the core usable without the pack.
- Keep the pack self-contained.
- Do not duplicate provider execution logic already owned by lower-level tools or provider skills.
- Do not take over responsibilities owned by adjacent Production Skills domains.
- Every pack must include a showcase prompt and behavioural evals before catalogue publication.

## Minimum output

```text
skills/<pack-slug>/
├── SKILL.md
├── references/          # only when needed
├── assets/              # only when needed
└── evals/

<pack-showcase-surface>/<pack-slug>/
└── README.md
```

## Pack profile

Define the domain-relevant subset of:

```text
identity
intended use
production grammar
format / medium / use context
genre / style / production language
audience / platform / performance profile
hard constraints
defaults
core-skill effects
artefact / workflow effects
evaluation behaviour
repair behaviour
downstream handoffs
external requirements
conflicts / incompatibilities
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

Verify that it:

- activates when requested and remains inactive otherwise;
- changes relevant production behaviour;
- preserves stronger decisions;
- adapts evaluation without hiding genuine defects;
- respects domain boundaries;
- can be demonstrated by its showcase prompt;
- creates a useful difference from the core-only baseline without unacceptable regressions.
