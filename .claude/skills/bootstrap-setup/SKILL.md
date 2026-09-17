---
name: bootstrap-setup
description: Install or safely update the canonical bootstrap support in an explicitly named skill repository and feature branch, from the central production-skills checkout.
argument-hint: "sb-dev/<repository> feat/<branch>"
disable-model-invocation: true
---

# Bootstrap Setup

Run from `sb-dev/production-skills`. Arguments: `$ARGUMENTS`.

Require exactly the target repository and feature branch. Never infer an absent branch or operate on `main`. This command configures bootstrap support; it does not execute target stages, promote maturity, merge or publish a release.

## Inspect and establish the branch

1. Read `docs/bootstrap/README.md`, `docs/bootstrap/execution-process.md`, `docs/bootstrap/research-tooling-process.md`, and the relevant existing methodology. Confirm the central checkout's origin and clean canonical runtime files. Record its full commit SHA as the installation source.
2. Confirm read/write access to the explicit target and branch using the authorised GitHub connection or Git CLI. A cloud session attached to the central repository may not have cross-repository/branch push access. Do not bypass restrictions; report missing access rather than claiming publication.
3. Inspect target `main` and the requested branch. If absent, create the feature branch from the freshly fetched `main` commit. If present, inspect its ancestry and changes; reuse without resetting/rebasing/force-updating. Ask before carrying another feature branch's work or making a consequential ambiguous choice.
4. Work in a clean target checkout outside the central repository. Preserve unrelated work; do not use destructive cleanup or automatic stashing. Verify origin and current branch before any write.
5. Find and read the governing domain bootstrap under `docs/research-logs/`. Read its index, current contracts and accepted stage evidence. Do not assume pilot stage numbers apply. A missing specification is a prerequisite, not permission to invent one.
6. Compare with current central methodology. Preserve domain requirements, stage identifiers, accepted corpus and completed work. Obtain approval for material conflicts, substitutions or substantive migrations. Do not copy another pilot's domain rules or completion state.

## Install

The canonical payload is in `docs/bootstrap/runtime/`; do not recreate it from memory. The helper renders the contract and copies files. It does not perform Git branch creation, commits, pushes or substantive methodology migration.

From the central root, preview using the inspected values:

```bash
node .claude/skills/bootstrap-setup/scripts/install.mjs \
  --target "$TARGET_CHECKOUT" --repo "$TARGET_REPOSITORY" \
  --branch "$TARGET_BRANCH" --spec "$BOOTSTRAP_SPEC_PATH" \
  --date "$TODAY" --source-ref "$CENTRAL_SHA"
```

Inspect the proposed files and compare differing existing content. Identical files are no-ops. The helper refuses conflicting replacements by default. After explicit approval of a particular replacement, add `--approve 'relative/path=<observed-sha256>'`; never invent or automatically approve the reported hashes. Superseded contracts/profile rules must be reviewed and retained or migrated intentionally, not silently deleted.

Apply the reviewed plan with the same arguments plus `--apply --expect-head "$TARGET_HEAD_SHA"`. The helper checks the branch, origin, clean tracked state, approved file hashes and destinations before writing. It never changes the governing specification or stage evidence. Do not work around a failed guard with a force operation.

## Verify and publish

Check all four skill names match their directories. `/bootstrap` is manual; the three support skills are hidden from the normal command menu. Verify contract repository/branch/spec, no unresolved placeholders, local links, private-directory ignore behaviour, and no imported pilot completion claims.

Re-run the same preview: it must report no changes. Check `git diff --check`, inspect the complete diff, and stage only the reported setup paths. Do not include books, secrets or unrelated work. Use one setup commit, such as `feat(bootstrap): install canonical bootstrap support`.

Before pushing, recheck the remote branch; if another writer advanced it, inspect and reconcile without force. Push only to the explicitly named branch, verify its remote SHA and the installed files, and report repository, branch, commit, actual checks and any unverified runtime behaviour. A repeat installation with no changes needs no empty commit.

Do not run `/bootstrap` in the target. Do not migrate the rest of the registry unless those targets were explicitly requested.
