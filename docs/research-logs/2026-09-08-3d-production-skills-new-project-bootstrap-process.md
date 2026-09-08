# 3D Production Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.0  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `3d-production-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository** for reusable 3D asset production intelligence.

The project should help AI agents produce technically valid, visually intentional and integration-ready 3D assets rather than treating 3D production as a single text-to-3D request, isolated mesh-generation step or one-DCC macro.

The target production loop is expected to resemble:

```text
asset need / production brief
→ references and constraints
→ asset contract
→ cheapest useful proxy
→ modelling / sculpt / procedural construction
→ topology / structure
→ UV / surface preparation where required
→ baking / materials / textures where required
→ runtime / delivery geometry strategy
→ technical validation
→ export / interchange
→ integration check
→ diagnosis
→ smallest sufficient repair
→ approved production asset
```

The exact workflow must be validated through professional-practice research before it becomes a skill contract.

`3d-production-skills` owns reusable production expertise for **3D asset construction, modelling, sculpt/retopology decisions, procedural geometry, topology, UV/surface preparation, material/texturing handoffs, geometry optimisation, runtime variants, interchange, asset packaging and technical/visual asset evaluation**.

It does **not** own:

- world, city, district or environment layout owned by World / Environment Production Skills;
- gameplay mechanics, traversal or encounter design owned by Game Development Skills;
- character identity, character design, rigging, acting or animation owned by Character / Animation Production Skills where those concerns are specialised;
- generic rendering/cinematography owned by Video Production Skills;
- generic software/tool engineering;
- project-specific asset truth or consuming-project state;
- Worldstack simulation models or state;
- Pactwright lifecycle authority.

The project may produce the individual runtime-ready assets, modular pieces and reusable procedural asset generators requested by adjacent Production Skills.

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

Use mature Video, Narrative and Music Production Skills as family-pattern evidence only after the 3D discipline has been independently understood. Use World / Environment, Game Development, Deep Research, Software Engineering and Legal Skills bootstraps as boundary references where relevant.

Use Worldstack as a major consumer and integration stress-test source, especially:

- `worldstack/docs/specs/05-production-skills-and-pactwright-integration.md`
- the World / Environment Production Skills bootstrap, which explicitly hands individual asset requirements to 3D Production Skills.

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

The bootstrap should begin from contemporary 3D production practice and interoperable pipeline evidence rather than provider-specific generation behaviour.

### Authoring and delivery are different concerns

The Khronos glTF specification describes glTF as an efficient runtime delivery format and explicitly distinguishes it from richer authoring formats. OpenUSD is designed for robust interchange, composition and collaborative construction of complex scenes and assets.

Design consequence:

```text
working / authoring representation
≠ interchange representation
≠ runtime / delivery asset
```

The project should preserve the distinction rather than forcing one format to serve every pipeline stage.

References:

- https://registry.khronos.org/glTF/
- https://openusd.org/

### Non-destructive composition and variants are production capabilities

OpenUSD supports composition, layers, references, payloads, variants and overrides so multiple sources can contribute to an asset or scene without destructive replacement.

Design consequence:

3D Production Skills should research how to preserve approved base geometry, materials and variants while allowing context-specific refinements rather than encouraging full regeneration.

Reference:

- https://openusd.org/dev/intro.html

### Procedural assets are editable production systems, not one-shot outputs

Houdini Digital Assets package reusable node networks with parameters, versioning and embedded dependencies. Procedural modelling workflows preserve editable construction history and repeatability.

Design consequence:

Procedural 3D work should preserve:

```text
inputs
parameters
version
seed where applicable
constraints
manual overrides
selected output
```

References:

- https://www.sidefx.com/docs/houdini/assets/intro.html
- https://www.sidefx.com/docs/houdini/assets/create.html

### Runtime geometry strategy is platform-dependent

Current Unreal Engine Nanite documentation demonstrates that some runtime paths use virtualised geometry, fine-grained streaming and automatic detail management rather than traditional hand-authored LOD chains.

Design consequence:

The core should own a **runtime geometry strategy** decision, not universally require `LOD0/LOD1/LOD2/...`.

Reference:

- https://dev.epicgames.com/documentation/en-us/unreal-engine/nanite-virtualized-geometry-in-unreal-engine

