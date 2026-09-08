# Audio Production Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.0  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `audio-production-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository** combining the responsibilities of mature `music-production-skills` with a new `sound-production-skills` capability.

The project should help AI agents produce coherent audio systems and deliverables rather than treating music, sound effects, ambience, dialogue and runtime audio as unrelated generations.

The target production model is:

```text
music production
+
sound production
→ shared audio integration / delivery / evaluation
```

A representative production loop is expected to resemble:

```text
project / scene / experience intent
→ audio brief and functional constraints
→ music + sound responsibility map
→ cheapest useful audio representations
→ composition / sound design / recording / generation
→ selection and approved source material
→ editing / layering / timing / variation
→ adaptive / event / spatial behaviour where required
→ mix and hierarchy
→ runtime or linear integration
→ technical + perceptual evaluation
→ diagnosis
→ smallest sufficient repair
→ delivery / implementation-ready audio package
```

The exact workflow must be validated through professional-practice research before it becomes a skill contract.

`audio-production-skills` owns reusable production expertise for:

```text
music composition and arrangement
music production
sound design
Foley
ambience / environmental audio
vehicle and machinery audio
dialogue / voice production and editing
recording / source acquisition workflows
sound editing / layering
variation and anti-repetition strategies
spatial audio design
interactive / adaptive audio design
audio event / state / parameter semantics
mixing and mastering / delivery where applicable
audio technical QC
audio integration contracts
music + sound conflict resolution
audio evaluation and repair
```

It does **not** own:

- narrative/dialogue writing, owned by Narrative Production Skills;
- character facial/body animation, owned by Character Performance Skills;
- gameplay mechanics or simulation state, owned by Game Development Skills or the consuming project;
- world/environment state, owned by Worldstack or World / Environment Production Skills;
- cinematography/edit decisions, owned by Video Production Skills;
- generic middleware or engine implementation, owned by execution tooling / Software Engineering where appropriate;
- project-specific audio truth outside the consuming project;
- Pactwright lifecycle authority.

The project may produce implementation-ready audio assets and runtime-audio contracts for Wwise, FMOD, engine-native audio systems or other execution layers without becoming a replacement for those systems.

---

## 2. Music Inheritance and Migration Rule

`music-production-skills` is already a mature Production Skills project. The combined family must therefore **inherit proven Music behaviour rather than restart Music from first principles**.

Until `audio-production-skills` demonstrates equivalent or stronger evidence:

```text
music-production-skills
→ remains the canonical mature music implementation

audio-production-skills
→ is the bootstrap / proving ground for the combined Music + Sound family
```

The bootstrap must inspect and preserve, where still valid:

```text
music-compose
music-produce
music-evaluate
music-pack-author

Music's 5 × 3 progressive example structure
Music's existing benchmark architecture
Music's Extension Pack contract
Music's existing pack catalogue and showcases
Music's approval / locking / preservation semantics
Music's cheapest-adequate-representation policy
Music's targeted local repair behaviour
Music's clean-installation contract
```

Do not copy these mechanically. Record which parts are:

```text
INHERIT unchanged
ADAPT for Audio
REPLACE because evidence changed
MUSIC-SPECIFIC and retained only within the music production axis
```

A future consolidation of the mature Music implementation into `audio-production-skills` requires an explicit migration/parity gate. It must not happen merely because the combined repository exists.

---

## 3. Governing Sources

Use the current Production Skills family process as canonical:

- `production-skills/docs/bootstrap/README.md`
- `production-skills/docs/bootstrap/new-project-process.md`
- `production-skills/docs/bootstrap/domain-research-process.md`
- `production-skills/docs/bootstrap/shared-abstraction-process.md`
- `production-skills/docs/specs/01-production-skills-family-system.md`
- `production-skills/docs/specs/02-production-skills-project-contract.md`
- `production-skills/docs/specs/03-production-skills-evaluation-and-extension-packs.md`
- `production-skills/docs/specs/04-cross-domain-orchestration-and-integration.md`

Treat the current `music-production-skills` repository as the mature evidence base for the music half of the family, especially:

- `README.md`
- `docs/01-creative-skills-system-spec.md`
- `docs/02-creative-skills-workflows-and-artifacts-spec.md`
- `docs/03-creative-skills-repository-and-contracts-spec.md`
- `docs/04-testing-and-benchmark-spec.md`
- `docs/05-customisation-packs-spec.md`
- `docs/06-extension-pack-catalogue.md`

Use Worldstack as a major consuming-system and stress-test source:

- `worldstack/docs/specs/05-production-skills-and-pactwright-integration.md`

Worldstack explicitly requires both music and sound capabilities while preserving this boundary:

```text
Pactwright
→ selected Agent Pack
→ one or more Production Skills
→ domain production
```

Production Skills own their workflows, artefacts, commands, provider/tool interaction and domain evaluation. Pactwright owns Contract fulfilment, lifecycle authority and Evidence. Worldstack-specific conclusions remain project-owned.

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

## 4. Initial Domain Evidence and Boundary Hypotheses

### Music already proves the family production pattern

The mature Music project demonstrates:

```text
cheap musical representation
→ deliberate selection / approval
→ higher-fidelity production
→ independent evaluation
→ targeted local repair
```

It also separates agent behaviour, produced-artifact quality and evaluation/repair quality, and refuses to collapse music quality into one opaque score.

Design consequence:

Sound Production should be researched independently, but the combined Audio project should preserve these proven family behaviours unless sound evidence disproves them.

Reference:

- https://github.com/sb-dev/music-production-skills

### Audio source and runtime behaviour are different artefacts

Current Wwise and FMOD systems distinguish source media from events, states/switches/parameters, banks, routing, spatialisation and runtime behaviour.

Design consequence:

```text
source audio file
≠ sound event / adaptive behaviour
≠ runtime mix / rendered output
```

A high-quality WAV is not a complete game-audio implementation, and a correct event graph does not prove source quality.

References:

- https://www.audiokinetic.com/library/2024.1.2_8726/?id=conceptsandterminology.html&source=SDK
- https://www.fmod.com/docs/2.03/studio/fmod-studio-concepts.html
- https://www.fmod.com/docs/tutorials/parameters.html

