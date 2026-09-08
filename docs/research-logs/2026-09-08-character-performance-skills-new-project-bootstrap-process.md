# Character Performance Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.0  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `character-performance-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository** combining the responsibilities previously described as `character-production-skills` and `animation-production-skills`.

The project should help AI agents produce characters as coherent **performance systems**, not as disconnected concept art, meshes, rigs and animation clips.

The target production loop is expected to resemble:

```text
character / performance intent
→ identity, role and production constraints
→ references and character contract
→ cheapest useful character representation
→ character design / model readiness
→ rig / deformation contract
→ performance and motion requirements
→ animation source selection or creation
→ retarget / adapt / procedural integration
→ facial / body / secondary-motion integration
→ runtime / delivery performance system
→ evaluation in context
→ diagnosis
→ smallest sufficient repair
→ approved character-performance package
```

The exact workflow must be validated through professional-practice research before it becomes a skill contract.

`character-performance-skills` owns reusable production expertise for **character identity and production design, character-specific model readiness, rigging and deformation requirements, skinning, facial systems, body and facial animation, locomotion performance, retargeting, procedural and physics-assisted animation, animation-system integration, character fidelity/LOD strategy, NPC/crowd character production and character-performance evaluation**.

It does **not** own:

- generic 3D modelling craft that is reusable beyond characters, owned by 3D Production Skills;
- narrative story, dialogue writing or character arcs, owned by Narrative Production Skills;
- gameplay mechanics, movement rules, combat logic or interaction semantics, owned by Game Development Skills;
- voice recording, voice design or sound production, owned by Audio Production Skills;
- cinematography, editing or shot construction, owned by Video Production Skills;
- world/population simulation state, owned by Worldstack or the consuming simulation;
- generic software/tool engineering;
- project-specific character truth outside the consuming project;
- Pactwright lifecycle authority.

The project may request generic mesh/asset work from 3D Production Skills and then own the character-specific continuation: character identity, rig compatibility, deformation, performance, animation integration and delivery.

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

Use mature Video, Narrative and Music Production Skills as evidence for family patterns only after the character/performance discipline has been independently understood. Use 3D Production, Game Development, World / Environment, Deep Research, Legal and future Audio Production Skills as boundary references where relevant.

Use Worldstack as a major consumer and stress-test source, especially:

- `worldstack/docs/specs/05-production-skills-and-pactwright-integration.md`
- Worldstack's stated need for character and animation Production Skills;
- the Production Skills registry entry that already treats `character-performance-skills` as the combined character + animation family.

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

The bootstrap should begin from contemporary character and animation production practice rather than assuming one rig, one animation state machine or one generation provider.

### Character production and animation are coupled by deformation

A character's topology, proportions, joint placement, skinning and corrective shapes materially constrain how that character can perform. Blender's current animation documentation treats armatures, constraints, modifiers, shape keys and drivers as interacting rigging mechanisms, while shape keys remain a common mechanism for facial performance and corrective deformation.

Design consequence:

```text
character geometry
↔ rig
↔ deformation
↔ facial system
↔ performance
```

The family should not split these into independent pipelines that discover compatibility only at final integration.

References:

- https://docs.blender.org/manual/en/5.0/animation/introduction.html
- https://docs.blender.org/manual/en/5.0/animation/shape_keys/introduction.html

### Rig is an interface, not only a skeleton

A production rig includes the structures and controls through which authored, captured, procedural or runtime motion is expressed. Current Unreal Control Rig tooling supports custom controls, constraints, space switching, procedural rig behaviour and in-engine animation.

Design consequence:

The project should distinguish:

```text
deformation skeleton / joints
control rig
retargeting interface
facial controls / shapes
runtime animation system
```

rather than treating all of them as one opaque "rig".

Reference:

- https://dev.epicgames.com/documentation/unreal-engine/control-rig-in-unreal-engine

### Retargeting is a production transformation, not a free compatibility assumption

Current Unreal IK Rig/IK Retargeter tooling can transfer animation between characters with different proportions, bone names, orientations and even differing joint structures by defining retargeting chains and poses.

Design consequence:

Retargeting should preserve explicit evidence about:

```text
source character
source motion
source skeleton / rig
retarget mapping
base / retarget pose
contact constraints
proportion differences
known corrections
target character
```

and should be evaluated rather than assumed correct.

References:

- https://dev.epicgames.com/documentation/unreal-engine/ik-rig-animation-retargeting-in-unreal-engine
- https://dev.epicgames.com/documentation/unreal-engine/runtime-ik-retargeting-in-unreal-engine

### Animation clips and animation systems are different production artefacts

Current Unreal Motion Matching selects poses from animation databases at runtime based on query features rather than relying only on hand-authored state-machine transitions. Procedural IK and runtime retargeting can also alter performance during execution.

Design consequence:

```text
animation source / clip
≠ animation selection / blending system
≠ runtime procedural correction
```

The core should own a **performance-system strategy** rather than prescribe one state-machine architecture.

Reference:

- https://dev.epicgames.com/documentation/unreal-engine/motion-matching-in-unreal-engine

### Character fidelity includes both representation and animation cost

