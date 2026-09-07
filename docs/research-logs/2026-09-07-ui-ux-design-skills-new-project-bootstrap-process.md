# UI/UX Design Skills — New Project Bootstrap Process

## 1. Purpose

This process defines how `ui-ux-design-skills` moves from a project idea to a **scaffolded, benchmarked, installable open-source Agent Skills repository**.

The project must help AI agents design complete user experiences rather than isolated screens.

The bootstrap covers:

```text
human / product problem
→ evidence
→ interaction hypothesis
→ competing design directions
→ low-fidelity validation
→ selected / approved design
→ prototype
→ evaluation
→ bounded refinement
→ implementation-ready handoff
```

The project is complete only when its skills can be installed into another project and used to perform a realistic UI/UX workflow.

---

## 2. Required Outputs

The bootstrap must produce:

1. a clear project goal and boundary;
2. UI/UX production-domain research;
3. a human-science and user-research evidence model;
4. a domain-native workflow and artifact model;
5. a fidelity and draft strategy;
6. AI design/research skill and tool research;
7. a justified set of core skills;
8. decomposed testable commands where useful;
9. an extension-pack architecture and initial catalogue;
10. progressive example levels;
11. deterministic and semantic evals;
12. a benchmark suite;
13. four canonical specifications;
14. an open-source repository scaffold;
15. a documented Agent Skills installation path;
16. local and GitHub installation smoke tests.

The fourth canonical specification is deliberately added for this project:

```text
docs/
├── 01-ui-ux-design-skills-system-spec.md
├── 02-ui-ux-design-skills-workflows-and-artifacts-spec.md
├── 03-ui-ux-design-skills-repository-and-contracts-spec.md
└── 04-testing-and-benchmark-spec.md
```

Testing and benchmark design must not be treated as an implementation appendix.

---

# 3. Governing Principles

Retain the original production-family principles:

- **Domain first** — understand professional UI/UX practice before designing skills.
- **Research before reimplementation** — inspect existing Agent Skills, design tools, MCPs, browser tools and deterministic tooling before creating new capability.
- **Vertical first** — prove a complete UI/UX production workflow before extracting shared abstractions.
- **Cheap validation first** — resolve uncertainty using the lowest useful fidelity.
- **Preserve approved work** — refinement must not silently discard accepted interaction decisions.
- **Evals are product behaviour** — quality criteria precede final skill contracts.
- **Installability is part of the product.**
- **Extract later** — concepts remain project-local until multiple production domains prove the abstraction.

Add UI/UX-specific principles:

### Human problem before interface problem

Do not assume an observed problem is caused by the interface.

Start from evidence such as:

```text
analytics
support evidence
research transcripts
task failures
user behaviour
operational data
```

Then identify plausible human or interaction mechanisms.

### Evidence before design folklore

Interaction rules should distinguish between:

```text
empirical evidence
established human-science principle
product-specific observation
design hypothesis
designer judgement
```

Do not present all five as equivalent evidence.

### Alternatives must differ structurally

Producing three differently styled versions of the same interaction is not meaningful exploration.

Alternatives should test different:

```text
information architectures
interaction models
navigation strategies
progressive-disclosure approaches
task structures
decision-support strategies
```

### Synthetic research is supporting evidence

Synthetic subjects can help explore hypotheses, edge cases and research questions, but synthetic responses must remain distinguishable from observed human evidence.

Synthetic findings must retain provenance and confidence.

The supporting research specification already requires grounded personas, population spread checks, transcript traceability and refutation rather than accepting agreeable synthetic responses at face value. 
### Human performance is measurable

UX evaluation should not collapse into:

```text
looks good / looks bad
```

Depending on the interaction, quality may include:

```text
task completion
comprehension
error rate
recovery
cognitive workload
decision accuracy
navigation efficiency
accessibility
trust calibration
interaction latency
```

---

# 4. Bootstrap Flow

