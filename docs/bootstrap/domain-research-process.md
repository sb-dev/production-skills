# Domain Research Process

**Status:** Canonical process  
**Version:** 1.0  
**Date:** 10 September 2026

## Purpose and ownership

Use **Seed → Five → Challenge** to understand a production discipline before designing its Agent Skills. This document owns the detailed research method; [`new-project-process.md`](new-project-process.md) owns stage progression and [`README.md`](README.md) owns generation of domain-specific bootstrap specifications.

> Every new Production Skills bootstrap establishes a complementary five-book foundation, retaining user-provided books unless substitutions are explicitly approved. It extracts traceable, independently expressed knowledge from accessible source material, then challenges and extends that knowledge through broader research before encoding production capabilities.

Books strengthen professional and empirical research; they do not replace it or define the repository architecture.

```text
domain boundary and intended outcomes
→ bounded reconnaissance and knowledge-coverage map
→ select five complementary books
→ examine, extract and reconcile their knowledge
→ challenge claims and investigate uncovered responsibilities
→ evidence-qualified domain model
→ domain-native workflows, skills, artefacts and evaluations
```

## 1. Seed: map the domain and provided material

Start from the domain charter, intended users, owned outcomes, adjacent boundaries, quality requirements, human decisions and non-goals. Register user-provided titles and files separately: naming a book does not establish access to its contents.

Conduct bounded reconnaissance of authoritative practitioners, professional responsibilities and terminology. Derive the important knowledge dimensions from the discipline and intended outcomes, not from the supplied books or current model APIs. Stop when the map is sufficient to compare book contributions; this is not a duplicate of the full research stage.

A coverage map should identify each important responsibility, required depth, provisional coverage from supplied books and remaining gaps. Domains may need theory, craft, operations, human factors or evaluation, but there are no mandatory universal slots.

## 2. Five: select the foundational corpus

### Corpus size and complementary selection

Select **exactly five distinct books** as the foundational corpus. Different editions of the same work are not additional books. Five is not a limit on the wider research bibliography and does not imply five skills, commands, packs or knowledge categories.

When zero to five books are provided, assess their combined contribution and select complementary books for the remaining places. Research a broader candidate pool rather than choosing only enough titles to fill the slots. Select the combination that best serves the coverage map, not five individually popular books.

Assess candidates using evidence-backed explanations:

| Criterion | Required assessment |
|---|---|
| Relevance | Which owned production responsibilities does it address? |
| Coverage and depth | What does it add to the books already in the corpus? |
| Practical contribution | Which decisions, methods, artefacts, metrics or repair strategies can it inform? |
| Credibility and limitations | Why is it a suitable source, and what requires caution? |
| Perspective | Does it add useful contrast, criticism or a materially different method? |
| Currency and durability | Which principles remain useful, and which details need current verification? |
| Access | Can the relevant contents actually be examined? |

Document selected and rejected candidates, material overlap, remaining gaps and selection rationale. Do not invent overlap percentages, authority scores or a weighted optimisation formula without a defensible measurement method. Useful overlap can provide depth or contrasting approaches; repeated terminology alone is not a reason to substitute a book.

### Permission for user-provided substitutions

User-provided books remain corpus members unless the user explicitly authorises their removal or replacement. Their inclusion does not require acceptance of their claims.

Recommend a substitution only when the expected improvement is material. Identify the book to remove and the proposed replacement, the overlap or coverage problem, evidence for the recommendation, expected coverage gain, potential loss and alternatives. Ask for permission before applying it.

| Decision | Required behaviour |
|---|---|
| Approved | Apply only the authorised change and record the decision. |
| Declined | Retain the supplied book; choose remaining books around it and address residual gaps through broader research. |
| Unanswered | Keep the change pending; silence is not approval and corpus selection is not complete. |

Selecting books for empty slots needs no additional approval unless the user has imposed a separate approval requirement. Silently demoting a supplied book to supplementary reading is a removal and still requires permission.

If more than five books are supplied, propose the foundational five and ask permission to exclude the others from that corpus. They may remain supplementary sources after approval. If the user requires retaining more than five as foundational books, resolve the conflict with the five-book requirement rather than silently changing the count.