### Unit, axis, topology and export assumptions vary between tools

Current Substance 3D export documentation shows that downstream targets can require different unit scales, up axes, polygon types and formats.

Design consequence:

Export is a contract transformation that must be validated, not a final "save as" action.

Reference:

- https://helpx.adobe.com/substance-3d-modeler/desktop/export-mode/export-settings-by-application.html

### UV and surface preparation remain workflow-dependent

Modern DCCs increasingly expose UV and geometry operations procedurally, but UV layout, seams, texel strategy and baking remain production decisions whose necessity depends on material/runtime targets.

Design consequence:

The core must not assume every asset requires the same UV, bake or texturing path.

Reference:

- https://docs.blender.org/manual/en/5.2/modeling/geometry_nodes/mesh/uv/uv_unwrap.html

---

## 4. Governing Principles

Retain the Production Skills family principles and specialise them for 3D production.

### Asset contract before detail

Resolve what the asset must do before expensive modelling:

```text
purpose
scale / dimensions
usage context
camera / viewing distance
silhouette / shape language
interaction / deformation requirements
materials / surfaces
collision requirements
runtime / renderer constraints
variant requirements
source / legal constraints
handoff target
```

### Cheapest useful geometry first

Use the cheapest representation capable of resolving the current uncertainty:

```text
written asset brief
→ reference board / dimension sheet
→ primitive proxy
→ silhouette / blockout mesh
→ low-detail model
→ representative topology / surface proof
→ production geometry
→ selective high-detail / sculpt
→ runtime delivery asset
```

Do not author micro-detail to discover that proportion or silhouette is wrong.

### Shape, structure and surface are separable concerns

Model and evaluate separately where useful:

```text
proportion / silhouette
geometry construction
topology
surface parametrisation / UV
baked detail
material response
texture detail
runtime representation
```

A surface defect should not automatically trigger geometry regeneration.

### Source geometry is not automatically runtime geometry

High-resolution sculpt, CAD/scan data, procedural source and runtime mesh may all be valid representations of the same asset for different stages.

### Runtime optimisation is requirement-driven

Choose among manual LODs, virtualised geometry, mesh simplification, impostors, instancing, baked detail, meshlets or platform-specific strategies according to the actual target. Do not encode one historical optimisation method as universal law.

### Preserve approved asset work

Accepted silhouette, dimensions, topology regions, UVs, material assignments, pivots, collision, variants and authored details should survive unrelated refinements.

### Non-destructive before destructive where practical

Prefer editable modifiers, node graphs, sculpt layers, procedural construction, layered materials and variant composition while uncertainty remains high. Bake or collapse only when a downstream contract requires it.

### Procedural generation must remain inspectable

Procedural assets should retain enough information to reproduce and intentionally vary output. Random variation without controlled seeds or production constraints is insufficient.

### Interchange is a contract

Every export path should specify, where relevant:

```text
units
up / forward axis
origin / pivot
transforms
hierarchy
naming
mesh representation
normals / tangents
UV sets
material slots
texture references
colour space
animation / deformation data where applicable
collision / metadata
format / version
```

### Asset provenance survives production

Reference images, scans, CAD, third-party meshes, materials and generated content may carry licence or provenance constraints. Legal Skills owns legal interpretation; 3D Production Skills must preserve source and usage constraints in asset handoffs.

### Correct the smallest responsible layer

Examples:

```text
wrong silhouette
→ base shape / modelling

pinching deformation
→ topology

bake artefact
→ cage / normals / UV / bake settings

material mismatch
→ material / texture layer

incorrect scale in engine
→ export / unit contract

runtime cost too high
→ geometry/material/runtime strategy

missing variation
→ variant/procedural layer

world placement problem
→ World / Environment, unless asset origin/bounds are wrong
```

### Technical validity and artistic quality are separate

A watertight, correctly exported mesh can still be visually poor. A beautiful model can still be unusable at runtime. Evaluation must preserve both dimensions.

---

# 5. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Domain Goal and Adjacent Boundaries
    ↓
2. Research Professional 3D Production Practice
    ↓
3. Define Asset Contract, Scale and Representation Model
    ↓
4. Define Modelling, Sculpting, Topology and Procedural Construction Model
    ↓
