# World / Environment Production Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.0  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `world-environment-production-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository** for producing coherent worlds and environments from research, spatial constraints, product/game requirements and approved world-state inputs.

The project should help AI agents perform world and environment production as a discipline rather than treating an environment as a single 3D generation prompt, a pile of assets or an unconstrained procedural scene.

The target production loop is expected to resemble:

```text
world / environment intent
→ source and constraint intake
→ spatial model
→ world structure / environment grammar
→ cheapest useful representation
→ blockout / map / procedural proof
→ evaluation and selection
→ modular / procedural production plan
→ asset and system handoffs
→ environment assembly
→ runtime / spatial validation
→ selective fidelity promotion
→ targeted correction
→ production-ready world / environment handoff
```

The exact workflow must be validated through professional-practice research before it becomes a skill contract.

`world-environment-production-skills` owns reusable production expertise for **spatial world design, environment structure, real-world ingestion, modular and procedural environment production, environment assembly, spatial consistency, representation fidelity and environment-level evaluation**.

It does **not** own:

- Worldstack's scientific or social simulation models;
- game mechanics, encounters or progression owned by Game Development Skills;
- detailed individual 3D asset craft owned by 3D Production Skills;
- character, animation, narrative, video, music or sound production;
- generic software/tooling engineering;
- external research as a discipline;
- project-specific world truth or consuming-project state;
- Pactwright lifecycle authority.

The project may specify what adjacent domains must deliver and integrate their outputs into a coherent environment.

---

## 2. Governing Sources

Use the current Production Skills family process as canonical:

- `production-skills/docs/bootstrap/README.md`
- `production-skills/docs/bootstrap/new-project-process.md`
- `production-skills/docs/bootstrap/domain-research-process.md`
- `production-skills/docs/bootstrap/shared-abstraction-process.md`
- `production-skills/docs/specs/01-production-skills-family-system.md`
- `production-skills/docs/specs/02-production-skills-project-contract.md`
- `production-skills/docs/specs/03-production-skills-evaluation-and-extension-packs.md`
- `production-skills/docs/specs/04-cross-domain-orchestration-and-integration.md`

Use mature Video, Narrative and Music Production Skills as evidence for proven family patterns only after the world/environment discipline has been independently understood. Use UI/UX, Game Development, Deep Research, Software Engineering and Legal Skills bootstraps as structural references where their boundaries are relevant.

Use Worldstack as a major consumer and stress-test source, especially:

- `worldstack/docs/specs/01-worldstack-system-and-boundaries.md`
- `worldstack/docs/specs/02-world-model-and-system-integration.md`
- `worldstack/docs/specs/04-game-world-and-representation.md`
- `worldstack/docs/specs/05-production-skills-and-pactwright-integration.md`

Worldstack is a proving ground, not the owner of this project's reusable workflow.

Newer family requirements take precedence:

```text
bootstrap workspace before substantive research
research logs as durable stage outputs
six canonical specs
5 levels × 3 primary examples
first-class Extension Packs
pack-authoring capability
core-vs-pack differential evaluation
clean external installation smoke tests
```

---

## 3. Initial Domain Evidence and Boundary Hypotheses

Worldstack provides several constraints that the bootstrap should preserve without overfitting to that project.

### World state is not world representation

```text
WORLD STATE ≠ WORLD REPRESENTATION
```

A state such as rainfall, congestion, rent pressure, land use, cultural activity or ecological condition may be represented spatially and visually through roads, surfaces, buildings, vegetation, signage, traffic affordances, density, wear, props or other environment features.

World / Environment Production Skills may **materialise** approved state. They must not silently become the authority for the model that produced that state.

### Breadth and fidelity are independent

Worldstack's representation ladder provides a useful hypothesis:

```text
structured / debug representation
→ primitive representation
→ procedural low-detail representation
→ art-directed prototype
→ production environment
→ selective hero fidelity
```

A broad city may need to exist cheaply before a single street becomes expensive. Higher fidelity is not automatically better.

### Models and environment production have different ownership

Worldstack owns executable models, simulation state and experiment semantics. Production Skills own reusable specialist production technique. Pactwright owns authorised lifecycle and Evidence. Project Intelligence owns Worldstack-specific durable conclusions.

For this project the likely interface is:

```text
approved world state / project brief / gameplay constraints / research
→ World / Environment Production Skills
→ spatial/environment production artefacts
→ Game / 3D / Narrative / Audio / other Production Skills handoffs
→ assembled environment
```

### Behavioural contracts should survive representation changes

