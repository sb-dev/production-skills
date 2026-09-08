# Graphic Novel Production Skills — New Project Bootstrap Process

**Status:** Bootstrap specification  
**Version:** 1.0  
**Date:** 8 September 2026

## 1. Purpose

This process defines how `graphic-novel-production-skills` moves from a project idea to a **specified, scaffolded, benchmarked, installable open-source Production Skills repository** for sequential visual storytelling.

The project should help AI agents turn an approved story, concept or narrative package into coherent graphic-novel pages and publication-ready editions rather than treating the work as isolated image generation.

The target production loop is expected to resemble:

```text
approved narrative / concept
→ graphic-novel brief
→ visual thesis and publication constraints
→ chapter / sequence decomposition
→ page and panel script
→ cheapest useful sequential representation
→ thumbnails / page layouts
→ panel staging / acting / continuity
→ art production
→ lettering / balloons / captions / SFX
→ colour / value / finishing
→ page / spread assembly
→ print / digital packaging
→ evaluation
→ diagnosis
→ smallest sufficient page / panel / lettering correction
→ publication-ready graphic novel
```

The exact workflow must be validated through professional comics and graphic-novel production practice before it becomes a skill contract.

`graphic-novel-production-skills` owns reusable production expertise for:

```text
sequential-art adaptation
chapter / issue / sequence decomposition
page and panel scripting
page turns and reveal design
panel rhythm and reading order
thumbnailing and page layout
visual staging
static character acting on the page
panel-to-panel continuity
location / prop continuity for sequential art
comic-specific reference packs
speech balloon / caption / sound-effect planning
lettering integration
colour / value hierarchy at page and sequence level
cover / interior relationship
print / fixed-layout digital / scroll-format preparation
sequential-art evaluation
publication handoffs
bounded repair
```

It does **not** own:

- underlying story canon, plot truth, prose/screenplay authorship or narrative continuity owned by Narrative Production Skills;
- generic character modelling, rigging or animation owned by Character Performance / 3D Production Skills;
- generic illustration or image-generation infrastructure;
- generic cinematography/video editing owned by Video Production Skills;
- generic publishing/distribution platforms;
- legal conclusions about copyright, licensing, likeness, trademarks or publishing rights owned by Legal Skills;
- project-specific canon outside the consuming project;
- Pactwright lifecycle authority.

The project may use image-generation, drawing, layout, lettering, publishing and DCC tools as execution layers without turning those tools into the reusable production architecture.

---

## 2. Production Skills Family Position and Boundaries

`graphic-novel-production-skills` is a **Production Skills family project**.

Its family role is:

```text
Narrative Production Skills
→ story / characters / world / dialogue / canon

Graphic Novel Production Skills
→ sequential visual adaptation / page-panel storytelling / lettering / edition production

Character Performance / 3D / image-generation execution tools
→ reusable visual references and specialist asset production where required

Video Production Skills
→ separate time-based visual production

Legal Skills
→ publishing / source / likeness / trademark / copyright constraints

Pactwright
→ optional lifecycle, Contracts and Evidence
```

Graphic Novel Production must remain independently installable and useful without Pactwright or any particular image-generation provider.

### Boundary with Narrative Production Skills

Narrative owns:

```text
what happens
why it happens
character motivation
world rules
dialogue meaning
story canon
reveals / setup / payoff
```

Graphic Novel Production owns:

```text
how story information is distributed across pages and panels
what is shown vs told
panel count / rhythm / size / transition
page-turn reveals
visual staging and acting
how much dialogue fits a panel/page
balloon / caption placement constraints
visual continuity
lettering integration
reader navigation
publication format
```

If page constraints require a material narrative rewrite, the project should return a bounded change request to Narrative rather than silently changing canon.

### Graphic novel page is not a storyboard

A storyboard is usually an intermediate planning artefact for time-based media. A graphic-novel page or scroll sequence is itself the final reader-facing temporal and spatial composition.

The core must therefore treat:

```text
storyboard panel
≠ final sequential-art panel
```

because graphic-novel production depends on gutters, simultaneous page visibility, panel hierarchy, reading order, balloon flow, page turns, spreads and reader-controlled pacing.

### Panel is not an image prompt

A production panel carries:

```text
narrative function
moment in time
character state
staging
camera / framing equivalent
composition
continuity references
text / lettering space
relationship to adjacent panels
page / spread role
reader-direction constraints
```

Image generation is one possible execution step, not the panel contract.

---

## 3. Initial Domain Evidence

The bootstrap should begin from comics production, book design and digital-publishing practice rather than current generative-image capabilities.

### Authoring representation and delivery representation differ

Print workflows impose provider-specific trim, bleed, gutter, colour, resolution and cover/interior constraints. Current KDP and IngramSpark documentation illustrate that publication delivery files must satisfy target-specific physical production requirements.

Design consequence:

```text
working page / editable source
≠ print-ready interior / cover
```

The project should keep publication-target constraints explicit rather than baking one printer's rules into the universal core.