### Interactive audio is parameterised behaviour

FMOD parameters and Wwise states, switches and RTPC-style controls demonstrate that audio can respond continuously or discretely to project state rather than being only triggered clips.

Design consequence:

Audio Production Skills should define reusable **audio behaviour contracts** such as:

```text
event
parameter
state
transition
variation
priority
voice policy
mix response
```

without becoming the middleware runtime that executes them.

### Spatial audio is more than stereo panning

Current Wwise Spatial Audio supports rooms, portals, diffraction, transmission, room coupling and listener-relative spatial behaviour.

Design consequence:

Environmental and spatial sound design should distinguish:

```text
source position
emitter behaviour
listener relationship
room / acoustic context
occlusion / obstruction / diffraction
reverb / wet path
spatial spread
```

rather than encoding "3D audio" as a single boolean.

Reference:

- https://www.audiokinetic.com/en/library/edge/?id=spatial_audio_roomsportals_apioverview.html&source=SDK

### Loudness is measurable but delivery targets are contextual

ITU-R BS.1770-5 defines objective programme loudness and true-peak measurement, including extended and object-based audio. EBU R 128 defines a broadcast loudness-normalisation workflow around those measurements.

Design consequence:

The project may use deterministic loudness / true-peak evidence, but must not impose one loudness target across games, film, music streaming, broadcast, mobile, installations and interactive experiences.

References:

- https://www.itu.int/rec/R-REC-BS.1770-5-202311-I
- https://tech.ebu.ch/publications/r128

### Audio memory and delivery organisation are runtime production concerns

Wwise SoundBanks and FMOD banks package events/assets for controlled runtime loading and memory use.

Design consequence:

Large interactive-audio projects need asset/bank/streaming requirements and acceptance evidence, but the core should not invent a universal bank format.

References:

- https://www.audiokinetic.com/en/library/2024.1.3_8749/?id=soundengine_banks.html&source=SDK
- https://www.fmod.com/docs/2.03/studio/fmod-studio-concepts.html

---

## 5. Governing Principles

Retain the Production Skills family principles and the proven Music principles, then specialise them for combined audio.

### Music and sound are first-class peers

Do not treat sound design as a post-processing layer under Music, or Music as merely one type of sound effect.

```text
music axis
→ composition, arrangement, musical production, adaptive score

sound axis
→ effects, Foley, ambience, dialogue/voice, acoustic/world sound

shared audio layer
→ integration, hierarchy, mix, spatial/runtime behaviour, delivery, evaluation
```

### Cheapest useful audio representation

Use the cheapest representation capable of resolving the current uncertainty:

```text
written cue / event brief
→ reference analysis
→ timing map / spotting / event list
→ placeholder sound / MIDI / synthetic proxy
→ isolated sound sketch / short music demo
→ layered source event / scene mockup
→ runtime behaviour prototype
→ representative mix / spatial prototype
→ production audio
→ final delivery / implementation package
```

Do not generate a full soundtrack or record an elaborate Foley pass to discover that the event list, timing or interaction logic is wrong.

### Functional intent before sonic polish

Resolve what the audio must communicate or do:

```text
feedback
orientation
identity
emotion
tension
rhythm
world presence
material / physical information
narrative emphasis
player information
brand identity
continuity
```

before maximising fidelity.

### Source, edit, behaviour and mix remain distinguishable

Keep separate where useful:

```text
raw / generated / recorded source
edited source asset
layered sound event
music composition / arrangement
adaptive/runtime behaviour
mix hierarchy
spatial/acoustic behaviour
delivery render / bank / package
```

A defect should be repaired at the owning layer.

### Variation is a production requirement when repetition is exposed

Repeated events may require controlled alternates, pitch/timing/level variation, granular or procedural methods, material/context variants or concurrency rules.

Randomness is not automatically quality. Variation should preserve identity and avoid perceptible mechanical repetition.

### Silence and subtraction are valid audio decisions

A coherent audio system is not one where every event has maximum density. Preserve headroom, contrast, masking control and intentional silence.

### Dialogue and voice are audio production, not writing

Audio Production may own:

```text
recording / generation execution requirements
editing
cleanup
performance take selection from an audio perspective
pronunciation / intelligibility QC
localisation asset preparation
processing
mixing
runtime dialogue assets
```

Narrative owns the words and character/dialogue intent. Character Performance owns lip-sync/facial-body performance integration.

### World state is not sound design authority

Worldstack, Game Development or another consuming system owns state such as weather, traffic, population, vehicle condition or alert level.

Audio Production maps approved state into audible representation:

```text
approved state
→ audio behaviour / soundscape mapping
```

It must not invent the underlying state.

### Spatial position and acoustic context are separate

A sound's 3D position does not by itself define occlusion, room response, diffraction, reverb, spread or listener-relative behaviour.

### Runtime implementation strategy is target-dependent

Choose between linear renders, engine-native audio, Wwise, FMOD or other execution paths according to the consuming project. The Production Skills repository owns requirements and production semantics, not one universal middleware runtime.

### Technical loudness evidence and aesthetic mix judgement are separate

Use deterministic measurements for properties such as:

```text
sample rate / format
duration
channel layout
clipping / true peak
programme loudness where applicable
silence / dropout
loop discontinuity
```

but do not treat a technically compliant file as proof of a good mix, sound design or musical production.

### Preserve approved audio work

Accepted compositions, melodies, lyrics, performances, selected sound sources, event identities, timing, sync points, loop boundaries, mix balances, spatial mappings and runtime contracts should survive unrelated refinements.

### Correct the smallest responsible layer

Examples:

```text
weak musical hook
→ composition

poor instrument balance
→ music arrangement / production / mix

impact lacks weight
→ sound source / layering / transient design

footstep repetition
→ variation / event logic

wrong material sound
→ event mapping / source selection

sound triggers at wrong game state
→ integration contract or Game Development implementation

voice unintelligible
→ dialogue edit / processing / mix

lip movement wrong but audio timing correct
→ Character Performance

ambience does not reflect rainfall state
→ audio state mapping if source state is correct; upstream model if state is wrong

spatial sound leaks through walls
→ acoustic/spatial configuration

streaming hitch caused by audio bank layout
→ runtime-audio packaging or Software Engineering depending on cause
```

