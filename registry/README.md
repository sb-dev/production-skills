# Production Skills Registry

Each JSON file under `projects/` records one Production Skills family member.

The registry is intentionally small. It records family identity and maturity, not issue tracking, releases or implementation details.

Validate with:

```bash
pnpm validate
```

Statuses:

`proposed`, `researching`, `specified`, `scaffolded`, `working`, `benchmarked`, `mature`.


Consuming-project dependencies are intentionally not recorded in this registry. They belong to the consuming project.