References:

- https://kdp.amazon.com/en_US/help/topic/GVBQ3CMEQW3W2VL6
- https://www.ingramspark.com/blog/file-requirements-for-print-books

### Digital fixed-layout publishing is a distinct delivery mode

EPUB 3.3 defines fixed-layout publications as part of the EPUB family, alongside package, navigation, accessibility and reading-system requirements.

Design consequence:

```text
print page
≠ fixed-layout digital page
≠ vertical-scroll sequence
```

The core should own sequential-story semantics while delivery profiles and Extension Packs specialise layout/read-direction/packaging behaviour.

Reference:

- https://www.w3.org/publishing/epub/

### Reading order is production-critical

Sequential art depends on the intended order in which panels, balloons, captions and page regions are consumed. This order can be affected by layout, reading direction, translation/localisation and accessibility representation.

Design consequence:

Reading order must be explicitly evaluable rather than assumed from panel coordinates alone.

### Lettering is structural, not decorative

Dialogue balloons, captions, tails, sound effects and text density affect composition, pacing, acting and page readability.

Design consequence:

Lettering requirements must be present before final art is locked where practical.

### Page-level quality cannot be inferred from panel quality

Individually attractive panels can still produce a poor graphic-novel page through weak rhythm, unclear navigation, inconsistent scale, bad balloon flow or continuity errors.

Design consequence:

Evaluation must operate at multiple levels:

```text
panel
→ page
→ spread / scroll segment
→ sequence
→ chapter
→ volume
→ publication package
```

---

## 4. Governing Principles

### Sequential storytelling before illustration fidelity

Resolve narrative flow, panel roles and page rhythm before expensive final art.

### Cheapest useful sequential representation

Use the cheapest representation capable of answering the current question:

```text
story beat list
→ page allocation
→ panel script
→ stick-figure / primitive thumbnails
→ rough page layout
→ reference-aware roughs
→ representative finished page
→ final page set
→ publication-ready edition
```

Do not render finished panels before the sequence, page turn or lettering volume is proven.

### Narrative time and page time are different

A story event can be expanded, compressed, juxtaposed or omitted visually.

Preserve explicit mapping:

```text
narrative beat
→ page
→ panel(s)
→ represented moment / transition
```

### Page and panel hierarchy matter

Panel size, placement, bleed, whitespace, gutter and spread relationships communicate emphasis and pacing. Do not treat all panels as equal rectangular slots.

### Reader navigation must be intentional

The page should make intended reading order legible through layout, balloon flow, composition and culturally appropriate reading direction.

### Page turn is a commitment point

Right-hand/left-hand page position, spreads and reveal placement can materially alter impact. Print planning should consider pagination early enough to protect major reveals and spreads.

### Static acting is performance

Expression, pose, silhouette, gaze, gesture and interpersonal spacing carry character performance in sequential art even without animation.

Graphic Novel Production owns page-specific acting requirements; specialist character/image tools may execute the visual asset.

### Continuity must survive across panels and pages

Track applicable continuity for:

```text
character appearance
costume
props
injuries / state
handedness
position
screen / directional orientation equivalent
lighting / time of day
location layout
object placement
weather / damage
```

### Reference packs are production infrastructure

Character sheets, location references, prop sheets, palette/value references and recurring visual motifs should constrain later generations rather than remain inspirational moodboards only.

### Lettering space must be designed, not discovered late

Text density and balloon placement influence panel framing and composition. Preserve dialogue meaning while routing material text rewrites back to Narrative when necessary.

### Sound effects are visual-language elements

SFX may carry rhythm, impact, spatial origin, language and typography. They are not merely post-production labels.

### Colour is sequential hierarchy

Colour/value should support readability, scene continuity, mood and focal hierarchy across pages, not optimise isolated images only.

### Cover is not page one

Cover production has different marketing, title, logo, spine, back-cover and publication constraints. Keep cover design as a related but distinct artefact.

### Print and digital targets are production context

Trim, bleed, gutter, colour space, resolution, reading system and fixed-layout/scroll constraints should be selected from the intended publication target and verified near delivery.

### Localisation can change layout

Translated text length, reading direction, balloon shape and typography can change page composition. Research localisation-aware workflows rather than assuming text replacement is free.

### Accessibility is part of digital publication quality

Research reading order, textual alternatives, navigation and accessible fixed-layout publication practices during the digital-delivery stages.

### Preserve approved sequential work

An approved page breakdown, composition, character pose, balloon path, colour decision or reveal should not be regenerated during unrelated corrections.

### Correct the smallest responsible layer

Examples:

```text
story beat missing
→ Narrative or page-script mapping

page feels rushed
→ page / panel allocation

reader order unclear
→ layout / composition / balloon flow

character face drifts
→ character-reference / panel art execution

prop switches hands
→ continuity / panel correction

balloon covers focal action
→ lettering / composition

colour destroys focal hierarchy
→ colour/value pass

print trim cuts text
→ publication layout / delivery

EPUB reading order wrong
→ digital packaging / accessibility mapping
```

