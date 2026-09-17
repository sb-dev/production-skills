---
name: bootstrap-stage-execution
description: Execute one authorised bootstrap stage completely, verify and repair its outputs, then commit, push and return to the bootstrap coordinator.
user-invocable: false
---

# Bootstrap Stage Execution

Use only within an explicitly authorised bootstrap run. The project specification defines the domain work; its execution contract defines the permitted branch and run boundaries.

## Stage loop

1. Read the complete original stage and its accepted dependencies.
2. Derive a compact checklist of substantive activities, required outputs, exact counts/distributions, execution or evaluation requirements, and exit criteria.
3. Perform the work. Use `bootstrap-research` for external evidence and `direct-source-extraction` for required reading. Use repository-native implementation and verification tools.
4. Persist required outputs and a concise verification record. Update the existing research-log index/progress record; do not introduce a separate state database.
5. Re-read the stage and inspect the actual outputs. Run every required check and examine its result. Diagnose and repair the smallest responsible scope, then repeat affected checks.
6. Inspect the diff and stage only this stage's files. Check the staged file list for supplied books, private source text, credentials and unrelated changes. Never force-add `books/` or `.firecrawl/`.
7. Create one completion commit using the repository convention and a stage identifier, for example `docs(bootstrap): stage 4 - challenge professional practice`. Preserve lettered and pack-stage identifiers; do not assume another project's numbering.
8. Push to the contracted remote branch without force. Verify the remote SHA and intended files. If another writer advanced it, fetch and inspect; never reset or overwrite that work.
9. Return the stage result and verified commit to `/bootstrap`, which continues without another approval request.

## Evidence and repair

A plan is not execution; a bibliography is not direct-source extraction; a script is not a successful run; a prompt is not an output; a file's existence is not substantive validation. Do not invent observations, research, test passes, benchmark results or installation evidence. Label synthetic fixtures as synthetic.

Do not weaken requirements or validators to make incomplete work pass. Use an exhaustive conformance table only when the governing process requires it; every mandatory requirement still needs evidence.

A failed command or test is not itself a user-decision blocker. Repair, retry with changed evidence or use an allowed alternative. Do not loop indefinitely on an unchanged failing operation. Escalate unresolved mandatory access/capability gaps, required approvals, material scope conflicts, or changes that would reopen accepted decisions without authority.

## Interrupted stages

Never mark an unfinished stage complete or start its dependent stage. Keep partial outputs explicitly incomplete and preserve unrelated work. A resumed run finishes or verifies existing work rather than repeating it blindly. If a completed local commit has not been pushed, verify and push that commit instead of creating a duplicate completion commit.