5. Define UV, Baking, Materials and Surface Workflow
    ↓
6. Define Runtime Geometry, Variants and Optimisation Strategy
    ↓
7. Define Interchange, Packaging and Cross-Domain Handoffs
    ↓
8. Research AI Skills, DCCs, Generators and 3D Tools
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
MATURE 3D PRODUCTION SKILLS PROJECT
```

The Stage 0 repository is a bootstrap workspace, not the production scaffold created at Stage 19.

---

# 6. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/3d-production-skills` before substantive bootstrap research begins.

Initial structure:

```text
3d-production-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-3d-production-skills-new-project-bootstrap-process.md
```

Do not create `skills/`, `examples/`, `benchmarks/`, `extension-packs/`, tools, CI or package metadata until later stages justify them.

Every substantive stage should persist detailed findings under `docs/research-logs/`. Conversation should carry decisions and concise summaries rather than becoming the durable research store.

Creating this repository does **not** make the project `scaffolded`.

**Exit:** the workspace exists and later stages can operate from durable research files.

---

# 7. Stage 1 — Define Domain Goal and Adjacent Boundaries

Resolve ownership across:

```text
hard-surface modelling
organic modelling
sculpting
retopology
procedural geometry
UV / surface parametrisation
baking
materials / textures
asset variants
runtime geometry strategy
LOD / simplification where required
collision / bounds / pivots
asset interchange
asset technical validation
```

Explicitly define boundaries with:

```text
World / Environment Production Skills
Game Development Skills
Character Production Skills
Animation Production Skills
Video / Cinematography Skills
Deep Research Skills
Legal Skills
Software Engineering Skills
QA / Evaluation Skills
Pactwright
```

Key questions:

- Does core 3D Production include both hard-surface and organic assets?
- Where does generic organic modelling stop and character-specialist production begin?
- Does texturing/material authoring remain core, or should specialist material production become an adjacent future family?
- Which procedural geometry belongs in 3D Production versus World / Environment?
- Which collision or physics shapes are 3D asset responsibility versus Game Development?
- Which runtime optimisation decisions are asset-owned versus engine/project-owned?

**Exit:** a defensible 3D production boundary exists before skill design.

---

# 8. Stage 2 — Research Professional 3D Production Practice

Study complementary production disciplines rather than one software package:

```text
hard-surface modelling
organic modelling / sculpting
retopology
UV production
high-to-low baking
PBR material / texture production
scan / photogrammetry cleanup
CAD / industrial asset conversion
procedural modelling
modular asset production
film/VFX asset production
real-time game asset production
web/mobile/AR asset optimisation
3D printing / fabrication as a comparison domain
asset management / publishing
technical art / asset validation
```

Capture:

```text
roles and terminology
brief / reference practice
blockout / proxy stages
modelling methods
topology decisions
UV / UDIM strategies
baking
material / texture workflows
variant production
optimisation
naming / hierarchy / pivot conventions
review / approval points
interchange and publishing
common defects
repair scopes
quality criteria
```

Do not import one studio's polygon budgets, UV conventions or export format as universal rules.

**Exit:** the production model is grounded in professional 3D practice rather than current generation tools.

---

# 9. Stage 3 — Define Asset Contract, Scale and Representation Model

Define the minimum asset contract required before modelling.

Candidate fields:

```text
asset identity
purpose / consuming context
source references
dimensions / scale
coordinate / axis expectations
origin / pivot expectations
silhouette / proportion targets
required movable / deformable parts
material regions
variant requirements
expected viewing distance / camera exposure
runtime / renderer target
collision requirements
integration metadata
legal / provenance constraints
acceptance criteria
```

Define representation stages independently of any one DCC:

```text
reference / dimensions
proxy
blockout
source / editable asset
high-detail source if required
runtime / delivery representation
collision / helper representations
variants
```

Avoid forcing every asset to have every representation.

**Exit:** modelling can begin with explicit constraints and downstream expectations.

---

# 10. Stage 4 — Define Modelling, Sculpting, Topology and Procedural Construction Model

Research domain-native construction methods:

```text
box / polygon modelling
subdivision modelling
curve / surface modelling
booleans
sculpting
CAD / NURBS conversion
scan cleanup
retopology
geometry nodes / procedural networks
parametric modelling
kit-based modelling
instance / assembly modelling
```