---

# 5. Bootstrap Flow

```text
PROJECT IDEA
    ↓
0. Create Bootstrap Workspace Repository
    ↓
1. Define Graphic-Novel Domain and Adjacent Boundaries
    ↓
2. Research Professional Comics / Graphic-Novel Production
    ↓
3. Define Narrative-to-Sequential Adaptation Model
    ↓
4. Define Chapter, Sequence, Page and Panel Artefact Model
    ↓
5. Define Visual Language, Staging and Continuity Model
    ↓
6. Define Thumbnail, Layout, Page-Turn and Reading-Order Model
    ↓
7. Define Character / Location / Prop Reference Infrastructure
    ↓
8. Define Art, Ink, Colour and Surface Production Model
    ↓
9. Define Lettering, Balloons, Captions and SFX Model
    ↓
10. Define Cover, Print, Digital and Localisation Delivery
    ↓
11. Research AI Skills, Illustration, Layout and Publishing Tools
    ↓
12. Choose Execution Layer and Tool Boundaries
    ↓
13. Gap Analysis + Over-Engineering Guardrails
    ↓
14. Design Core Skills and Commands
    ↓
15. Design Extension Packs and Pack Authoring
    ↓
16. Design Five Progressive Example Levels
    ↓
17. Design Canonical Graphic-Novel Stress Tests
    ↓
18. Design Evals, Benchmarks and Regression Fixtures
    ↓
19. Generate Six Canonical Specifications
    ↓
20. Design Public README
    ↓
21. Cross-Project Review
    ↓
22. Scaffold Production Repository
    ↓
23. Implement and Prove Core Vertical
    ↓
24. Expand Progressive Coverage and Extension Packs
    ↓
25. Validate Installation and Repository Integrity
    ↓
26. Optional Pactwright Integration + Registry Promotion
    ↓
27. Review Shared-Abstraction Candidates
    ↓
MATURE GRAPHIC NOVEL PRODUCTION SKILLS PROJECT
```

The Stage 0 repository is the durable bootstrap workspace, not the production scaffold created at Stage 22.

---

# 6. Stage 0 — Create Bootstrap Workspace Repository

Create `sb-dev/graphic-novel-production-skills` before substantive bootstrap research begins.

Initial structure:

```text
graphic-novel-production-skills/
├── README.md
└── docs/
    └── research-logs/
        ├── README.md
        └── 2026-09-08-graphic-novel-production-skills-new-project-bootstrap-process.md
```

Do not create `skills/`, `examples/`, `benchmarks/`, `extension-packs/`, image-generation integrations, publishing tooling, CI or package metadata until later stages justify them.

Every substantive stage should persist detailed findings under `docs/research-logs/`.

Repository creation alone does **not** make the project `scaffolded`.

**Exit:** later stages can continue primarily from durable research logs.

---

# 7. Stage 1 — Define Graphic-Novel Domain and Adjacent Boundaries

Resolve ownership across:

```text
story adaptation
comic script
chapter / sequence decomposition
page / panel planning
thumbnailing
layout
panel staging
character acting
continuity
visual reference management
line / ink / rendered art direction
colour planning
lettering
sound effects
covers
print packaging
fixed-layout digital
vertical-scroll adaptation
localisation
sequential-art evaluation
```

Define handoffs with:

```text
Narrative Production Skills
Character Performance Skills
3D Production Skills
Video Production Skills
Legal Skills
Deep Research Skills
future illustration / image-production skills
Software Engineering Skills
QA / Evaluation Skills
Pactwright
```

Key questions:

- How much dialogue compression may Graphic Novel Production perform without reopening Narrative?
- Does core own visual character design or comic-specific character reference requirements only?
- Where does generic illustration craft stop and page-specific sequential-art production begin?
- Which 3D reference/layout tools are execution aids versus domain-owned artefacts?
- Does vertical-scroll production belong in core or an Extension Pack?
- How should print, digital fixed-layout and scroll formats share sequential semantics without forcing one layout model?

**Research-log output:** domain charter, ownership map, handoff rules, intended users and non-goals.

**Exit:** the project can explain sequential-art ownership without duplicating Narrative or generic image production.

---

# 8. Stage 2 — Research Professional Comics / Graphic-Novel Production

Study complementary practices:

```text
writer / artist collaboration
comic scripting
editorial development
thumbnailing / roughs
pencilling
inking
colouring
flatting
lettering
cover design
page / book design
manga production
European album production
US comics / graphic novels
independent comics
children's graphic novels
non-fiction / documentary comics
webtoon / vertical-scroll production
print prepress
digital fixed-layout publishing
localisation / translation
accessibility
```

Capture:

```text
roles
terminology
workflow stages
working artefacts
cheap representations
approval points
page / panel conventions
reading order
page-turn strategy
reference systems
continuity practice
lettering workflow
colour workflow
prepress
common failures
repair scopes
quality criteria
handoffs
```

