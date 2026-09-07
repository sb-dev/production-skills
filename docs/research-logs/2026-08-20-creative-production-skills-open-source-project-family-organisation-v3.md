# Creative Production Skills — Open-Source Project Family Organisation

## 1. Purpose

This specification defines how the selected open-source creative production projects should be organised as a coherent **project family** while remaining independently useful and independently evolvable.

The initial projects are:

```text
video-production-skills
narrative-production-skills
comic-production-skills
video-game-asset-production-skills
music-production-skills
advertising-production-skills
```

A seventh project may emerge later:

```text
creative-production-skills
```

`creative-production-skills` is **not** a framework that the other projects depend on from day one.

It becomes the home of abstractions that have first been implemented independently in at least two production domains and proven to be genuinely reusable.

The governing extraction rule is:

> **Share an abstraction only after at least two production domains need substantially the same concept.**

The project family therefore develops vertically first and extracts horizontally only after reuse is demonstrated.

```text
build domain workflow
        ↓
observe genuine duplication
        ↓
prove semantic equivalence
        ↓
extract stable abstraction
        ↓
Creative Production Skills
```

This avoids designing a universal creative-production framework before the production domains are understood.

---

# 2. Project Family

## 2.1 Video Production Skills

Owns AI video production workflows such as:

- draft generation;
- character design sheets for visual production;
- storyboards;
- reference frames;
- motion prototypes;
- image-to-video;
- multi-shot generation;
- continuity;
- video assembly;
- UGC video;
- media QC;
- creative-effectiveness evaluation.

Typical progression:

```text
Brief
 ↓
Drafts
 ↓
Character Sheet
 ↓
Storyboard
 ↓
Reference Frames
 ↓
Motion Prototypes
 ↓
Final Shots
 ↓
Assembly
 ↓
Evaluation
```

---

## 2.2 Narrative Production Skills

Owns medium-independent story development.

Capabilities may include:

- premise development;
- story concepts;
- character profiles;
- world building;
- plot;
- beat sheets;
- scene cards;
- scenes;
- chapters;
- dialogue;
- screenplay narrative;
- continuity;
- editorial evaluation.

Typical progression:

```text
Premise
 ↓
Concept Drafts
 ↓
World
 ↓
Characters
 ↓
Plot
 ↓
Beats
 ↓
Scenes
 ↓
Manuscript / Screenplay
 ↓
Editorial Evaluation
```

Narrative Production Skills owns **story**, not visual production.

---

## 2.3 Comic Production Skills

Owns comic-specific visual narrative production.

Capabilities may include:

- comic scripting;
- page breakdown;
- page layout;
- panel design;
- character/reference use;
- panel generation;
- lettering;
- captions;
- page assembly;
- visual continuity;
- readability evaluation.

Typical progression:

```text
Story / Script
 ↓
Page Plan
 ↓
Layout Drafts
 ↓
Panel Drafts
 ↓
Approved Panels
 ↓
Final Artwork
 ↓
Lettering
 ↓
Page Assembly
 ↓
Evaluation
```

Comic panels and video storyboard panels may initially remain separate abstractions even when they appear similar.

---

## 2.4 Music Production Skills

Owns AI-assisted music production.

Capabilities may include:

- music briefs;
- reference analysis;
- motifs;
- hooks;
- lyrics;
- song structure;
- arrangement;
- instrumentation;
- vocals;
- stems;
- sound design;
- mixing;
- mastering;
- music evaluation.

Typical progression:

```text
Creative Brief
 ↓
Reference Analysis
 ↓
Concept Drafts
 ↓
Motifs / Hooks
 ↓
Arrangement
 ↓
Performance / Generation
 ↓
Stems
 ↓
Mix
 ↓
Master
 ↓
Evaluation
```

Drafts may be MIDI, motifs, rough stems, arrangement sketches, or low-cost previews rather than merely lower-quality final audio.

---


## 2.5 Video Game Asset Production Skills

Owns production of reusable, consistent, game-ready creative assets.

Capabilities may include:

- asset briefs and inventories;
- art direction and style references;
- character design sheets;
- environment and location sheets;
- props and item sets;
- 2D sprites and sprite sheets;
- animation states;
- tilesets and modular environment kits;
- backgrounds;
- portraits and dialogue art;
- UI graphics and icon sets;
- VFX concepts and sprite sheets;
- 3D concept turnarounds;
- model, texture and material production where supported;
- rig/animation asset production where supported;
- asset variants;
- consistency and technical-readiness evaluation.

Typical progression:

```text
Game / Art Brief
 ↓
Asset Inventory
 ↓
Style Drafts
 ↓
Character / Environment / Prop Sheets
 ↓
Asset Draft Sets
 ↓
Selected Assets
 ↓
Refinement
 ↓
Animation / Variants / Materials
 ↓
Game-Ready Assets
 ↓
Evaluation
```

Draft production should be used aggressively for:

- silhouettes;
- art-direction exploration;
- character and enemy variants;
- prop concepts;
- environment kits;
- sprite poses;
- UI/icon alternatives;
- texture/material studies.

Higher-cost generation should be reserved for selected assets that need final fidelity or consistency.

Video Game Asset Production Skills owns **asset production**, not:

- gameplay design;
- game rules;
- engine code;
- runtime systems;
- AI/gameplay behaviour;
- level logic;
- build/release engineering.

It may produce engine-ready files and metadata where practical, but engine implementation belongs outside the project.

It may compose other projects through artifacts:

```text
Narrative Production Skills
        ↓
world / character / item material
        ↓
Video Game Asset Production Skills
```

```text
Music Production Skills
        ↓
music / audio assets
        ↓
game project
```

The project should not absorb Music Production Skills merely because music is also a game asset.

---

## 2.6 Advertising Production Skills

Owns campaign strategy and cross-channel creative orchestration.

Capabilities may include:

- audience;
- positioning;
- proposition;
- campaign brief;
- concepts;
- angles;
- hooks;
- claims;
- copywriting;
- campaign structure;
- channel adaptation;
- campaign evaluation.

It may compose specialist production projects:

```text
Advertising Production Skills
        │
        ├── Narrative Production Skills
        ├── Video Production Skills
        ├── Music Production Skills
        └── native copy workflows
```

Advertising Production Skills owns campaign logic and messaging rather than duplicating specialist media production.

---

# 3. Creative Production Skills

`creative-production-skills` should begin only when a proven shared abstraction exists.

It should not initially become:

```text
creative-production-skills/
├── video/
├── narrative/
├── comic/
├── video-game-assets/
├── music/
└── advertising/
```

That would centralise the domains prematurely.

Instead, it should eventually contain only proven cross-domain capabilities.

Possible future candidates include:

- creative lifecycle;
- provenance;
- draft-set semantics;
- promotion/refinement semantics;
- shared character identity concepts;
- generic evaluation lifecycle;
- shared artifact lineage;
- common model-routing policy where genuinely provider-independent.

These are candidates, not commitments.

---

# 4. Extraction Policy

An abstraction may move into Creative Production Skills only when all four conditions are satisfied.

## 4.1 Repeated Need

At least two production domains have independently implemented the concept.

## 4.2 Semantic Equivalence

The concept means substantially the same thing in both domains.

Similar names are insufficient.

For example:

```text
video storyboard panel
comic panel
```

may share visual characteristics without sharing the same production semantics.

## 4.3 Stable Common Contract

A reusable representation or workflow can be extracted without weakening either domain.

## 4.4 Net Simplification

Extraction must remove more duplication than the shared abstraction adds in coupling, indirection, or complexity.

The decision path is:

```text
same-looking concept
       ↓
implemented in 2+ domains?
       ↓ yes
semantically equivalent?
       ↓ yes
stable reusable contract?
       ↓ yes
net simplification?
       ↓ yes
extract
```

Otherwise, leave the concepts independent.

---

# 5. Shared Open-Source Principles

All projects follow the same organisational principles.

## Repository as Source of Truth

The repository remains canonical for:

- skills;
- specifications;
- workflows;
- artifact formats;
- examples;
- evals;
- production guides;
- contribution rules;
- release history.

## Vertical First

Build complete domain workflows before extracting shared infrastructure.