Determine which concerns must be inspectable:

```text
silhouette
proportion
edge flow
deformation topology where applicable
support loops
normals / smoothing
manifoldness where required
open boundaries where intentional
face orientation
non-destructive modifier / node history
procedural parameters
source-to-runtime relationship
```

For procedural construction preserve:

```text
inputs
parameter ranges
seed where applicable
constraints
version
selected output
manual overrides
```

Do not make polygon count the universal quality proxy.

**Exit:** the project can choose a modelling approach according to asset use, editability and downstream requirements.

---

# 11. Stage 5 — Define UV, Baking, Materials and Surface Workflow

Research when assets require:

```text
UV unwrap
multiple UV sets
UDIMs
trim sheets
atlas workflows
procedural / triplanar mapping
vertex colours
high-to-low baking
normal / AO / curvature / position maps
PBR material channels
layered materials
material IDs / slots
texture-set authoring
colour-space handling
texture compression / resolution strategy
```

Separate:

```text
geometry defect
UV defect
bake defect
material-parameter defect
texture-art defect
renderer/integration defect
```

Investigate when material authoring should remain inside the core versus be delegated to specialist material/texturing tools or future families.

Preserve authoring sources separately from baked runtime outputs when useful.

**Exit:** surface production is requirement-driven and defects can be routed to the correct layer.

---

# 12. Stage 6 — Define Runtime Geometry, Variants and Optimisation Strategy

Do not assume traditional manual LOD chains are always required.

Research applicable strategies:

```text
manual LODs
automatic simplification
virtualised geometry
meshlets / cluster-based delivery
impostors / billboards
instancing
merged / split meshes
high-to-low normal baking
collision proxy generation
occlusion proxy geometry
platform-specific variants
material simplification
texture-resolution variants
```

Define decision factors:

```text
runtime / engine
platform
camera distance
screen size
asset count
instancing potential
memory / bandwidth
material complexity
animation / deformation
collision
streaming
build size
```

Asset variants should remain traceable to a common approved source where practical.

**Exit:** the project can choose a runtime representation strategy rather than blindly producing fixed LOD tiers.

---

# 13. Stage 7 — Define Interchange, Packaging and Cross-Domain Handoffs

Research working formats and delivery formats without selecting one universal standard.

Candidate interchange/delivery families include:

```text
USD / USDZ
FBX
glTF / GLB
Alembic
OBJ
native DCC files
engine-native asset packages
CAD interchange formats where required
```

Define an asset handoff contract covering, where relevant:

```text
units
axis / orientation
pivot / origin
frozen / retained transforms
hierarchy
mesh naming
material slots
UV sets
normals / tangents
texture references
colour spaces
variants
collision
metadata
format/version
source asset reference
provenance
validation evidence
```

Cross-domain examples:

```text
World / Environment
→ asset brief / modular-kit requirement
→ 3D Production
→ validated asset / variants
→ World / Environment assembly
```

```text
Game Development
→ gameplay / interaction / collision requirement
→ 3D Production
→ runtime asset + helper geometry
```

```text
Character Production
→ approved design / proportion requirement
→ 3D Production where generic mesh craft is delegated
→ character-specialist continuation
```

```text
Deep Research + Legal
→ references + source constraints
→ 3D Production
→ provenance-aware asset
```

**Exit:** assets can move between tools and domains without silently changing scale, structure, ownership or source provenance.

---

# 14. Stage 8 — Research AI Skills, DCCs, Generators and 3D Tools

Research capabilities rather than brands alone.

Categories:

```text
3D Agent Skills
Blender automation / Python / MCP
Houdini / Houdini Engine / HDAs
Maya / 3ds Max automation
ZBrush workflows
Substance 3D tooling
CAD / NURBS conversion tools
retopology tools
UV tools
baking tools
text/image-to-3D providers
multi-view reconstruction
photogrammetry / scan cleanup
generative materials / textures
mesh optimisation / simplification
asset validation
USD / glTF tooling
engine import / validation tooling
3D diff / review tooling
render / turntable generation
```

Evaluate:

```text
capability
licence / commercial constraints
input provenance requirements
output rights / terms
maturity
automation surface
determinism
editability
mesh/topology quality
material quality
provider coupling
cost / latency
supported formats
scale / unit behaviour
composability
maintenance
```