If suitable or accessible candidates cannot fill the corpus, report the precise gap and request source material or a selection decision. Do not pad the corpus with irrelevant books or count summaries, articles or papers as books.

Record each supplied, retained, added or substituted book and any proposed change, rationale, approval status, decision date and decision reference. Preserve rejected alternatives. Once selection is complete, record the corpus revision; later changes must preserve the same permission rules and identify affected extraction, research and design work rather than silently replacing an established source.

### Source access and reading coverage

For each selected book record:

```text
title and author
edition / publication year
provided or selected origin
source location or non-public source identifier
access status
intended contribution
material actually examined
reading limitations
```

Use these access statuses:

```text
full text available
relevant excerpts available
secondary material only
unavailable
```

Availability and reading coverage are separate. Full-text access does not mean the book has been read. Publisher descriptions, contents pages and secondary summaries can inform candidate selection, but cannot stand in for direct extraction of the book's methods and arguments. Model memory is not evidence of examination.

Relevant excerpts are sufficient only when they support the intended contribution and expose enough context to assess its assumptions and limitations. Do not generalise beyond the material examined or describe excerpt-based analysis as a full-book review.

An inaccessible title may be selected provisionally while material is obtained. Selection may finish with access needs explicitly recorded, but extraction cannot be marked complete until all five books have been meaningfully examined for their intended contributions. Request missing material or propose an alternative when access is inadequate; supplied-book replacements still require permission.

### Publication boundary

Keep source access separate from publication. Do not commit supplied books, substantial copied text or private access credentials to a public repository without the necessary redistribution permission. Record useful bibliographic references and reading scope without exposing private storage locations.

Publish independently expressed synthesis, not reconstructed chapters, proprietary examples, long quotations or a substitute for the books. Prefer domain-neutral terminology where it preserves precision. A source citation does not itself grant redistribution permission.

## 3. Extract and reconcile capabilities

Examine each selected book as a source in its own right before synthesising the corpus. Reading and extraction must be substantial enough to support its intended contribution; a bibliography or short title-level summary is not completion evidence.

For material concepts capture:

| Field | Required content |
|---|---|
| Source | Book, edition and identifiable chapter, section, page or other stable location actually examined |
| Problem and concept | Problem addressed and independently expressed principle, method or heuristic |
| Applicability | Required context, assumptions, prerequisites and limitations |
| Production behaviour | Inputs, decision or workflow steps, outputs and responsibility affected |
| Evaluation | Relevant metrics, evidence needs or possible evaluation criteria |
| Failure and repair | Failure conditions, misuse risks and correction strategies |
| Relationships | Overlap, support, tension or contradiction with other sources |
| Disposition | Retain, merge, adapt, qualify, reject or research further, with rationale |

Produce per-book findings, a source-to-capability matrix, an overlap/conflict analysis and a provisional capability model. Keep findings traceable even when several sources contribute to one capability.

```text
source idea
→ provisional capability
→ production responsibility
→ workflow / command implication
→ evaluation criterion
→ candidate benchmark case
```

This is an evidence-to-behaviour map, not permission to design book-specific skills prematurely. A useful extraction explains what changes about production decisions, not merely that a book mentions a topic.

Merge redundant concepts without erasing meaningful differences. Conflicting methods may apply in different contexts, require a deliberate choice or remain unresolved; do not mechanically average them or accept the most forceful author. Several books repeating a claim are not necessarily independent corroboration.

A supplied book may contribute little to the eventual core. Record that result honestly rather than inventing a useful capability or forcing its claims into the architecture. Keep corpus membership separate from claim acceptance.

## 4. Challenge and extend through broader research

Use the provisional capability model to guide, not limit, research. Revisit the original domain coverage map independently so subjects absent from the books are still investigated.

Answer both questions:

1. Which book-derived claims and methods are defensible, under what conditions, and with what limitations?
2. Which important responsibilities, practices, risks or perspectives are missing from the corpus?

Research authoritative professional practice, empirical findings where applicable, standards, primary research, specialist practitioner material and current official documentation. Additional books may supplement the foundational five. Prefer evidence appropriate to the claim rather than treating any source type as universally decisive.