## Draft Before Expensive Final Production

Cheap exploration is a production capability.

It should be explicit in workflows rather than treated as an implementation shortcut.

## Preserve Approved Work

Promote and refine approved artifacts rather than restarting from the original brief.

## Evidence Over Claims

Use examples, evals, finished outputs, and showcases to demonstrate value.

## Progressive Disclosure

Present increasing depth through:

```text
Homepage
→ README
→ Quick Start
→ Examples
→ Docs
→ Production Guides
→ Engineering Specs
```

## Domain Ownership

A project owns its production grammar.

Cross-project abstractions must not erase useful domain-specific concepts.

---

# 6. Unified Three-Spec Model

Each domain project should have exactly three primary engineering specifications.

```text
docs/
├── 01-creative-skills-system-spec.md
├── 02-creative-skills-workflows-and-artifacts-spec.md
└── 03-creative-skills-repository-and-contracts-spec.md
```

These filenames may be prefixed with the domain when external distribution makes ambiguity likely.

For example:

```text
01-video-creative-skills-system-spec.md
02-video-creative-skills-workflows-and-artifacts-spec.md
03-video-creative-skills-repository-and-contracts-spec.md
```

Inside a repository, the shorter names are preferred.

---

## 6.1 Spec 1 — Creative Skills System

Defines **what the project is** and where its boundaries are.

It owns:

- purpose;
- domain scope;
- non-goals;
- architectural principles;
- core skills;
- external dependencies;
- project boundaries;
- composition with other projects;
- routing/execution model at a high level;
- build order;
- system-level acceptance criteria.

It should answer:

> What system are we building, what does it own, and what does it deliberately not own?

It should not contain detailed artifact schemas or full `SKILL.md` bodies.

---

## 6.2 Spec 2 — Creative Skills Workflows and Artifacts

Defines **how creative production happens**.

It owns:

- `draft → refine → final`;
- generation/production policy;
- domain-specific production workflows;
- draft sets;
- selection;
- promotion;
- provenance;
- first-class creative artifacts;
- artifact relationships;
- evaluation by lifecycle stage;
- retry/refinement behaviour;
- example end-to-end flows.

Examples:

### Video

```text
character sheet
→ storyboard
→ reference frame
→ motion prototype
→ final shot
```

### Narrative

```text
premise
→ story concept
→ beat sheet
→ scene card
→ scene
→ chapter
```

### Comic

```text
script
→ page plan
→ layout
→ panel draft
→ final panel
→ page
```

### Video Game Assets

```text
asset brief
→ style / reference sheet
→ asset draft
→ selected asset
→ variants / animation / materials
→ game-ready asset
```

### Music

```text
motif
→ arrangement
→ stems
→ mix
→ master
```

### Advertising

```text
brief
→ concept
→ message
→ channel creative
→ campaign asset
```

It should answer:

> What artifacts exist, how do they evolve, and how does the production process preserve approved work?

---

## 6.3 Spec 3 — Creative Skills Repository and Contracts

Defines **how the project is packaged as an Agent Skills repository**.

It owns:

- repository structure;
- skill directories;
- `SKILL.md` contracts;
- frontmatter;
- references;
- scripts;
- assets;
- eval layout;
- peer skill requirements;
- installation expectations;
- contribution boundaries relevant to skills;
- technical acceptance criteria.

It should answer:

> How is the production model encoded into installable, testable Agent Skills?

Only this specification should contain complete `SKILL.md` contract definitions.

---

# 7. Why Three Specs Are Enough

The three specifications map cleanly to three different questions:

```text
System
→ What are we building?

Workflows and Artifacts
→ How does the domain produce creative work?

Repository and Contracts
→ How is that behaviour packaged into Agent Skills?
```

This is preferable to splitting routing, evaluation, artifacts, or architecture into separate top-level specifications too early.

Detailed material should move into:

- `references/`;
- production guides;
- technical reference documents;

only when the primary specs become difficult to use.

---

# 8. Family Contract and Mandatory Bootstrap Process

The project family needs shared rules, but these belong in **this organisation specification**, not as a fourth specification repeated in every repository.

Shared family rules include:

- naming;
- three-spec structure;
- lifecycle terminology;
- extraction policy;
- repository/public-surface conventions;
- skill packaging;
- distribution and installation;
- contribution expectations;
- interoperability principles;
- bootstrap completion gates.

A domain project may deliberately diverge when its production grammar requires it, but the divergence should be explicit.

Every new family project must follow the separate:

```text
Creative Production Skills — New Project Bootstrap Process
```

The relationship is:

```text
Project Family Organisation
        │
        ├── defines projects, shared rules,
        │   extraction policy and repository conventions
        │
        └── mandates
                ↓
New Project Bootstrap Process
                ↓
goals
→ production-domain research
→ workflow + artifact mapping
→ draft strategy
→ AI skills/tools research
→ execution-layer decision
→ gap analysis
→ skill + eval design
→ three canonical specs
→ repository scaffold
→ local install validation
→ public GitHub repository
→ external install smoke test
```

The organisation specification is the **family contract**.

The bootstrap process is the **operating procedure for creating a new member project**.

This keeps each project lean while making project creation repeatable.

---

# 9. Improvement: Use Domain-Native Skill Names

Do not force identical six-skill structures onto every project.

Video currently has:

```text
replicate-generate
replicate-character
replicate-product
replicate-video
replicate-ugc
replicate-evaluate
```

Narrative, comics, video-game assets, music, and advertising should define the smallest useful set of skills for their own domain.

For example, Narrative Production Skills might eventually contain:

```text
narrative-concept
narrative-character
narrative-world
narrative-plot
narrative-write
narrative-evaluate
```

Music might use:

```text
music-concept
music-compose
music-arrange
music-vocal
music-mix
music-evaluate
```

Do not manufacture symmetry between repositories.

Consistency should exist at the lifecycle and organisational level, not through artificial skill parity.

---

# 10. Improvement: Separate Domain Workflows from Provider Skills

Provider/model integration should remain below domain production knowledge.

For Video Production Skills:

```text
Video Production Skills
        ↓
Replicate official skills
        ↓
Replicate
```

Other projects may use different provider/tool skills.

For example:

```text
Music Production Skills
        ↓
music-generation / audio-processing provider skills
```

The project family should standardise production principles without assuming every creative domain uses Replicate.

This makes eventual shared abstractions more durable.

---

# 11. Improvement: Treat Evals as Part of Product Design

Every project should develop evals alongside its skills.

Evaluation is not merely CI for `SKILL.md`.

It is evidence that the production behaviour works.

Each material workflow should include:

- normal case;
- draft case;
- refinement case;
- final case;
- failure/boundary case.

Examples:

### Narrative

- plot coherence;
- character continuity;
- scene objective;
- revision preserves approved beats.

### Comic

- page readability;
- character consistency;
- panel sequence;
- lettering boundaries.

### Music

- arrangement structure;
- motif retention;
- revision preservation;
- final mix constraints.

### Video Game Assets

- style consistency;
- character/prop/environment continuity;
- sprite-sheet coherence;
- animation-state completeness;
- texture/material consistency;
- required dimensions/transparency/export constraints;
- refinement preserves approved silhouette and art direction.

### Advertising

- claim fidelity;
- audience/positioning alignment;
- CTA;
- channel adaptation.

Evals should evolve with domain quality standards.

---

# 12. Improvement: Maintain an Extraction Candidate Register

Do not create shared abstractions speculatively.

Each project may record potential cross-domain reuse in a lightweight register:

```text
docs/extraction-candidates.md
```

Example:

```text
Candidate: draft_set

Implemented in:
- video-production-skills

Possible second domain:
- comic-production-skills

Status:
observe only
```

After a second implementation:

```text
Candidate: artifact_provenance

Implemented in:
- video-production-skills
- narrative-production-skills

Differences:
- ...

Potential common contract:
- ...

Decision:
not ready / extract
```

The register is evidence for extraction, not a roadmap forcing extraction.

---

# 13. Improvement: Cross-Project Composition Through Artifacts

Projects should compose through accepted artifacts before introducing shared runtime APIs.

Examples:

```text
Narrative Production Skills
        ↓
screenplay
        ↓
Video Production Skills
```