Do not import one publisher's house style or one country's visual grammar as universal law.

**Exit:** the production model is grounded in real sequential-art practice rather than image-provider capabilities.

---

# 9. Stage 3 — Define Narrative-to-Sequential Adaptation Model

Research how prose, screenplay, story outline or original concept becomes sequential visual storytelling.

Distinguish:

```text
source canon
adaptation decision
visualised beat
omitted beat
compressed beat
expanded beat
new visual bridge
page-turn reveal
silent sequence
```

Define traceability:

```text
narrative source
→ chapter / sequence
→ page
→ panel
```

Research:

```text
show vs tell
scene compression
silent panels
reaction beats
establishing panels
montage
parallel action
caption vs dialogue vs visual information
page-count constraints
chapter ending / reveal placement
```

Material story changes must be explicitly reopened with Narrative.

**Exit:** the project can adapt narrative form without confusing adaptation with rewriting canon.

---

# 10. Stage 4 — Define Chapter, Sequence, Page and Panel Artefact Model

Candidate artefacts:

```text
graphic-novel brief
visual thesis
publication profile
chapter map
sequence map
page allocation
comic script
page intent
panel contract
thumbnail
page layout
spread layout
reference package
lettering layer
colour/value plan
finished page
cover package
print edition
digital edition
evaluation report
repair plan
```

A panel contract may include:

```text
panel ID
source beat
narrative purpose
moment / duration implication
characters / state
location / props
staging
framing / composition
camera-equivalent angle where useful
continuity references
dialogue / caption / SFX
balloon-space requirement
entry / exit direction
adjacent-panel dependency
approved / selected state
```

Do not create a universal scene graph merely because panels reference recurring entities.

**Exit:** sequential artefacts are explicit enough for independent generation, evaluation and repair.

---

# 11. Stage 5 — Define Visual Language, Staging and Continuity Model

Research sequential-art concepts including:

```text
shot scale / framing equivalents
angle
foreground / middle / background
silhouette
pose and gesture
expression
gaze
blocking
spatial continuity
movement direction
establishing geography
panel transition types
recurring visual motifs
symbolic imagery
visual metaphor
negative space
value hierarchy
```

Track only continuity that matters to the work.

Possible continuity artefacts:

```text
character appearance sheet
costume-state sheet
location map / reference
prop continuity sheet
sequence state ledger
palette / lighting reference
visual motif sheet
```

**Exit:** page-to-page visual coherence can be evaluated independently from raw image quality.

---

# 12. Stage 6 — Define Thumbnail, Layout, Page-Turn and Reading-Order Model

Research:

```text
thumbnail workflows
panel count
panel size / hierarchy
regular vs irregular grids
insets
bleeds
splash pages
spreads
gutters
whitespace
reading direction
balloon flow
page-turn reveals
chapter starts / ends
print recto / verso considerations
scroll pacing
```

Use cheapest-first progression:

```text
page allocation
→ panel list
→ primitive thumbnail
→ rough page
→ representative lettered rough
→ final page
```

Define automated / semantic checks for reading order where possible.

Do not optimise a page for isolated panel beauty at the expense of sequence clarity.

**Exit:** layout and pacing decisions are accepted before expensive art.

---

# 13. Stage 7 — Define Character / Location / Prop Reference Infrastructure

Research how sequential projects preserve visual identity across many generated or authored panels.

Reference packages may include:

```text
turnarounds / views where useful
face / expression references
height relationships
costume states
recurring props
location plans
key landmarks
material / colour notes
allowed variation
forbidden drift
```

Distinguish:

```text
canonical visual requirement
reference asset
panel-specific pose / expression
provider prompt / control input
```

Graphic Novel Production owns the reference requirements and continuity use. Specialist image / character / 3D tools may own the actual generation of reusable references.

**Exit:** recurring visual elements can remain coherent across a long sequence without manual ad-hoc prompting.

---

# 14. Stage 8 — Define Art, Ink, Colour and Surface Production Model

Research production variants such as:

```text
line art
pencils + inks
painted pages
flat colour + rendering
limited palette
black and white
greyscale
mixed media
3D-assisted backgrounds
photo / scan reference
AI-generated base art + controlled correction
```

Separate:

```text
composition defect
anatomy / pose defect
continuity defect
line / ink defect
colour defect
render / texture defect
provider artefact
```

Do not make one rendering style a universal core requirement.

Preserve source/editable assets separately from flattened delivery pages where practical.

**Exit:** art execution is chosen according to production profile without collapsing sequential reasoning into image generation.

---

# 15. Stage 9 — Define Lettering, Balloons, Captions and SFX Model

Research:

```text
speech balloons
thought / special balloons where appropriate
caption boxes
narration
balloon tails
speaker clarity
balloon order
text density
font / type choices
emphasis
sound effects
foreign language / untranslated text
signage
text integrated into art
```

Evaluate:

```text
reading order
speaker attribution
balloon flow
legibility
text / art balance
crowding
widows / awkward breaks where relevant
safe trim / gutter placement
SFX hierarchy
```

Lettering should be represented as an editable layer until final delivery where possible.

**Exit:** lettering is treated as part of sequential composition rather than a late overlay.

---

# 16. Stage 10 — Define Cover, Print, Digital and Localisation Delivery

Research publication targets:

```text
print paperback / hardcover
print-on-demand
traditional offset as comparison
fixed-layout EPUB
tablet / app fixed layout
PDF / downloadable edition
vertical-scroll / webtoon-style delivery
localised editions
```

Track provider-specific constraints as execution context:

```text
trim
bleed
gutter
binding
safe area
page count
colour space
resolution
cover / spine / back cover
file format
font embedding
reading system
accessibility metadata
```

Do not hard-code one printer's current numbers into core skills.

### Localisation

Research how translation affects:

```text
balloon size
line breaks
reading direction
SFX
signage
font coverage
page composition
cultural adaptation
```

### Accessibility

Research applicable digital requirements for:

```text
navigation
reading order
alternative descriptions
text exposure
metadata
fixed-layout accessibility
```

**Exit:** one approved sequential work can be packaged for multiple intended publication targets without silent content drift.

---

# 17. Stage 11 — Research AI Skills, Illustration, Layout and Publishing Tools

Research current capabilities:

```text
comic / graphic-novel Agent Skills
illustration Agent Skills
image generation / editing
character-consistency tools
ControlNet / pose / depth / reference systems where applicable
multi-image / multi-view consistency
layout tools
Clip Studio Paint automation
Photoshop / Krita / Affinity automation
InDesign / Scribus / page-layout tools
vector / lettering tools
font / speech-balloon tooling
3D posing / reference
Blender / scene reference
OCR / text extraction for QC only where needed
prepress / PDF validation
EPUB tooling
fixed-layout publishing
webtoon export
colour-management tools
```

Evaluate:

```text
capability
licence
commercial-use terms
training / source concerns where relevant
maturity
automation surface
editability
character consistency
composition control
text rendering quality
provider coupling
cost / latency
resolution
colour support
format support
composability
maintenance
```

Classify as `USE`, `ADAPT`, `REFERENCE` or `REJECT`.

**Exit:** the project knows which execution problems existing tools already solve.

---

# 18. Stage 12 — Choose Execution Layer and Tool Boundaries

Graphic Novel Production Skills should own decisions such as:

```text
adaptation mapping
sequence / page / panel structure
visual storytelling
reading order
page-turn logic
reference requirements
continuity constraints
lettering requirements
colour / value intent
publication target
quality criteria
repair scope
```

Existing tools should execute, where suitable:

```text
image generation / painting
pose / reference generation
line / ink operations
colour operations
page compositing
lettering placement
font rendering
PDF / EPUB generation
preflight
```

Do not build a universal image generator, page-layout application or publishing engine.

**Exit:** provider/tool changes do not redesign sequential-art production intelligence.

---

# 19. Stage 13 — Gap Analysis and Over-Engineering Guardrails

Test for gaps in:

```text
narrative-to-panel traceability
page / panel pacing reasoning
reading-order validation
page-turn planning
character / prop / location continuity
reference-pack use
provider-independent panel contracts
lettering integration
colour / value page hierarchy
cross-format print / digital adaptation
localisation
smallest-scope repair
```

Defer unless proven necessary:

```text
custom illustration model
custom image editor
universal comic scene graph
universal character database
universal page-layout engine
custom font engine
custom publishing platform
universal prompt compiler
central asset database
one universal graphic-novel quality score
```

**Exit:** native skills address sequential-production gaps rather than rebuilding creative software.

---

# 20. Stage 14 — Design Core Skills and Commands

Lean hypothesis:

```text
graphic-novel-develop
graphic-novel-produce
graphic-novel-evaluate
graphic-novel-pack-author
```

Possible `graphic-novel-develop` commands:

```text
frame-project
ingest-narrative
build-visual-thesis
map-chapters
map-sequences
allocate-pages
script-pages
script-panels
plan-page-turns
build-reference-requirements
```

Possible `graphic-novel-produce` commands:

```text
thumbnail-page
layout-page
stage-panel
build-reference-pack
produce-panel
assemble-page
letter-page
plan-colour
finish-page
prepare-cover
prepare-print-edition
prepare-digital-edition
localise-edition
repair-page
```

Possible `graphic-novel-evaluate` commands:

```text
audit-adaptation
audit-reading-order
audit-page-rhythm
audit-page-turn
audit-panel-purpose
audit-character-continuity
audit-spatial-continuity
audit-lettering
audit-colour-hierarchy
audit-print-readiness
audit-digital-readiness
audit-localisation
verify-preservation
diagnose-sequential-failure
```

Do not fix the final skill count before research.

**Exit:** every skill has a coherent sequential-art responsibility.

---

