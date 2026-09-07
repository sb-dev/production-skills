# Contributing

Changes should preserve the central repository boundary: family-level design and cross-domain orchestration belong here; domain workflow implementation belongs in the owning Production Skills repository.

## Before proposing a shared abstraction

Provide evidence that at least two independent production domains need substantially the same concept. Record meaningful domain variations and explain why a family-level contract is preferable to leaving the behaviour domain-owned.

## Before adding infrastructure

Show concrete multi-project friction that the infrastructure removes. Prefer Markdown, repository-native metadata, and thin validation over new services or runtimes.

## Canonical changes

Changes to `docs/specs/` should state:

- the evidence basis;
- affected projects;
- whether existing projects need migration;
- whether the change is normative or a research hypothesis.
