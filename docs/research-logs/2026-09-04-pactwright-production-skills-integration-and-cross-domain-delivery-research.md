# Pactwright Production Skills Integration and Cross-Domain Delivery Research

**Date:** 4 September 2026  
**Status:** Research and design basis  
**Purpose:** Support newly derived Pactwright requirements introduced by analysis of the Production Skills project family, and distinguish those requirements from unresolved implementation ideas.

---

## 1. Research Question

Pactwright was originally designed around a stable Contract-driven Delivery lifecycle and an Agent Pack architecture.

Subsequent analysis of Production Skills projects exposed requirements that were not present in the earlier Pactwright research logs.

The main questions are:

1. What production behaviour is genuinely shared across domains?
2. What should Pactwright know about that behaviour?
3. What should remain inside Production Skills?
4. How can independent Production Skills integrate cleanly with Pactwright?
5. Which new ideas are sufficiently supported to become Pactwright requirements?
6. Which ideas remain hypotheses and must not yet be made normative?

This document records that design bridge.

---

## 2. Existing Pactwright Baseline

The existing Pactwright Delivery design defines:

```text
Intent
→ transient Contract alternatives
→ Decision
→ canonical Contract
→ Brief
→ Delivery
→ Review
→ Evidence
```

Evidence ends core Delivery.

The runtime controls lifecycle transitions, while agents, prompts, skills and delivery techniques are replaceable implementations.

The original lifecycle is structurally fixed:

```text
capture-intent
→ propose-contracts
→ approve-contract
→ write-brief
→ deliver-brief
→ review
→ prepare-evidence
```

Repository policy changes execution and gates, not lifecycle topology.

The existing distribution architecture already separates:

```text
Pactwright semantics
→ Agent Pack
→ agents
→ skills
```

and deliberately avoids Agent Pack composition initially.

Production Skills integration is therefore an extension of these existing boundaries, not a replacement architecture.

---

## 3. Production Skills Evidence

Three implemented Production Skills repositories provide direct cross-domain evidence:

```text
Narrative Production Skills
Music Production Skills
Video Production Skills
```

They are independent Agent Skills products with their own workflows, artefacts, evaluations and installation mechanisms.

They do not depend on Pactwright.

This independence is important because Pactwright integration must preserve standalone use.

---

## 4. Video Production Evidence

Video Production Skills defines a complete production process covering:

```text
creative definition
→ previsualisation
→ shot development
→ editorial
→ finishing
→ evaluation
```

Its workflow explicitly aims to:

- plan cheaply;
- approve creative decisions before expensive generation;
- generate alternatives;
- select;
- evaluate;
- retry only what failed.

Its compact production loop is:

```text
cheap checkpoint
→ approve
→ generate
→ evaluate
→ refine only what failed
```

Higher levels also demonstrate composition with Narrative and Music production.

This provides direct evidence for:

- cheap representations before expensive execution;
- explicit approval;
- evaluation;
- targeted correction;
- multi-production-skill projects.

---

## 5. Narrative Production Evidence

Narrative Production Skills follows:

```text
low-resolution exploration
→ selection
→ approval
→ writing
→ evaluation
→ targeted revision
```

It explicitly separates selection from approval and states that changing a story should reopen the smallest useful decision and revise affected descendants rather than regenerate everything.

The workflow therefore contains both:

```text
cheap exploration before commitment
```

and:

```text
local correction after evaluation
```

as first-class production principles.

---

## 6. Music Production Evidence

Music Production Skills follows the same broad pattern using different artefacts:

```text
musical direction
→ composition
→ arrangement
→ demo
→ production
→ finishing
→ evaluation
```

It explicitly recommends:

```text
motif instead of full song
section instead of whole track
MIDI instead of audio
demo before final production
local repair instead of regeneration
```

It also states that the owning production layer should be diagnosed before correction and that a local defect should not trigger unnecessary whole-track regeneration.

This independently reinforces the same production principles found in Narrative and Video.

---

## 7. Cross-Domain Production Pattern

The evidence supports a common production pattern:

```text
Intent / Brief
→ inexpensive representation
→ evaluation or comparison
→ selection / approval where needed
→ higher-fidelity production
→ evaluation
→ targeted correction
```

The exact artefacts differ by domain.

| Domain | Example cheaper representation |
|---|---|
| Narrative | concept, outline |
| Music | motif, MIDI, section, demo |
| Video | visual direction, storyboard, reference frame |
| UI/UX | potentially flow or wireframe |
| Game development | potentially paper mechanic or grey-box |
| Software | potentially architecture/design representation |
| Research | potentially search map or evidence structure |

