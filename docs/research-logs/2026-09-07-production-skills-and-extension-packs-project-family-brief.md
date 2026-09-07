# Production Skills and Extension Packs — Project Family Brief

## 1. Goal

Create a family of independent **Production Skills** projects that provide reusable specialist expertise to AI agents.

The projects will initially support development of **Worldstack**, a long-term open-world game project using:

- Pactwright;
- pnpm + Turborepo;
- incremental implementation;
- proof-of-concepts;
- permanent test games;
- integration games;
- vertical slices;
- cheap-to-expensive production;
- graph engineering;
- progressive world construction;
- specialised cooperating runtime engines;
- browser-first deployment.

The Production Skills must remain general-purpose. They must not become Worldstack-specific implementations.

```text
Production Skills
→ reusable domain expertise

Production Extension Packs
→ reusable specialised expertise

Project Intelligence
→ Worldstack-specific knowledge
```

---

# 2. Production Model

The family should support the shared progression:

```text
Research
↓
Hypothesis
↓
Cheap PoC
↓
Capability PoC
↓
Test Game
↓
Integration Game
↓
Vertical Slice
↓
World Integration
↓
Fidelity / Scale Promotion
```

A fundamental production doctrine is:

> Prove behaviour, integration and value using the cheapest adequate representation before committing to more expensive production.

Examples:

```text
cube
→ greybox
→ procedural prototype
→ generated mock-up
→ production asset
→ hero asset
```

and:

```text
system PoC
→ test game
→ integration game
→ main game
```

Production Skills should preserve valid work and repair the smallest appropriate unit when evaluation fails.

---

# 3. Common Project Architecture

Each Production Skills repository should follow the same family structure where applicable:

```text
<domain>-skills/
├── README.md
├── skills/
├── commands/
├── extension-packs/
├── examples/
├── benchmarks/
├── evaluation/
├── tests/
├── tools/
├── integrations/
│   └── pactwright.yml
└── docs/
```

Each family should provide:

- core production skills;
- narrower composable commands;
- evaluation skills;
- examples at increasing sophistication;
- automated or semi-automated benchmarks;
- Extension Packs;
- an Extension Pack creation skill;
- Pactwright integration;
- standalone use without Pactwright.

Extension Packs should add specialisation without duplicating the core skill.

---

# 4. Game Development Skills

## Project

`game-development-skills`

## Purpose

Own game-design and game-development expertise that is independent of a specific renderer, physics engine or platform.

Key areas:

- gameplay systems;
- game loops;
- systemic gameplay;
- game architecture;
- game feel;
- prototyping;
- PoCs;
- test games;
- integration games;
- vertical slices;
- open-world systems;
- simulation design;
- performance-aware design;
- progression from prototype to production;
- gameplay evaluation.

## Initial Extension Packs

```text
proof-to-world-development
open-world-systems
systemic-gameplay
browser-game-development
gameplay-prototyping
test-game-development
integration-game-development
vertical-slice-development
vehicle-and-traffic-gameplay
character-locomotion-gameplay
weather-and-environment-gameplay
crowd-and-npc-gameplay
world-streaming-gameplay
```

Later:

```text
combat
police-and-crime
missions
economy
interiors
destruction
wildlife
multiplayer
```

---

# 5. Software Engineering Skills

## Project

`software-engineering-skills`

## Purpose

Own implementation engineering independent of the production domain.

Key areas:

- architecture;
- TypeScript;
- Rust;
- WebAssembly;
- WebGPU;
- monorepos;
- performance;
- concurrency;
- simulation infrastructure;
- APIs;
- persistence;
- networking;
- testing;
- observability;
- CI/CD;
- debugging;
- optimisation.

## Initial Extension Packs

```text
typescript-large-systems
turborepo-monorepos
browser-runtime-engineering
webgpu-engineering
wasm-integration
game-performance-engineering
simulation-architecture
modular-engine-architecture
worker-and-threading
profiling-and-optimisation
```