A location or system should be able to move from primitive to production representation without requiring unrelated systems to be redesigned, provided the agreed spatial/behavioural contracts remain stable.

### Worldstack's capability-gap loop remains external

Worldstack may discover production gaps and send them to the Production Skills incubator. One Worldstack-specific problem is not sufficient evidence for a new family abstraction, skill or pack.

---

## 4. Governing Principles

Retain the Production Skills family principles and specialise them for worlds and environments.

### Spatial structure before surface detail

Resolve topology, scale, circulation, adjacency, hierarchy, access and major environmental relationships before investing in decorative fidelity.

### Cheapest useful spatial representation

Use the cheapest representation capable of answering the current question:

```text
written spatial brief
→ annotated map / GIS layer / adjacency graph
→ 2D plan
→ primitive blockout
→ procedural low-detail world
→ art-directed environment slice
→ production environment
→ selective hero treatment
```

The correct representation depends on uncertainty, not prestige.

### Breadth before hero fidelity when world architecture is uncertain

For large worlds, prove extent, connectivity, streaming partitions, density and system integration cheaply before authorising expensive local detail.

### Reference is evidence, not instruction to copy blindly

Maps, photographs, scans, street imagery, plans, satellite imagery, open data and creative references must retain provenance, source limitations and uncertainty. Real-world ingestion should distinguish measured facts, inferred structure, approximations and creative departures.

### World structure and asset craft are separate responsibilities

World / Environment Production Skills should decide what spatial systems, modular kits, assets, rules and placement grammar are required. 3D Production Skills should own specialist construction of individual production assets where that work is reusable 3D craft.

Low-fidelity primitives and procedural geometry may remain inside world/environment production when they are the cheapest representation needed to answer a spatial question.

### Environment and gameplay are coupled but not identical

Game Development Skills owns mechanics, encounters, traversal rules, player goals and gameplay acceptance. World / Environment Production Skills translates those constraints into layout, affordances, sightlines, scale, circulation, cover/space requirements, landmarks and environment handoffs.

### Environment state must remain explainable

For procedurally or systemically generated environments, preserve enough information to explain:

```text
source inputs
rules / seeds
constraints
manual overrides
selected result
known limitations
```

### Selective fidelity promotion

Promote only the locations, systems and assets whose higher fidelity has been justified by player experience, simulation representation, visual priority, camera exposure, performance constraints or product requirements.

### Preserve approved spatial work

An accepted road network, district boundary, building footprint, terrain profile, landmark placement or modular rule should not be silently rewritten during an unrelated refinement.

### Correct the smallest responsible layer

Examples:

```text
wrong map alignment
→ source / spatial transform

poor route hierarchy
→ world structure

repetitive district
→ modular / procedural grammar

incorrect building proportions
→ environment layout or 3D asset, depending on ownership

navigation failure
→ environment collision/nav handoff or Game Development, depending on cause

streaming hitch
→ environment partition / asset budget or Software Engineering, depending on cause

world-state mismatch
→ representation mapping if state is correct; upstream Worldstack/model if state is wrong
```

### Runtime constraints are production inputs

Streaming, LOD/HLOD, occlusion, collision, navigation, memory, draw/instance budgets, platform limits and coordinate precision may materially constrain world production. The project should define environment-level requirements while delegating engine/tool implementation to the appropriate execution or engineering layer.

### Legal provenance is not optional for real-world ingestion

Maps, imagery, scans, brands, architecture, public data and third-party assets may carry copyright, database, privacy, trade mark, contractual or licence constraints. Legal Skills should own legal analysis; World / Environment Production Skills must preserve provenance and legal constraints through production handoffs.

---

# 5. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Domain Goal and Adjacent Boundaries
    ↓
2. Research Professional World / Environment Production Practice
    ↓
3. Define Spatial, Scale, Coordinate and World-Structure Model
    ↓
4. Define Source Ingestion, Reference and Provenance Model
    ↓
5. Define Representation, Fidelity and Commitment Strategy
    ↓
6. Define Modular, Procedural and Assembly Model
    ↓
7. Define Runtime, Streaming and Cross-Domain Handoffs
    ↓
8. Research AI Skills, DCCs, Engines, GIS and Environment Tools
    ↓
9. Choose Execution Layer and Tool Boundaries
    ↓
10. Gap Analysis + Over-Engineering Guardrails
    ↓
11. Design Core Skills and Commands
    ↓
12. Design Extension Packs and Pack Authoring
    ↓
13. Design Progressive Examples
    ↓
14. Design Worldstack + Independent Canonical Stress Tests
    ↓
