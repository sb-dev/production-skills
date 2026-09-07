# Production Skills Family System Specification

**Status:** Canonical  
**Version:** 1.0  
**Date:** 7 September 2026

## 1. Purpose

The Production Skills family is a set of independent Agent Skills projects that encode reusable production expertise. The family exists to make specialist production behaviour installable, testable, composable and reusable without forcing unrelated domains into one workflow or runtime.

The central `production-skills` repository owns the family contract. Individual repositories own domain production.

## 2. Evidence basis

The strongest implemented evidence currently comes from:

- Narrative Production Skills;
- Music Production Skills;
- Video Production Skills.

Across those domains, the shared behaviour is narrower than a universal workflow:

```text
inexpensive representation
→ evaluation or comparison
→ deliberate commitment where needed
→ higher-fidelity production
→ evaluation
→ targeted correction
```

The artefacts and stage names differ materially. The family therefore standardises principles and boundaries, not a mandatory domain-independent production pipeline.

## 3. Family architecture

```text
production-skills central repository
        │
        ├── family contracts
        ├── cross-domain research
        ├── project registry
        ├── bootstrap process
        └── cross-domain integration contracts
                │
                ▼
independent Production Skills repositories
        │
        ├── skills
        ├── commands
        ├── domain workflow
        ├── tools
        ├── Extension Packs
        ├── examples
        └── domain benchmarks
```

A Production Skills repository must remain usable without the central repository at runtime.

## 4. Ownership boundaries

### 4.1 Central repository owns

- family terminology;
- family principles;
- minimum project contract;
- cross-domain abstraction evidence;
- project bootstrap process;
- project registry and maturity model;
- common Extension Pack semantics;
- common evaluation layering;
- generic cross-domain composition and handoff contracts;
- optional Pactwright integration conventions.

The central repository does not own consuming-project roadmaps, capability maps, project-specific Extension Pack selections, implementation research or product specifications.

### 4.2 Domain repository owns

- production workflow;
- production artefacts;
- domain stages;
- skills and internal commands;
- tool and provider usage;
- domain-specific repair logic;
- Extension Pack implementation;
- examples and showcases;
- domain research;
- domain benchmark and quality criteria.

### 4.3 Pactwright owns

When used, Pactwright owns Contract-driven delivery authority, lifecycle execution, Evidence and project governance. Production Skills remain independent execution expertise and must not absorb Pactwright lifecycle semantics.

### 4.4 Project Intelligence owns

Reusable expertise belongs in Production Skills. Durable knowledge that is specific to one consuming project belongs in that project's Project Intelligence or equivalent project knowledge system.

Example:

```text
"Use MIDI to validate melody cheaply"
→ reusable Music Production expertise

"For this project, model X breaks the approved architectural silhouette"
→ consuming-project knowledge
```

## 5. Core family principles

### 5.1 Domain-first design

Production practice defines the workflow. Models, APIs and tools implement parts of that workflow; they do not define the production discipline.

### 5.2 Cheapest adequate representation

Resolve important uncertainty with the cheapest representation that can answer the current question.

Examples include concept before prose, MIDI before finished audio, storyboard before final shots, greybox before final world art, and architectural contract before implementation.

The family principle is mandatory. Exact representations remain domain-owned.

### 5.3 Deliberate commitment

Where a downstream step is materially more expensive or consequential, the domain workflow should preserve an explicit commitment boundary such as approval, selection or lock.

No universal approval stage name is defined.

### 5.4 Preserve approved work

Accepted upstream decisions constrain downstream production until deliberately reopened. Later failures should not casually erase valid work.

### 5.5 Correct the smallest responsible unit

Evaluation should diagnose the production layer that owns a defect, preserve unaffected work and repair the smallest sufficient scope.

The central family does not model domain correction units such as scene, shot, section, component, mesh or test fixture.

### 5.6 Production intelligence above execution

Production Skills should direct models, provider skills, deterministic tools and domain engines rather than duplicating their low-level capabilities.

### 5.7 Standalone first

A Production Skills repository is an independent Agent Skills product. Integration with Pactwright or any other orchestrator is optional.

### 5.8 Evidence before abstraction

A shared abstraction may be promoted only after multiple independent domains demonstrably need substantially the same concept.

```text
Domain A evidence
+
Domain B evidence
→ cross-domain candidate
→ research
→ family abstraction only if justified
```

A convenient implementation idea is not sufficient evidence.

## 6. Family terminology

### Production Skill

An installable specialist Agent Skill that owns a coherent production responsibility.

### Command

A bounded operation inside a Production Skill used for composition, testing, diagnosis or evaluation. Commands are not a family workflow DSL.

### Production Extension Pack

Reusable specialist knowledge that changes how one Production Skills family performs its discipline for a coherent context such as genre, style, platform or specialised workflow.

### Project

An independent repository implementing one production domain.

### Consuming project

A project that composes one or more Production Skills families to build a product. The consuming project owns its own requirements, research, roadmaps, integration decisions and project-specific knowledge.

### Family abstraction

A domain-independent principle or contract promoted only after cross-domain evidence.

## 7. Maturity model

Projects use a small maturity vocabulary:

```text
proposed
→ researching
→ specified
→ scaffolded
→ working
→ benchmarked
→ mature
```

Maturity describes demonstrated infrastructure and workflow evidence, not completeness.

## 8. Anti-goals

The family must not become:

- one universal production workflow;
- a shared runtime required by every Production Skill;
- a universal artefact schema;
- a central model/provider registry;
- a universal score for production quality;
- a repository that vendors every domain implementation;
- a Pactwright Extension mechanism;
- a replacement for domain research or benchmarks.

## 9. Change rule

When a proposed family change appears, classify it:

```text
Does multiple-domain evidence show a domain-independent need?
YES → family abstraction candidate

Does it describe specialised production behaviour?
YES → owning Production Skills project

Does it describe one consuming project's learned behaviour?
YES → project knowledge

Is it mainly one convenient implementation?
YES → research hypothesis
```

## 10. Conformance

A domain project conforms when it preserves these boundaries and satisfies the project contract. It does not need identical filenames, implementation languages or domain workflows.
