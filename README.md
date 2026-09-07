# Production Skills

Central design, research, governance, and project-family repository for the `sb-dev` Production Skills ecosystem.

Production Skills are independent Agent Skills projects that encode reusable production expertise for domains such as narrative, music, video, game development, software engineering, deep research, UI/UX, world/environment production, 3D, characters, animation, sound, and QA/evaluation.

This repository **does not implement those domain workflows and does not own consuming-project specifications**. It defines the family contract, holds genuinely cross-domain research, coordinates creation and maturity of Production Skills projects, and records only abstractions that have earned promotion through evidence from multiple domains.

## Core rule

> Share an abstraction only after multiple production domains demonstrably need the same concept.

The initial evidence base comes from three mature repositories:

- [Narrative Production Skills](https://github.com/sb-dev/narrative-production-skills)
- [Music Production Skills](https://github.com/sb-dev/music-production-skills)
- [Video Production Skills](https://github.com/sb-dev/video-production-skills)

Production Skills coming soon:

- `game-development-skills`
- `software-engineering-skills`
- `deep-research-skills`
- `ui-ux-design-skills`
- `world-environment-production-skills`
- `3d-production-skills`
- `character-performance-skills` (`character-production-skills` + `animation-production-skills`)
- `audio-production-skills` (`music-production-skills` + `sound-production-skills`)
- `qa-evaluation-skills`

They independently support a common pattern:

```text
cheap uncertainty reduction
→ deliberate commitment
→ higher-fidelity execution
→ evaluation
→ targeted correction
```

The exact artefacts and workflows remain domain-owned.

## Repository responsibilities

| Area | This repository owns |
|---|---|
| Family design | Common terminology, principles, boundaries, contracts |
| Research | Cross-domain research and abstraction evidence |
| Bootstrap | Process for creating a new Production Skills project |
| Registry | Authoritative list and maturity of Production Skills projects |
| Evaluation contract | Common evaluation layers, not domain quality metrics |
| Extension Packs | Family-level semantics and qualification rules |
| Cross-domain integration | Generic handoff and composition contracts |
| Pactwright | Optional integration boundary and compatibility conventions |

Individual Production Skills repositories own their skills, commands, workflows, tools, artefacts, Extension Packs, examples, benchmarks, and domain research.

**Consuming projects own their own specifications, research logs, capability maps, roadmaps, Production Skills selection, Extension Pack selection, and integration decisions.** A game, software product, film, or other project may depend on many Production Skills repositories without becoming part of this central repository.

## Canonical specifications

1. [`01-production-skills-family-system.md`](docs/specs/01-production-skills-family-system.md)
2. [`02-production-skills-project-contract.md`](docs/specs/02-production-skills-project-contract.md)
3. [`03-production-skills-evaluation-and-extension-packs.md`](docs/specs/03-production-skills-evaluation-and-extension-packs.md)
4. [`04-cross-domain-orchestration-and-integration.md`](docs/specs/04-cross-domain-orchestration-and-integration.md)

## Validate the registry

```bash
pnpm validate
pnpm test
```

The repository intentionally has no runtime dependencies at bootstrap.

## Non-goals

This repository is not:

- a universal production runtime;
- a shared workflow engine;
- a central provider or model registry;
- a universal artefact graph;
- a replacement for domain benchmarks;
- a replacement for Pactwright;
- a monorepo containing every Production Skills implementation;
- a home for consuming-project specifications or research;
- a central roadmap for any individual consuming project.

## Status

Early canonical family design. Existing mature projects are evidence sources; new family abstractions should remain conservative until additional domains mature.