Later:

```text
rust-simulation
cloudflare-backend
multiplayer-networking
authoritative-simulation
distributed-world-services
asset-pipeline-engineering
```

---

# 6. Deep Research Skills

## Project

`deep-research-skills`

## Purpose

Provide systematic research capability to every other Production Skills family.

Research should produce traceable evidence rather than unsupported recommendations.

Key areas:

- technology evaluation;
- literature research;
- market research;
- competitive research;
- case studies;
- implementation research;
- trend analysis;
- reference discovery;
- source evaluation;
- synthesis;
- research updates.

## Initial Extension Packs

```text
game-technology-research
engine-and-library-evaluation
game-reference-analysis
real-world-location-research
maps-and-geospatial-research
architecture-and-urban-research
visual-reference-research
production-technique-research
performance-research
```

Later:

```text
player-research
market-research
historical-research
cultural-research
scientific-simulation-research
```

---

# 7. UI/UX Design Skills

## Project

`ui-ux-design-skills`

## Purpose

Design and evaluate player interaction with the game and supporting tools.

Key areas:

- interaction design;
- controls;
- information architecture;
- HUD;
- menus;
- navigation;
- accessibility;
- readability;
- cognitive ergonomics;
- user testing;
- behavioural evaluation.

## Initial Extension Packs

```text
gameplay-interaction
gameplay-readability
browser-game-input
keyboard-mouse-controls
controller-controls
game-accessibility
game-hud
world-map-and-navigation
```

Later:

```text
inventory
missions-interface
shops-and-economy
vehicle-interface
multiplayer-interface
touch-controls
```

---

# 8. World / Environment Production Skills

## Project

`world-environment-production-skills`

## Purpose

Own the process for crafting coherent game worlds from evidence, design intent and reusable production systems.

This is **not merely procedural generation**.

The objective is automated craftsmanship:

```text
maps
photos
video
research
generated concepts
gameplay requirements
        ↓
world design
        ↓
blockout
        ↓
evaluation
        ↓
environment production
        ↓
selective polish
```

Key areas:

- city and environment design;
- GIS/map ingestion;
- geographic abstraction;
- urban design;
- world composition;
- districts;
- roads;
- landmarks;
- modular construction;
- environmental storytelling;
- world dressing;
- world fidelity progression.

## Initial Extension Packs

```text
real-world-to-game-world
city-production
map-to-world
photo-reference-worldbuilding
world-blockout
modular-environments
procedural-environment-production
district-design
road-and-street-production
world-streaming-design
world-fidelity-progression
environment-evaluation
```

Later:

```text
interiors
rural-worlds
natural-environments
coastal-environments
vegetation
weathered-environments
environmental-storytelling
```

---

# 9. 3D Production Skills

## Project

`3d-production-skills`

## Purpose

Own production of performant, reusable 3D assets.

Key areas:

- modelling;
- topology;
- UVs;
- materials;
- texture production;
- modular kits;
- procedural geometry;
- photogrammetry;
- generated 3D;
- optimisation;
- LOD;
- collision geometry;
- game-ready export;
- asset validation.

## Initial Extension Packs

```text
game-ready-assets
prototype-3d
modular-architecture
procedural-geometry
photogrammetry-to-game-asset
generated-3d-workflow
materials-and-textures
lod-production
collision-production
web-game-optimisation
gltf-production
```

Later:

```text
vehicles
props
hero-environments
destruction-assets
vegetation
interiors
```

---

# 10. Character Production Skills

## Project

`character-production-skills`

## Purpose

Own the complete production of believable reusable characters.

Key areas:

- character design;
- reference development;
- character sheets;
- modelling;
- materials;
- clothing;
- facial design;
- topology;
- rig requirements;
- NPC variation;
- character LOD;
- game-ready delivery.

## Initial Extension Packs

