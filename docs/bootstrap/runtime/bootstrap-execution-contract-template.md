# Bootstrap Execution Contract

**Repository:** `{{REPOSITORY}}`  
**Working branch:** `{{BRANCH}}`  
**Governing bootstrap:** `{{SPEC_PATH}}`  
**Operator command:** `/bootstrap`  
**Configured:** {{DATE}}  
**Runtime source:** `sb-dev/production-skills@{{SOURCE_REVISION}}`

## Authority

The governing bootstrap defines domain work, source permissions and acceptance gates. `/bootstrap` authorises the remaining stages' ordinary work on this branch, one completed stage at a time, unless the user narrows the request. It does not approve source substitutions, destructive changes, merging, publication or writes to other repositories.

Reconstruct progress from this branch's committed outputs and real verification evidence, including legitimate history inherited from `main`. Do not import completion state from another feature branch. Installing the runtime neither completes stages nor changes maturity.

## Execution

Use `bootstrap-stage-execution` for the complete stage loop and its commit/push gate; `bootstrap-research` for native-first retrieval with preinstalled Firecrawl escalation; and `direct-source-extraction` for accessible attachments and local `books/` PDFs.

Read the complete stage and accepted dependencies, do the substantive work, persist outputs, verify, repair, commit once, push to the contracted origin branch, verify the remote result, and continue. Preserve exact counts, lettered stages and pack sub-stages. Use the repository's commit convention with the stage identifier.

Keep progress and decisions in existing research logs. Never commit supplied sources, credentials or `.firecrawl/` retrieval output; inspect the staged diff rather than relying on ignore rules alone.

## Continuation

Repair routine search/tool/test failures without asking whether to continue. Pause only for a genuine decision or mandatory evidence/capability that remains unavailable after supported alternatives. Do not weaken acceptance criteria or fabricate evidence.

Missing Firecrawl does not block work that native tools can complete. Missing books block only work that actually requires their unavailable content. New attachments do not silently replace an accepted corpus.

If interrupted, report the last verified stage and partial work accurately. Resume through `/bootstrap` without repeating the operating prompt. After the final stage, verify global acceptance gates before claiming completion.