15. Design Evals, Benchmarks and Regression Fixtures
    ↓
16. Generate Six Canonical Specs
    ↓
17. Design Public README
    ↓
18. Cross-Project Review
    ↓
19. Scaffold Production Repository
    ↓
20. Implement and Prove Core Vertical
    ↓
21. Expand Progressive Coverage and Extension Packs
    ↓
22. Validate Installation and Repository Integrity
    ↓
23. Optional Pactwright Integration + Registry Promotion
    ↓
24. Review Shared-Abstraction Candidates
    ↓
MATURE WORLD / ENVIRONMENT PRODUCTION SKILLS PROJECT
```

The Stage 0 repository is a bootstrap workspace, not the production scaffold created at Stage 19.

---

# 6. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/world-environment-production-skills` before substantive bootstrap research begins.

Initial structure:

```text
world-environment-production-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-world-environment-production-skills-new-project-bootstrap-process.md
```

Do not create `skills/`, `examples/`, `benchmarks/`, `extension-packs/`, tooling, CI or package metadata until later stages justify them.

Every substantive stage should write detailed findings into `docs/research-logs/`. Conversation should carry summaries and decisions rather than becoming the durable research store.

Creating the repository does **not** make the project `scaffolded`.

**Exit:** the workspace exists and later stages can operate from durable research files.

---

# 7. Stage 1 — Define Domain Goal and Adjacent Boundaries

Resolve what the project owns across:

```text
world design
environment design
real-world ingestion
city / district production
terrain / landscape production
spatial planning
modular environment systems
procedural environment systems
set dressing / environment composition
environmental storytelling inputs
world-state representation
runtime environment preparation
environment evaluation
```

Explicitly define boundaries with:

```text
Worldstack / simulation models
Game Development Skills
3D Production Skills
Deep Research Skills
Legal Skills
Narrative Production Skills
UI/UX Design Skills
Character / Animation Production Skills
Audio / Music Production Skills
Software Engineering Skills
QA / Evaluation Skills
Pactwright
```

Key questions:

- Does the core own both real-world reconstruction and fictional world production?
- What is world design versus game-level design?
- What environment geometry remains legitimate inside this project versus 3D Production Skills?
- How are physical/geographic facts separated from creative interpretation?
- How are environment requirements handed to asset-production domains?
- What counts as a reusable world-production technique rather than Worldstack/project-specific knowledge?

**Exit:** a defensible domain boundary exists before skill design.

---

# 8. Stage 2 — Research Professional World / Environment Production Practice

Study complementary disciplines rather than one studio pipeline:

```text
environment art
world building
level / spatial design
urban design and urban morphology
architecture and landscape architecture
GIS / cartography / geospatial production
real-world reconstruction
photogrammetry / scan-based workflows
modular environment production
procedural content generation
technical art
open-world streaming / optimisation
environmental storytelling / set dressing
digital-twin / city-model production as a comparison domain
historical reconstruction where useful
```

Capture:

```text
roles and terminology
briefing and reference practice
spatial decomposition
scale / coordinate handling
blockout / greybox methods
modular kit design
procedural grammar
asset lists / environment bills of materials
set dressing
terrain / road / building workflows
review / approval points
performance and streaming constraints
common failure modes
repair scopes
handoffs
quality criteria
```

Do not import one engine's world-building workflow as the universal production model.

**Exit:** the production model is grounded in professional environment practice rather than generation-provider features.

---

# 9. Stage 3 — Define Spatial, Scale, Coordinate and World-Structure Model

Research the minimum common spatial language the skills need without inventing a universal world ontology.

Candidate concerns:

```text
extent / bounds
coordinate reference / local origin
scale / units
elevation / terrain datum where relevant
regions / districts / zones
routes / networks
parcels / plots / footprints
landmarks
adjacency
access / circulation
vertical layers
interior / exterior relationships
portals / transitions
world partitions / streaming cells
spatial constraints
semantic tags only where production requires them
```

Investigate artefacts such as:

```text
world brief
spatial plan
annotated map
world hierarchy
district sheet
route / circulation map
landmark map
scale reference
partition plan
environment contract
```

Avoid a universal Event Graph, GIS ontology or scene graph until repeated integrations prove a need.

**Exit:** different tools and fidelity levels can share enough spatial intent to preserve world structure.

---

# 10. Stage 4 — Define Source Ingestion, Reference and Provenance Model

Research how worlds are derived from:

```text
maps
open geospatial data
satellite / aerial imagery
street-level imagery
photographs
video
architectural plans
survey / scan data
point clouds
photogrammetry
Gaussian splats / neural reconstruction references
historical maps / archives
concept art
moodboards
written briefs
simulation / Worldstack outputs
existing game / project state
```

For each source class capture:

```text
identity / provenance
licence / legal constraints
coordinate / scale reliability
freshness / date
coverage
precision
known distortions
missing areas
confidence / uncertainty
whether it is measured, inferred or stylistic reference
allowed downstream use
```

Define how Deep Research and Legal Skills hand evidence and constraints into environment production without moving their domain semantics into this repository.

Real-world ingestion should preserve distinctions such as:

```text
observed geometry
inferred geometry
approximate geometry
creative substitution
unknown
```

**Exit:** a world can be reconstructed or inspired by external sources without losing provenance or confusing approximation with fact.

---

# 11. Stage 5 — Define Representation, Fidelity and Commitment Strategy

Validate a domain-native fidelity ladder such as:

```text
L0 structured / annotated spatial state
L1 2D plan / primitive debug representation
L2 greybox / blockout
L3 procedural or modular low-detail environment
L4 art-directed representative slice
L5 production environment
L6 selective hero-quality treatment
```

The final levels may differ from Worldstack's project-specific ladder.

Map uncertainty to cheap evidence:

| Uncertainty | Cheap representation hypothesis |
|---|---|
| city extent / road hierarchy | map / network plan |
| district density | simple massing |
| route readability | blockout |
| terrain shape | low-resolution heightfield |
| modular kit coverage | kit matrix + sample block |
| procedural rule quality | seeded low-detail generation |
| landmark silhouette | primitive massing |
| world-state visualisation | debug / primitive representation |
| streaming partition | broad low-detail world |
| camera / sightline exposure | representative slice |

Define commitment points for expensive asset commissioning, large procedural generation runs, world-wide re-layout and hero production.

**Exit:** fidelity is chosen according to uncertainty and cost, not by defaulting to final art.

---

# 12. Stage 6 — Define Modular, Procedural and Assembly Model

Research reusable production concepts such as:

```text
modular kits
tiling / snapping rules
variation sets
facade / building grammars
road / path grammars
parcel / block generation
terrain / biome rules
vegetation distribution
prop / signage placement
semantic placement constraints
seeded generation
manual overrides
art-direction constraints
exclusion / protected zones
asset budgets
repeat detection
```

For procedural work preserve:

```text
inputs
seed
rules
constraints
selected outputs
manual overrides
version
```

Investigate when generated layout should be regenerated versus locally repaired. Avoid procedures that make approved local work impossible to preserve.

**Exit:** the project can build coherent repeatable environments without turning procedural generation into an opaque one-shot operation.

---

# 13. Stage 7 — Define Runtime, Streaming and Cross-Domain Handoffs

Research environment-level requirements for:

```text
world partitioning / streaming
LOD / HLOD
occlusion / visibility
collision
navigation surfaces / traversal handoffs
coordinate precision / origin shifting where relevant
instancing
memory and geometry budgets
material / texture budgets
loading boundaries
runtime variation
state-driven representation
platform constraints
```

The project should define production requirements and acceptance evidence, not reimplement game-engine streaming or general software architecture.

Define handoffs such as:

```text
Game Development
→ traversal / encounter / gameplay constraints
→ World / Environment
→ spatial environment
```

```text
World / Environment
→ modular kit / asset requirements
→ 3D Production
→ runtime-ready assets
→ World / Environment assembly
```

```text
Worldstack
→ approved model state / behavioural outputs
→ World / Environment
→ representation mapping
```

```text
Deep Research + Legal
→ source evidence + usage constraints
→ World / Environment
→ provenance-aware production
```

```text
Narrative
→ location / environmental-storytelling intent
→ World / Environment
→ spatial / set-dressing requirements
```

**Exit:** adjacent domains can collaborate without unclear ownership of the environment or its underlying model.

---

# 14. Stage 8 — Research AI Skills, DCCs, Engines, GIS and Environment Tools

Research capabilities, not brands alone.

Categories should include:

```text
world / environment Agent Skills
level-design skills
3D / DCC automation
Blender / Houdini / similar procedural tools
Unreal / Unity / Godot world-building tooling
GIS / geospatial tools
OpenStreetMap / Overture / commercial map providers where relevant
CityEngine / city-generation tools
terrain / erosion tools
photogrammetry / scanning
point-cloud / reconstruction tools
text/image-to-3D services
procedural-generation frameworks
asset libraries / marketplaces
scene validation / geometry inspection
streaming / profiling / runtime capture
navigation / collision inspection
image / video / map reference tooling
```

