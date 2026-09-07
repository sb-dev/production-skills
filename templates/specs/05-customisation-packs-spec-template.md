# <Domain> Production Skills Customisation Packs Specification

**Status:** Draft  
**Version:** 0.1

## Purpose

Define reusable production specialisations that change how the core skills perform the domain without replacing the core workflow.

## Goals

## Non-goals

## Core model

```text
Core Production Skills
        +
Customisation / Extension Pack
        ↓
Specialised production behaviour
```

## Pack dimensions

Define only dimensions the domain actually needs, such as:

```text
format
medium
use context
genre
style / production language
audience
platform
performance / voice profile
specialist workflow rules
```

## Pack qualification

A pack must:

- be reusable across projects;
- materially change production behaviour;
- keep irrelevant specialisation out of the core;
- be demonstrable through examples;
- be distinguishable through evaluation.

## Decision precedence

```text
explicit project instructions
→ approved / locked production decisions
→ selected Extension Pack
→ core defaults
```

## Integration with core skills

For each core skill define what a pack may change and what it must not own.

## Pack-aware evaluation

Define:

```text
traits to preserve
intentional behaviour not to penalise
real defects still to reject
boundary failures
```

## Cross-domain handoffs

## Packaging and self-containment

## Pack-authoring capability

The domain-native authoring workflow should cover:

```text
inspect catalogue
→ decide whether new pack is justified
→ research production grammar
→ define pack
→ create showcase + exact prompt
→ create behavioural evals
→ compare core vs core+pack
→ validate
→ catalogue
```

## Showcase contract

## Behavioural eval contract

## Security / licensing considerations

## Implementation order

## Acceptance criteria