```text
Narrative Production Skills
        ↓
story + character material
        ↓
Comic Production Skills
```

```text
Narrative Production Skills
        ↓
world + character + item material
        ↓
Video Game Asset Production Skills
```

```text
Advertising Production Skills
        ↓
campaign brief
        ├── Video Production Skills
        └── Music Production Skills
```

Artifact-based composition keeps repositories loosely coupled.

Only introduce shared programmatic interfaces when real integration requirements justify them.

---

# 14. Improvement: Cross-Project Artifact Handoffs Must Be Explicit

Each project should document the artifacts it can consume from and produce for other projects.

Example:

### Narrative Production Skills

Produces:

```text
story brief
character profile
world bible
screenplay
scene plan
```

### Video Production Skills

Consumes:

```text
screenplay
character profile
scene plan
```

Produces:

```text
character sheet
storyboard
reference frames
final video
```


### Video Game Asset Production Skills

Consumes:

```text
world bible
character profile
item / creature descriptions
visual references
art direction
```

Produces:

```text
character design sheets
environment sheets
prop / item sets
sprite sheets
tilesets
backgrounds
UI / icon sets
VFX assets
textures / materials
game-ready variants
asset metadata
```

These artifacts may be consumed directly by a game project without requiring the narrative or video repositories at runtime.

The goal is not to standardise every schema immediately.

The goal is to make handoff boundaries visible.

If two projects eventually converge on the same artifact contract, it becomes an extraction candidate.

---

# 15. Unified Repository Pattern

Each domain repository should begin from the same lean open-source scaffold:

```text
<domain>-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── .gitignore
│
├── docs/
│   ├── 01-creative-skills-system-spec.md
│   ├── 02-creative-skills-workflows-and-artifacts-spec.md
│   ├── 03-creative-skills-repository-and-contracts-spec.md
│   └── extraction-candidates.md
│
├── skills/
│   └── <skill-name>/
│       ├── SKILL.md
│       ├── references/
│       ├── assets/
│       ├── scripts/
│       └── evals/
│
├── examples/
│   └── ...
│
├── evals/
│   └── end-to-end/
│
└── .github/
    ├── ISSUE_TEMPLATE/
    ├── PULL_REQUEST_TEMPLATE.md
    └── workflows/
```

Only create optional directories when the project actually needs them.

Production Guides, showcases, recipes, website content, and richer documentation should be added as real project material appears rather than scaffolded empty for symmetry.

## 15.1 Skill Packaging

Every installable skill must be self-contained inside:

```text
skills/<skill-name>/
```

Runtime dependencies used by that skill must live with it:

```text
SKILL.md
references/
assets/
scripts/
```

An installed skill must not depend on repository-level `docs/`, `guides/`, `examples/`, or another skill's private files unless an explicit installation dependency exists.

Selective installation is a supported use case, so installing one skill must produce a complete usable skill.

If two skills temporarily duplicate a small reference, prefer local duplication until a stable shared contract and distribution mechanism is justified.

## 15.2 Repository Bootstrap

A new repository scaffold should initialise:

```text
git repository
main branch
README
open-source licence
contribution files
GitHub metadata
```

Licence selection must consider licences of any adapted upstream material.

The project bootstrap is not complete merely because the scaffold exists.

The repository must also pass the installation and publication gates defined below.

---

# 16. Public Surfaces

All projects use the same conceptual public surfaces.

| Surface | Purpose |
|---|---|
| README | Acquisition and first success |
| Skills | Installable production behaviour |
| Docs | Behaviour and reference |
| Production Guides | Domain methodology and judgement |
| Examples | Executable production workflows |
| Evals | Evidence and regression protection |
| Showcases | Finished production evidence |
| Recipes | Reusable specialised workflows |
| Blog | Current practice and discovery |
| Website | Visual public entry point |

Not every project needs all surfaces immediately.

---

# 17. Progressive Public Product

When a production capability becomes usable, update the smallest useful public surface set.

At minimum:

```text
skill
+
documentation
+
eval
+
realistic example
+
working installation path
```

When the capability is visually or audibly demonstrable, add a showcase once the result is strong enough to act as evidence.