Evaluate each candidate for capability, licence, data rights, maturity, automation surface, determinism, provider coupling, cost, scale, engine/DCC coupling, composability, quality and maintenance.

Classify candidates `USE`, `ADAPT`, `REFERENCE` or `REJECT`.

**Exit:** the project understands which operations should be delegated to existing environment-production tools.

---

# 15. Stage 9 — Choose Execution Layer and Tool Boundaries

World / Environment Production Skills should own production decisions such as:

```text
spatial interpretation
world decomposition
representation choice
fidelity / commitment strategy
modular / procedural grammar
source-to-space translation
asset / handoff requirements
assembly strategy
state-to-representation mapping
environment-level quality criteria
repair scope
```

Existing tools should execute, where suitable:

```text
GIS transforms
terrain processing
procedural generation
mesh / material production
scene editing
asset import
rendering
streaming build
collision / nav generation
runtime profiling
map / imagery retrieval
photogrammetry / reconstruction
```

Do not build a universal DCC adapter or scene runtime before concrete evidence requires one.

**Exit:** tools can be replaced without redesigning reusable world-production intelligence.

---

# 16. Stage 10 — Gap Analysis and Over-Engineering Guardrails

Test for gaps in:

```text
reference-to-world translation
real-world approximation discipline
spatial consistency
multi-scale world planning
cheap breadth-first production
modular kit planning
procedural rule design
manual/procedural coexistence
provenance continuity
state-to-representation mapping
asset requirement handoffs
cross-domain environment assembly
streaming / budget awareness
spatial failure diagnosis
selective fidelity promotion
```

Defer unless proven necessary:

```text
universal world graph
universal GIS schema
custom game engine
custom GIS platform
custom map service
universal coordinate-system abstraction
universal procedural world DSL
universal city simulator
central asset database
custom photogrammetry stack
digital-twin platform
universal streaming engine
provider-neutral DCC runtime
one universal environment-quality score
```

**Exit:** native skills address proven production gaps rather than building a world platform inside the skills repository.

---

# 17. Stage 11 — Design Core Skills and Commands

Lean starting hypothesis:

```text
world-environment-production
world-environment-evaluate
world-environment-pack-create
```

Do not fix the final skill count until research validates responsibility boundaries.

Possible production commands:

```text
frame-environment
ingest-references
resolve-spatial-context
map-world-structure
plan-fidelity
blockout
plan-modular-kit
define-procedural-grammar
generate-layout
map-state-to-representation
plan-asset-handoffs
assemble-environment
prepare-runtime-environment
promote-fidelity
repair-environment
```

Possible evaluation commands:

```text
audit-scale
audit-topology
audit-circulation
audit-reference-fidelity
audit-provenance
audit-modularity
audit-procedural-consistency
audit-repetition
audit-world-state-representation
audit-streaming-boundaries
audit-runtime-budgets
audit-cross-domain-handoffs
verify-preservation
diagnose-environment-failure
```

Retain commands only when they improve isolated evaluation, reuse, composition, diagnosis, targeted repair or benchmark precision.

**Exit:** every core skill and command has a coherent environment-production responsibility.

---

# 18. Stage 12 — Design Extension Packs and Pack Authoring

Extension Packs should represent coherent reusable **world-production profiles**, not isolated labels such as `city`, `forest`, `realistic` or `Unreal`.

Candidate profiles to research:

```text
real-world-city-reconstruction
procedural-large-open-world
modular-gameplay-district
historical-place-reconstruction
natural-landscape-and-biome
dense-living-city
simulation-driven-world-representation
```

A valid pack may alter:

```text
source ecology
spatial decomposition
tolerance for approximation
modular/procedural rules
fidelity strategy
asset requirements
runtime constraints
evaluation criteria
provenance requirements
cross-domain handoffs
```

Engine/provider choice should normally remain execution configuration rather than a pack unless it materially changes reusable production grammar.

Pack precedence should normally be:

```text
explicit project requirements
→ approved world/environment decisions and source constraints
→ selected Extension Pack
→ core World / Environment defaults
```

Pack authoring should inspect the catalogue first, justify a reusable production grammar, define changed core behaviour, produce a realistic showcase with exact prompt, add behavioural and negative evals, compare core vs core+pack and validate packaging.

**Exit:** the project can distinguish a reusable environment-production specialisation from a biome label, engine profile or project brief.

---

# 19. Stage 13 — Design Progressive Examples

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Select examples through a capability matrix rather than intuition.

