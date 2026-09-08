# Production Skills

Central design, research, governance, and project-family repository for the `sb-dev` Production Skills ecosystem.

Production Skills are independent Agent Skills projects that encode reusable production expertise for domains such as narrative, music, video, game development, software engineering, deep research, UI/UX, legal, business building, world/environment production, 3D, characters, animation, sound, and QA/evaluation.

This repository **does not implement those domain workflows and does not own consuming-project specifications**. It defines the family contract, holds genuinely cross-domain research, coordinates creation and maturity of Production Skills projects, and records only abstractions that have earned promotion through evidence from multiple domains.

## Core rule

> Share an abstraction only after multiple production domains demonstrably need the same concept.

## Project family

### Mature evidence base

- [Narrative Production Skills](https://github.com/sb-dev/narrative-production-skills)
- [Music Production Skills](https://github.com/sb-dev/music-production-skills)
- [Video Production Skills](https://github.com/sb-dev/video-production-skills)

These repositories provide the strongest current evidence for the family architecture, including progressive examples, domain-owned benchmarks and first-class Extension Packs.

### In development

- [UI/UX Design Skills](https://github.com/sb-dev/ui-ux-design-skills)

### Planned / researching

- `game-development-skills`
- `software-engineering-skills`
- `deep-research-skills`
- `legal-skills`
- `business-building-skills`
- `world-environment-production-skills`
- `3d-production-skills`
- `character-performance-skills` (`character-production-skills` + `animation-production-skills`)
- `audio-production-skills` (`music-production-skills` + `sound-production-skills`)
- `qa-evaluation-skills`

`legal-skills` is planned as a cross-cutting legal-production family for authoritative legal research, project advice, legal drafting and review, privacy/data protection, consumer terms, intellectual property and trade marks, licensing, project-to-law traceability, legal change impact and specialist escalation. Jurisdiction and valid-as-of authority are part of the legal execution context rather than ordinary Extension Pack selection.

`business-building-skills` is planned as a Production Skills family for turning opportunities into evidence-backed customer/value models, offers, pricing and monetisation, acquisition and sales systems, delivery economics, retention/expansion strategies, experiments and constraint-driven business improvements. Its initial research corpus includes `$100M Offers`, `$100M Leads`, `$100M Money Models`, `The Personal MBA` and `The Lean Startup`, with the books treated as evidence sources rather than skill boundaries.

The family independently supports a common production principle:

```text
cheap uncertainty reduction
→ deliberate commitment
→ higher-fidelity execution
→ evaluation
→ targeted correction
```

The exact artefacts, workflows, quality criteria and repair units remain domain-owned.

## Repository responsibilities

| Area | This repository owns |
|---|---|
| Family design | Common terminology, principles, boundaries, contracts |
| Research | Cross-domain research and abstraction evidence |
| Bootstrap | Recipes for generating a domain-specific bootstrap specification for each new Production Skills project |
| Registry | Authoritative list and demonstrated maturity of Production Skills projects |
| Evaluation contract | Common evaluation layers, not domain quality metrics |
| Extension Packs | Family-level semantics and qualification rules |
| Cross-domain integration | Generic handoff and composition contracts |
| Pactwright | Optional integration boundary and compatibility conventions |

Individual Production Skills repositories own their skills, commands, workflows, tools, artefacts, Extension Packs, examples, benchmarks, and domain research.

**Consuming projects own their own specifications, research logs, capability maps, roadmaps, Production Skills selection, Extension Pack selection, and integration decisions.** A game, software product, film, legal matter, business, or other project may depend on many Production Skills repositories without becoming part of this central repository.

## Bootstrap a new Production Skills project

Start with [`docs/bootstrap/README.md`](docs/bootstrap/README.md).

The bootstrap directory contains reusable family processes. They are used to generate a custom domain bootstrap under `docs/research-logs/` before the new repository is scaffolded.

Current domain bootstrap specifications include:

- [`Legal Skills`](docs/research-logs/2026-09-08-legal-skills-new-project-bootstrap-process.md), using Kakeibo and Worldstack as deliberately different legal stress-test fixtures while keeping project-specific legal conclusions in the consuming projects;
- [`Business Building Skills`](docs/research-logs/2026-09-08-business-building-skills-new-project-bootstrap-process.md), deriving reusable business-building capabilities from an initial five-book corpus while requiring broader professional evidence, truthful-growth constraints, 5×3 progressive examples, business-model Extension Packs and canonical stress tests across consumer subscription, professional services and open-source ecosystem models;
- [`World / Environment Production Skills`](docs/research-logs/2026-09-08-world-environment-production-skills-new-project-bootstrap-process.md), using Worldstack as a major simulation-driven consumer while also requiring an independent fictional-world proving path so reusable environment production does not become Worldstack-specific;
- [`3D Production Skills`](docs/research-logs/2026-09-08-3d-production-skills-new-project-bootstrap-process.md), treating 3D asset production as a contract-driven pipeline from proxy and editable source through surfaces, runtime representation, interchange and technical/visual validation, with Worldstack as one consumer rather than the owning architecture;
- [`Character Performance Skills`](docs/research-logs/2026-09-08-character-performance-skills-new-project-bootstrap-process.md), combining character production and animation so identity, rig/deformation, retargeting, body/facial performance, runtime animation and character/crowd fidelity are designed as one coherent production lifecycle while preserving boundaries with 3D, Narrative, Game Development, Audio and Worldstack;
- [`Audio Production Skills`](docs/research-logs/2026-09-08-audio-production-skills-new-project-bootstrap-process.md), combining mature Music Production Skills with new Sound Production capabilities while requiring an explicit Music migration/parity gate before the combined repository can supersede the existing mature music implementation.

A mature project targets:

```text
6 canonical specification responsibilities
5 progressive example levels
3 primary examples per level
15 primary progressive examples
first-class Extension Pack architecture
Extension Pack catalogue
pack-authoring capability
pack showcases with exact prompts
core-vs-pack evaluation
local + clean external installation validation
```

These are family-level product responsibilities; their implementation remains domain-native.

## Canonical specifications

1. [`01-production-skills-family-system.md`](docs/specs/01-production-skills-family-system.md)
2. [`02-production-skills-project-contract.md`](docs/specs/02-production-skills-project-contract.md)
3. [`03-production-skills-evaluation-and-extension-packs.md`](docs/specs/03-production-skills-evaluation-and-extension-packs.md)
4. [`04-cross-domain-orchestration-and-integration.md`](docs/specs/04-cross-domain-orchestration-and-integration.md)

## Templates

Reusable structural templates live under [`templates/`](templates/), including:

- six project specification templates;
- a Video-style project README template;
- progressive example template;
- Extension Pack showcase template;
- Extension Pack authoring skill template;
- optional Pactwright and registry templates.

Templates bootstrap a project; they do not overwrite mature domain knowledge or force identical workflows across domains.

## Validate the registry and family structure

```bash
pnpm validate
pnpm test
```

Audit a local Production Skills repository against structural family expectations:

```bash
pnpm audit:project -- ../<domain>-production-skills
```

The audit reports `pass`, `warn`, `fail`, or `not-applicable` with evidence. It deliberately does **not** score domain quality.

The repository intentionally has no runtime dependencies at bootstrap.

## Non-goals

This repository is not:

- a universal production runtime;
- a shared workflow engine;
- a central provider or model registry;
- a universal artefact graph;
- a universal Extension Pack interpreter;
- a universal benchmark score;
- a replacement for domain benchmarks;
- a replacement for Pactwright;
- a monorepo containing every Production Skills implementation;
- a home for consuming-project specifications or research;
- a central roadmap for any individual consuming project;
- a central legal knowledge base or compliance platform;
- a central business operating system, CRM, marketing platform or accounting system.

## Status

Early canonical family design. Mature projects are evidence sources; new family abstractions should remain conservative until additional domains independently prove them.
