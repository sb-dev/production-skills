# Claude Code Web + Firecrawl CLI — Setup

**Scope:** Cloud environment setup and verification only. **Checked:** 17 September 2026.

## 1. Open the environment editor

Open [Claude Code Web](https://claude.ai/code) and complete GitHub onboarding if needed. Above the message box, select the cloud/environment name, then **Add cloud environment** (or the gear beside an existing environment). Name it `Production Skills Bootstrap`. [1]

## 2. Network and authentication

Select **Custom** network access. Keep **Also include default list of common package managers** enabled and add:

```text
api.firecrawl.dev
```

Obtain a key from your Firecrawl account. Add it under **Environment variables**, not to the repository or setup script:

```text
FIRECRAWL_API_KEY=fc-your-key
```

Environment variables are readable by session commands and environment users; never print or commit the key. This CLI authentication needs no browser login. [1][2]

## 3. Preinstall the CLI

Enter this **Setup script**:

```bash
#!/bin/bash
set -euo pipefail
npm install -g firecrawl-cli
firecrawl --version
```

Do not add interactive login, default-provider replacement or Firecrawl workflow installers. Native Claude web tools remain the default. [2]

## 4. Save and verify

Save, then start a disposable Code session using this environment. Ask Claude to run these commands without modifying the repository:

```bash
firecrawl --version
firecrawl --status
firecrawl search "Claude Code"
```

The search uses Firecrawl credits. Installation, authentication and an actual successful API request must all be verified. Setup-script results are cached, not a permanent installation guarantee; configuration changes or cache expiry rebuild them. Environment-variable changes require a new session. [1][2]

If installation fails, check package-manager access. For API failure, check the key, account credits and the API allowlist. Do not dump environment variables while diagnosing errors.

## Sources

[1]: https://code.claude.com/docs/en/cloud-environments
[2]: https://docs.firecrawl.dev/sdks/cli