A capability is not publicly complete if users can read about it but cannot install and use it from the repository.

Do not treat public content as a separate post-development marketing backlog.

---

# 17.1 Distribution and Skill Installation

The family uses the open Agent Skills CLI as the default repository distribution mechanism.

A project repository should support:

```bash
# Inspect available skills
npx skills add <org>/<repo> --list

# Install repository skills into the current project
npx skills add <org>/<repo>

# Install one skill
npx skills add <org>/<repo> --skill <skill-name>

# Target an agent explicitly
npx skills add <org>/<repo> \
  --skill <skill-name> \
  --agent claude-code
```

Equivalent supported agent targets, such as Codex, may be documented where applicable.

## Project-Local by Default

Project-local installation is the default recommendation.

It provides:

- explicit project dependencies;
- reproducibility;
- team visibility;
- isolation between unrelated projects;
- easier compatibility management.

Global installation remains optional for users who deliberately want a skill available across projects.

## Installed Skill Tracking

Consuming projects may use supported Skills CLI commands such as:

```bash
npx skills list
npx skills check
npx skills update
npx skills generate-lock
```

A generated lock file may be committed to record installed skill sources.

Experimental restoration behaviour should not become a family requirement until stable.

## Local Install Smoke Test

Before publishing a repository, validate discovery and installation from the local repository:

```bash
npx skills add . --list
```

Then install each intended skill into a clean temporary consumer project.

Verify:

- skill discovery;
- valid `SKILL.md`;
- references present;
- scripts/assets present where required;
- no broken repository-relative runtime references.

## GitHub Install Smoke Test

After publication, repeat the test from the public GitHub repository:

```bash
npx skills add <org>/<repo> --list
npx skills add <org>/<repo> --skill <skill-name> --agent claude-code
```

Where practical, test at least one additional supported agent target.

A new project is not considered bootstrapped until this external installation succeeds.

---

# 17.2 Family CI Baseline

Every project should automate cheap structural validation.

Minimum useful CI:

```text
validate SKILL.md/frontmatter
validate required skill files
run deterministic tests
run cheap eval fixtures
test `npx skills add . --list`
test local installation of each skill
detect broken runtime references
```

Provider-backed generation evals may run separately when they incur meaningful cost.

Installability is part of product quality, so installation smoke tests belong in CI rather than remaining a README promise.

---

# 18. Shared Website Strategy

Do not immediately build five unrelated large websites.

Use one of two stages.

## Stage 1 — Repository-First

Each project relies primarily on:

- GitHub README;
- Docs;
- Examples;
- Showcases.

This is the default starting point.

## Stage 2 — Unified Project-Family Website

Once multiple projects have substantial public material, create a family website that presents:

```text
Creative Production Skills

Projects
├── Video
├── Narrative
├── Comics
├── Game Assets
├── Music
└── Advertising

Guides
Examples
Showcases
Blog
GitHub
```

The website is a presentation/discovery layer over the independent repositories.

It must not create a hidden shared framework dependency.

---

# 19. Project Naming

Use consistent serious names:

```text
Video Production Skills
Narrative Production Skills
Comic Production Skills
Video Game Asset Production Skills
Music Production Skills
Advertising Production Skills
```

Repository names:

```text
video-production-skills
narrative-production-skills
comic-production-skills
video-game-asset-production-skills
music-production-skills
advertising-production-skills
```

Future extracted project:

```text
Creative Production Skills
creative-production-skills
```

Avoid inventing umbrella abstractions or branding that obscures what each project does.

---

# 19.1 New Project Completion Gates

The mandatory New Project Bootstrap Process has two final gates.

## Scaffold Gate

Before publication:

```text
✓ repository initialised
✓ three canonical specs exist directly under /docs
✓ README exists
✓ licence selected
✓ CONTRIBUTING.md exists
✓ CODE_OF_CONDUCT.md exists
✓ SECURITY.md exists
✓ skills are self-contained
✓ skill evals exist
✓ at least one realistic example exists
✓ local skill installation succeeds
```

## Publication Gate

After publication:

```text
✓ public GitHub repository accessible
✓ README installation instructions work
✓ skill discovery from GitHub succeeds
✓ intended skills install individually
✓ installed skills contain required references/scripts/assets
✓ CI passes
✓ repository metadata configured
```

A family project should be described as **bootstrapped** only after both gates pass.

---

# 20. Versioning and Releases

Each domain project versions independently.

Use semantic versioning unless a repository has a strong reason to use another scheme.

A release should describe changes in production behaviour:

- new skills;
- new artifacts;
- changed workflows;
- changed lifecycle semantics;
- new evals;
- compatibility changes;
- newly supported providers/tools;
- extracted abstractions.

When behaviour moves into Creative Production Skills, releases of consuming projects should explicitly document:

- what moved;
- why it was extracted;
- compatibility requirements;
- whether behaviour changed.

---

# 21. Cross-Project Dependency Policy

Dependencies between projects should be optional until composition genuinely requires them.

Prefer:

```text
artifact handoff
```

over:

```text
shared runtime dependency
```

For example:

```text
Narrative → screenplay file → Video
```

is preferable to requiring Video Production Skills to import Narrative Production Skills.

When Advertising Production Skills orchestrates other domains, it may recommend or require those project skills for a specific recipe, but its core repository should not absorb their behaviour.

---

# 22. Open-Source Contribution Model

Contributors should be able to work at several levels.

## Skills

Improve domain production behaviour.

## Evals

Add realistic quality and regression cases.

## Production Knowledge

Improve references, techniques, and domain guidance.

## Examples

Add complete real workflows.

## Recipes

Add specialised compositions.

## Cross-Project Research

Document a possible reusable abstraction in an extraction candidate register.

## Creative Production Skills

Contribute shared abstractions only after the extraction criteria are met.

---

# 23. Unified Contribution Quality Bar

A significant production change should answer:

```text
What production problem does this solve?
Which lifecycle stage changes?
Which artifacts change?
What approved behaviour must remain stable?
How is the change evaluated?
What example demonstrates it?
Does this duplicate another project's behaviour?
```

If the last answer is yes, consider whether the concept is an extraction candidate.

Do not extract automatically.

---

# 24. Content Ownership

Each type of information has one canonical home.

| Information | Canonical location |
|---|---|
| Project purpose | README / System Spec |
| Architecture | System Spec / architecture docs |
| Production workflow | Workflow and Artifacts Spec |
| Artifact semantics | Workflow and Artifacts Spec / reference docs |
| Skill contracts | Repository and Contracts Spec / `SKILL.md` |
| Production methodology | Production Guides |
| Executable scenarios | Examples |
| Quality behaviour | Evals |
| Finished evidence | Showcases |
| Reusable specialisation | Recipes |
| Cross-domain reuse candidates | `extraction-candidates.md` |
| Actual shared abstractions | Creative Production Skills |

This prevents tutorials, blogs, or examples from silently redefining product behaviour.

---

# 25. Content Reuse

Prefer one canonical source feeding several surfaces.

```text
Canonical example
      │
      ├── README walkthrough
      ├── Docs guide
      ├── Production Guide
      ├── Eval fixture
      ├── Showcase
      └── Website demo
```

Likewise:

```text
SKILL.md
   │
   ├── skill catalogue
   ├── Docs summary
   └── website skill page
```

The project family should minimise independent rewrites of the same production knowledge.

---

# 26. Recommended Development Sequence

Do not launch all six projects at equal depth simultaneously.

Recommended sequence:

```text
1. Video Production Skills
   ↓
2. Narrative Production Skills
   ↓
3. Comic Production Skills
   ↓
4. Video Game Asset Production Skills
   ↓
5. Music Production Skills
   ↓
6. Advertising Production Skills
   ↓
7. Review extraction candidates
   ↓
8. Create Creative Production Skills only if justified
```

This order is not a dependency graph.

It allows the family to learn from each implementation while preserving independent domain design.

Advertising comes later because it benefits from composing mature media-production projects.

---

# 27. When Creative Production Skills Should Be Created

Do not create the repository merely because the name is useful.

Create it when at least one abstraction passes the extraction policy.

A valid first release might be extremely small.

For example:

```text
creative-production-skills/
└── skills/
    └── artifact-provenance/
```

if provenance has independently converged across multiple domains.

The project should grow through proven extraction rather than planned centralisation.

---

# 28. Anti-Patterns

Avoid:

## Universal Creative Schema First

Do not invent a generic schema intended to represent novels, video shots, comic panels, songs, and campaigns before those domains are implemented.

## Forced Skill Symmetry

Do not require each project to have the same number or naming of skills.

## Shared Runtime Too Early

Do not introduce a common framework merely to make repositories look consistent.

## Premature Character Abstraction

A narrative character profile, visual character sheet, and voice identity may ultimately relate, but should not be merged until their real shared contract is understood.

## Vague Generic Concepts

Avoid abstractions such as:

```text
CreativeUnit
CreativeNode
ProductionComponent
UniversalAsset
```

unless concrete implementations prove that they simplify real workflows.

## Turning Game Asset Production into Game Development

Video Game Asset Production Skills should produce assets and asset metadata, not grow into a game engine, gameplay framework, level-design system, or release toolchain.

## Copying Domain Logic into Advertising

Advertising should orchestrate domain projects rather than reimplement video, narrative, music, or game-asset production.

---

# 29. Core Architecture Principle

The family follows:

```text
BUILD VERTICALLY
      ↓
LEARN FROM REAL WORKFLOWS
      ↓
OBSERVE DUPLICATION
      ↓
PROVE EQUIVALENCE
      ↓
EXTRACT ONLY WHAT IS STABLE
      ↓
CREATIVE PRODUCTION SKILLS
```

Not:

```text
DESIGN UNIVERSAL FRAMEWORK
      ↓
FORCE EVERY CREATIVE MEDIUM INTO IT
```

---

# 30. New Project Bootstrap Requirement

Every new domain project must follow the **Creative Production Skills — New Project Bootstrap Process**.

The operating sequence is:

```text
Project Idea
 ↓
Project Goal
 ↓
Production-Domain Research
 ↓
Workflow + Artifact Mapping
 ↓
Draft Strategy
 ↓
AI Skills / Tools Research
 ↓
Execution-Layer Decision
 ↓
Gap Analysis
 ↓
Skill + Eval Design
 ↓
Three Canonical Specs
 ↓
Cross-Project Review
 ↓
Repository Scaffold
 ↓
Local Installation Validation
 ↓
Public GitHub Repository
 ↓
External Installation Smoke Test
```

The bootstrap may produce temporary research inputs:

```text
project-goals.md
production-domain-research.md
ai-skills-and-tools-research.md
```

These are working artifacts, not additional canonical engineering specs.

Their stable conclusions should be absorbed into:

```text
docs/01-creative-skills-system-spec.md
docs/02-creative-skills-workflows-and-artifacts-spec.md
docs/03-creative-skills-repository-and-contracts-spec.md
```

A new project should initially contain only what is required to be useful and consumable:

```text
README
three canonical specs
initial self-contained skills
evals
one realistic end-to-end example
basic contributor/security material
working installation instructions
CI installation validation
```

Then add:

```text
Production Guides
more examples
showcases
recipes
website exposure
blog content
```

as real production material justifies them.

The bootstrap ends with a repository that can be:

```text
cloned
contributed to
installed into another project
used by an AI agent
```

not merely a repository containing specifications.

---

# 31. Summary

The selected projects form a family of independent vertical production systems:

```text
Video
Narrative
Comic
Video Game Assets
Music
Advertising
```

Each project gets three primary specifications:

```text
Creative Skills System
Creative Skills Workflows and Artifacts
Creative Skills Repository and Contracts
```

The family shares organisation, terminology, contribution principles, extraction rules, repository conventions, and a mandatory bootstrap process.

Every domain project must finish bootstrap as a **public, installable Agent Skills repository** with the three canonical specs directly under `/docs`.

It does **not** share a framework prematurely.

As real implementations converge, stable abstractions are extracted into:

```text
Creative Production Skills
```

The resulting architecture grows from demonstrated reuse rather than predicted reuse.

---

**Creative Production Skills — Open-Source Project Family Organisation v3**