# 21. Stage 15 — Design Extension Packs and Pack Authoring

Extension Packs should encode coherent reusable **sequential-publication grammars**, not visual-style tags alone.

Candidate packs to research:

```text
print-long-form-graphic-novel
manga-right-to-left-production
vertical-scroll-webtoon
children-young-reader-graphic-novel
documentary-nonfiction-graphic-novel
limited-colour-indie-production
```

A valid pack may change:

```text
reading direction
page / scroll grammar
panel density
chapter structure
lettering conventions
colour strategy
page-turn / scroll reveal behaviour
publication constraints
audience readability criteria
localisation assumptions
evaluation criteria
```

A pack should not merely be:

```text
"noir style"
"anime style"
"Marvel-like"
"watercolour"
```

unless the specialisation materially changes production behaviour beyond visual appearance.

Pack precedence:

```text
explicit project / publication requirements
→ approved narrative / sequential decisions
→ selected Graphic Novel Extension Pack
→ core defaults
```

Every mature pack requires a showcase, exact prompt, behavioural/negative evals and core-vs-pack differential evaluation.

**Exit:** packs represent production grammar, readership and format specialisation rather than style labels.

---

# 22. Stage 16 — Design Five Progressive Example Levels

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Choose examples through capability coverage.

### Level 1 — One bounded sequential-art problem

Candidate classes:

```text
one-page dialogue scene
one-page silent emotional beat
one-page action / motion sequence
```

### Level 2 — Short coherent sequence

Candidate classes:

```text
4-page conversation with changing power dynamics
6-page chase / spatial continuity sequence
5-page reveal built around page turn
```

### Level 3 — Complete chapter responsibility

Candidate classes:

```text
20-page original chapter
24-page adaptation from Narrative Production story
short children's graphic-novel chapter
```

### Level 4 — Scale, format adaptation and repair

Candidate classes:

```text
multi-chapter continuity repair
print chapter adapted to vertical scroll without story drift
localised edition with lettering / layout changes
```

### Level 5 — Full graphic-novel thesis

Candidate classes:

```text
complete original graphic novella / volume slice
prose or screenplay adaptation into publication-ready graphic novel
multi-format release with print + fixed-layout digital + selected scroll adaptation
```

Across the 15 examples cover:

```text
dialogue / silent storytelling / action
page turns
spreads
visual continuity
character acting
location geography
lettering
SFX
colour / black-and-white
print / digital
right-to-left / left-to-right considerations
localisation
reference-pack use
cross-domain Narrative handoff
provider/tool variation
preservation and repair
Extension Packs
```

Every primary example must include the complete copyable prompt.

**Exit:** the example set teaches sequential visual production rather than fifteen isolated illustrated pages.

---

# 23. Stage 17 — Design Canonical Graphic-Novel Stress Tests

## Stress Test A — Narrative adaptation

Take an approved Narrative Production short story or screenplay and produce a graphic-novel chapter while preserving canon.

Test:

```text
adaptation traceability
show-vs-tell decisions
page count
panel rhythm
dialogue compression boundaries
character continuity
page-turn reveals
lettering
```

Adversarial cases:

```text
visual adaptation silently changes plot
panel art contradicts canon
text compression changes character intent
page count forces unapproved story deletion
```

## Stress Test B — Long-form original print production

Produce a coherent multi-chapter print-oriented graphic-novel slice.

Test:

```text
reference stability
long-range continuity
page / spread planning
cover/interior relationship
print constraints
colour / value continuity
repair without broad regeneration
```

Adversarial cases:

```text
character drift accumulates
props / injuries reset
major reveal lands on wrong page side
lettering enters unsafe print area
page-level pacing degrades despite strong panels
```

## Stress Test C — Multi-format digital adaptation

Take an approved page-based sequence and adapt it to fixed-layout digital and a scroll-oriented format where justified.

Test:

```text
reading order
format-specific pacing
asset reuse
lettering readability
accessibility / navigation
preservation of narrative intent
```

Adversarial cases:

```text
page-turn reveal is lost without replacement strategy
scroll version simply stacks pages
reading order becomes ambiguous
lettering becomes unreadable
fixed-layout packaging loses navigation metadata
```

**Exit:** the architecture works for adaptation, long-form print and digital-format variation.

---

# 24. Stage 18 — Design Evals, Benchmarks and Regression Fixtures

Separate evaluation layers.

### Deterministic artefact validation

Check where possible:

```text
IDs / references
page count
panel IDs
source-beat mapping
missing / duplicate panels
balloon / text overflow metadata
publication dimensions
bleed / safe-area constraints from selected delivery profile
font embedding where relevant
image resolution / colour mode where required
EPUB / PDF package validity
exact prompt presence
pack structure
installation integrity
```

### Narrative adaptation quality

Evaluate:

```text
canon preservation
beat coverage
show-vs-tell choices
compression / expansion logic
reveal integrity
character intent
```

Narrative correctness should route to Narrative when the source itself is wrong.