### Provenance survives the audio pipeline

Recordings, sample libraries, voice performances, generated audio, third-party stems and field recordings may carry copyright, licence, consent, privacy or performer-right constraints. Legal Skills owns legal interpretation; Audio Production must preserve source and usage metadata.

---

# 6. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Combined Audio Domain and Music Migration Boundary
    ↓
2. Research Professional Sound and Audio Production Practice
    ↓
3. Reconcile Mature Music Architecture into the Combined Family
    ↓
4. Define Audio Brief, Cue/Event and Source Artifact Model
    ↓
5. Define Sound Design, Foley, Ambience and Dialogue Production Model
    ↓
6. Define Adaptive, Event, State and Variation Behaviour Model
    ↓
7. Define Spatial Audio, Acoustic Context and World-State Mapping
    ↓
8. Define Mix, Loudness, Hierarchy and Delivery Strategy
    ↓
9. Define Runtime Packaging and Cross-Domain Handoffs
    ↓
10. Research AI Skills, DAWs, Middleware, Generators and Audio Tools
    ↓
11. Choose Execution Layer and Tool Boundaries
    ↓
12. Gap Analysis + Over-Engineering Guardrails
    ↓
13. Design Core Skills and Commands
    ↓
14. Design Extension Packs and Pack Authoring
    ↓
15. Design Progressive Examples
    ↓
16. Design Music-Parity + Worldstack + Independent Stress Tests
    ↓
17. Design Evals, Benchmarks and Regression Fixtures
    ↓
18. Generate Six Canonical Specs
    ↓
19. Design Public README
    ↓
20. Cross-Project Review
    ↓
21. Scaffold Production Repository
    ↓
22. Implement and Prove Core Vertical
    ↓
23. Expand Progressive Coverage and Extension Packs
    ↓
24. Validate Music Migration / Parity
    ↓
25. Validate Installation and Repository Integrity
    ↓
26. Optional Pactwright Integration + Registry Promotion
    ↓
27. Review Shared-Abstraction Candidates
    ↓
MATURE AUDIO PRODUCTION SKILLS PROJECT
```

The Stage 0 repository is a bootstrap workspace, not the production scaffold created at Stage 21.

---

# 7. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/audio-production-skills` before substantive bootstrap research begins.

Initial structure:

```text
audio-production-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-audio-production-skills-new-project-bootstrap-process.md
```

Do not create `skills/`, `examples/`, `benchmarks/`, `extension-packs/`, middleware projects, tooling, CI or package metadata until later stages justify them.

Every substantive stage should persist detailed findings under `docs/research-logs/`. Conversation should carry decisions and concise summaries rather than becoming the durable research store.

Creating this repository does **not** make the project `scaffolded`.

**Exit:** the workspace exists and later stages can operate from durable research files.

---

# 8. Stage 1 — Define Combined Audio Domain and Music Migration Boundary

Resolve ownership across:

```text
composition
arrangement
music production
adaptive music
sound design
Foley
ambience / environmental audio
vehicle / machinery audio
dialogue / voice audio
recording / source acquisition
editing / layering
spatial audio
interactive audio behaviours
runtime event/state/parameter design
mixing / mastering
runtime packaging / delivery
audio evaluation
```

Explicitly define boundaries with:

```text
Narrative Production Skills
Video Production Skills
Game Development Skills
World / Environment Production Skills
Character Performance Skills
Software Engineering Skills
Deep Research Skills
Legal Skills
QA / Evaluation Skills
Pactwright
```

Define the migration relationship between mature `music-production-skills` and the new combined family.

Required decision record:

```text
what remains canonical in music-production-skills during bootstrap
what will eventually migrate
what needs adaptation to combined audio semantics
what should remain music-specific
how backwards-compatible skill installation is preserved or intentionally changed
what evidence is required before consolidation
```

**Exit:** a defensible combined audio boundary and migration policy exist before new skill design.

---

# 9. Stage 2 — Research Professional Sound and Audio Production Practice

Music practice is already substantially researched in the mature Music project. Stage 2 should focus new research on complementary disciplines:

```text
production sound recording
field recording
sound effects editing
sound design
Foley
ADR / dialogue editing / voice post
ambience / backgrounds
vehicle audio
weapons / impacts / physical interactions where relevant
creature / character sound
UI / notification audio
brand sonic identity
film / television sound editorial
re-recording / final mix
game audio design
interactive / adaptive audio
spatial / immersive audio
acoustic simulation as a production input
broadcast / streaming delivery
localisation audio
accessibility-related audio cues
```

For each stream capture:

```text
roles and terminology
brief / spotting practice
source acquisition
recording / generation
editing
layering
variation
sync / timing
mix hierarchy
spatialisation
runtime/event behaviour
approval points
technical delivery
common defects
repair scope
quality criteria
handoffs
```

Do not import one film, game or broadcast pipeline as the universal audio workflow.

**Exit:** Sound Production is grounded in professional practice rather than generated-audio provider features.

---

# 10. Stage 3 — Reconcile Mature Music Architecture into the Combined Family

Inspect the current Music specs, skills, examples, packs and benchmark.

For every major Music concept classify:

```text
INHERIT
ADAPT
MUSIC-SPECIFIC
DEPRECATE only with evidence
```

At minimum review:

```text
music-compose
music-produce
music-evaluate
music-pack-author
selection / approval / locking
MIDI / symbolic drafting
cheap demo-first workflow
preservation semantics
targeted section/phrase repair
native stems vs source-separated estimates
adaptive-game-score handoff
five existing music Extension Packs
15 progressive examples
benchmark taxonomy / rubrics / profiles
clean installation tests
```

The combined project must avoid regressions such as:

```text
losing composition-specific evaluation inside generic audio scoring
making music runtime-only
forcing sound-design artefacts into music schemas
replacing mature music examples with weaker generic audio examples
invalidating existing music pack semantics without reason
```

