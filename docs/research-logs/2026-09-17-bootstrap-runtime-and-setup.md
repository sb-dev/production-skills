# Canonical Bootstrap Support and Central Setup

**Date:** 17 September 2026  
**Status:** Implementation and fixture validation; not an end-to-end domain bootstrap benchmark

## Decision

Centralise the repeated bootstrap mechanics and expose `/bootstrap-setup <repository> <branch>` only from `production-skills`. Targets receive one public `/bootstrap` command, three internal support skills, a short guide, a local execution contract and private-source ignore rules. The original domain methodology remains authoritative.

## Pilot evidence reviewed

| Repository | Pilot branch | Source-input and guide commits recorded in the pilot |
| --- | --- | --- |
| legal-skills | feat/bootstrap-3 | ae056a94b75222366ac254362897bdcaf14967d1; e6f133624872b0bc7b1895ee51b29716e4afe0b4 |
| software-engineering-skills | feat/bootstrap-3 | c323ed4f30abba4957fef616699bf35ccf02f943; 320413d0924eba619bd8c67df3d4c9ea28d312e1 |
| game-development-skills | feat/bootstrap-3 | 89961c24edb8173896f6a53a5ecd6e9d32bcdf96; 7c38a0808114b66a0465715b08abd634178c0052 |
| business-building-skills | feat/bootstrap-4 | 797c12ae2475cd14faae703adf1b0135a75d312f; a060bf8501603fccdb5503bcca033a89b4bb9890 |

These are reference implementations of repeated setup requirements, not proof that four complete bootstraps ran successfully. Domain-owned variations remain in the governing specifications. The central payload also formalises accessible task attachments, not just local `books/`, and protects source privacy across fresh sessions.

## Corrections incorporated

New feature branches start from `main`. Existing branches and accepted evidence are never reset or imported from neighbouring branches. Setup and stage execution are separate authorities. The stage executor alone commits a completed stage. A file/name check cannot prove substantive completion.

The central payload uses identical generic skill bodies across targets; directory/name matching is a regression check against the swapped research/execution paths found in a pilot. Manual public invocation and hidden helper skills follow Claude Code's documented frontmatter. Preinstalled Firecrawl remains a retrieval escalation, not the primary researcher or a required MCP service.

## Verification boundary

**Executed:** `node --test tests/bootstrap-setup.test.mjs` — 20 tests passed on Node 22.16.0. Re-run `node --test tests/bootstrap-setup.test.mjs` for canonical payload and isolated Git fixture checks, and the repository's normal validation/tests in a complete checkout. Fixtures are synthetic; they do not call Firecrawl, execute Claude, perform human evaluations or mutate remote target repositories. Authenticated cloud search and an actual target `/bootstrap` execution remain separate live smoke tests.

The installer deliberately performs local file operations only. The setup skill handles inspected branch creation and remote publication using the execution environment's authorised access. Cloud GitHub proxy restrictions must be checked, not assumed away.

## External implementation references

- https://code.claude.com/docs/en/skills
- https://code.claude.com/docs/en/cloud-environments
- https://docs.firecrawl.dev/sdks/cli