Record source locations, dates or versions where material, the claims they support or challenge, applicability and uncertainty. Seek criticism, counterexamples and failure conditions rather than confirmation alone. Distinguish independent evidence from sources repeating the same book or underlying claim. Verify change-sensitive practices and standards against current authoritative sources.

Preserve the full professional-practice research scope:

```text
specialist roles, authoritative practitioners and terminology
real workflows and working artefacts
cheap representations and uncertainty-reduction methods
commitment and approval points
expensive production operations and iteration / review loops
recurring failures, diagnosis and smallest-sufficient repair
quality dimensions, evaluation criteria and metrics
cross-discipline handoffs and human judgement
```

Identify what is deterministic, generative, judgement-heavy or tool-dependent. Separate durable production knowledge from provider-specific behaviour. Do not infer the discipline from current AI capabilities; the dedicated AI/tool landscape stage remains required.

For material findings record disposition and evidential standing separately. A method may be retained as a context-dependent heuristic rather than an established finding. Distinguish supported findings, qualified methods, practical heuristics, disputed claims, unresolved questions and rejected ideas.

Unresolved claims must not silently become unconditional core rules. Assign a bounded use, an explicit limitation, further investigation or exclusion as appropriate. Investigate gaps even when every book-derived claim appears plausible.

The output is an **evidence-qualified domain model**, not a claim that all professional knowledge has been conclusively validated. It must explain the domain independently from the five books and identify the evidence and limits behind material capabilities.

## 5. Completion gates and durable records

Keep selection, extraction and challenge as distinct stages with separate exit criteria. Each stage is a standalone task: read its required inputs, perform its substantive work, check its exit criteria, and commit the detailed research log and completion evidence before proceeding. Do not replace stage work with summaries or merge the stages merely to move faster.

| Stage | Required evidence | Exit gate |
|---|---|---|
| Select | Coverage map, candidate comparison, five-book corpus, access register and substitution decision log | Exactly five books selected; required permission decisions resolved; access needs and remaining gaps explicit |
| Extract | Per-book findings, examined-source locations, source-to-capability matrix, overlap/conflict analysis and provisional model | All five meaningfully examined for their contributions; material findings traceable; limitations and conflicts explicit |
| Challenge | Broader professional research, supporting and contrary evidence, gap analysis, claim dispositions and revised model | Material findings assessed; important gaps addressed or bounded; unresolved claims not promoted to unconditional rules |

Pending required approval blocks completion of selection. Inadequate source access blocks completion of extraction. Research findings that remain uncertain need an explicit disposition; uncertainty is not a reason to fabricate evidence or declare validation.

Use existing `docs/research-logs/` files as the durable record. Keep one substantive log per stage, splitting supporting material only when size or reuse warrants it. A decision table within a stage log is sufficient; no new database, scoring engine or knowledge platform is required.

Later design stages should map accepted or qualified capabilities into workflows, skills, commands, examples and evals. Runtime skills should load concise relevant references, not all five books or the entire bootstrap history. Keep selected sources, examined findings, accepted capabilities and implemented behaviour distinguishable.

## 6. Generation, migration and family boundaries

Generating a bootstrap specification defines how these stages will run; it does not prove they have run. Register provided books, identify candidate sources and access needs, and define domain-specific research tasks and exit criteria. Mark unperformed work as planned. Reuse already completed research only after reviewing its persisted evidence, coverage and applicability.

Apply this method to newly generated bootstraps. Existing domain bootstraps require an explicit migration decision in their owning repositories. Preserve completed work, book choices and stage identifiers; record mappings or supplementary stages where needed. Do not automatically renumber an active bootstrap, replace its corpus, invalidate its history or change its maturity label.

Domain research belongs in the domain repository. Family-policy decisions and genuinely cross-domain comparisons belong centrally. The Business Building Skills bootstrap is a reference for capability extraction and broader challenge, not a fixed reading list or proof that its stages have been executed.

Compare findings with other Production Skills only after the domain model is independently understood. Apply [`shared-abstraction-process.md`](shared-abstraction-process.md): shared concepts remain hypotheses until at least two independent production domains demonstrate substantially the same need. Five books do not justify a shared production runtime, universal ontology or central domain-knowledge store.