**Exit:** the combined family has an explicit inheritance map rather than a second competing Music architecture.

---

# 11. Stage 4 — Define Audio Brief, Cue/Event and Source Artifact Model

Research the minimum useful distinctions among:

```text
audio brief
music cue / composition brief
sound event brief
spotting / timing map
source recording / generated source
edited source asset
layer / component
sound event
ambience / soundscape
voice/dialogue asset
music composition / arrangement
mix / submix / bus requirement
state / parameter behaviour
spatial/acoustic requirement
delivery package
```

Candidate audio brief fields:

```text
purpose / function
consuming context
scene / world / gameplay state
audience / platform
music responsibilities
sound responsibilities
dialogue responsibilities
timing / sync
interaction / event triggers
spatial context
dynamic range / loudness context
runtime budget / memory constraints
localisation needs
source / provenance constraints
acceptance criteria
```

For every first-class artefact identify:

```text
creator
consumer
source evidence
decision state
approval semantics
runtime expression
validation method
smallest repair scope
```

**Exit:** the project can represent music, sound and shared audio integration without collapsing them into one generic `audio.wav` artefact.

---

# 12. Stage 5 — Define Sound Design, Foley, Ambience and Dialogue Production Model

Research production loops for major sound classes.

### Sound effect / designed event

```text
functional intent
→ reference / source strategy
→ source acquire / generate
→ select
→ edit / layer
→ transient / body / tail / texture design
→ controlled variation
→ event-ready assets
→ evaluate in context
```

### Foley / synchronised physical sound

```text
action / material analysis
→ spotting
→ performance / recording or source selection
→ edit / sync
→ layering
→ perspective
→ mix / integration
```

### Ambience / environmental soundscape

```text
place / state / time context
→ soundscape layers
→ foreground / background event ecology
→ loop / evolution strategy
→ state variations
→ spatial/acoustic behaviour
→ repetition evaluation
```

### Dialogue / voice audio

```text
approved text / performance intent
→ voice / performer / provider constraints
→ recording / generation
→ take selection
→ edit / cleanup
→ pronunciation / intelligibility QC
→ processing
→ localisation variants where required
→ mix / runtime asset
→ Character Performance lip-sync handoff where applicable
```

Do not make the Audio family responsible for writing dialogue or facial animation.

**Exit:** the project has sound-production workflows that can be evaluated independently from music composition.

---

# 13. Stage 6 — Define Adaptive, Event, State and Variation Behaviour Model

Research reusable interactive-audio concepts such as:

```text
event
trigger
state
switch
continuous parameter
snapshot / mix state
priority
voice / concurrency policy
random / sequence container
variation set
cooldown / repetition control
loop
transition
stinger
layer
music segment
intensity / threat / health mapping
```

Do not copy Wwise or FMOD object models as the project's universal schema. Instead derive the smallest provider-neutral production semantics that real workflows repeatedly need.

Required distinction:

```text
audio asset
≠ audio event
≠ project/game state
≠ middleware implementation
```

The consuming project owns state. Audio Production defines how that state should affect sound/music and what execution contract is required.

For adaptive music, preserve mature Music semantics around loops, layers, states, transitions and stingers.

**Exit:** interactive audio can be specified independently from a particular middleware while remaining implementable in real systems.

---

# 14. Stage 7 — Define Spatial Audio, Acoustic Context and World-State Mapping

Research:

```text
2D / 3D source positioning
listener models
attenuation
spread
orientation
doppler where relevant
occlusion / obstruction
diffraction
transmission
rooms / zones
portals
reverb / early/late reflections
indoor / outdoor transitions
environment sends
binaural / headphone rendering
speaker / surround / immersive rendering
object-based audio where relevant
```

Define an environment-audio mapping such as:

```text
approved environment/world state
→ audible condition / behaviour
→ source/event/layer requirements
→ spatial/acoustic requirements
→ runtime parameters
→ evaluation evidence
```

Worldstack example:

```text
rainfall state
→ rain intensity parameter
→ roof/street/window material layers
→ indoor/outdoor attenuation and room response
→ traffic/wet-road contribution
```

Audio Production must not invent the rainfall state itself.

**Exit:** spatial and environmental audio can represent a world coherently without absorbing world/simulation ownership.

---

# 15. Stage 8 — Define Mix, Loudness, Hierarchy and Delivery Strategy

Research shared audio hierarchy and mix concepts:

```text
source level
event level
music / dialogue / effects / ambience stems or busses
submix / bus hierarchy
ducking / sidechain
snapshots / mix states
headroom
dynamic range
frequency masking
priority / voice management
true peak
programme loudness where relevant
channel layout
stereo / surround / immersive / binaural variants
platform-specific delivery
```

Do not impose a single loudness target. Define a measurement strategy and let the use context select targets.

Preserve distinctions:

```text
music master
sound asset
runtime mix
linear programme mix
middleware bank/package
native stems
source-separated estimates
```

The combined family should explicitly evaluate music-vs-sound masking and dialogue intelligibility where those elements coexist.

**Exit:** the project can produce coherent audio hierarchy and delivery requirements without pretending all audio has one master format.

---

# 16. Stage 9 — Define Runtime Packaging and Cross-Domain Handoffs

Research runtime packaging concerns such as:

```text
asset compression
streaming vs memory load
bank / bundle organisation
localisation packages
platform variants
voice limits / priorities
preload / unload boundaries
metadata / IDs
versioning
runtime profiling
```

Define handoffs:

```text
Narrative
→ dialogue / emotional / story intent
→ Audio Production
→ voice/dialogue/music/sound assets
```

```text
Character Performance
→ timing / lip-sync / performance needs
↔ Audio Production
→ voice timing and audio assets
```

```text
Game Development
→ game state / event / interaction contracts
→ Audio Production
→ music/sound behaviour specification + assets
```

```text
World / Environment / Worldstack
→ place / material / environment / simulation state
→ Audio Production
→ soundscape / spatial mapping
```

```text
Video Production
→ locked or evolving picture/timing
→ Audio Production
→ score / dialogue / effects / final-mix components
```