```text
character-design
character-reference-sheets
game-character-production
npc-production
modular-npc-variation
character-lod
clothing-production
facial-production
character-game-readiness
```

Later:

```text
hero-characters
crowd-characters
police
civilians
criminal-archetypes
age-variation
body-variation
```

---

# 11. Animation Production Skills

## Project

`animation-production-skills`

## Purpose

Own character and object motion production.

Key areas:

- locomotion;
- animation graphs;
- retargeting;
- IK;
- procedural animation;
- active ragdolls;
- motion capture;
- motion matching;
- facial animation;
- vehicle animation;
- interaction animation;
- animation evaluation.

## Initial Extension Packs

```text
character-locomotion
animation-retargeting
procedural-animation
inverse-kinematics
physics-animation
active-ragdoll
interaction-animation
animation-state-machines
game-animation-evaluation
```

Later:

```text
motion-matching
facial-animation
combat-animation
vehicle-animation
crowd-animation
cinematic-performance
```

---

# 12. Narrative Production Skills

## Project

`narrative-production-skills`

## Purpose

Own story, character, dialogue and narrative-system production.

The project should support both authored and systemic narrative.

## Initial Extension Packs

```text
game-narrative
open-world-narrative
character-arcs
mission-narrative
dialogue
systemic-dialogue
environmental-storytelling
narrative-continuity
```

Later:

```text
branching-narrative
emergent-narrative
ambient-dialogue
radio-content
dynamic-events
faction-narrative
```

---

# 13. Video / Cinematography Production Skills

## Project

Prefer retaining:

`video-production-skills`

rather than creating an overlapping cinematography repository.

## Purpose

Extend the existing video-production discipline into **runtime game cinematography**.

The game should normally use the same renderer for gameplay and cinematics.

```text
story intent
↓
shot design
↓
blocking
↓
camera choreography
↓
runtime cinematic
```

## Initial Extension Packs

```text
game-cinematography
in-engine-cinematics
runtime-cinematic-production
storyboard-to-runtime
camera-blocking
action-cinematography
dialogue-cinematography
cinematic-continuity
```

Later:

```text
vehicle-cinematography
combat-cinematography
environmental-cinematography
trailers
gameplay-capture
```

---

# 14. Music / Audio Production Skills

## Project

`music-audio-production-skills`

Alternatively, retain `music-production-skills` and create a separate `sound-production-skills` if the existing project boundary is already established.

## Purpose

Own interactive music and game-audio production.

Key areas:

- composition;
- adaptive scoring;
- music states;
- transitions;
- sound design;
- ambience;
- Foley;
- vehicle sound;
- weather sound;
- spatial audio;
- mixing;
- runtime audio systems.

## Initial Extension Packs

```text
adaptive-game-music
game-audio
interactive-music
music-state-systems
urban-soundscape
environmental-audio
weather-audio
spatial-audio
runtime-audio-evaluation
```

Later:

```text
vehicle-audio
combat-audio
dialogue-mixing
radio
mission-score
cinematic-score
dynamic-mixing
```

---

# 15. QA / Evaluation Skills

## Project

`qa-evaluation-skills`

## Purpose

Own cross-domain validation of integrated interactive systems.

This does not replace evaluation owned by individual Production Skills.

```text
domain evaluator
→ Is the specialist output good?

QA / Evaluation
→ Does the assembled product behave correctly
   and remain correct as systems interact?
```

Key areas:

- functional QA;
- exploratory testing;
- regression testing;
- integration testing;
- performance testing;
- browser compatibility;
- deterministic scenarios;
- simulation testing;
- soak testing;
- visual regression;
- playtesting;
- test-game design;
- automated agent play;
- failure reproduction.

## Initial Extension Packs

```text
game-qa
system-integration-testing
test-game-testing
open-world-testing
simulation-testing
browser-game-testing
performance-testing
visual-regression
deterministic-scenarios
agent-playtesting
regression-gauntlets
```