```text
PROJECT IDEA
    ↓
1. Define Project Goal
    ↓
2. Research UI/UX Production Domain
    ↓
3. Define Human-Problem and Evidence Model
    ↓
4. Map Workflow and Artifacts
    ↓
5. Define Fidelity / Draft Strategy
    ↓
6. Research AI Skills and Tools
    ↓
7. Choose Execution Layer
    ↓
8. Gap Analysis
    ↓
9. Design Core Skills and Commands
    ↓
10. Design Extension Packs
    ↓
11. Design Progressive Examples
    ↓
12. Design Evals and Benchmarks
    ↓
13. Generate Four Canonical Specs
    ↓
14. Cross-Project Review
    ↓
15. Scaffold Repository
    ↓
16. Configure Skill Installation
    ↓
17. Local Validation
    ↓
18. Publish + External Install Smoke Test
    ↓
READY FOR IMPLEMENTATION
```

---

# 5. Stage 1 — Define Project Goal

Do not begin with a proposed skill list.

Define:

```text
target outcomes
intended users
supported product types
design responsibilities
research responsibilities
implementation boundary
expected autonomy
human approval points
persistent decisions
quality definition
known failure modes
non-goals
```

Answer:

```text
What does the user ultimately produce?

What decisions should the system help make?

What evidence should those decisions depend on?

What decisions remain explicitly human-selectable?

Where should the process stop and hand work to software engineering?

What kinds of UI/UX work are explicitly outside scope?
```

The target output is not simply a Figma-like screen.

A successful project may produce:

```text
research synthesis
→ opportunity
→ interaction requirements
→ user flow
→ wireframe
→ prototype
→ evaluation
→ approved UX specification
→ implementation-ready handoff
```

---

# 6. Stage 2 — Research the UI/UX Production Domain

Study how strong practitioners actually perform:

```text
product discovery
user research
information architecture
interaction design
visual design
prototyping
design systems
accessibility
usability evaluation
design engineering
handoff
```

Research:

- specialist roles;
- working artifacts;
- iteration loops;
- approval gates;
- research/design boundaries;
- design/engineering boundaries;
- common failures;
- validation methods;
- quality criteria;
- real product-team handoffs.

Do not derive the workflow from current AI capabilities.

The supporting design specification contains valuable execution patterns including reference-based visual grounding, component engineering, motion design, specialised layout review and perception-based critique.

Treat these as candidate practices to investigate rather than automatically adopting the exact proposed tool chain.

---

# 7. Stage 3 — Define the Human-Problem and Evidence Model

This stage is new and mandatory.

The project must define how observations become interaction decisions.

Use the research-to-interaction structure:

```text
observation
→ plausible human mechanism
→ supporting evidence
→ interaction implication
→ falsifiable interaction hypothesis
→ competing alternatives
→ prototype
→ validation
→ analysis
→ reusable pattern when justified
```

This directly follows the attached human-science workflow, which moves from identifying the human problem through mechanism and evidence review to interaction constraints, hypotheses, alternative designs, validation and eventual generalisation.

First-class evidence types may include:

```text
product analytics
support logs
real-user transcripts
survey evidence
observational research
scientific literature
synthetic interviews
existing interface evidence
competitive/reference analysis
usability-test results
```

Evidence provenance must survive synthesis.

Do not allow:

```text
synthetic statement
→ unqualified "user insight"
```

or:

```text
psychology principle
→ universal interface rule
```

without an explicit reasoning step.

---

# 8. Stage 4 — Workflow and Artifact Mapping

Map the simplest credible end-to-end workflow.

Candidate first-class artifacts include:

```text
product-context.md
human-problem.md
evidence/
research-plan.md
research-findings.md
opportunities.md
interaction-hypotheses.md
flows/
wireframes/
visual-direction.md
design-system/
prototype/
evaluations/
handoff/
```

For every artifact identify:

```text
creator
purpose
evidence source
consumers
decisions preserved
confidence / status
refinement behaviour
approval behaviour
downstream impact
cross-project consumers
```

Keep these categories distinct:

```text
Evidence
Decision
Design artifact
Implementation artifact
Evaluation result
```

---

# 9. Stage 5 — Fidelity and Draft Strategy

Translate the production family's cheap-first rule into UI/UX fidelity.

A typical progression is:

```text
task model
→ written flow
→ information architecture
→ low-fidelity wireframe
→ interactive wireframe
→ selected interaction
→ visual direction
→ high-fidelity prototype
→ implementation-ready specification
```

