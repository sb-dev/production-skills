# Bootstrap Setup and Execution

**Status:** Canonical bootstrap-support process  
**Version:** 1.0  
**Date:** 17 September 2026

This extends the existing generation, Seed → Five → Challenge and Extension Pack processes. It does not change domain stages or provide a shared domain-production runtime.

## Two commands, different repositories

From the central `production-skills` checkout:

```text
/bootstrap-setup sb-dev/<repository> feat/<branch>
```

This installs or updates bootstrap support in the named target. It does not run its stages. In the configured target, `/bootstrap` starts or resumes the remaining authorised stages. No repeated stage ranges or execution prompts are required.

## Ownership

`docs/bootstrap/runtime/` is the canonical source for the four target skills, operator guide and execution-contract template. The environment-only guide is `claude-code-web-firecrawl-setup.md`. The setup skill copies these into the target; installed skills do not read the central checkout at runtime.

The target's governing bootstrap owns domain requirements and evidence standards. Its execution contract under `docs/research-logs/` holds repository, branch, governing-spec path and installation provenance. Do not add `.claude/bootstrap/`, duplicate research profiles, or a new progress database.

## Safe setup

Read the central process and target repository before editing. The repository and branch are explicit command inputs. A new feature branch starts from freshly inspected `main`, never another feature branch. Reuse an existing requested branch only after inspecting its lineage and contents; do not reset, rebase, force-update or import other branches' accepted work.

Find the target's governing specification. If absent, stop with that prerequisite instead of inventing a domain bootstrap. Compare it with current central methodology. Report substantive conflicts and obtain approval before changing accepted methodology, numbering, corpus decisions or completed work. Runtime setup does not silently migrate substantive stages.

Preview file changes before applying. Identical installations are no-ops. Preserve unrelated skills, ignore rules, research logs and local changes. Different existing files require a reviewed, explicitly authorised replacement; do not replace them simply because they share a filename. Keep old contracts as historical records when referenced, and make the active branch contract unambiguous.

Install four correctly named skills, a short guide, the environment guide and a repo-specific contract. Merge `books/` and `.firecrawl/` ignore entries; verify no private sources are tracked. Validate file contents and links, not only names. Commit the setup as one coherent change, push without force, and verify the remote SHA and intended files. Do not raise a PR, merge, publish or run domain stages unless requested.

## Access preflight

The central execution environment needs permission to read and write the named target and branch. A central checkout alone does not supply that permission. Anthropic-hosted sessions have repository/branch-scoped GitHub access; check target access before claiming setup can publish remotely. Do not bypass provider restrictions or place credentials in generated files. Report a scoped-access failure honestly; local fixture validation is not a successful target push. [1]

## Stage execution

Read the complete stage and accepted dependencies; execute; persist evidence; verify and repair; commit one stage; push and verify; continue. The stage executor owns the commit gate, so the coordinator must not duplicate it. Preserve exact counts, original stage identifiers and pack research/implementation gates.

Use the repository's conventional commit style with the stage identifier. Prefer concise evidence records; an exhaustive table is required only where the governing process says so. Failed searches/tests/tools normally require repair, not another approval. Explicit approvals, material scope conflicts and unavailable mandatory evidence remain real gates.

Installing instructions proves only installation. A file, generated checklist or favourable model response does not prove a stage, benchmark, clean consumer installation or repository maturity. Required domain and global acceptance gates still apply.

## Recovery

Reuse inspected, applicable persisted evidence. Do not restart a completed corpus stage merely because the local books are absent on a fresh machine. New direct reading still needs accessible sources. Resume partial stages without declaring them complete or creating duplicate completion commits; record provider interruptions without promising background work.

[1]: https://code.claude.com/docs/en/cloud-environments#github-proxy