The first three rows are directly evidenced by implemented Production Skills repositories.

The remaining rows come from Production Skills design work and require validation as those projects mature.

### Finding

There is sufficient evidence for the **principle of resolving important uncertainty using the cheapest adequate representation before expensive commitment**.

There is **not** sufficient evidence for a mandatory universal nine-stage production lifecycle.

Pactwright specifications should therefore express the principle without defining an artificial domain-independent production pipeline.

---

## 8. Implication for Pactwright Lifecycle Shapes

The Production Skills workflows are structurally different:

```text
Narrative:
concept → outline → draft → evaluation → revision

Music:
composition → demo → production → evaluation → repair

Video:
direction → storyboard → generation → edit → evaluation
```

Pactwright should not encode these stages directly.

The reusable orchestration beneath them is closer to:

```text
Delivery
→ Review
→ Gate where required
→ Delivery
→ Review
```

This supports the lifecycle-shape concept.

### Supported requirement

Pactwright should be able to represent more than:

```text
Brief
→ one Delivery
→ one Review
→ Evidence
```

without introducing domain-specific lifecycle stages.

### Not established

This research does not establish:

- a complete workflow DSL;
- mandatory `iterative`, `checkpointed` or `progressive` built-ins;
- domain-specific phase names;
- a fixed number of Delivery or Review steps.

The initial `direct` shape may remain sufficient until richer shapes are exercised.

---

## 9. Gate Semantics

Production Skills provide strong evidence for approval before expensive or consequential production.

Examples include:

```text
story direction approval
musical direction approval
storyboard approval
picture lock
```

This supports **Gate as a lifecycle concept**.

A Gate means:

> Progression requires configured authority before continuing.

It does not imply a new Contract Decision unless the authorised outcome itself changes.

### Supported requirement

Lifecycle topology needs a way to stop before downstream execution until configured approval is obtained.

### Not established

This research does **not** establish a user-facing:

```text
/gate
```

command.

Command syntax should remain unresolved until the runtime interaction design requires it.

---

## 10. Review Outcomes

Production Skills demonstrate several practical evaluation consequences:

```text
continue
correct something
stop/escalate
```

The Pactwright baseline also establishes that Review identifies defects and that failures may block progression.

This makes a structured Review result useful.

However, the exact protocol:

```text
pass
revise
blocked
```

has not been established by prior Pactwright specifications or Production Skills contracts.

### Finding

Pactwright needs enough Review output structure for the runtime to determine whether progression may continue or corrective work is required.

### Unresolved design

The exact Review-result vocabulary remains open.

`pass | revise | blocked` may be evaluated as a candidate protocol, but should not become canonical merely because it is convenient.

---

## 11. Local Correction

Narrative, Music and Video independently converge on the same correction strategy:

> Preserve valid work and reopen the smallest useful production unit that owns the defect.

Examples include:

```text
Narrative
→ affected decision / scene

Music
→ composition, arrangement, section or production layer

Video
→ affected reference, shot or edit layer
```

### Supported production principle

```text
evaluate
→ diagnose owning layer
→ preserve unaffected work
→ correct smallest sufficient scope
```

### Pactwright implication

Pactwright lifecycle execution should permit corrective routing rather than forcing complete Delivery restart.

### Boundary

Pactwright does not need to understand:

```text
scene
shot
musical section
wireframe
component
claim
```

The Production Skill determines the correction unit.

Therefore the cross-domain examples are research evidence, not Pactwright graph semantics.

---

## 12. Production Skills Own Domain Workflows

The Production Skills repositories establish that specialised production behaviour belongs inside skills.

They own:

```text
production workflow
artefacts
internal commands
tools
evaluation
provider interaction
domain-specific repair logic
```

Pactwright should see:

```text
delivery-execution
delivery-review
```

while Production Skills determine how those responsibilities are fulfilled.

This reinforces the existing Pactwright principle that skills encode techniques rather than lifecycle stages.

---

## 13. Multi-Production-Skills Projects

Some products inherently require several production disciplines.

Video Production Skills already demonstrates cross-domain hand-offs at its higher production level:

```text
advertising
narrative
music
video
```

within one larger production.

Other natural examples include:

```text
children's television
→ Narrative + Music + Video

video game
→ Game Development + Narrative + Music + UI/UX + Game Assets

software product
→ Software Engineering + UI/UX + Deep Research
```

### Supported requirement

Pactwright integration must not assume:

```text
one Pactwright project
→ one Production Skills family
```

A single Agent Pack must be able to consume several Production Skills families.

---

## 14. Agent Pack as the Composition Boundary

The existing Pactwright architecture already makes Agent Packs responsible for:

```text
agents
skills
capability mappings
AI behaviour
```

and selects one complete Agent Pack rather than composing multiple Agent Packs.

Therefore the clean composition model is:

```text
Pactwright capability
→ Agent Pack
→ agent
→ one or more Production Skills
```

rather than:

```text
Pactwright
→ domain-specific execution machinery
```

or:

```text
multiple Pactwright Agent Packs
→ merge together
```

### Finding

Multiple Production Skills should compose **inside one selected Pactwright Agent Pack**.

This preserves the existing single-Agent-Pack architecture.

---

## 15. Optional Pactwright Integration Manifest

Production Skills must remain independently installable.

Pactwright therefore needs an optional compatibility boundary rather than requiring Production Skills to adopt Pactwright.

Selected design:

```text
integrations/
└── pactwright.yml
```

A compatible Production Skills repository may use this file to declare:

```text
identity
Pactwright compatibility
Pactwright capability → skill bindings
Extension Pack discovery where applicable
```

Conceptually:

```yaml
version: 1
id: video-production-skills

compatibility:
  pactwright: "..."

bindings:
  delivery-execution:
    skills:
      - video-production

  delivery-review:
    skills:
      - video-evaluate
```

### Requirement

The integration must remain optional and one-way.

Without Pactwright:

```text
agent
→ Production Skills
```

With Pactwright:

```text
Pactwright
→ Agent Pack
→ Production Skills integration
→ same skills
```

---

## 16. Integration Manifest Boundary

The Production Skills integration manifest must not become another Pactwright Extension mechanism.

It should not define:

```text
Pactwright agents
Pactwright prompts
Pactwright commands
lifecycle stages
lifecycle shapes
Project Graph nodes
Project Intelligence semantics
provider routing
production workflow definitions
```

Its purpose is compatibility and binding only.

This distinction keeps Production Skills independent from Pactwright semantics.

---

## 17. Production Extension Packs

Production Extension Packs are a real concept in the Production Skills family, not a Pactwright Extension concept.

Video Production Skills currently contains a dedicated `video-extension-pack-creator` skill. It defines Extension Packs as reusable coherent production grammars with production behaviour, evaluation, examples and validation.

The pack creator explicitly distinguishes:

```text
reusable pack
```

from:

```text
project-specific instructions
```

and requires that new packs be justified by reusable production needs.

### Supported finding

Production Extension Packs are a valid Production Skills customisation mechanism.

### Generalisation status

Generalising this mechanism across:

```text
Narrative
Music
Software Engineering
UI/UX
Game Development
Deep Research
```

is a Production Skills family design decision.

It should be recorded as such rather than presented as an original Pactwright requirement.

### Pactwright boundary

```text
Pactwright Extension
→ adds Pactwright semantics

Production Extension Pack
→ specialises a Production Skills family
```

Pactwright may resolve a selected pack through the Production Skills integration but must not interpret its internal production grammar.

---

## 18. Production Skills Integration Locking

If an Agent Pack imports external Production Skills, reproducibility requires Pactwright to identify what was resolved.

The existing Pactwright lock already records exact runtime, Agent Pack, agent and skill hashes.

This supports extending the lock with enough Production Skills identity to reconstruct the integration.

Candidate information includes:

```text
source
exact revision/version
integration manifest identity
resolved skills
selected Production Extension Packs
```

### Supported requirement

External Production Skills dependencies must be reproducibly identifiable.

### Unresolved implementation

This research does not establish:

- exact lock schema;
- whether every skill needs an independent hash;
- how Git revisions and package versions interact;
- a universal Production Skills package resolver.

Those belong to Distribution design.

---

## 19. Lifecycle Shape Identity and Hashing

A selected lifecycle shape must be identifiable if runtime execution depends on it.

However, this research provides no evidence that a Brief must contain:

```text
shape id
shape version
shape hash
```

as three mandatory fields.

Existing Pactwright locking uses hashes in other reproducibility contexts, but that does not automatically make shape hashing necessary.

### Supported requirement

A lifecycle run must be able to determine which shape definition it is executing.

### Unresolved

Whether this requires:

```text
id only
id + version
id + resolved lock identity
id + hash
```

should be decided when the lifecycle-shape storage and locking model is designed.

A mandatory `shape hash` should not appear in canonical requirements until that decision is made.

---

## 20. Technical Contracts

Software Engineering analysis introduced useful subordinate technical artefacts such as:

```text
API contracts
event contracts
interface contracts
schema contracts
component contracts
```

The intended boundary is sensible:

```text
Pactwright Contract
        ↓ governs
software design
        ↓ may produce
technical contracts
```