### Level 1 — Solve one bounded spatial/environment problem

Candidate classes:

```text
street-corner blockout from map + references
modular room / corridor spatial kit proof
small terrain / trail section
```

### Level 2 — Produce one coherent location

Candidate classes:

```text
urban block / plaza
small natural landscape area
interior + exterior venue / compound
```

### Level 3 — Produce one complete environment slice

Candidate classes:

```text
real-world district reconstruction slice
procedural settlement / village
fictional gameplay-oriented district
```

### Level 4 — Handle scale, systems and repair

Candidate classes:

```text
multi-district streamed city section
large mixed-biome region
state-driven environment that changes with weather / economy / population inputs
```

### Level 5 — Deliver the full world/environment thesis

Candidate classes:

```text
Worldstack London world slice from mixed real-world evidence
large fictional open-world region with modular + procedural production
historical / contemporary reconstruction with uncertainty, provenance and selective fidelity
```

Across all examples cover:

```text
real vs fictional worlds
urban vs natural environments
2D plans / blockouts / procedural / production representation
maps / images / scans / written briefs
modular and procedural production
multi-scale composition
world-state representation
asset handoffs
streaming/runtime constraints
preservation and repair
Extension Packs
legal provenance
cross-domain integration
```

Every primary example must include a complete copyable generation prompt.

**Exit:** the 15 examples demonstrate complementary environment-production capability rather than fifteen city scenes.

---

# 20. Stage 14 — Design Worldstack and Independent Canonical Stress Tests

## Stress Test A — Worldstack real-world systems representation

Use a recognisable London world slice or equivalent Worldstack Delivery to test:

```text
map / open-data ingestion
source provenance
city breadth before fidelity
stable spatial contracts
world-state-to-representation mapping
multiple system inputs
modular / procedural production
selective fidelity promotion
Production Skills handoffs
Pactwright compatibility
model replacement without unnecessary environment rewrite
```

Important adversarial cases:

```text
simulation state changes but representation fails to update
representation implies facts not present in the model
real-world source disagreement is hidden
map alignment error propagates into production assets
hero-detail work is authorised before world connectivity works
legal/source restriction is lost during asset handoff
procedural regeneration destroys approved local edits
```

## Stress Test B — Independent fictional world

Use a fictional environment without Worldstack simulation dependency to prove the project remains generally reusable.

The fixture should test:

```text
written / concept-art brief
world structure
modular kit planning
procedural variation
spatial storytelling
Game Development handoffs
3D asset handoffs
runtime constraints
selective hero treatment
repair of one failing area without broad regeneration
```

This fixture prevents Worldstack's model/state architecture from becoming an accidental universal contract for the Production Skills family.

**Exit:** the architecture works both with a simulation-driven real-world consumer and an independently authored fictional world.

---

# 21. Stage 15 — Design Evals, Benchmarks and Regression Fixtures

Separate evaluation layers.

### Deterministic repository / artefact validation

Check skill self-containment, required spatial metadata, source/provenance references, world hierarchy validity, pack structure, exact prompts and installation integrity.

### Spatial correctness

Evaluate applicable dimensions such as:

```text
scale
coordinate alignment
topology
adjacency
connectivity
circulation
route continuity
interior/exterior relationship
terrain/building intersection
partition consistency
```

### Reference and reconstruction quality

Evaluate:

```text
source traceability
measured vs inferred distinction
approximation disclosure
landmark / footprint / network fidelity where required
source-date / freshness relevance
legal usage constraints preserved
```

### Modular / procedural quality

Evaluate:

```text
kit coverage
snapping / compatibility
rule consistency
variation
visible repetition
seed reproducibility
constraint adherence
manual override preservation
regeneration scope
```

### Environment composition quality

Keep dimensions separate:

```text
spatial hierarchy
landmark clarity
composition
coherence
density
silhouette
readability
visual rhythm
environmental storytelling support
world-scale consistency
```

### Runtime readiness

Evaluate environment-level requirements such as streaming boundaries, asset/instance budgets, collision/nav handoff completeness, LOD/HLOD readiness and representative performance evidence where applicable.

### World-state representation

For simulation-driven fixtures verify that:

```text
representation follows authorised state
representation does not invent unsupported state
state changes affect only intended environment surfaces
model implementation can change behind stable contracts
```

### Preservation and repair

Test that local layout, source, procedural or runtime failures can be repaired without regenerating unaffected approved districts, routes, kits or assets.

### Extension Packs