### Sequential readability

Evaluate:

```text
reading order
panel hierarchy
page rhythm
transition clarity
page-turn use
spatial continuity
motion direction
visual focus
```

### Panel quality

Keep dimensions separate:

```text
staging
pose / expression
composition
clarity
continuity
reference adherence
visual storytelling function
```

### Lettering quality

Evaluate:

```text
speaker clarity
balloon order
text density
legibility
art obstruction
SFX integration
trim / gutter safety
```

### Long-range continuity

Test character, costume, props, state, environment and palette continuity across pages / chapters.

### Print / digital readiness

Evaluate against the selected publication profile rather than universalising one provider's rules.

### Preservation and repair

Test that one panel, balloon, colour region or page-layout defect can be repaired without regenerating unaffected approved pages.

### Extension Packs

Test activation, non-activation, precedence, changed sequential grammar, pack-aware evaluation and core-vs-pack differential behaviour.

### End to end

Use progressive examples plus all three canonical stress tests.

Priority regressions include:

```text
ambiguous reading order
page-turn reveal regression
character-face drift
costume / prop state mismatch
speaker attribution error
balloon over focal action
unreadable text after localisation
print trim/gutter failure
scroll adaptation that preserves page layout blindly
panel regenerated when only lettering failed
```

Do not publish one universal graphic-novel quality score.

**Exit:** attractive art cannot hide sequential, narrative, lettering or publication failures.

---

# 25. Stage 19 — Generate Six Canonical Specifications

Generate:

```text
docs/
├── 01-graphic-novel-production-skills-system-spec.md
├── 02-graphic-novel-production-skills-workflows-and-artifacts-spec.md
├── 03-graphic-novel-production-skills-repository-and-contracts-spec.md
├── 04-testing-and-benchmark-spec.md
├── 05-graphic-novel-production-customisation-packs-spec.md
└── 06-graphic-novel-production-extension-pack-catalogue.md
```

Responsibilities:

1. **System:** mission, boundaries, principles, sequential architecture, core skills, execution layer, narrative relationship, fidelity/commitment strategy and build order.
2. **Workflows and Artifacts:** adaptation, chapter/sequence/page/panel models, references, layout, art, lettering, colour, publication, localisation, preservation and repair.
3. **Repository and Contracts:** structure, SKILL.md/command contracts, image/layout/publishing tool integration, self-containment, installation and CI.
4. **Testing and Benchmark:** deterministic validation, adaptation quality, sequential readability, continuity, lettering, print/digital delivery, packs, stress tests and regressions.
5. **Customisation / Extension Packs:** sequential/publication grammar, dimensions, activation, precedence, evaluation, packaging and authoring.
6. **Catalogue:** curated packs, showcases, exact prompts, differential evals and maturity state.

Generate these specs from persisted research logs rather than conversation memory.

**Exit:** implementation can proceed without inventing sequential-art architecture in code.

---

# 26. Stage 20 — Design Public README

Target structure:

```text
# Graphic Novel Production Skills
positioning
what sequential work it produces
Narrative / image-production boundary
cheap-first page development
installation
quick start
5 × 3 Learn by Producing
project structure grows with the book
core skills
Extension Packs
image / layout / publishing execution layer
print / digital delivery
evaluation / benchmark
canonical stress tests
documentation
boundary
contributing
licence
```

A positioning direction to test:

> Produce coherent graphic novels through page-and-panel storytelling, continuity, lettering and publication-aware workflows, not isolated image generations.

**Exit:** public users understand that the repository produces sequential works, not generic illustrations.

---

# 27. Stage 21 — Cross-Project Review

Compare with:

```text
Narrative Production Skills
Video Production Skills
Character Performance Skills
3D Production Skills
Legal Skills
future illustration / image-production skills
QA / Evaluation Skills
Pactwright
```

Potential shared-but-not-yet-central candidates:

```text
character reference contract
continuity / state handoff
approval / preservation
variant lineage
publication-delivery metadata
```

Do not introduce a universal media timeline, universal scene graph, universal asset graph or universal visual evaluator prematurely.

**Exit:** reusable evidence is captured without weakening sequential-art semantics.

---

# 28. Stage 22 — Scaffold Production Repository

Only now expand Stage 0 into the production scaffold justified by the six specs.

Likely baseline:

```text
graphic-novel-production-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-graphic-novel-production-skills-system-spec.md
│   ├── 02-graphic-novel-production-skills-workflows-and-artifacts-spec.md
│   ├── 03-graphic-novel-production-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   ├── 05-graphic-novel-production-customisation-packs-spec.md
│   ├── 06-graphic-novel-production-extension-pack-catalogue.md
│   └── research-logs/
├── skills/
├── examples/
├── benchmarks/
├── tests/
├── tools/                 # only if justified
├── extension-packs/       # once implemented
├── integrations/          # optional
└── .github/
```

Do not create a custom image editor, publishing service, universal character database or generic asset-management platform.