Later:

```text
crowd-stress-testing
streaming-stress-testing
physics-stress-testing
multiplayer-testing
save-game-testing
long-session-soak-testing
```

---

# 16. Cross-Family Composition

The projects must be designed to compose rather than duplicate one another.

Example: creating a city block.

```text
Deep Research
→ maps + photographs + architecture evidence

World / Environment
→ spatial design + blockout

Image Production
→ visual targets and concepts

3D Production
→ game-ready environment

Game Development
→ gameplay affordances

Software Engineering
→ runtime implementation

UI/UX
→ interaction

QA / Evaluation
→ integrated validation
```

Example: creating an NPC:

```text
Narrative
→ character role

Character Production
→ character design + model

Animation
→ locomotion + interaction

Game Development
→ behaviour requirements

Software Engineering
→ runtime implementation

Music / Audio
→ voice/audio integration

QA / Evaluation
→ integrated behaviour
```

No family should absorb another discipline simply because one workflow depends on it.

---

# 17. Extension Pack Principle

Core skills contain universal domain knowledge.

Extension Packs contain reusable specialisation.

For example:

```text
game-development
        │
        ├── open-world-systems
        ├── systemic-gameplay
        └── vehicle-and-traffic-gameplay
```

An Extension Pack should be justified when:

- the specialisation has substantial reusable knowledge;
- it changes how the core skill operates;
- several projects could use it;
- keeping it in the core would increase irrelevant context.

Do not create Extension Packs solely to mirror individual Worldstack packages.

---

# 18. Required Extension Pack Creator

Every Production Skills family should include or consume a common capability for:

```text
research specialisation
↓
identify reusable knowledge
↓
design Extension Pack
↓
create examples
↓
create benchmarks
↓
evaluate against core baseline
↓
publish
```

A new Extension Pack must demonstrate value over the core skill alone.

---

# 19. Evaluation Requirement

Every project must be measurable.

Evaluation should cover at least:

```text
correctness
quality
constraint adherence
consistency
production efficiency
regression resistance
appropriate tool selection
scope discipline
```

Extension Packs should be evaluated using:

```text
core skill baseline
vs
core skill + Extension Pack
```

The pack should survive only if it produces a meaningful improvement in its intended specialisation.

---

# 20. Pactwright Integration

Each Production Skills project should optionally provide:

```text
integrations/pactwright.yml
```

The integration declares how relevant skills participate in Pactwright responsibilities such as:

```text
delivery-execution
delivery-review
```

Pactwright must not own the Production Skills workflow.

```text
Pactwright
→ governs Contract fulfilment

Agent Pack
→ composes expertise

Production Skills
→ perform specialised production
```

All projects must remain independently usable without Pactwright.

---

# 21. Initial Priority

Projects should not all be developed to full breadth simultaneously.

For the first Worldstack development simulations, prioritise:

```text
1. game-development-skills
2. software-engineering-skills
3. deep-research-skills
4. qa-evaluation-skills
5. world-environment-production-skills
6. ui-ux-design-skills
7. 3d-production-skills
8. character-production-skills
9. animation-production-skills
10. narrative-production-skills
11. video-production-skills
12. music-audio-production-skills
```

The first six enable most PoC, test-game and integration-game work.

The later production disciplines become progressively more important once Worldstack reaches representative vertical slices.

---

# 22. Target Outcome

Together, the family should allow an AI development system to progress from:

```text
idea
```

to:

```text
research
↓
experiment
↓
playable PoC
↓
tested subsystem
↓
integration game
↓
vertical slice
↓
crafted world
↓
production game
```

while continuously increasing reuse, reducing manual production cost and preserving specialist production quality.

The objective is not autonomous bulk generation.

The objective is:

> **Encode strong production disciplines so humans and AI agents can progressively craft increasingly sophisticated interactive worlds using reusable expertise, validated systems and evidence-driven production loops.**