Test activation, non-activation, precedence, specialised source strategy, changed spatial/procedural behaviour, pack-aware evaluation and core-vs-pack differential behaviour.

### End to end

Use progressive examples plus both canonical stress tests.

Priority regressions include wrong scale, coordinate drift, disconnected roads, repeated procedural blocks, world-state mismatch, provenance loss, asset-handoff mismatch, streaming boundary failure, invalid regeneration scope and hero-fidelity work before structural acceptance.

**Exit:** spatial, provenance, procedural, composition and runtime failures can fail independently.

---

# 22. Stage 16 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-world-environment-production-skills-system-spec.md
├── 02-world-environment-production-skills-workflows-and-artifacts-spec.md
├── 03-world-environment-production-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-world-environment-production-customisation-packs-spec.md
└── 06-world-environment-production-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, boundaries, principles, core skills, execution architecture, fidelity/commitment policy, world-state boundary and cross-domain ownership.
2. **Workflows and Artifacts:** source ingestion, spatial model, world structure, blockout, modular/procedural production, assembly, runtime preparation, preservation, repair and handoffs.
3. **Repository and Contracts:** repository layout, SKILL.md and command contracts, references/scripts/assets, tool integration, self-containment, installation and CI.
4. **Testing and Benchmark:** spatial, provenance, procedural, composition, runtime, state-representation, preservation, pack, stress-test and installation evaluation.
5. **Customisation / Extension Packs:** pack qualification, dimensions, activation, precedence, production effects, packaging, evaluation and authoring.
6. **Catalogue:** curated coherent world-production profiles, showcases, exact prompts, pack-specific evaluation and maturity state.

Generate these specs from persisted research logs, not reconstructed conversation memory.

**Exit:** implementation can proceed without inventing environment architecture in code.

---

# 23. Stage 17 — Design Public README

Follow the proven Production Skills README structure, adapted to world/environment production:

```text
# World / Environment Production Skills
positioning
what worlds/environments can be produced
breadth / fidelity / approval control
installation
quick start with a Level 1 spatial production example
5 × 3 Learn by Producing
project structure grows with the world
core skills
Extension Packs
execution tools
world-state / representation boundary
evaluation / benchmarks
Worldstack + independent stress tests
documentation
project boundary
contributing
licence
```

A positioning direction to test:

> Build coherent worlds from evidence, constraints and spatial systems, not isolated environment assets.

Do not claim final engine, DCC or provider support until implemented and tested.

**Exit:** the public product surface is designed before full repository scaffolding.

---

# 24. Stage 18 — Cross-Project Review

Only after the domain architecture exists, compare it with Game Development, 3D Production, Deep Research, Legal, UI/UX and mature creative Production Skills.

Pay special attention to repeated but still domain-specific concepts such as:

```text
cheap representation
fidelity promotion
approved-decision preservation
source provenance
cross-domain asset requirements
smallest-scope repair
Extension Pack semantics
clean installation
```

Do not promote a universal world graph, asset graph, spatial schema or provider runtime merely because several projects use maps or scenes.

**Exit:** reusable evidence is captured without weakening world/environment terminology or boundaries.

---

# 25. Stage 19 — Scaffold Production Repository

Only now expand the Stage 0 workspace into the production scaffold justified by the six specs.

Likely baseline:

```text
world-environment-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-world-environment-production-skills-system-spec.md
│   ├── 02-world-environment-production-skills-workflows-and-artifacts-spec.md
│   ├── 03-world-environment-production-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-world-environment-production-customisation-packs-spec.md
│   ├── 06-world-environment-production-extension-pack-catalogue.md
│   └── research-logs/
├── skills/
├── examples/
├── benchmarks/
├── tests/
├── tools/                 # only when justified
├── extension-packs/       # once implemented
├── integrations/          # optional
└── .github/
```

Do not create engine-specific directory trees, a GIS database or an asset catalogue for symmetry.

**Exit:** every production directory has an immediate justified role.

---

# 26. Stage 20 — Implement and Prove Core Vertical

Implement the minimum skill and command set needed for one meaningful environment workflow.

A strong first vertical should prove:

```text
brief + references
→ spatial interpretation
→ cheap blockout
→ evaluation
→ bounded correction
→ modular / asset requirements
→ representative environment assembly
→ environment evaluation
```

Prefer a bounded environment location rather than a whole city.

**Exit:** installed core skills can produce and evaluate one realistic environment end to end.

---

# 27. Stage 21 — Expand Progressive Coverage and Extension Packs

Expand gradually to the 15 planned examples and representative packs.