**Exit:** every production directory has an immediate justified role.

---

# 29. Stage 23 — Implement and Prove Core Vertical

Implement the smallest meaningful sequential production:

```text
approved short narrative beat
→ 2–4 page adaptation
→ page / panel script
→ primitive thumbnails
→ selected layout
→ reference-aware panel production
→ lettering
→ assembled pages
→ evaluation
→ bounded repair
→ basic print/digital proof
```

Prefer a short sequence over a complete volume.

**Exit:** installed skills can produce and independently evaluate one coherent sequential-art unit end to end.

---

# 30. Stage 24 — Expand Progressive Coverage and Extension Packs

Expand gradually to the selected 15 examples and representative packs.

For each implemented pack prove:

```text
core works without pack
core + pack changes intended sequential behaviour
explicit project / narrative / publication decisions outrank pack defaults
pack-aware evaluation recognises valid specialisation
pack authoring can create / revise a valid pack
```

**Exit:** the repository demonstrates multiple sequential-production grammars without becoming a style catalogue.

---

# 31. Stage 25 — Validate Installation and Repository Integrity

Validate:

```text
repository contracts
skill self-containment
command discovery
selective installation
clean consumer-project installation
skill-local references / scripts / assets
image/layout/publishing prerequisites
benchmark entry points
example reproducibility
no undocumented source-checkout dependencies
```

Clean external installation remains distinct from source-repository tests.

**Exit:** the repository behaves as an installable Agent Skills product.

---

# 32. Stage 26 — Optional Pactwright Integration and Registry Promotion

If useful add:

```text
integrations/pactwright.yml
```

Potential composition:

```text
Narrative Production
→ approved story / canon

Pactwright
→ authorised Graphic Novel Contract

Graphic Novel Production
→ adaptation / pages / lettering / publication work

Specialist visual Production Skills / tools
→ panel assets / references

Evidence
→ sequential evaluation
```

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

**Exit:** Pactwright can govern delivery without owning graphic-novel semantics.

---

# 33. Stage 27 — Review Shared-Abstraction Candidates

Potential future candidates:

```text
visual-reference contract
continuity-state handoff
publication profile
adaptation traceability
variant / edition lineage
```

Do not centrally promote:

```text
universal page graph
universal media scene model
universal visual asset database
universal publication runtime
one universal visual quality score
```

without repeated independent evidence.

---

# 34. Graphic Novel Production Acceptance Gates

Before maturity demonstrate:

### Narrative adaptation

- source canon and adaptation decisions remain distinguishable;
- page/panel mapping is traceable;
- material story changes require explicit Narrative reopening;
- show-vs-tell and compression decisions are intentional.

### Sequential storytelling

- pages have clear reading order;
- panel hierarchy and pacing support narrative intent;
- page turns / spreads / scroll reveals are intentional;
- page-level quality is evaluated separately from panel art quality.

### Visual continuity

- recurring characters, costumes, props, locations and state remain coherent;
- reference requirements are explicit;
- panel corrections preserve unaffected approved work.

### Lettering

- balloon order, attribution, density and legibility are validated;
- lettering does not obscure focal action unnecessarily;
- SFX integration is intentional;
- localisation can be handled without silent story drift.

### Publication

- selected print/digital target requirements are explicit and current at delivery;
- source/editable pages remain distinguishable from final packages;
- print and digital variants preserve sequential intent;
- accessibility is considered where applicable.

### Extension Packs

- core works without packs;
- packs materially change sequential/publication grammar;
- core-vs-pack behaviour is differentially evaluated;
- pack authoring exists.

### Product behaviour

- 15 primary progressive examples exist with exact prompts;
- six canonical spec responsibilities exist;
- public README matches implementation;
- canonical stress tests cover adaptation, long-form print and multi-format digital production;
- local and clean external installation pass;
- provider/tool claims are backed by implementation evidence.

---

# 35. Initial Non-Goals

Until evidence proves otherwise, `graphic-novel-production-skills` is not:

- a replacement for Narrative Production Skills;
- a generic image-generation repository;
- an illustration foundation model;
- a digital painting application;
- a page-layout application;
- a publishing/distribution platform;
- a universal character asset database;
- a storyboard-only system;
- a video-production system;
- a style-transfer catalogue;
- a one-number art-quality evaluator;
- a single-provider comics generator.

---

# 36. Success Criterion

This bootstrap succeeds if later sessions can execute each stage from persisted research logs without redesigning `graphic-novel-production-skills` from first principles.

The resulting repository should make graphic-novel production:

```text
more sequentially coherent
more traceable to approved narrative
cheaper to validate before finished illustration
more reliable across recurring characters / locations / props
more deliberate about page rhythm and reading order
more integrated with lettering
more publication-aware
more adaptable across print and digital delivery
more independently testable
more precise about cross-domain boundaries
more efficient to diagnose and repair
```

while remaining a lean Production Skills project rather than becoming a universal illustration or publishing platform before repeated production evidence justifies it.
