# Decision 0002 — Canonical Bootstrap Support

**Status:** Accepted  
**Date:** 17 September 2026

Centralise bootstrap setup, research retrieval, direct-source handling and stage-execution instructions. Keep their canonical payload under `docs/bootstrap/runtime/` and distribute self-contained copies through the central `/bootstrap-setup` skill.

The four pilot repositories exposed repeated setup requirements and copy drift. This decision standardises administrative bootstrap mechanics; it does not claim completed cross-domain production benchmarks.

Decision 0001 remains in force: no shared domain-production runtime, workflow DSL, artefact graph, provider router or pack interpreter is introduced. The domain specification owns its methodology and acceptance gates. The installer neither executes stages nor promotes maturity.

New feature branches start from `main`. Existing branches, corpus decisions, completed work and locally changed files require inspection rather than silent replacement. Explicit target selection does not authorise migrating the rest of the family.

See [the execution process](../bootstrap/execution-process.md) and [implementation evidence](../research-logs/2026-09-17-bootstrap-runtime-and-setup.md).