Current MetaHuman pipelines explicitly support different assembly and LOD/scalability paths, and current crowd tooling can transition between high-fidelity characters and lower-fidelity instanced skeletal representations according to distance.

Design consequence:

Character LOD is broader than mesh simplification. The project should research coordinated fidelity across:

```text
geometry
materials / hair
rig / joints
facial system
animation evaluation frequency
animation representation
secondary motion
crowd representation
```

References:

- https://dev.epicgames.com/documentation/metahuman/metahumans-in-unreal-engine
- https://dev.epicgames.com/documentation/metahuman/metahuman-5-8-release-notes-in-unreal-engine

### Animation interchange must preserve skeletal meaning

OpenUSD UsdSkel provides schemas for exchanging skeletal hierarchies, skinning and joint animation between DCC tools.

Design consequence:

Authoring rig and runtime/interchange representation may differ, but joint hierarchy, binding and animation semantics must survive the handoff.

Reference:

- https://openusd.org/release/api/usd_skel_page_front.html

### Runtime compression can alter motion quality

Current Unreal animation systems apply bone and curve compression to reduce runtime memory cost. Intricate motion may be more visibly affected than minimal motion.

Design consequence:

Animation delivery should validate both runtime cost and visible/perceptual performance fidelity rather than treating compression as a purely technical post-process.

Reference:

- https://dev.epicgames.com/documentation/unreal-engine/animation-sequences-in-unreal-engine

---

## 4. Governing Principles

Retain the Production Skills family principles and specialise them for character performance.

### Character identity before production detail

Resolve what makes the character recognisable and production-relevant before expensive mesh, grooming or performance work:

```text
role / function
identity
silhouette
proportions
age / physical characteristics where relevant
costume / equipment language
face / expression requirements
movement vocabulary
performance range
camera / viewing conditions
runtime / crowd role
interaction / gameplay constraints
voice / lip-sync requirements
source / legal constraints
```

### Cheapest useful character representation

Use the cheapest representation capable of answering the current question:

```text
written character brief
→ reference / design sheet
→ silhouette / proportion blockout
→ proxy character
→ deformation / rig proof
→ animation test
→ representative performance slice
→ production character
→ selective hero fidelity
```

Do not author high-detail hair, pores or secondary motion to discover that silhouette, proportion or locomotion intent is wrong.

### Identity, deformation and performance must remain traceable

Preserve a chain such as:

```text
character intent
→ design decision
→ character geometry / proportions
→ rig / deformation requirement
→ performance requirement
→ animation / runtime expression
→ observed result
```

A performance fix should not silently rewrite identity-defining character work.

### Character-specific production and generic 3D craft are separate

3D Production Skills may execute generic mesh, material or asset construction. Character Performance Skills owns whether that geometry satisfies character identity, deformation, rigging, facial, performance and character-fidelity requirements.

### Rigging is a production contract

A rig should expose the controls, joint/deformation structure, retargeting semantics and runtime data required by its consumers. It is not merely a hierarchy of bones.

### Performance intent before motion quantity

More animation clips do not automatically improve a character. Motion should serve:

```text
role
emotion
personality
physicality
gameplay readability
camera needs
interaction context
```

### Captured or generated motion is source material, not final authority

Motion capture, video-to-motion, text-to-motion and generative animation should be evaluated for body mechanics, contacts, timing, characterisation, continuity and target-rig compatibility before acceptance.

### Retargeting preserves intent, not only joint transforms

Retargeted performance should be checked for:

```text
contacts
balance
reach
gaze
pose silhouette
timing
foot sliding
hand placement
proportion-induced distortion
character-specific physicality
```

### Body, face and voice are coordinated but separately owned

Character Performance Skills may own facial rigging, lip-sync integration and facial animation. Audio Production Skills owns voice/audio generation and recording. Narrative Production Skills owns dialogue/performance intent. Their outputs must coordinate without collapsing ownership.

### Animation source and runtime system are separate

The same performance source may be used by clips, blend trees, state machines, motion matching, procedural controllers or simulation-driven systems. Choose according to the production requirement.

### Character fidelity is multi-dimensional

Promote or reduce fidelity deliberately across:

```text
mesh
materials
hair / groom
rig complexity
skin deformation
facial controls
animation source complexity
animation update rate
secondary physics
crowd representation
```

Do not treat `character LOD` as mesh LOD only.

### Preserve approved performance work

Accepted character identity, proportions, rig interfaces, retarget mappings, poses, animation timing, contacts, expression beats and motion signatures should survive unrelated refinements.

### Correct the smallest responsible layer

Examples:

```text
character no longer reads as intended
→ design / proportions / presentation

elbow collapse
→ topology / skinning / corrective deformation

foot sliding after retarget
→ retarget mapping / pose / IK correction

wrong emotional beat
→ performance / animation, not mesh

poor lip sync
→ phoneme / facial animation / timing or audio handoff

crowd cost too high
→ character fidelity / animation-system strategy

movement feels unresponsive
→ Game Development mechanics or animation system depending on cause

voice does not fit character
→ Audio / Narrative handoff, not body animation
```

### Technical validity and performance quality are separate

A rig can be structurally valid while producing poor acting or locomotion. An expressive animation can still violate contacts, runtime budgets or gameplay readability. Evaluation must preserve both.