Classify candidates as `USE`, `ADAPT`, `REFERENCE` or `REJECT`.

**Exit:** the project knows which low-level operations should be delegated to existing DCCs and generation tools.

---

# 15. Stage 9 — Choose Execution Layer and Tool Boundaries

3D Production Skills should own production decisions such as:

```text
asset contract
representation / fidelity choice
construction strategy
topology strategy
surface / UV / bake strategy
procedural-vs-authored decision
runtime geometry strategy
variant strategy
interchange contract
quality criteria
repair scope
```

Existing tools should execute, where suitable:

```text
mesh editing
sculpting
retopology
UV unwrap
baking
material generation
texture painting
procedural node execution
mesh simplification
format conversion
rendering / turntables
engine import
geometry validation
```

Do not build a universal DCC adapter or provider router before repeated evidence requires one.

**Exit:** DCCs/providers can change without redesigning reusable 3D production intelligence.

---

# 16. Stage 10 — Gap Analysis and Over-Engineering Guardrails

Test specifically for gaps in:

```text
brief-to-asset-contract translation
cheap proxy / blockout discipline
source-to-runtime traceability
topology reasoning
surface-strategy selection
procedural editability
variant production
runtime geometry strategy
cross-DCC interchange
asset validation
smallest-scope defect repair
source/provenance continuity
cross-domain handoff quality
```

Defer unless proven necessary:

```text
custom 3D modelling application
universal scene graph
universal geometry kernel
custom renderer
custom mesh optimiser
custom UV engine
custom retopology engine
universal DCC automation runtime
universal asset database
universal material graph
universal 3D file format
provider-neutral generative-3D API
one universal 3D quality score
```

**Exit:** native skills address production-intelligence gaps rather than rebuilding DCC infrastructure.

---

# 17. Stage 11 — Design Core Skills and Commands

Lean starting hypothesis:

```text
3d-production
3d-evaluate
3d-pack-create
```

Do not fix the final skill count until research validates the boundaries.

Possible production commands:

```text
frame-asset
ingest-references
define-asset-contract
choose-representation
blockout
model
sculpt
retopologise
build-procedural-asset
prepare-uvs
bake
prepare-materials
build-runtime-variant
prepare-collision
package-asset
export-asset
repair-asset
```

Possible evaluation commands:

```text
audit-scale
audit-silhouette
audit-topology
audit-normals
audit-uvs
audit-bakes
audit-materials
audit-runtime-geometry
audit-pivot-and-transforms
audit-collision
audit-interchange
audit-provenance
audit-cross-domain-contract
verify-preservation
diagnose-3d-failure
```

Retain commands only when they improve isolated evaluation, reuse, composition, diagnosis, targeted repair or benchmark precision.

**Exit:** every core skill and command has a coherent 3D-production responsibility.

---

# 18. Stage 12 — Design Extension Packs and Pack Authoring

Extension Packs should encode coherent reusable **3D production profiles**, not merely a DCC, visual style or object category.

Candidate profiles to research:

```text
real-time-hard-surface-prop
modular-environment-kit-assets
scan-to-runtime-asset
procedural-parametric-asset
stylised-low-poly-runtime-asset
hero-cinematic-static-asset
web-mobile-optimised-asset
```

A valid pack may alter:

```text
reference requirements
construction strategy
topology expectations
UV / bake strategy
material strategy
runtime geometry strategy
variant requirements
interchange targets
technical budgets
evaluation criteria
```

`Blender`, `Houdini`, `Maya`, `Unreal` or provider names should normally remain execution configuration rather than packs unless the production grammar itself changes materially.

Pack precedence should normally be:

```text
explicit project / asset requirements
→ approved asset decisions and consuming-domain contract
→ selected 3D Extension Pack
→ core 3D Production defaults
```

Pack authoring should inspect the catalogue, justify the reusable grammar, define changed core behaviour, create a showcase with exact prompt, add behavioural/negative evals, compare core vs core+pack and validate self-containment.

**Exit:** the project can distinguish a production specialisation from a model category, style label or DCC preset.

---

# 19. Stage 13 — Design Progressive Examples

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Select final examples through capability coverage rather than intuition.

