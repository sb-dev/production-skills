# <Extension Pack> — <Showcase Name>

**Pack:** `<pack-slug>`  
**Research status:** <planned / partial / complete, with evidence>  
**Implementation status:** <planned / implemented>  
**Evaluation status:** <not run / passed / failed / inconclusive>  
**Readiness:** <decision and limitations>

## What this showcase is designed to prove

Explain the observable production behaviour that should become materially different when the Extension Pack is active. Link the relevant source-to-behaviour-to-test mapping; do not imply a result before execution.

## Production focus

- <Specialised production responsibility.>

## Prompt

```text
Use <Domain> Production Skills with the <pack-slug> Extension Pack to ...

Requirements:
- ...

Workflow:
- ...

What to optimise for:
- ...
```

## Expected specialised behaviour

- <Observable artefact or decision, with a falsifiable acceptance case.>

## Must remain stable

- explicit project instructions;
- approved / locked production decisions;
- core quality requirements;
- adjacent-domain ownership boundaries.

## Core-vs-pack differential

### Shared brief and execution conditions

Give both runs the same substantive production brief and constraints. Record core/pack revisions, exact prompts, tool/model versions and settings where relevant, resource limits and any deviations. Change pack activation and packaged guidance, not the detail or difficulty of the task. Predetermine acceptance criteria and judge artefacts/decisions rather than pack labels.

### Core only

Describe the valid generic behaviour expected without the pack.

### Core + pack

Describe the specialised production behaviour expected with the pack.

### Optional project-instructions baseline

Where useful, compare core plus ordinary project-specific instructions to determine whether the pack adds reusable depth, consistency or reduced prompting burden.

## Behavioural evaluation

Test at least:

```text
activation
non-activation
specialised behaviour
precedence
preservation
pack-aware evaluation
boundary discipline
bounded refinement
negative / incompatibility behaviour where applicable
```

## Reuse beyond this showcase

Include a distinct additional production brief or fixture. Explain which specialised behaviour should transfer and what would reveal overfitting to the showcase premise.

## Production evidence

Add actual outputs, provenance and observed evaluation only after execution. Keep expectations separate from results; retain failed and inconclusive runs, regressions, deviations and evaluator limitations. Do not infer general superiority from one favourable sample.

## Installation evidence

Record local checks and clean consumer-project installation/use separately. A successful showcase in the source repository does not by itself establish independent installability.