### Provenance survives the character pipeline

Reference images, scans, body/face data, motion capture, voice-derived performance and third-party animation libraries may carry consent, privacy, copyright, licence or publicity constraints. Legal Skills owns legal interpretation; Character Performance Skills must preserve source and usage constraints.

---

# 5. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Domain Goal and Adjacent Boundaries
    ↓
2. Research Professional Character and Animation Production Practice
    ↓
3. Define Character Contract, Identity and Representation Model
    ↓
4. Define Rig, Skinning, Deformation and Facial-System Model
    ↓
5. Define Performance, Motion and Animation-Source Model
    ↓
6. Define Retargeting, Procedural Animation and Runtime Performance Systems
    ↓
7. Define Character Fidelity, Crowd and Runtime Delivery Strategy
    ↓
8. Define Interchange, Provenance and Cross-Domain Handoffs
    ↓
9. Research AI Skills, DCCs, Mocap and Character/Animation Tools
    ↓
10. Choose Execution Layer and Tool Boundaries
    ↓
11. Gap Analysis + Over-Engineering Guardrails
    ↓
12. Design Core Skills and Commands
    ↓
13. Design Extension Packs and Pack Authoring
    ↓
14. Design Progressive Examples
    ↓
15. Design Worldstack + Independent Canonical Stress Tests
    ↓
16. Design Evals, Benchmarks and Regression Fixtures
    ↓
17. Generate Six Canonical Specs
    ↓
18. Design Public README
    ↓
19. Cross-Project Review
    ↓
20. Scaffold Production Repository
    ↓
21. Implement and Prove Core Vertical
    ↓
22. Expand Progressive Coverage and Extension Packs
    ↓
23. Validate Installation and Repository Integrity
    ↓
24. Optional Pactwright Integration + Registry Promotion
    ↓
25. Review Shared-Abstraction Candidates
    ↓
MATURE CHARACTER PERFORMANCE SKILLS PROJECT
```

The Stage 0 repository is a bootstrap workspace, not the production scaffold created at Stage 20.

---

# 6. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/character-performance-skills` before substantive bootstrap research begins.

Initial structure:

```text
character-performance-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-character-performance-skills-new-project-bootstrap-process.md
```

Do not create `skills/`, `examples/`, `benchmarks/`, `extension-packs/`, tools, CI or package metadata until later stages justify them.

Every substantive stage should persist detailed findings under `docs/research-logs/`. Conversation should carry decisions and concise summaries rather than becoming the durable research store.

Creating this repository does **not** make the project `scaffolded`.

**Exit:** the workspace exists and later stages can operate from durable research files.

---

# 7. Stage 1 — Define Domain Goal and Adjacent Boundaries

Resolve ownership across:

```text
character design / identity
character model readiness
character-specific topology requirements
rigging
skinning / weights
corrective deformation
facial rigging / blend shapes
locomotion performance
body animation
facial animation
retargeting
procedural / IK animation
physics-assisted animation
animation systems
NPC / crowd character production
character fidelity / LOD
runtime performance delivery
animation evaluation
```

Explicitly define boundaries with:

```text
3D Production Skills
Narrative Production Skills
Game Development Skills
World / Environment Production Skills
Audio Production Skills
Video Production Skills
Deep Research Skills
Legal Skills
Software Engineering Skills
QA / Evaluation Skills
Pactwright
```

Key questions:

- How much character modelling belongs here versus generic 3D Production?
- Does hair/groom production remain character-owned or become a specialist 3D/material capability?
- Does clothing production remain character-owned when it affects deformation and performance?
- Where do authored animation, procedural animation and gameplay movement systems meet?
- Does facial performance belong fully here while voice remains Audio-owned?
- How should hero, gameplay NPC and crowd characters share one production model without forcing identical fidelity?

**Exit:** a defensible combined character + animation boundary exists before skill design.

---

# 8. Stage 2 — Research Professional Character and Animation Production Practice

Study complementary disciplines rather than one character-generation platform:

```text
character design
character modelling / sculpting
character topology / retopology
rigging
skinning / deformation
facial rigging
blend-shape / corrective systems
hair / groom / clothing integration
keyframe animation
motion capture
performance capture
facial capture
locomotion animation
combat / action animation
creature animation
retargeting
procedural / IK animation
physics-assisted animation
motion matching / data-driven animation
crowd animation
cinematic character performance
real-time character optimisation
animation editing / polishing
animation technical art
```

Capture:

```text
roles and terminology
character briefs / model sheets
approval points
rig/deformation test practices
motion / acting references
animation blocking / spline / polish equivalents
mocap cleanup
contact and root-motion treatment
facial/body coordination
retargeting
runtime integration
character / animation LOD
common failures
repair scopes
quality criteria
handoffs
```

Do not import one studio's skeleton, naming scheme, facial standard or state-machine architecture as universal.

**Exit:** the production model is grounded in professional character and animation practice rather than current generator features.

---

# 9. Stage 3 — Define Character Contract, Identity and Representation Model

Define the smallest useful character contract before production.

Candidate fields:

```text
character identity / role
source narrative / gameplay requirements
body proportions
silhouette
face / expression range
age / physicality where relevant
costume / equipment
hand / foot interaction needs
movement vocabulary
performance range
voice / lip-sync requirements
camera / viewing distance
runtime role
crowd / hero tier
customisation / variant requirements
source / provenance constraints
acceptance criteria
```

Representations to research:

```text
character brief
reference / model sheet
silhouette / proportion sheet
proxy mesh
production mesh
rig / deformation proof
facial-expression proof
movement / acting proof
runtime character
crowd / reduced-fidelity variant
```

Not every character needs every stage.

**Exit:** character identity and production requirements are explicit before expensive model/rig/animation work.

---

# 10. Stage 4 — Define Rig, Skinning, Deformation and Facial-System Model

Research the minimum reusable distinction among:

```text
deformation skeleton
control rig
IK/FK systems
constraints
space switching
skin weights
corrective shapes
muscle / deformation systems
facial joints
blend shapes / morph targets
facial control rig
phoneme / viseme controls
gaze / eye controls
retarget interface
runtime skeleton
```

Define rig/deformation contracts for:

```text
joint hierarchy / naming where relevant
rest / reference pose
control semantics
range limits
contact points
root motion
scale / proportion assumptions
deformation quality targets
facial-expression range
corrective behaviour
retarget chains
runtime/export constraints
```

Preserve character-specific identity while allowing generic 3D Production to supply or repair underlying geometry when appropriate.

**Exit:** a performance source can be authored or retargeted against an explicit rig/deformation interface rather than an assumed skeleton.

---

# 11. Stage 5 — Define Performance, Motion and Animation-Source Model

Research different performance sources:

```text
keyframe animation
motion capture
performance capture
facial capture
video-to-motion
text-to-motion / generated motion
animation libraries
pose libraries
procedural motion
physics / simulation
runtime inverse kinematics
```

For each source preserve, where relevant:

```text
source identity / actor / performer
capture / generation method
frame rate / timebase
root-motion semantics
coordinate / skeleton assumptions
contact expectations
performance intent
legal / consent / licence constraints
cleanup status
known artefacts
retarget status
```

Define performance artefacts such as:

```text
performance brief
pose / acting reference
animation blocking
animation clip / take
contact map
facial performance
animation edit / polish pass
performance notes
approved motion signature
```

The project should distinguish physical correctness from characterisation. A mechanically plausible walk can still be wrong for the character.

**Exit:** motion sources can be selected and evaluated according to performance need rather than provider convenience.

---

# 12. Stage 6 — Define Retargeting, Procedural Animation and Runtime Performance Systems

Research:

```text
skeleton-to-skeleton retargeting
chain-based retargeting
retarget poses
IK correction
contact preservation
root-motion adaptation
proportion-aware motion adjustment
runtime retargeting
animation state machines
blend spaces / blend trees
motion matching
pose search
procedural locomotion
warping / motion warping
look-at / gaze
hand / foot IK
ragdoll / physical animation
secondary physics
animation layers
additives
runtime facial systems
```

Do not prescribe one runtime architecture.

Define when the owning artefact is:

```text
animation clip
retarget configuration
animation database
blend/state logic
procedural controller
physics configuration
runtime performance graph
```

and what part belongs to Game Development or Software Engineering when the issue is gameplay/control logic rather than character performance.

**Exit:** character motion can survive different runtime strategies without confusing animation data with animation-system logic.

---

# 13. Stage 7 — Define Character Fidelity, Crowd and Runtime Delivery Strategy

Research coordinated fidelity across:

```text
body mesh
face mesh
materials / textures
hair / groom
clothing
rig joint count
skin/deformation complexity
facial rig complexity
blend-shape set
animation clip/database size
animation compression
animation update rate
procedural solvers
secondary physics
crowd representation
shadow / visibility representation
```

Candidate production tiers to investigate:

```text
hero cinematic
hero gameplay
standard gameplay NPC
background NPC
crowd / instanced representation
very distant / proxy representation
```

These are not mandatory fixed tiers.

Define how identity and recognisable motion survive fidelity reduction.

Do not assume a mesh LOD chain alone solves character scalability.

**Exit:** the project can choose a character-performance fidelity strategy according to camera, gameplay and population requirements.

---

# 14. Stage 8 — Define Interchange, Provenance and Cross-Domain Handoffs

Research interchange needs across:

```text
USD / UsdSkel
FBX
glTF / GLB where suitable
Alembic / caches
native DCC files
engine-native character assets
motion / mocap formats
facial-animation formats / curves
```

A character-performance handoff may include:

```text
character identity/version
mesh / material references
skeleton / joint hierarchy
rest pose
skin binding
control / retarget rig references
facial shape/control map
animation source
root-motion semantics
frame rate / timebase
contact metadata
variant / fidelity tier
provenance / consent / licence
validation evidence
```

Cross-domain examples:

```text
Narrative
→ character / emotional / dialogue intent
→ Character Performance
→ embodied character + performance
```

```text
3D Production
→ generic character mesh / garments / accessories
→ Character Performance
→ rig/deformation/performance-ready character
```

```text
Game Development
→ gameplay actions / locomotion / interaction contracts
→ Character Performance
→ animation sources + runtime performance configuration
```

```text
Audio Production
→ voice performance / dialogue audio
→ Character Performance
→ lip-sync / facial-body integration
```