### Level 1 — Produce one bounded asset component

Candidate classes:

```text
simple hard-surface prop from dimensions
small organic/static prop
procedural configurable primitive asset
```

### Level 2 — Produce one complete production asset

Candidate classes:

```text
runtime prop with UV/material/collision contract
modular architectural piece with snapping requirements
scan-derived object cleaned and prepared for runtime
```

### Level 3 — Produce an asset family or technically richer asset

Candidate classes:

```text
modular kit family
hero hard-surface asset with high-to-low workflow
parametric asset family with controlled variants
```

### Level 4 — Handle complex integration and repair

Candidate classes:

```text
large scan/CAD asset converted for real-time use
multi-material asset with platform variants
production asset with broken topology/material/export contract requiring bounded repair
```

### Level 5 — Deliver the full 3D-production thesis

Candidate classes:

```text
Worldstack modular building/streetscape asset family handed through World/Environment
film-quality source asset with separate real-time and cinematic delivery variants
large reusable procedural asset system with authored overrides and cross-DCC interchange
```

Across all examples cover:

```text
hard-surface vs organic
manual vs procedural
source vs runtime geometry
UV / no-UV workflows
baking / non-baking workflows
materials
variants
manual LOD / virtualised geometry / other runtime strategies
scans / generated / authored sources
interchange formats
pivots / scale / hierarchy
collision
legal provenance
cross-domain handoffs
preservation and targeted repair
Extension Packs
```

Every primary example must include a complete copyable generation prompt.

**Exit:** the 15 examples demonstrate complementary 3D production capability rather than fifteen props made the same way.

---

# 20. Stage 14 — Design Worldstack and Independent Canonical Stress Tests

## Stress Test A — Worldstack modular urban asset family

Use a Worldstack/world-environment requirement for a recognisable urban slice to test:

```text
asset brief from World / Environment Production Skills
real-world reference provenance
correct real-world scale
modular building / streetscape kit
controlled variants
procedural and authored geometry
runtime representation strategy
material consistency
interchange
asset re-use across a broad city
selective hero variant
Pactwright-compatible evidence
```

Adversarial cases:

```text
asset matches image but wrong dimensions
pivot/snapping contract breaks modular assembly
source restriction lost during modelling
procedural regeneration destroys approved variant
export changes axis or scale
manual LOD assumptions conflict with target runtime
asset detail is increased before modular coverage is proven
```

## Stress Test B — Independent non-Worldstack asset pipeline

Use a production asset outside Worldstack, for example a hero prop or configurable industrial asset, to prove the family remains reusable.

The fixture should test:

```text
brief + references
proxy
manual or procedural modelling
surface workflow
runtime / delivery variants
interchange across at least two tools or consumers
technical validation
targeted repair
```

This prevents Worldstack's city/environment needs from becoming accidental universal 3D contracts.

**Exit:** the architecture works both as a supplier to Worldstack/environment production and as an independent 3D asset-production system.

---

# 21. Stage 15 — Design Evals, Benchmarks and Regression Fixtures

Separate evaluation layers.

### Deterministic repository / artefact validation

Check skill self-containment, asset-contract completeness, required references, source/provenance records, pack structure, exact prompts and installation integrity.

### Geometry correctness

Evaluate applicable dimensions:

```text
scale / dimensions
bounds
pivot / origin
transform correctness
face orientation
normals / tangents
degenerate geometry
non-manifold geometry where prohibited
open boundaries where prohibited
self-intersection where relevant
duplicate / hidden geometry
hierarchy
naming
```

### Topology and deformation suitability

Where relevant evaluate:

```text
edge flow
support structure
subdivision behaviour
deformation zones
pole placement
triangle / ngon acceptability for target
retopology fidelity
```

Do not make topology style a universal aesthetic rule when the runtime/use case does not require it.

### UV, bake and material quality

Evaluate applicable concerns:

```text
UV overlap intent
seams
packing
texel consistency
padding
bake projection
normal consistency
material-slot correctness
PBR channel validity
texture references
colour space
visible artefacts
```

### Visual / artistic quality

Keep separate dimensions such as:

```text
silhouette
proportion
shape language
surface breakup
material plausibility
reference fidelity
intentional stylisation
readability at expected viewing distance
```

### Runtime / delivery readiness

