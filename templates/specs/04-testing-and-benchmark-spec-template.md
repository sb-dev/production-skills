# <Domain> Production Skills Testing and Benchmark Specification

**Status:** Draft  
**Version:** 0.1

## Purpose

## Testing layers

```text
deterministic validation
→ command behaviour
→ skill orchestration
→ production correctness
→ domain quality
→ preservation / diagnosis / repair
→ Extension Pack behaviour
→ end-to-end production
→ installation smoke tests
```

## Quality model

Keep structural correctness and domain quality separately inspectable.

## Deterministic repository validation

## Command and skill evaluation

## Progressive example coverage

Target:

```text
5 levels × 3 primary examples = 15 primary examples
```

Define how the three examples at each level collectively cover the intended capability surface.

## Benchmark case contract

Each case should define, where relevant:

```text
id
purpose
prompt / fixture source
capabilities exercised
expected properties
prohibited behaviour
quality dimensions
failure routing
regression relationship
```

## Preservation and root-cause evaluation

## Domain-quality evaluation

## Extension Pack evaluation

Test:

```text
activation
non-activation
specialised behaviour
precedence
preservation
pack-aware evaluation
core vs core+pack
boundaries
```

## Regression policy

```text
escaped defect
→ diagnosis
→ smallest reproducible fixture
→ benchmark / eval
→ regression protection
```

## Repeated semantic evaluation

## Installation testing

### Local validation

### Clean consumer-project smoke test

## Release gates

## Measured results and unmeasured claims

## Benchmark evolution

## Acceptance criteria