The governing rule:

> Use the lowest-fidelity representation capable of resolving the current UX uncertainty.

Examples:

```text
navigation uncertainty
→ sitemap / flow

task-order uncertainty
→ written interaction sequence

layout uncertainty
→ wireframe

interaction uncertainty
→ clickable prototype

motion uncertainty
→ isolated motion prototype

visual-language uncertainty
→ small set of representative screens

design-system uncertainty
→ representative components + states
```

Do not build an entire polished product to discover that the task model was wrong.

---

# 10. Stage 6 — Research AI Skills and Tools

Research capabilities rather than repository names.

Search for:

```text
user-research skills
JTBD skills
interview skills
design critique skills
interaction-design skills
frontend-design skills
animation skills
accessibility tools
design-system skills
browser automation
visual regression
screenshot analysis
prototype generation
frontend execution
UX measurement tooling
```

For each candidate record:

| Field | Meaning |
|---|---|
| Name | Skill/tool |
| Source | Repository/provider |
| Licence | Reuse constraints |
| Production role | Workflow stage |
| Capabilities | Actual functionality |
| Evidence model | If research-related |
| Provider coupling | Dependency |
| Quality suitability | Fit |
| Maintenance | Current activity |
| Integration | USE / ADAPT / REFERENCE / REJECT |
| Gaps | Missing behaviour |

The supporting UI/UX design document identifies several useful capability categories: component and animation engineering, reference-driven design, landing-page specialisation, immersive storytelling, modular review, structured taste extraction and perception-based critique.

These categories should inform the search, not predetermine the final implementation.

---

# 11. Stage 7 — Choose the Execution Layer

Separate:

```text
UI/UX production intelligence
```

from:

```text
code generation
browser execution
screenshot capture
design rendering
visual regression
analytics
external research
```

`ui-ux-design-skills` should own **what design work must happen and why**.

Existing tools should execute specialised operations where possible.

Do not build a universal frontend framework, browser automation layer or design-tool replacement into the core.

---

# 12. Stage 8 — Gap Analysis

Compare:

```text
required UX workflow
        vs
available tools and skills
```

Classify capabilities:

```text
covered
partially covered
missing
```

Especially test for gaps in:

```text
problem framing
research traceability
interaction alternatives
approval preservation
human-science translation
task-level UX evaluation
design-system consistency
accessibility
bounded refinement
research/design/engineering handoff
```

Native project skills should address only the meaningful gaps.

---

# 13. Stage 9 — Design Core Skills and Commands

Create the smallest useful set of installable skills.

Do not force symmetry with Video, Music or Narrative.

A likely starting hypothesis is:

```text
uiux-research
uiux-design
uiux-prototype
uiux-evaluate
uiux-handoff
```

This is not final until Stages 2–8 validate it.

Where a skill contains independently testable production operations, expose commands such as:

```text
uiux-design
├── map-task
├── generate-flow-alternatives
├── create-wireframe
├── define-interaction
├── define-visual-direction
└── specify-states
```

and:

```text
uiux-evaluate
├── evaluate-task-flow
├── evaluate-hierarchy
├── evaluate-accessibility
├── evaluate-cognitive-load
├── evaluate-error-recovery
├── evaluate-trust
└── evaluate-design-consistency
```

Commands improve benchmark precision without multiplying installable skills unnecessarily.

---

# 14. Stage 10 — Design Extension Packs

Extension packs add specialised design grammar without replacing the core lifecycle.

Initial candidate classes:

### Product / interaction packs

```text
mobile-native
saas-dashboard
developer-tools
ecommerce
content-media
landing-page
```

### Human-science packs

The attached human-science specification suggests strong specialist domains:

```text
cognitive-science
human-factors
behavioural-science
trust-and-ai-interaction
ux-measurement
```

These include concerns such as working-memory load, interruption recovery, slips versus mistakes, choice architecture, dark patterns, AI authority calibration and quantitative UX measurement.

### Design-specialisation packs

Possible future packs:

```text
motion-design
design-system
reference-driven-design
immersive-web
conversion-design
```

An extension pack must define:

```text
scope
activation conditions
production rules
core-skill modifications
references
specialised evaluation criteria
example prompt
showcase artifact
benchmark cases
```

Every repository should eventually include a `create-extension-pack` capability or equivalent authoring workflow.

---

# 15. Stage 11 — Design Progressive Examples

Examples are part of the product, not documentation decoration.

Use progressively harder production problems.

## Level 1 — Control one interaction

Examples:

```text
form validation
destructive confirmation
search/filter component
```

Learn:

```text
states
feedback
affordance
error handling
accessibility
```

## Level 2 — Complete one user task

Examples:

```text
checkout
account recovery
create-and-publish workflow
```

Learn:

```text
task model
flow alternatives
wireframes
prototype
task evaluation
```

## Level 3 — Design a feature

Examples from different product classes:

```text
mobile onboarding
SaaS analytics feature
developer-tool configuration workflow
```

Adds:

```text
information architecture
responsive behaviour
visual language
multi-screen consistency
```

## Level 4 — Design a coherent product area

Adds:

```text
design system
complex states
progressive disclosure
accessibility
cross-flow consistency
research evidence
```

## Level 5 — Research-to-validated redesign

Start from evidence rather than a design brief.

```text
observed human problem
→ research
→ mechanism
→ hypothesis
→ alternatives
→ prototype
→ validation
→ analysis
→ bounded redesign
→ handoff
```

This level tests the complete project thesis.

Each level should contain several genuinely different examples so benchmark success cannot be achieved by learning one product pattern.

---

# 16. Stage 12 — Design Evals and Benchmarks

Evaluation must exist at several layers.

## Deterministic checks

Examples:

```text
required states present
contrast/accessibility checks
broken interaction paths
design-token consistency
responsive-state coverage
invalid component states
missing provenance
artifact-schema validation
installation integrity
```

## Semantic design evaluation

Measure:

```text
task clarity
interaction correctness
information hierarchy
affordance
consistency
cognitive load
error prevention
recovery
user autonomy
trust calibration
visual coherence
distinctiveness
```

## Research evaluation

Measure:

```text
source grounding
transcript traceability
hypothesis blindness where required
synthetic-population spread
confirmation-bias resistance
conflicting evidence
confidence calibration
unsupported insight generation
```

The synthetic-research material specifically calls for grounded persona construction, spread checking, historical-behaviour questioning, affinity mapping, traceability and refutation. 
## Human-science evaluation

Test whether the agent can correctly diagnose and respond to issues such as:

```text
working-memory overload
slip vs mistake
interruption recovery
choice overload
dark patterns
automation bias
poor explanation calibration
navigation lostness
```

## Preservation evaluation

Test that:

```text
approved task model survives visual refinement
approved interaction survives styling changes
local layout correction does not rewrite the flow
motion refinement does not alter information hierarchy
design-system changes affect only true dependants
```

## Root-cause evaluation

The project should prefer:

```text
wrong user model
→ reopen research assumption

wrong task model
→ revise flow

sound flow, poor hierarchy
→ revise layout

sound interaction, inaccessible execution
→ fix accessibility layer

sound design, implementation regression
→ route to engineering
```

rather than regenerating the whole design.

---

# 17. Stage 13 — Generate Four Canonical Specs

## Spec 1 — UI/UX Design Skills System

Owns:

```text
goal
scope
architecture
core skills
commands
execution model
external dependencies
project boundaries
extension-pack model
build order
acceptance criteria
```

## Spec 2 — Workflows and Artifacts

Owns:

```text
evidence model
human-problem model
fidelity progression
artifacts
selection
approval
provenance
interaction hypotheses
validation
revision
handoffs
```

## Spec 3 — Repository and Contracts

Owns:

```text
repository structure
SKILL.md contracts
commands
references
assets
scripts
extension packs
examples
installation
technical acceptance
```

## Spec 4 — Testing and Benchmark

Owns:

```text
test layers
deterministic validation
semantic evals
research evals
human-science evals
extension-pack tests
example-level benchmarks
defect taxonomy
baseline policy
regression policy
```

---

# 18. Stage 14 — Cross-Project Review

Review against:

```text
video-production-skills
narrative-production-skills
music-production-skills
deep-research-skills
software-engineering-skills
future video-game-development-skills
```

Ask:

```text
Does UI/UX own this responsibility?

Should Deep Research own the research machinery?

Should Software Engineering own the implementation?

Does Video Production own generated visual/video assets?

Does Narrative own story structure?

Is this genuinely a shared abstraction or merely similar vocabulary?
```

Record potential shared concepts as extraction candidates.

Do not extract automatically.

---

# 19. Stage 15 — Scaffold Repository

Target structure:

```text
ui-ux-design-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
│
├── docs/
│   ├── 01-ui-ux-design-skills-system-spec.md
│   ├── 02-ui-ux-design-skills-workflows-and-artifacts-spec.md
│   ├── 03-ui-ux-design-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   └── extraction-candidates.md
│
├── skills/
│   └── ...
│
├── commands/
│   └── ...
│
├── extension-packs/
│   ├── README.md
│   └── ...
│
├── examples/
│   ├── level-1-*/
│   ├── level-2-*/
│   ├── level-3-*/
│   ├── level-4-*/
│   └── level-5-*/
│
├── evals/
│   ├── skills/
│   ├── commands/
│   ├── end-to-end/
│   └── extension-packs/
│
├── benchmarks/
│   ├── deterministic/
│   ├── semantic/
│   ├── research/
│   └── preservation/
│
├── tools/
├── tests/
└── .github/
```

Only create optional directories once real requirements justify them.

Every installable skill remains self-contained, preserving the packaging rule from the original bootstrap.

---

# 20. Stage 16 — Configure Skill Installation

Use the Agent Skills CLI.

```bash
npx skills add <org>/ui-ux-design-skills --list
```

Example selective installation:

```bash
npx skills add <org>/ui-ux-design-skills \
  --skill uiux-design \
  --skill uiux-evaluate \
  --agent claude-code
```

Project-local installation remains the default.

Extension-pack installation semantics must be decided during repository-contract design rather than invented ad hoc.

---

# 21. Stage 17 — Local Validation

Before publication verify:

```text
✓ every skill is discoverable
✓ every skill installs independently
✓ SKILL.md contracts validate
✓ local runtime references resolve
✓ commands can be exercised independently
✓ deterministic tests pass
✓ example Level 1 workflow completes
✓ extension packs do not redefine core lifecycle
✓ benchmark fixtures execute
✓ clean consumer-project installation succeeds
```

The original bootstrap correctly treats installability as a product requirement rather than a documentation concern.

---

# 22. Stage 18 — Publish and External Smoke Test

After publication verify:

```text
✓ repository is public
✓ CI passes
✓ README installation commands work
✓ skills list correctly
✓ intended skills install individually
✓ at least one clean consumer project completes a UI/UX workflow
✓ extension-pack examples are reproducible
✓ benchmark command is documented
✓ at least two agent targets are tested where practical
```

Only then is `ui-ux-design-skills` implementation-ready.

---

# 23. Bootstrap Working Artifacts

Temporary bootstrap research may include:

```text
project-goal.md
ui-ux-production-domain-research.md
human-science-research.md
synthetic-user-research-analysis.md
ai-skills-and-tools-research.md
extension-pack-candidates.md
example-catalogue-plan.md
benchmark-design.md
```

These are working inputs.

Stable conclusions belong in the four canonical specifications.

---

# 24. Governing Production Model

The project should ultimately converge on:

```text
OBSERVE
   ↓
UNDERSTAND
   ↓
HYPOTHESISE
   ↓
EXPLORE CHEAPLY
   ↓
SELECT
   ↓
APPROVE
   ↓
INCREASE FIDELITY
   ↓
VALIDATE
   ↓
DIAGNOSE
   ↓
REFINE THE SMALLEST SUFFICIENT SCOPE
   ↓
HAND OFF
```

And two governing rules:

> **Use the lowest-fidelity representation capable of resolving the current UX uncertainty.**

> **Treat human behaviour as an engineering concern that requires evidence, explicit hypotheses and measurable validation, not design folklore.**

---

**UI/UX Design Skills — New Project Bootstrap Process v1**