However, the implemented Narrative, Music and Video Production Skills do not provide evidence for this concept, and the original Pactwright research does not define it.

### Status

**Design hypothesis for Software Engineering Skills, not currently a Pactwright core requirement.**

The only Pactwright requirement needed today is:

> Domain-specific design artefacts must not become competing authorities over the governing Pactwright Contract.

A dedicated "Technical Contracts" core section should wait for the Software Engineering Skills research/specification to establish the need.

---

## 21. Production Skills Commands vs Pactwright Commands

Production Skills increasingly decompose skills into narrower testable commands.

These commands belong to the skill implementation and benchmark surface.

Pactwright commands instead represent Contract-driven lifecycle operations.

The boundary is:

```text
Pactwright command
→ Pactwright responsibility
→ Agent Pack
→ Production Skill
→ Production Skill command(s)
```

### Requirement

Production Skill commands must not automatically become Pactwright lifecycle commands or stages.

This prevents Pactwright from accumulating domain commands such as:

```text
storyboard
mix
compose
debug
wireframe
playtest
research-claim
```

---

## 22. Domain-Specific Lifecycle Stages

The cross-domain evidence strongly supports keeping production-specific stages outside Pactwright.

The three implemented families already have materially different workflows:

```text
Narrative
→ concept / outline / scene / revision

Music
→ composition / arrangement / demo / mix

Video
→ storyboard / shot / edit / master
```

Attempting to model these directly in Pactwright would couple the core lifecycle to every production domain.

### Supported requirement

Pactwright lifecycle topology must remain domain-neutral.

Production Skills interpret what work occurs inside a Delivery invocation.

This is one of the strongest conclusions from the Production Skills analysis.

---

## 23. Evaluation Ownership

Production Skills already contain domain-specific evaluation behaviour.

Pactwright also has an existing evaluation framework around Agent Packs and semantic responsibilities.

The correct layered model is:

```text
Production Skills benchmark
→ Is the specialised production capability good?

Pactwright evaluation
→ Can the resolved Agent Pack use its skills to satisfy a Pactwright responsibility?
```

Pactwright should not duplicate:

```text
music quality benchmarks
video continuity benchmarks
narrative coherence benchmarks
software correctness benchmarks
research citation benchmarks
```

inside its own evaluation framework.

### Requirement

Domain benchmarks remain owned by Production Skills.

Pactwright evaluates integration and Contract-responsibility fulfilment.

---

## 24. Project Intelligence Boundary

Production work frequently creates lessons worth retaining.

The correct ownership distinction is:

```text
Production Skills
→ reusable expertise

Project Intelligence
→ project-specific durable learning
```

For example:

```text
"Use MIDI to test melody cheaply"
→ reusable Music Production expertise
```

while:

```text
"For this series, the approved theme loses character identity with model X"
→ project-specific Knowledge
```

This supports moving durable project guidance away from old specialised generation-guidance configuration and through normal Project Intelligence ingestion.

---

## 25. Requirements Supported by This Research

This research provides a design basis for the following new Pactwright requirements.

### R1. Production-domain neutrality

Pactwright must not encode Narrative, Music, Video, Software, UI/UX, Game or Research production stages into core lifecycle semantics.

### R2. Multi-step Contract fulfilment

The lifecycle must be capable of supporting more than one Delivery/Review phase without requiring domain-specific lifecycle primitives.

### R3. Gate concept

Lifecycle topology must support configured approval before downstream progression where required.

### R4. Corrective routing

Review-driven correction must be able to return work to an appropriate Delivery phase without forcing complete Delivery restart.

The Production Skill owns the exact correction unit.

### R5. Multiple Production Skills

One Pactwright Agent Pack may compose several Production Skills families for the same project and capability.

### R6. Independent Production Skills

Production Skills must remain usable independently from Pactwright.

### R7. Optional integration manifest

Compatible Production Skills may expose a lightweight optional Pactwright integration manifest.

### R8. Agent Pack integration boundary

Production Skills integration is consumed through the selected Agent Pack rather than becoming another top-level Pactwright customisation mechanism.

### R9. Production Extension Pack distinction

Production Extension Packs specialise Production Skills and are semantically distinct from Pactwright Extensions.

### R10. Reproducible dependency resolution

Pactwright must be able to identify the exact external Production Skills environment used by an Agent Pack.

### R11. Evaluation separation

Production Skills own domain benchmarks; Pactwright owns Pactwright-level integration and responsibility evaluation.

### R12. Project learning separation

Reusable expertise stays in Production Skills. Project-specific durable lessons belong in Project Intelligence.

---

## 26. Findings That Should Not Yet Become Requirements

