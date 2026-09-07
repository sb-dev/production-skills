# Cross-Domain Orchestration and Integration Specification

**Status:** Canonical  
**Version:** 1.1  
**Date:** 7 September 2026

## 1. Purpose

Many products require several Production Skills families. This specification defines generic composition and handoff contracts without centralising domain workflows or consuming-project state.

## 2. Ownership model

```text
production-skills central repository
→ reusable family contracts
→ cross-domain abstraction evidence
→ project registry

Production Skills repository
→ reusable domain expertise
→ domain workflow + packs + benchmarks

consuming project
→ product requirements
→ research and project knowledge
→ Production Skills selection
→ Extension Pack selection
→ integration plan and roadmap
→ final product
```

The central repository must not become the Project Graph, design repository, research archive, or roadmap owner for a consuming project.

## 3. Composition model

The family contract permits one product to consume several independent Production Skills families. The consuming project or its orchestrator owns the actual composition.

```text
consuming-project requirement
      │
      ├── Production Skills family A
      ├── Production Skills family B
      └── Production Skills family C
              │
              ▼
       integrated product
```

The central repository records only reusable composition rules that apply across consuming projects.

## 4. Handoff ownership

A reusable cross-domain handoff contract may define:

- producing domain;
- consuming domain;
- minimum information or artefact required by the consumer;
- authority over changes;
- integration-evaluation responsibility.

The family should not impose a universal artefact schema if a documented contract is sufficient.

Project-specific handoff instances belong in the consuming project.

## 5. Example reusable handoffs

### Character for an interactive product

```text
Narrative
→ role, identity, behavioural intent

Character Production
→ visual character package

Animation
→ locomotion and interaction capability

Game Development
→ gameplay behaviour and integration

QA/Evaluation
→ integrated behaviour testing
```

### Built environment for an interactive product

```text
Deep Research
→ source evidence

World/Environment Production
→ spatial design and blockout

3D Production
→ runtime-ready environment assets

Game Development
→ gameplay affordances and system integration

Software Engineering
→ runtime implementation and performance

QA/Evaluation
→ integrated validation
```

These examples demonstrate reusable domain boundaries only. They are not project specifications.

## 6. Project registry

The central registry records only family-project information:

- project identity;
- repository;
- domain;
- maturity;
- broad reusable capabilities;
- Pactwright compatibility status.

It must not record which consuming projects depend on a Production Skills repository. That dependency belongs to the consuming project.

GitHub and the owning repository remain authoritative for issues, releases and source files.

## 7. Cross-domain abstraction process

When substantially the same need appears in several production domains, record an abstraction candidate with:

- candidate name;
- domains observed;
- common need;
- meaningful domain variations;
- evidence links;
- recommendation;
- rejected over-generalisations.

Candidate lifecycle:

```text
observed
→ cross-domain candidate
→ researched
→ accepted as family abstraction
   or
→ rejected / retained as domain-specific
```

Markdown is sufficient at bootstrap.

## 8. Pactwright integration

Production Skills remain independent from Pactwright.

When Pactwright is used:

```text
Pactwright Contract
→ lifecycle responsibility
→ selected Agent Pack
→ one or more Production Skills
→ domain production
```

Multiple Production Skills compose inside the selected Agent Pack rather than requiring Pactwright to learn every production domain.

## 9. Optional integration manifest

Compatible Production Skills may expose:

```text
integrations/pactwright.yml
```

It may declare identity, compatibility, capability bindings and Extension Pack discovery.

It must not define Pactwright lifecycle topology, Project Graph semantics, consuming-project requirements or domain workflow stages.

## 10. Reproducibility

An orchestrated run should be able to identify the external Production Skills revisions and selected Extension Packs that participated in it.

The exact Pactwright lock schema remains owned by Pactwright. The Production Skills family requirement is only that its projects can expose stable identity and revision/version information.

## 11. Evaluation separation

```text
Production Skills benchmark
→ specialist domain quality

orchestrator/Pactwright evaluation
→ responsibility and integration fulfilment

consuming-project QA
→ behaviour of the assembled product
```

These layers complement rather than replace one another.

## 12. Central conformance

Central tooling may verify family structure and metadata. It must not become a cross-domain production-quality judge or inspect consuming-project product state.

## 13. No shared runtime by default

The following require independent cross-domain evidence before introduction:

- shared production runtime;
- universal workflow DSL;
- cross-project database;
- universal Extension Pack interpreter;
- central provider router;
- universal production artefact graph;
- consumer-project orchestration database.

The default architecture is independent repositories plus repository-native contracts.

## 14. Consumer-project boundary

A consuming project may use this family to discover and install Production Skills, but it owns:

- its specifications;
- its research logs;
- its capability and dependency maps;
- its domain-selection rationale;
- its Production Extension Pack selections;
- its integration experiments;
- its implementation roadmap;
- its project-specific learned knowledge.

If research begins in a consuming project and later demonstrates a reusable cross-domain Production Skills requirement, only the generalised finding should be proposed back to this repository through the normal abstraction process. The original project research remains with the project.