```text
Worldstack
→ population / NPC state and roles
→ Character Performance
→ visual/performance representation tiers
```

Worldstack remains owner of population or agent state.

**Exit:** character and performance data can move across tools/domains without losing identity, deformation, timing, source or ownership semantics.

---

# 15. Stage 9 — Research AI Skills, DCCs, Mocap and Character/Animation Tools

Research capabilities rather than brands alone.

Categories:

```text
character / animation Agent Skills
character concept / turnaround generation
3D character generators
body / face reconstruction
rigging automation
skin-weight automation
facial-rig generation
blend-shape generation
Blender / Maya / Houdini character automation
Unreal Control Rig / IK Rig / MetaHuman tooling
Unity character / animation tooling
motion capture systems
video-to-motion
facial / performance capture
text-to-motion / generative animation
animation retargeting
mocap cleanup
motion editing
motion matching / pose search
procedural animation
physical animation
crowd character generation
animation compression / optimisation
animation validation / foot-slide detection
USD / skeletal interchange tooling
```

Evaluate:

```text
capability
licence / commercial constraints
performer consent / data restrictions
output rights
maturity
automation surface
determinism
editability
character fidelity
rig compatibility
retarget quality
facial quality
contact quality
runtime suitability
provider coupling
cost / latency
supported formats
composability
maintenance
```

Classify candidates as `USE`, `ADAPT`, `REFERENCE` or `REJECT`.

**Exit:** the project knows which low-level creation, rigging, capture and animation operations should be delegated to existing tools.

---

# 16. Stage 10 — Choose Execution Layer and Tool Boundaries

Character Performance Skills should own decisions such as:

```text
character contract
identity / representation strategy
rig/deformation requirements
performance brief
motion-source selection
retarget strategy
facial/body integration
runtime animation-system requirements
character-performance fidelity strategy
quality criteria
repair scope
cross-domain handoff
```

Existing tools should execute, where suitable:

```text
mesh/sculpt editing
rig generation
skin weighting
blend-shape creation
capture
motion generation
curve/key editing
retarget execution
IK solving
physics simulation
animation compression
runtime import
turntable / playblast / capture
```

Do not build a universal character DCC runtime, mocap platform or provider router before repeated evidence requires one.

**Exit:** tools/providers can change without redesigning reusable character-performance intelligence.

---

# 17. Stage 11 — Gap Analysis and Over-Engineering Guardrails

Test specifically for gaps in:

```text
character brief-to-production translation
identity preservation across fidelity
character-specific mesh/rig handoff
rig/deformation quality reasoning
performance-intent traceability
motion-source selection
retarget diagnosis
body/facial coordination
contact / foot-slide evaluation
procedural-vs-authored performance strategy
character/animation LOD
crowd scaling
animation-system evaluation
smallest-scope performance repair
provenance / performer consent continuity
```

Defer unless proven necessary:

```text
custom character generator
custom rigging DCC
custom mocap system
custom facial solver
universal skeleton
universal control rig
universal retarget graph
universal animation runtime
universal motion-matching engine
universal crowd simulator
universal character database
provider-neutral motion-generation API
one universal character/performance quality score
```

**Exit:** native skills address production-intelligence gaps rather than rebuilding animation infrastructure.

---

# 18. Stage 12 — Design Core Skills and Commands

Lean starting hypothesis:

```text
character-performance
character-performance-evaluate
character-performance-pack-create
```

Research may justify separating character creation and animation into independently installable skills **only if** their contracts remain coherent and the split improves independent installation/evaluation without recreating the handoff failure this combined family is intended to solve.

Possible production commands:

```text
frame-character
ingest-character-references
define-character-contract
choose-character-representation
prepare-character-model
define-rig-contract
rig-character
skin-and-deform
prepare-facial-system
define-performance-brief
select-motion-source
author-animation
clean-motion
retarget-animation
integrate-facial-performance
build-locomotion-performance
build-procedural-performance
configure-runtime-animation
build-character-fidelity-variants
package-character-performance
repair-character-performance
```

Possible evaluation commands:

```text
audit-character-identity
audit-proportions
audit-rig
audit-skinning
audit-deformation
audit-facial-range
audit-pose-and-silhouette
audit-body-mechanics
audit-contacts
audit-retargeting
audit-locomotion
audit-performance-intent
audit-lip-sync
audit-runtime-animation
audit-character-fidelity
audit-provenance
audit-cross-domain-contract
verify-preservation
diagnose-character-performance-failure
```

Retain commands only when they improve isolated evaluation, reuse, composition, diagnosis, targeted repair or benchmark precision.

**Exit:** every core skill and command has a coherent character-performance responsibility.

---

# 19. Stage 13 — Design Extension Packs and Pack Authoring

Extension Packs should encode coherent reusable **character-performance production profiles**, not merely species, costume style, engine or animation technique.

Candidate profiles to research:

```text
hero-real-time-humanoid
cinematic-character-performance
large-scale-background-crowd
stylised-game-character
creature-locomotion-and-performance
mocap-to-gameplay-character
procedural-npc-locomotion
facial-dialogue-performance
```

A valid pack may alter:

```text
character brief requirements
identity / proportion priorities
rig / deformation expectations
facial system
motion-source strategy
retarget requirements
performance grammar
runtime animation strategy
fidelity / crowd strategy
technical budgets
evaluation criteria
```

`MetaHuman`, `Blender`, `Maya`, `Unreal`, `Unity`, a mocap vendor or a generation provider should normally remain execution configuration rather than an Extension Pack unless it materially changes reusable production behaviour.

Pack precedence should normally be:

```text
explicit project / character requirements
→ approved character identity, rig and performance decisions
→ selected Character Performance Extension Pack
→ core Character Performance defaults
```

Pack authoring should inspect the catalogue, justify the reusable production grammar, define changed core behaviour, create a showcase with exact prompt, add behavioural/negative evals, compare core vs core+pack and validate self-containment.

**Exit:** the project can distinguish a reusable performance specialisation from an engine preset, motion library or visual-style label.

---

# 20. Stage 14 — Design Progressive Examples

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Select final examples through capability coverage rather than intuition.

### Level 1 — Prove one bounded character/performance responsibility

Candidate classes:

```text
character silhouette / proportion proof from a brief
simple rig + deformation proof for a stylised character
single locomotion or facial-expression performance test
```

### Level 2 — Produce one complete performance-ready character task

Candidate classes:

```text
rig and animate a gameplay-ready humanoid locomotion set
create a dialogue facial-performance setup from provided audio
retarget a motion library onto a differently proportioned character
```

### Level 3 — Produce one coherent character-performance system

Candidate classes:

```text
hero NPC with identity, rig, locomotion, facial and interaction-ready animation
stylised creature with custom locomotion and procedural grounding
small reusable NPC archetype family sharing rigs/motion where justified
```

### Level 4 — Handle scale, runtime systems and repair

Candidate classes:

```text
crowd character set with coordinated visual + animation fidelity tiers
motion-matching locomotion dataset and runtime performance configuration
broken production character requiring bounded topology/rig/retarget/facial repair
```

### Level 5 — Deliver the full character-performance thesis

Candidate classes:

```text
Worldstack hero NPC + population variants spanning close-up to crowd representation
cinematic-to-gameplay character sharing identity but different rig/performance delivery paths
large character family with reusable retargeting, procedural locomotion and authored hero performances
```

Across all examples cover:

```text
hero vs crowd
humanoid vs non-humanoid
realistic vs stylised
body vs face
keyframe vs capture vs generated/procedural motion
rigging / skinning / deformation
retargeting
locomotion
acting / dialogue
runtime animation systems
physics / IK
character-performance LOD
voice handoff
3D handoff
Narrative handoff
Game Development handoff
Worldstack population representation
provenance / consent
preservation and targeted repair
Extension Packs
```

Every primary example must include a complete copyable generation prompt.

**Exit:** the 15 examples demonstrate complementary character/performance capability rather than fifteen humanoid animation clips.

---

# 21. Stage 15 — Design Worldstack and Independent Canonical Stress Tests

## Stress Test A — Worldstack population + hero NPC performance

Use Worldstack to test both systemic population representation and an individually important character.

The fixture should exercise:

```text
Worldstack-owned population / NPC state
→ character archetype requirements
→ identity-preserving variants
→ close / medium / distant fidelity tiers
→ shared or retargeted locomotion
→ crowd animation strategy
→ one hero NPC with higher-fidelity body/facial performance
→ state-driven performance changes without state ownership moving into Character Performance
```

Adversarial cases:

```text
crowd optimisation destroys identity categories
Worldstack state is invented rather than represented
retargeting creates foot sliding / reach failures
hero animation is used for thousands of NPCs without runtime strategy
mesh LOD changes but rig/animation cost remains uncontrolled
procedural regeneration discards approved hero performance
source/performer licence or consent is lost in derived motion
```

## Stress Test B — Independent authored character performance

Use a non-Worldstack character requiring strong identity and performance, such as a stylised game hero or cinematic character.

The fixture should test:

```text
Narrative / design brief
→ character contract
→ model/rig readiness
→ body + facial performance
→ one captured/generated source plus authored correction
→ retarget or adaptation where appropriate
→ runtime or cinematic delivery
→ independent evaluation
→ targeted repair
```

This prevents Worldstack's NPC/crowd requirements from becoming accidental universal contracts for all character production.

**Exit:** the architecture works both for population-scale simulation representation and independently authored expressive characters.

---

# 22. Stage 16 — Design Evals, Benchmarks and Regression Fixtures

Separate evaluation layers.

### Deterministic repository / artefact validation

Check skill self-containment, character-contract completeness, source/provenance records, rig/animation metadata, pack structure, exact prompts and installation integrity.

### Character identity and model readiness

Evaluate applicable dimensions:

```text
silhouette
proportions
recognisability
model/reference consistency
costume/equipment continuity
hand/foot/face readiness
required articulation
runtime tier suitability
```

### Rigging, skinning and deformation

Evaluate:

```text
joint hierarchy / orientation where relevant
control usability
range of motion
skin-weight continuity
volume preservation
joint collapse
corrective shapes
facial range
asymmetry support where required
extreme-pose behaviour
```

### Motion and body mechanics

Evaluate independently:

```text
balance
weight
centre-of-mass plausibility
contacts
foot sliding
hand placement
timing
spacing
arcs
pose readability
root motion
locomotion continuity
```

### Performance quality

Keep dimensions separate:

```text
characterisation
intent / emotion
physicality
rhythm
specificity
appeal / readability
gaze
facial/body coherence
reaction timing
performance continuity
```

### Retargeting quality

Evaluate:

```text
pose fidelity
contacts
proportion adaptation
limb reach
root motion
orientation
twist / deformation
foot and hand placement
character-specific motion signature
```

### Facial / dialogue evaluation

Where applicable test:

```text
phoneme / viseme timing
expression range
eye / brow coordination
gaze
jaw/lip deformation
facial asymmetry
body/facial beat alignment
voice/facial synchronisation
```

### Runtime animation-system quality

Evaluate suitable concerns such as:

```text
responsiveness
transition quality
pose selection
animation coverage
repetition
warping / procedural correction
contact stability
runtime cost
compression artefacts
fallback behaviour
```

### Character fidelity / crowd evaluation

Test identity continuity, visual popping, rig/animation cost changes, crowd variation, motion repetition, update strategy and appropriate hero-vs-background differentiation.

### Provenance and consent

Verify source traceability for scans, face/body data, mocap/performance capture, animation libraries and generated derivatives.

### Preservation and repair

Test that a rig, skinning, retarget, facial or clip defect can be repaired without replacing unaffected approved identity or performance work.

### Extension Packs

Test activation, non-activation, precedence, changed rig/performance/runtime behaviour, pack-aware evaluation and core-vs-pack differential behaviour.

### End to end

Use progressive examples plus both canonical stress tests.

Priority regression fixtures include broken skin weighting, elbow/knee collapse, invalid retarget pose, foot sliding, contact penetration, root-motion mismatch, facial timing drift, character identity loss after LOD, crowd repetition, runtime transition pop, compression artefact, provenance loss and overly broad regeneration.

**Exit:** identity, deformation, motion, acting, retargeting, runtime and provenance failures can fail independently.

---

# 23. Stage 17 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-character-performance-skills-system-spec.md
├── 02-character-performance-skills-workflows-and-artifacts-spec.md
├── 03-character-performance-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-character-performance-customisation-packs-spec.md
└── 06-character-performance-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, combined character+animation boundary, principles, core skills, execution architecture, performance-system strategy, character-fidelity policy and cross-domain ownership.
2. **Workflows and Artifacts:** character contracts, representations, rig/deformation, facial systems, motion sources, retargeting, procedural/runtime animation, fidelity tiers, packaging, preservation, repair and handoffs.
3. **Repository and Contracts:** repository layout, SKILL.md/command contracts, DCC/mocap/runtime integrations, references/scripts/assets, self-containment, installation and CI.
4. **Testing and Benchmark:** identity, rig/deformation, body mechanics, performance, retargeting, facial/dialogue, runtime system, fidelity/crowd, provenance, preservation, pack, stress-test and installation evaluation.
5. **Customisation / Extension Packs:** pack qualification, dimensions, activation, precedence, production effects, packaging, evaluation and authoring.
6. **Catalogue:** curated coherent character-performance profiles, showcases, exact prompts, pack-specific evaluation and maturity state.

Generate these specs from persisted research logs, not reconstructed conversation memory.

**Exit:** implementation can proceed without inventing character-performance architecture in code.

---

# 24. Stage 18 — Design Public README

Follow the proven Production Skills README structure, adapted to character performance:

```text
# Character Performance Skills
positioning
what characters and performances can be produced
identity / fidelity / approval control
installation
quick start with a Level 1 character-performance proof
5 × 3 Learn by Producing
project structure grows with the character pipeline
core skills
Extension Packs
DCC / capture / runtime execution layer
character-to-performance handoffs
technical + performance evaluation
Worldstack + independent stress tests
documentation
project boundary
contributing
licence
```

A positioning direction to test:

> Build characters that preserve identity from design through rigging, animation and runtime performance.

Do not claim DCC, mocap, generator or runtime support until implementation and clean-install tests prove it.

**Exit:** the public product surface is designed before full production scaffolding.

---

# 25. Stage 19 — Cross-Project Review

Only after the domain architecture exists, compare it with 3D Production, Game Development, Narrative, Audio, World / Environment, Video, Deep Research, Legal and QA/Evaluation Skills.

Pay special attention to repeated but still domain-specific concepts such as:

```text
cheap representation
fidelity promotion
approved-decision preservation
source provenance
variant production
cross-domain asset/performance contracts
smallest-scope repair
Extension Pack semantics
clean installation
```

Do not promote a universal skeleton, animation graph, performance ontology, character graph, rig runtime or evaluator merely because multiple projects animate characters.

**Exit:** reusable evidence is captured without weakening character/performance-native terminology or ownership.

---

# 26. Stage 20 — Scaffold Production Repository

Only now expand the Stage 0 workspace into the production scaffold justified by the six specs.

Likely baseline:

```text
character-performance-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-character-performance-skills-system-spec.md
│   ├── 02-character-performance-skills-workflows-and-artifacts-spec.md
│   ├── 03-character-performance-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-character-performance-customisation-packs-spec.md
│   ├── 06-character-performance-extension-pack-catalogue.md
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

Do not create per-DCC, per-engine, per-skeleton or mocap-vendor directory trees merely for symmetry.

**Exit:** every production directory has an immediate justified role.

---

# 27. Stage 21 — Implement and Prove Core Vertical

Implement the minimum skill/command set needed for one realistic character-performance workflow.

A strong first vertical should prove:

```text
character brief
→ character contract
→ proxy / production-ready input character
→ rig/deformation proof
→ one body performance
→ retarget or authored adjustment where useful
→ facial or secondary integration where relevant
→ runtime/delivery package
→ independent evaluation
→ bounded repair
```

Prefer one bounded gameplay-ready or cinematic character rather than an entire crowd system.

**Exit:** installed core skills can produce and evaluate one coherent character-performance package end to end.

---

# 28. Stage 22 — Expand Progressive Coverage and Extension Packs

Expand gradually to the 15 planned examples and representative packs.

For each implemented pack prove:

```text
core works without pack
core + pack changes intended production behaviour
explicit character requirements and approved identity/performance decisions outrank pack defaults
pack-aware evaluation recognises valid specialisation
pack authoring can create or revise a valid pack
```

Every implemented pack should include a realistic showcase, exact prompt, behavioural evals and core-vs-pack evidence.

**Exit:** breadth and specialisation are demonstrated rather than only specified.

---

# 29. Stage 23 — Validate Installation and Repository Integrity

Validate:

```text
repository contracts
skill self-containment
command discovery
selective installation
clean consumer-project installation
skill-local references / scripts / assets
DCC / mocap / runtime prerequisites
benchmark entry points
example reproducibility
no undocumented source-checkout dependencies
```

Keep source-repository validation separate from clean external installation.

**Exit:** the repository behaves as an installable Agent Skills product.

---

# 30. Stage 24 — Optional Pactwright Integration and Registry Promotion

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

Character Performance Skills own character/performance workflow, artefacts, commands, tools and evaluation. Pactwright owns Contract fulfilment, lifecycle authority and Evidence. Consuming-project intelligence owns project-specific conclusions.

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

**Exit:** Pactwright can resolve character-performance capability without becoming required by the skills repository.

---

# 31. Stage 25 — Review Shared-Abstraction Candidates

After implementation evidence exists, apply `shared-abstraction-process.md`.

Potential candidates may include:

```text
character / asset contract handoff
source / performer provenance handoff
fidelity-promotion semantics
variant / delivery metadata
performance-acceptance evidence
```

Do not centrally promote a universal character graph, universal skeleton, universal rig schema, universal animation graph, universal performance ontology or universal character evaluator without repeated independent evidence.

---

# 32. Character Performance Acceptance Gates

Before maturity, demonstrate:

### Character production

- identity, role, proportions and production context are explicit;
- cheap representations are used before expensive character detail when uncertainty is high;
- generic 3D craft and character-specific production responsibilities remain distinguishable;
- rig/deformation requirements are explicit before animation scale-up;
- body and facial performance can be coordinated without collapsing Audio/Narrative ownership;
- character identity survives appropriate fidelity reduction;
- approved character decisions survive unrelated animation refinements.

### Animation and performance

- authored, captured, generated and procedural motion are treated as distinguishable source classes;
- retarget mappings and corrections are explicit and evaluable;
- contacts, balance, root motion and locomotion continuity are testable;
- performance intent and physical mechanics can fail independently;
- animation source and runtime selection/blending system remain distinguishable;
- procedural and physics animation do not silently replace approved authored intent.

### Cross-domain behaviour

- 3D Production can provide geometry without taking character identity/performance ownership;
- Narrative can supply character/dialogue intent without owning rigging/animation;
- Game Development can supply action and locomotion contracts without owning animation craft;
- Audio can supply voice without owning facial/body animation;
- Worldstack can supply population/NPC state without Character Performance inventing simulation state;
- project-specific character knowledge does not leak into reusable core skills.

### Evaluation

- identity, rig, deformation, motion mechanics, acting, retargeting, facial performance, runtime system, fidelity/crowd and provenance can fail independently;
- local repair preserves unaffected approved character/performance work;
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

# 33. Initial Non-Goals

Until evidence proves otherwise, `character-performance-skills` is not:

- a generic 3D modelling application;
- a universal character generator;
- a mocap service;
- a universal skeleton or rig standard;
- a universal facial rig;
- a universal animation runtime;
- a game locomotion/mechanics engine;
- a crowd simulation system;
- a voice/audio production system;
- a narrative-writing system;
- a renderer or cinematography system;
- a persistent character database;
- a provider/model router;
- a Worldstack-specific NPC implementation repository.

---

# 34. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning `character-performance-skills` from first principles.

The resulting repository should make character/performance production:

```text
more identity-driven
more deformation-aware
cheaper to validate before high fidelity
more deliberate about motion sources
more reliable across retargeting and runtime boundaries
more expressive without losing technical correctness
more scalable from hero characters to crowds
more provenance-aware
more precise about cross-domain ownership
more independently testable
more efficient to diagnose and repair
```

while remaining a lean Agent Skills project rather than becoming a universal character-animation platform before repeated production evidence justifies it.