The following ideas are plausible but are **not authorised by this research as canonical requirements**.

### Mandatory nine-stage production doctrine

Supported:

```text
cheap representation
→ deliberate commitment
→ higher fidelity
→ evaluation
→ targeted correction
```

Not supported:

```text
one mandatory nine-stage pipeline for all domains
```

### Mandatory lifecycle-shape hash

Shape identification is required.

Hashing is unresolved.

### `/gate` command

Gate semantics are supported.

Command syntax is unresolved.

### Formal `pass | revise | blocked` protocol

Structured Review consequences are required.

Exact enum is unresolved.

### Pactwright knowledge of domain correction units

Local repair is strongly supported.

Pactwright should not model `scene`, `shot`, `section`, `component`, etc.

### Universal Production Extension Pack implementation

The concept is evidenced in Video Production Skills.

Its exact cross-family standard remains Production Skills design work.

### Technical Contracts as Pactwright semantics

This remains a Software Engineering Skills design hypothesis.

---

## 27. Implications for Canonical Specs

This research primarily supports changes to:

```text
01-pactwright-core-system-and-lifecycle.md
02-distribution-agent-packs-extensions-and-evaluation.md
03-project-intelligence.md
08-open-source-project-organisation.md
```

### Spec 01

Should retain:

- domain-neutral lifecycle shapes;
- Gate as a primitive;
- repeated Delivery/Review capability;
- corrective routing capability;
- Production Skills boundary.

Should revise or remove unsupported specificity around:

- universal nine-stage progression;
- mandatory shape hashing;
- `/gate` syntax;
- formal Review outcome enum;
- domain correction-unit lists presented as Pactwright requirements;
- Technical Contracts as core semantics.

### Spec 02

Should define:

- optional `integrations/pactwright.yml`;
- Agent Pack import of multiple Production Skills;
- capability-to-skill bindings;
- Production Extension Pack distinction;
- reproducible Production Skills resolution;
- evaluation ownership.

### Spec 03

Should preserve:

```text
Production Skills
→ reusable expertise

Project Intelligence
→ project-specific accepted knowledge
```

and use normal Source ingestion for durable production lessons.

### Spec 08

Should expose the ecosystem as:

```text
Agent Packs
Pactwright Extensions
Compatible Production Skills
```

rather than treating skills, reviewers, agents and workflows as equivalent Pactwright extension categories.

---

## 28. Research Limitations

The strongest repository evidence currently comes from:

```text
Narrative Production Skills
Music Production Skills
Video Production Skills
```

Software Engineering, UI/UX, Video Game Development and Deep Research have been analysed as Production Skills designs but do not yet provide equivalent mature repository evidence.

Therefore:

> Cross-domain abstractions should remain conservative until more independent Production Skills implementations demonstrate the same behaviour.

This follows the broader extraction rule:

> Share an abstraction only after multiple production domains demonstrably need the same concept.

The evidence already supports cheap-first production, approval, evaluation and local correction across three independent domains.

More specialised abstractions should wait.

---

## 29. Design Rule

When Production Skills analysis suggests a Pactwright requirement, classify it before adding it to a canonical spec:

```text
Does multiple Production Skills evidence show
a domain-independent orchestration need?

YES
→ candidate Pactwright requirement

Does it describe specialised production behaviour?

YES
→ Production Skills

Does it describe one project's learned behaviour?

YES
→ Project Intelligence

Does it merely suggest one convenient implementation?

YES
→ research hypothesis, not canonical requirement
```

This prevents reasonable implementation ideas from silently becoming Pactwright architecture.

---

## 30. Conclusion

Production Skills materially expand the evidence behind Pactwright's redesign.

They demonstrate that very different production domains repeatedly need:

```text
cheap uncertainty reduction
→ deliberate commitment
→ higher-fidelity execution
→ evaluation
→ targeted correction
```

but implement those behaviours using completely different domain artefacts.

The correct Pactwright response is therefore **not** to absorb those production workflows.

It is to provide a small domain-neutral Contract-fulfilment topology and a clean bridge to independent Production Skills:

```text
Pactwright Contract
        ↓
Brief
        ↓
Lifecycle
        ↓
Pactwright capability
        ↓
Agent Pack
        ↓
one or more Production Skills
        ↓
domain-specific production
```

The Production Skills analysis supports lifecycle flexibility, corrective routing, multi-skill composition and an optional integration contract.

It does not justify prematurely specifying exact command syntax, shape hashing, universal production stages or domain artefacts as Pactwright semantics.

---

**Pactwright Production Skills Integration and Cross-Domain Delivery Research**  
**Research Log - 4 September 2026**