Evaluate:

```text
runtime geometry strategy appropriate to target
variant/LOD switching where applicable
memory/geometry/material budgets where supplied
collision/helper geometry
import success
scale/orientation after import
shader/material compatibility
format/version contract
```

### Procedural quality

Evaluate reproducibility, parameter validity, range safety, seed control, variation quality, override preservation and regeneration scope.

### Preservation and repair

Test that a UV, bake, material, topology or export defect can be repaired without silently replacing approved unaffected geometry or variants.

### Extension Packs

Test activation, non-activation, precedence, changed construction/surface/runtime behaviour, pack-aware evaluation and core-vs-pack differential behaviour.

### End to end

Use progressive examples plus both canonical stress tests.

Priority regression fixtures include wrong scale, flipped normals, invalid pivot, broken UVs, bake artefacts, missing texture references, topology regression, variant mismatch, export axis drift, inappropriate LOD strategy, provenance loss and overly broad regeneration.

**Exit:** technical, visual, runtime, procedural and provenance failures can fail independently.

---

# 22. Stage 16 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-3d-production-skills-system-spec.md
├── 02-3d-production-skills-workflows-and-artifacts-spec.md
├── 03-3d-production-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-3d-production-customisation-packs-spec.md
└── 06-3d-production-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, boundaries, principles, core skills, execution architecture, representation strategy, runtime-geometry policy and cross-domain ownership.
2. **Workflows and Artifacts:** asset contract, modelling/sculpt/procedural workflows, topology, UV/bake/material workflows, variants, runtime preparation, packaging, preservation, repair and handoffs.
3. **Repository and Contracts:** repository layout, SKILL.md and command contracts, DCC/tool integration, references/scripts/assets, self-containment, installation and CI.
4. **Testing and Benchmark:** geometry, topology, surface, artistic, runtime, interchange, procedural, provenance, preservation, pack, stress-test and installation evaluation.
5. **Customisation / Extension Packs:** pack qualification, dimensions, activation, precedence, production effects, packaging, evaluation and authoring.
6. **Catalogue:** curated coherent 3D production profiles, showcases, exact prompts, pack-specific evaluation and maturity state.

Generate these specs from persisted research logs, not reconstructed conversation memory.

**Exit:** implementation can proceed without inventing 3D production architecture in code.

---

# 23. Stage 17 — Design Public README

Follow the proven Production Skills README structure, adapted to 3D production:

```text
# 3D Production Skills
positioning
what 3D assets can be produced
proxy / fidelity / approval control
installation
quick start with a Level 1 asset
5 × 3 Learn by Producing
project structure grows with the asset pipeline
core skills
Extension Packs
DCC / provider execution layer
asset interchange
technical / artistic evaluation
Worldstack + independent stress tests
documentation
project boundary
contributing
licence
```

A positioning direction to test:

> Produce integration-ready 3D assets through controlled modelling, surface and runtime workflows, not isolated mesh generations.

Do not claim DCC/provider support until implementation and clean-install tests prove it.

**Exit:** the public product surface is designed before full production scaffolding.

---

# 24. Stage 18 — Cross-Project Review

Only after the domain architecture exists, compare it with World / Environment, Game Development, Character/Animation, Deep Research, Legal and mature creative Production Skills.

Pay special attention to repeated but still domain-specific concepts such as:

```text
cheap representation
fidelity promotion
approved-decision preservation
source provenance
variant production
cross-domain asset contracts
smallest-scope repair
Extension Pack semantics
clean installation
```

Do not promote a universal asset graph, material graph, scene graph, DCC runtime or evaluator merely because several domains consume 3D assets.

**Exit:** reusable evidence is captured without weakening 3D-native terminology or ownership.

---

# 25. Stage 19 — Scaffold Production Repository

Only now expand the Stage 0 workspace into the production scaffold justified by the six specs.

Likely baseline:

```text
3d-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-3d-production-skills-system-spec.md
│   ├── 02-3d-production-skills-workflows-and-artifacts-spec.md
│   ├── 03-3d-production-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-3d-production-customisation-packs-spec.md
│   ├── 06-3d-production-extension-pack-catalogue.md
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

Do not create per-DCC directory trees, asset databases or format registries merely for symmetry.

**Exit:** every production directory has an immediate justified role.

---

# 26. Stage 20 — Implement and Prove Core Vertical

Implement the minimum skill/command set needed for one realistic asset workflow.

A strong first vertical should prove:

```text
asset brief + references
→ asset contract
→ proxy / blockout
→ modelling
→ required surface preparation
→ runtime representation
→ export
→ independent technical/visual evaluation
→ bounded repair
→ successful consuming-tool import
```

Prefer a bounded static prop or modular piece rather than a hero character or entire environment.

**Exit:** installed core skills can produce and evaluate one integration-ready 3D asset end to end.

---

# 27. Stage 21 — Expand Progressive Coverage and Extension Packs

Expand gradually to the 15 planned examples and representative packs.

For each implemented pack prove:

```text
core works without pack
core + pack changes intended production behaviour
explicit asset requirements and approved decisions outrank pack defaults
pack-aware evaluation recognises valid specialisation
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
DCC/provider prerequisites
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

3D Production Skills own 3D workflow, artefacts, commands, tools and evaluation. Pactwright owns Contract fulfilment, lifecycle authority and Evidence. Consuming-project intelligence owns project-specific conclusions.

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

**Exit:** Pactwright can resolve 3D production capability without becoming required by the skills repository.

---

# 30. Stage 24 — Review Shared-Abstraction Candidates

After implementation evidence exists, apply `shared-abstraction-process.md`.

Potential candidates may include:

```text
asset-contract handoff
source / provenance handoff
representation / fidelity promotion
variant / delivery metadata
technical-acceptance evidence
```

Do not centrally promote a universal asset graph, universal geometry schema, universal scene format, universal DCC runtime, universal material model or universal 3D evaluator without repeated independent evidence.

---

# 31. 3D Production Acceptance Gates

Before maturity, demonstrate:

### Asset production

- asset purpose, scale and consuming context are explicit;
- cheap proxies are used before expensive detail when uncertainty is high;
- source/editable and runtime/delivery representations remain distinguishable;
- approved silhouette and dimensions survive unrelated refinements;
- topology/surface/runtime strategies are chosen according to need rather than dogma;
- procedural assets are reproducible and parameterised where required;
- variants remain traceable to approved source assets;
- export contracts preserve intended scale, axis, hierarchy, materials and metadata.

### Cross-domain behaviour

- World / Environment can request modular/runtime assets without transferring world-layout ownership;
- Game Development can supply interaction/collision requirements without transferring gameplay ownership;
- Deep Research evidence and Legal provenance survive into asset production;
- character/animation specialist ownership is not silently absorbed by generic 3D core;
- project-specific asset knowledge does not leak into reusable skills.

### Evaluation

- geometry, topology, UV/bake, materials, runtime strategy, interchange and visual quality can fail independently;
- local repair preserves unaffected approved asset work;
- known failures become regression fixtures;
- Extension Packs materially change production behaviour and are differentially evaluated;
- both Worldstack and independent stress tests pass meaningful slices.

### Product behaviour

- core works without packs;
- 15 primary progressive examples exist with exact prompts;
- six canonical specification responsibilities exist;
- public README reflects implemented capabilities accurately;
- skills are self-contained;
- local and clean external installation pass;
- DCC/provider/runtime claims are backed by implementation evidence.

---

# 32. Initial Non-Goals

Until evidence proves otherwise, `3d-production-skills` is not:

- a 3D modelling application;
- a DCC automation platform;
- a renderer;
- a game engine;
- an asset database or marketplace;
- a universal material system;
- a universal procedural geometry engine;
- a universal scene graph;
- a universal interchange format;
- a photogrammetry platform;
- a character-animation system;
- a world/environment layout system;
- a provider/model router;
- a Worldstack-specific implementation repository.

---

# 33. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning `3d-production-skills` from first principles.

The resulting repository should make 3D asset production:

```text
more contract-driven
cheaper to validate before detail
more editable and reproducible
more deliberate about topology and surface workflows
more adaptable to different runtime geometry strategies
more reliable across DCC and delivery boundaries
more provenance-aware
more precise about cross-domain handoffs
more independently testable
more efficient to diagnose and repair
```

while remaining a lean Agent Skills project rather than becoming a universal 3D production platform before repeated evidence justifies it.