```text
Software Engineering
→ middleware / engine integration implementation
← Audio Production behaviour contract
```

**Exit:** audio can move from production into linear or runtime consumers without transferring domain ownership.

---

# 17. Stage 10 — Research AI Skills, DAWs, Middleware, Generators and Audio Tools

Research capabilities rather than brands alone.

Categories:

```text
music-production Agent Skills
sound-design Agent Skills
DAW automation
REAPER / Pro Tools / Ableton / Logic automation where accessible
FFmpeg / ffprobe / SoX-style deterministic tools
Wwise / WAAPI
FMOD Studio scripting / APIs
engine-native audio tooling
field-recording / source libraries
Foley workflows
sound-effect generation providers
music generation providers
voice / speech generation providers
speech cleanup / separation
source separation
transcription / alignment
sound classification / similarity
spatial audio authoring
ambisonics / binaural tooling
loudness / true-peak analysis
loop / click detection
audio-diff / fingerprinting
middleware profiling
```

Evaluate:

```text
capability
licence / commercial constraints
source / performer rights
maturity
automation surface
determinism
editability
provider coupling
cost / latency
input/output formats
multichannel / spatial support
runtime integration
quality
composability
maintenance
```

Classify candidates as `USE`, `ADAPT`, `REFERENCE` or `REJECT`.

Preserve the mature Music decision to let execution tools/providers perform generation rather than building static model catalogues or a custom provider SDK unless new evidence requires change.

**Exit:** the project knows which operations should be delegated to existing tools.

---

# 18. Stage 11 — Choose Execution Layer and Tool Boundaries

Audio Production Skills should own decisions such as:

```text
audio responsibility map
music composition/production decisions
sound design strategy
source / recording / generation strategy
variation strategy
event / state / parameter semantics
spatial / acoustic intent
mix hierarchy
runtime packaging requirements
delivery requirements
quality criteria
repair scope
```

Existing tools should execute, where suitable:

```text
recording
synthesis / generation
sample editing
time/pitch operations
source separation
noise reduction
MIDI operations
mix processing
loudness measurement
file conversion
middleware event construction
bank building
runtime playback
profiling
```

Do not build a DAW, game-audio runtime, audio engine or universal provider router.

**Exit:** providers, DAWs and middleware can change without redesigning reusable audio-production intelligence.

---

# 19. Stage 12 — Gap Analysis and Over-Engineering Guardrails

Compare required Audio behaviour with mature Music plus available sound/audio tools.

Test particularly for gaps in:

```text
music-to-combined-audio inheritance
sound-event design reasoning
source / layer / event separation
variation / anti-repetition
Foley timing and perspective
ambience ecology
voice/dialogue production handoff
world-state-to-audio mapping
provider-neutral interactive-audio semantics
spatial/acoustic design
music/sound/dialogue mix conflict diagnosis
runtime packaging awareness
cross-domain audio handoffs
smallest-scope audio repair
provenance / voice-consent continuity
```

Defer unless proven necessary:

```text
custom DAW
custom audio engine
custom middleware
universal audio event graph
universal acoustic simulator
universal sample library
central sound-asset database
static provider/model registry
universal voice cloning system
universal loudness target
universal audio ontology
always-on runtime profiler
one universal audio-quality score
```

**Exit:** native work addresses production-intelligence gaps rather than rebuilding audio infrastructure.

---

# 20. Stage 13 — Design Core Skills and Commands

Do not start from a fixed skill count.

Research at least these hypotheses.

### Hypothesis A — Preserve mature Music skills and add Sound/shared audio

```text
music-compose
music-produce
sound-produce
audio-evaluate
audio-pack-author
```

`audio-evaluate` would need to absorb or supersede `music-evaluate` only after parity is proven.

### Hypothesis B — Preserve Music evaluation during transition

```text
music-compose
music-produce
music-evaluate
sound-produce
audio-integrate
audio-evaluate
audio-pack-author
```

This is safer for migration but may be unnecessarily fragmented at maturity.

### Hypothesis C — Unified production skill with music composition retained

```text
music-compose
audio-produce
audio-evaluate
audio-pack-author
```

Use only if one production skill can remain coherent without hiding sound/music-specific workflow differences.

Possible sound/shared commands:

```text
frame-audio
spot-audio
build-event-list
source-sound
design-sound
record-foley
edit-foley
build-ambience
produce-dialogue
build-variation-set
define-audio-behaviour
map-state-to-audio
define-spatial-audio
integrate-adaptive-music
build-mix-hierarchy
mix-audio
prepare-runtime-package
prepare-linear-delivery
repair-audio
```

Possible evaluation commands:

```text
audit-source-quality
audit-event-identity
audit-sync
audit-repetition
audit-loop
audit-dialogue-intelligibility
audit-spatial-behaviour
audit-state-mapping
audit-mix-masking
audit-loudness
audit-true-peak
audit-runtime-budget
audit-delivery
audit-provenance
verify-preservation
diagnose-audio-failure
```

Retain commands only when they improve isolated evaluation, reuse, composition, diagnosis, targeted repair or benchmark precision.

**Exit:** every skill has a coherent production responsibility and Music compatibility is explicit.

---

# 21. Stage 14 — Design Extension Packs and Pack Authoring

The mature Music pack architecture is the baseline. Do not invalidate existing coherent Music packs without evidence.

Existing Music packs to classify for the combined catalogue:

```text
intimate-singer-songwriter-single
melodic-techno-club-track
cinematic-hybrid-score
adaptive-game-score
premium-brand-music
```

Research sound-specific and combined-audio production profiles such as:

```text
open-world-environmental-audio
vehicle-audio-system
cinematic-dialogue-effects-mix
stylised-arcade-game-audio
horror-tension-audio-system
large-scale-interactive-world-audio
premium-brand-sonic-system
```

A valid Audio pack may alter:

```text
music format / grammar where relevant
sound source strategy
event taxonomy
variation rules
spatial/acoustic rules
mix hierarchy
runtime behaviour
delivery requirements
technical budgets
evaluation criteria
```

Provider, DAW or middleware names should normally remain execution configuration rather than packs.

Pack precedence should normally be:

```text
explicit project / audio requirements
→ approved / locked music, sound and integration decisions
→ selected Audio Extension Pack
→ core Audio Production defaults
```

Pack authoring should preserve the mature Music rule:

```text
inspect catalogue
→ justify reusable production grammar
→ define core behaviour changes
→ create showcase with exact prompt
→ add behavioural + negative evals
→ compare core vs core+pack
→ validate and catalogue
```

**Exit:** the combined catalogue contains coherent production specialisations rather than genre tags, sound categories or middleware presets.

---

# 22. Stage 15 — Design Progressive Examples

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Do **not** automatically add 15 new examples on top of Music's existing 15. Build a new combined capability matrix and reuse/migrate existing Music examples when they remain the strongest demonstrations.

Existing Music examples form part of the candidate pool, not dead history.

### Level 1 — Bounded audio production

Demonstrate one controlled music or sound responsibility.

Candidate classes:

```text
inherited Night Drive-style music demo
single UI/impact sound family
small environmental ambience loop with foreground events
```

### Level 2 — Selection, variation and preservation

Demonstrate alternatives, selection and multi-source control.

Candidate classes:

```text
inherited music selection/preservation example
footstep/material variation system
voice/dialogue take selection + cleanup while preserving approved text
```

### Level 3 — Complete audio responsibility

Demonstrate an end-to-end production.

Candidate classes:

```text
full music production inherited from Music
short cinematic scene with dialogue/effects/ambience/music integration
small game scene with event/state/spatial audio
```

### Level 4 — Repair, scale and adaptive behaviour

Demonstrate diagnosis and bounded correction.

Candidate classes:

```text
inherited Music local-repair case
vehicle audio system with RPM/load states and repetition constraints
large environmental soundscape with spatial/acoustic and runtime-budget defects
```

### Level 5 — Full cross-domain audio thesis

Demonstrate broad responsibility across music, sound and runtime/linear integration.

Candidate classes:

```text
Worldstack urban audio slice with music + environmental + vehicle + population sound
complete game-audio slice with adaptive score, SFX, ambience and dialogue handoffs
linear narrative sequence with score, Foley, dialogue, sound design and delivery stems
```

Across all 15 examples cover:

```text
music composition / production
sound design
Foley
ambience
voice/dialogue audio
vehicle / machinery sound
UI / feedback sound
linear vs interactive audio
adaptive music
states / parameters / transitions
variation / anti-repetition
spatial audio
world-state mapping
mix / masking / dialogue space
loudness / technical QC
runtime packaging
provenance / consent
preservation and targeted repair
Extension Packs
cross-domain handoffs
```

Every primary example must include the complete copyable generation prompt.

**Exit:** the 15-example set demonstrates the combined family without discarding the mature Music curriculum unnecessarily.

---

# 23. Stage 16 — Design Music-Parity, Worldstack and Independent Stress Tests

## Stress Test A — Mature Music parity

Select representative mature Music cases covering:

```text
composition
full production
local repair
adaptive-game-score pack
one additional contrasting pack
```

Run equivalent behaviour through the proposed combined architecture.

Fail migration if Audio:

```text
weakens Music's cheap-first workflow
loses selection / approval / locking
mutates locked musical decisions
loses targeted local repair
weakens pack fidelity
loses deterministic benchmark coverage
mislabels stems
reduces installability
```

## Stress Test B — Worldstack city audio system

Use a recognisable Worldstack city slice to test:

```text
Worldstack-owned weather / traffic / population / place state
environmental ambience
vehicle audio
crowd / human activity beds
interior / exterior transitions
rooms / portals / occlusion concepts
state-driven variation
runtime budget / priority
selective music layer where justified
Pactwright-compatible evidence
```

Adversarial cases:

```text
audio invents simulation state
rain intensity does not track approved state
ambience loops reveal obvious repetition
vehicles all share identical sound behaviour
spatial audio leaks through environment boundaries
crowd audio remains expensive at distance
music masks critical world feedback
source licence/provenance is lost
```

## Stress Test C — Independent mixed-audio production

Use a non-Worldstack fixture, such as a short game level or cinematic sequence, that requires music + sound + voice/dialogue integration.

Test:

```text
cross-domain brief
→ music/sound responsibility split
→ cheap prototypes
→ production sources
→ event/timing integration
→ mix hierarchy
→ final/runtime delivery
→ independent evaluation
→ bounded repair
```

This prevents Worldstack's simulation-driven soundscape needs from becoming the universal Audio architecture.

**Exit:** Audio preserves mature Music, works for Worldstack and works for an unrelated mixed-audio production.

---

# 24. Stage 17 — Design Evals, Benchmarks and Regression Fixtures

Reuse the mature Music benchmark principle:

> Measure the product claim at the cheapest layer capable of falsifying it.

Separate evaluation layers.

### Repository and deterministic validation

Check:

```text
skill self-containment
artifact contracts
exact prompts
pack structure
source/provenance metadata
runtime contract validity
installation integrity
```

### Source/audio-file technical QC

Use deterministic tools where applicable for:

```text
decodability
sample rate / bit depth
channel layout
duration
silence / dropout
clipping
true peak
programme loudness where relevant
DC / obvious corruption
loop boundaries / clicks
file naming / metadata
```

### Music quality

Preserve mature Music dimensions and pack-aware rubrics rather than replacing them with a generic sound score.

### Sound-design quality

Keep dimensions separate:

```text
functional fit
identity / recognisability
material / physical plausibility where intended
transient / body / tail balance
layer coherence
spectral balance
perspective
detail without clutter
variation
repetition control
context fit
```

### Foley / sync quality

Evaluate:

```text
timing
sync
material match
weight
perspective
performance consistency
coverage
unwanted repetition
```

### Dialogue / voice audio

Evaluate:

```text
intelligibility
pronunciation where required
edit continuity
noise / artefacts
performance consistency from an audio perspective
level / dialogue space
localisation mapping
source/voice provenance
```

Narrative accuracy remains a Narrative concern.

### Interactive behaviour

Evaluate:

```text
correct event trigger contract
state/parameter mapping
transitions
variation / cooldown
loop behaviour
priority / concurrency
adaptive music behaviour
failure/fallback behaviour
```

### Spatial/acoustic quality

Evaluate:

```text
position / orientation
attenuation
occlusion / obstruction
room/zone behaviour
portal/transition behaviour
reverb / wet-dry context
spread
listener transition
indoor/outdoor continuity
```

### Mix/integration quality

Keep dimensions separate:

```text
music/sound/dialogue balance
masking
headroom
dynamic range
critical-feedback audibility
dialogue space
spectral density
state-dependent mix changes
stereo/spatial image
```

### Runtime readiness

Evaluate supplied budgets/constraints such as:

```text
voice count
priority
memory / streaming
bank/package organisation
compression
load boundaries
localisation payloads
platform variants
```

### Preservation and repair

Test that one defective event, sound layer, voice line, mix region, music section or spatial mapping can be repaired without regenerating unaffected approved work.

### Extension Packs

Test activation, non-activation, precedence, changed music/sound/runtime behaviour, pack-aware evaluation and core-vs-pack differential behaviour.

### Music migration parity

Retain representative Music regressions permanently until consolidation is complete.

### End to end

Use progressive examples plus all three canonical stress tests.

Priority regression fixtures include:

```text
clipping / bad true peak
loop click
wrong duration
mutated locked music
fake native stems
footstep repetition
wrong material sound
mis-triggered state
audible transition pop
voice intelligibility failure
spatial leakage
wrong room response
music masking critical SFX
Worldstack state mismatch
bank/runtime budget regression
provenance loss
over-broad regeneration
```

Do not publish one universal Audio quality score.

**Exit:** music, sound, runtime behaviour, spatialisation, mix and technical delivery can fail independently.

---

# 25. Stage 18 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-audio-production-skills-system-spec.md
├── 02-audio-production-skills-workflows-and-artifacts-spec.md
├── 03-audio-production-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-audio-production-customisation-packs-spec.md
└── 06-audio-production-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, combined Music+Sound boundary, Music migration policy, core skills, execution architecture, interactive/spatial/mix principles, build order and acceptance.
2. **Workflows and Artifacts:** music inheritance, sound design/Foley/ambience/dialogue workflows, event/state semantics, spatial audio, mix/delivery, preservation, repair and cross-domain handoffs.
3. **Repository and Contracts:** repository layout, SKILL.md/command contracts, deterministic tools, middleware/DAW/provider integrations, self-containment, installation and migration compatibility.
4. **Testing and Benchmark:** mature Music parity, technical QC, music quality, sound quality, sync/dialogue, interactive behaviour, spatial/acoustic, mix/runtime, packs, stress tests, regressions and installation.
5. **Customisation / Extension Packs:** inherited Music pack semantics plus sound/combined profiles, qualification, activation, precedence, production effects, packaging, evaluation and authoring.
6. **Catalogue:** preserved/adapted Music packs plus curated sound/combined Audio packs, showcases, exact prompts, differential evals and maturity state.

Generate these specs from persisted research logs and the actual mature Music repository, not reconstructed conversation memory.

**Exit:** implementation can proceed without inventing Audio architecture in code or losing mature Music evidence.

---

# 26. Stage 19 — Design Public README

Follow the proven Music/Video Production Skills public structure, adapted to the combined family:

```text
# Audio Production Skills
positioning
Music + Sound capability model
approval / fidelity / cost control
installation
quick start
5 × 3 Learn by Producing
project structure grows with the audio production
core skills
Extension Packs
execution layer
interactive / spatial audio
mix / delivery
evaluation / benchmark
Music migration / compatibility status
Worldstack + independent stress tests
documentation
project boundary
contributing
licence
```

A positioning direction to test:

> Direct complete audio productions, from composition and sound design to adaptive, spatial and delivery-ready audio.

Do not claim Music migration is complete until the parity gate passes.

**Exit:** the public product surface is designed before full production scaffolding.

---

# 27. Stage 20 — Cross-Project Review

Compare the combined Audio architecture with mature Music, Video, Narrative, Game Development, World / Environment, Character Performance, Software Engineering and QA/Evaluation.

Pay special attention to repeated but domain-owned concepts such as:

```text
cheap representation
approval / locking
source provenance
variant production
state-to-representation mapping
runtime behaviour contracts
smallest-scope repair
Extension Pack semantics
clean installation
```

Do not centrally promote a universal timeline, universal event graph, universal state engine, universal media graph, universal provider router or universal evaluator merely because multiple domains use time-based assets.

**Exit:** shared evidence is captured without weakening Music- or Sound-native production semantics.

---

# 28. Stage 21 — Scaffold Production Repository

Only now expand the Stage 0 workspace into the production scaffold justified by the six specs.

Likely baseline:

```text
audio-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-audio-production-skills-system-spec.md
│   ├── 02-audio-production-skills-workflows-and-artifacts-spec.md
│   ├── 03-audio-production-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-audio-production-customisation-packs-spec.md
│   ├── 06-audio-production-extension-pack-catalogue.md
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

Do not create per-DAW, per-middleware, per-provider or per-sound-category directory trees merely for symmetry.

**Exit:** every production directory has an immediate justified role.

---

# 29. Stage 22 — Implement and Prove Core Vertical

Implement the minimum new capability needed to prove the combined thesis **without rewriting mature Music first**.

A strong first vertical should prove:

```text
existing or simple music element
+
new sound-design element
→ shared audio brief
→ cheap source/event prototypes
→ sound production
→ music + sound integration
→ mix / runtime or linear behaviour
→ independent evaluation
→ bounded repair
```

A small interactive or cinematic scene is preferable to an entire game or film.

**Exit:** installed Audio skills can coordinate at least one music+sound production end to end while preserving Music-owned decisions.

---

# 30. Stage 23 — Expand Progressive Coverage and Extension Packs

Expand gradually to the selected 15 combined examples.

Reuse/migrate mature Music examples and packs only when the combined repository can preserve their behaviour and evidence.

For every implemented Audio pack prove:

```text
core works without pack
core + pack changes intended production behaviour
explicit requirements and approved music/sound decisions outrank pack defaults
pack-aware evaluation recognises valid specialisation
pack authoring can create or revise a valid pack
```

**Exit:** breadth and specialisation are demonstrated rather than only specified.

---

# 31. Stage 24 — Validate Music Migration / Parity

Before claiming that `audio-production-skills` replaces or absorbs the mature Music project, demonstrate:

```text
music core workflow parity
music skill capability parity or explicit compatible migration
progressive-example coverage parity
Music Extension Pack parity
pack-authoring parity
benchmark / regression parity
installation parity
provider/tool boundary parity
preservation / repair parity
README capability parity
```

Run representative old Music prompts against the new architecture and compare outcomes/behaviour.

Decide explicitly whether:

```text
music-production-skills becomes deprecated with migration guidance
music-production-skills remains an independently maintained specialist subset
audio-production-skills consumes/reuses it without ownership migration
```

Do not create duplicate long-lived implementations accidentally.

**Exit:** the combined family has one intentional Music ownership model backed by evidence.

---

# 32. Stage 25 — Validate Installation and Repository Integrity

Validate:

```text
repository contracts
skill self-containment
command discovery
selective installation
clean consumer-project installation
skill-local references / scripts / assets
DAW / middleware / provider prerequisites
benchmark entry points
example reproducibility
Music migration/compatibility commands
no undocumented source-checkout dependencies
```

Keep source-repository validation separate from clean external installation.

**Exit:** the repository behaves as an installable Agent Skills product.

---

# 33. Stage 26 — Optional Pactwright Integration and Registry Promotion

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

Audio Production Skills own music/sound workflow, artefacts, commands, tools and evaluation. Pactwright owns Contract fulfilment, lifecycle authority and Evidence. Consuming-project intelligence owns project-specific conclusions.

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

The mature status of `music-production-skills` must not be automatically transferred to the combined project. Audio must earn its own evidence and then explicitly resolve the Music migration relationship.

**Exit:** Pactwright can resolve combined Audio capability without being required by the repository.

---

# 34. Stage 27 — Review Shared-Abstraction Candidates

After implementation evidence exists, apply `shared-abstraction-process.md`.

Potential candidates may include:

```text
timing / sync handoff
source / performer provenance handoff
adaptive state-to-representation handoff
fidelity / delivery variant metadata
technical media acceptance evidence
```

Do not centrally promote a universal timeline, universal audio graph, universal state/parameter model, universal media asset schema, universal runtime or universal quality score without repeated independent evidence.

---

# 35. Audio Production Acceptance Gates

Before maturity, demonstrate:

### Music inheritance

- mature Music behaviour is explicitly inherited/adapted rather than recreated informally;
- composition remains a first-class production responsibility;
- Music's approval/locking/preservation semantics survive;
- local Music repair remains bounded;
- adaptive Music remains supported without becoming a middleware runtime;
- Music pack and benchmark behaviour is preserved or consciously replaced with stronger evidence.

### Sound production

- source acquisition/generation, editing, event design and mix are distinguishable;
- sound variation is deliberate and testable;
- Foley/synchronised sound can be evaluated for timing and material/performance fit;
- ambience can evolve without obvious repetition;
- dialogue/voice audio can be produced without absorbing Narrative or Character Performance ownership;
- sound defects route to the correct production layer.

### Interactive / spatial behaviour

- consuming-project state remains externally owned;
- state/event/parameter mappings are explicit;
- adaptive music and sound behaviours are testable;
- spatial position, room/acoustic context and mix response remain distinguishable;
- runtime packaging/budget constraints are represented where applicable.

### Mix and delivery

- Music/Sound/Dialogue conflicts can be evaluated independently;
- technical loudness/peak evidence is separated from artistic mix quality;
- delivery targets are use-context-specific;
- native stems are not confused with source-separated estimates;
- linear and runtime delivery remain distinguishable.

### Cross-domain behaviour

- Narrative supplies words/story intent without losing ownership;
- Character Performance can consume dialogue timing without Audio owning facial animation;
- Game Development/Worldstack state drives audio representation without Audio inventing state;
- Video supplies picture/timing while Audio owns audio production;
- Software Engineering can implement middleware contracts without owning audio design;
- provenance/consent survives every handoff.

### Evaluation

- Music, sound design, sync/dialogue, interactive behaviour, spatial audio, mix, runtime and technical QC can fail independently;
- local repair preserves unaffected approved audio work;
- known failures become regression fixtures;
- Extension Packs materially change production behaviour and are differentially evaluated;
- Music-parity, Worldstack and independent stress tests pass meaningful slices.

### Product behaviour

- core works without packs;
- 15 primary progressive examples exist with exact prompts;
- six canonical specification responsibilities exist;
- public README reflects implemented capabilities accurately;
- skills are self-contained;
- local and clean external installation pass;
- Music ownership/migration status is explicit;
- DAW/provider/middleware claims are backed by implementation evidence.

---

# 36. Initial Non-Goals

Until evidence proves otherwise, `audio-production-skills` is not:

- a DAW;
- a digital audio workstation automation platform;
- a game-audio middleware runtime;
- an audio engine;
- a sample marketplace/library;
- a voice-cloning platform;
- a universal acoustic simulator;
- a universal audio event graph;
- a universal loudness policy;
- a central music/sound asset database;
- a provider/model router;
- a replacement for Narrative, Character Performance, Game Development or Video Production;
- a Worldstack-specific audio implementation repository;
- permission to discard or silently deprecate the mature `music-production-skills` project.

---

# 37. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning `audio-production-skills` from first principles.

The resulting repository should make combined audio production:

```text
as disciplined as the existing mature Music workflow
more coherent across music and sound
cheaper to validate before expensive production
more explicit about source vs event vs runtime behaviour
more adaptive and spatially aware
more resistant to repetition and masking
more reliable across linear and interactive delivery
more provenance-aware
more precise about cross-domain ownership
more independently testable
more efficient to diagnose and repair
```

while preserving the proven Music Production Skills evidence and remaining a lean Agent Skills project rather than becoming a universal audio platform before repeated production evidence justifies it.