For each implemented pack prove:

```text
core works without pack
core + pack changes intended production behaviour
explicit requirements and approved world decisions outrank pack defaults
pack-aware evaluation recognises intentional specialisation
pack authoring can create or revise a valid pack
```

Every implemented pack should include a realistic showcase, exact prompt, behavioural evals and core-vs-pack evidence.

**Exit:** breadth and specialisation are demonstrated rather than only specified.

---

# 28. Stage 22 — Validate Installation and Repository Integrity

Validate:

```text
repository contracts
skill self-containment
command discovery
selective installation
clean consumer-project installation
skill-local references / scripts / assets
tool prerequisites
benchmark entry points
example reproducibility
no undocumented source-checkout dependencies
```

Keep source-repository validation separate from clean external installation.

**Exit:** the repository behaves as an installable Agent Skills product.

---

# 29. Stage 23 — Optional Pactwright Integration and Registry Promotion

If useful, add:

```text
integrations/pactwright.yml
```

Worldstack's composition boundary remains the reference:

```text
Pactwright
→ selected Agent Pack
→ one or more Production Skills
→ domain production
```

Production Skills own domain workflow, artefacts, commands, tools and evaluation. Pactwright owns Contract fulfilment, lifecycle authority and Evidence. Consuming-project intelligence owns project-specific durable conclusions.

Maturity remains evidence-based:

```text
proposed
→ researching
→ specified
→ scaffolded
→ working
→ benchmarked
→ mature
```

Repository creation alone does not promote maturity.

**Exit:** Pactwright can resolve environment-production capability without becoming required by the skills repository.

---

# 30. Stage 24 — Review Shared-Abstraction Candidates

After implementation evidence exists, apply `shared-abstraction-process.md`.

Potential candidates may include:

```text
fidelity-promotion semantics
source / provenance handoff
asset-requirement handoff
spatial acceptance metadata
representation mapping
```

Do not centrally promote a universal world graph, universal asset graph, universal spatial ontology, universal procedural runtime or universal environment evaluator without repeated independent evidence.

---

# 31. World / Environment Acceptance Gates

Before maturity, demonstrate:

### Spatial production

- scale, topology and connectivity are explicitly represented where relevant;
- environment breadth can be proved before expensive detail;
- approved spatial structure survives unrelated refinements;
- source uncertainty and approximation remain visible;
- modular/procedural rules are inspectable and reproducible where required;
- manual overrides survive appropriate regeneration;
- environment-level runtime constraints are considered before final production.

### Cross-domain behaviour

- Game Development constraints can shape environment layout without moving gameplay ownership into this project;
- 3D asset requirements can be handed off and reintegrated;
- Worldstack state can be represented without becoming environment-owned truth;
- Deep Research evidence and Legal provenance constraints survive handoff;
- project-specific world knowledge does not leak into reusable core skills.

### Evaluation

- wrong scale, broken topology, provenance loss, procedural repetition, state-representation mismatch and runtime-preparation defects can fail independently;
- local repair preserves unaffected approved world work;
- known failures become regression fixtures;
- Extension Packs materially change production behaviour and are differentially evaluated;
- both Worldstack and independent-fictional stress tests pass meaningful slices.

### Product behaviour

- core works without packs;
- 15 primary progressive examples exist with exact prompts;
- six canonical spec responsibilities exist;
- public README reflects implemented capability accurately;
- skills are self-contained;
- local and clean external installation pass;
- engine/provider claims are backed by implementation evidence.

---

# 32. Initial Non-Goals

Until evidence proves otherwise, `world-environment-production-skills` is not:

- a game engine;
- a GIS platform;
- a digital-twin platform;
- a real-world simulation engine;
- a universal city generator;
- a universal procedural content engine;
- a 3D modelling replacement;
- an asset marketplace or asset database;
- a photogrammetry platform;
- a central world-state database;
- a universal spatial ontology;
- a universal scene graph;
- a provider/model router;
- a replacement for Game Development, 3D Production, Deep Research or Legal Skills;
- a Worldstack-specific implementation repository.

---

# 33. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning the project from first principles.

The resulting repository should make world/environment production:

```text
more spatially coherent
more evidence-aware
more provenance-aware
cheaper to validate before high fidelity
more modular and reproducible
more capable of mixing procedural and authored production
more disciplined about world breadth versus hero detail
more robust to changing simulation / project inputs
more precise about cross-domain handoffs
more efficient to diagnose and repair
```

while remaining a lean Agent Skills project rather than becoming a universal world-building platform before repeated production evidence justifies it.
