---
name: bootstrap
description: Resume this repository's staged bootstrap from verified repository state, discover supplied sources, and continue through the remaining stages.
disable-model-invocation: true
---

# Bootstrap

`/bootstrap` is the only normal operator command. No stage range, book paths or repeated execution prompt is required.

## Start or resume

1. Read the execution contract under `docs/research-logs/` that matches this repository and working branch. If several contracts conflict, resolve the ambiguity before writing; do not select one merely because its filename is newer.
2. Read its governing bootstrap specification and relevant domain evidence rules. Verify the repository, branch and permitted remote. Do not switch bases, import another branch's progress, reset, force-push or discard local work.
3. Discover supplied task attachments actually accessible in this session, plus PDFs recursively under local `books/`. Explicitly inspect the ignored directory, using local file tools or `find books -type f -iname '*.pdf'`; a Git-aware search returning nothing is not proof that no books exist.
4. Use `direct-source-extraction` for source identity, access and corpus handling. Attachments and local PDFs are equivalent inputs only when their actual content is accessible. Do not invent an attachment path or infer full access from a filename or preview.
5. Reconstruct progress from the governing specification, committed stage outputs and verification evidence on this branch. Reconcile any in-progress local work. Do not infer completion from filenames, another feature branch or conversation memory.
6. Select the earliest incomplete required stage in the specification's own order, including lettered stages and pack sub-stages. Review accepted inputs for reuse; do not restart completed research without a concrete reason.
7. Invoke `bootstrap-stage-execution` for that stage. Once it has verified, committed, pushed and checked the remote result, proceed immediately to the next stage. Do not commit the stage a second time here.
8. After the final stage, check global acceptance gates. If already complete, report the supporting evidence without manufacturing another commit.

## Authority and stopping

Explicit invocation authorises the remaining bootstrap's ordinary research, implementation, verification and stage commits on the contracted branch. A narrower user instruction takes precedence. This is not blanket approval for supplied-book substitutions, destructive operations, paid commitments beyond approved limits, publication, merging or changes to other repositories.

A failed test, dead URL, poor search or tool error is normally work to repair, not a request for permission to continue. Try supported alternatives; stop only when mandatory evidence/capability remains unavailable or an actual user decision is needed. State the exact decision or missing input, not a generic request to continue.

Preserve required evidence and acceptance criteria. Bounded uncertainty is acceptable only where the governing stage permits it; it does not turn a mandatory failure into completion.

If a platform limit or session interruption prevents continuation, preserve available work and report the last verified stage, uncommitted work and remaining requirement honestly. Do not claim background execution. A later `/bootstrap` reconstructs state again; source attachments may need reattaching in a fresh environment when new direct reading is required.

The internal support skills are `bootstrap-stage-execution`, `bootstrap-research` and `direct-source-extraction`. Do not ask the user to invoke them or restate information the repository already provides.
