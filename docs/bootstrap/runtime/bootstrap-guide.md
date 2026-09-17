# Bootstrap Guide

Use the configured repository and environment. No repeated execution prompt is required.

## Supply sources

Put local book PDFs under `books/` (including subdirectories), or attach them to the task when the client supports accessible PDF attachments. Local setup:

```bash
mkdir -p books
```

Copy the intended PDFs there. The directory is gitignored; do not commit the books. The bootstrap identifies supplied sources and applies the specification's selection/permission rules.

## Prepare retrieval once

Native Claude web search/fetch is the default. For the agreed cloud Firecrawl fallback, complete [the environment setup](claude-code-web-firecrawl-setup.md) once. Local installations can use the same CLI and environment-variable authentication. No MCP server or Remote Control is required by this workflow.

## Run or resume

In local Claude Code, start `claude` from the repository root. In a configured cloud Code session, use the task input. Invoke:

```text
/bootstrap
```

It discovers accessible sources, reconstructs repository progress, executes the next incomplete stage, verifies and repairs it, commits and pushes it, then continues. It requests input only for genuine decisions or unresolved mandatory access/capability gaps.

Run the same command after an interruption. A fresh cloud session may require reattaching sources needed for new reading; the durable research record remains in the repository. A platform refusing the contracted branch push is an access limitation, not permission to force-push or change branch policy.
