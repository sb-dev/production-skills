# <Domain> Production Skills

<!-- Optional hero image when the domain has a useful public visual surface. -->

**<One-line product promise. Describe the production responsibility, not the model/provider.>**

<One short paragraph explaining what this project helps an AI coding agent or practitioner produce end to end.>

It supports the production process:

- **<Capability group 1>**: <what can be produced or decided>
- **<Capability group 2>**: <what can be produced or decided>
- **<Capability group 3>**: <what can be produced or decided>
- **<Capability group 4>**: <what can be produced or decided>

<One paragraph describing the governing production behaviour: reduce uncertainty cheaply, preserve accepted decisions, evaluate at the correct level, repair the smallest sufficient scope, etc. Adapt this to the domain.>

## <Domain control model>

<!-- Rename this heading to the domain-native control concept. Examples: Approval and cost control; Creative control; Claims, proof and commercial control. -->

Explain the decisions that must remain distinct and who owns them.

For example:

```text
<input / proposed decision>
→ selection / assessment
→ explicit approval or accepted scope
→ downstream production
→ evidence
→ bounded repair
```

State the important invariants, commitment points and preservation rules in product language.

## Install

Show the canonical project-local installation path first.

```bash
npx skills add <org>/<repo> \
  --skill <core-skill-a> \
  --skill <core-skill-b> \
  --agent claude-code
```

Show Codex or other genuinely supported agents where relevant.

Show how to inspect before installing:

```bash
npx skills add <org>/<repo> --list
```

Show selective installation when the project supports it.

Do not expose bootstrap-stage caveats here. Final publication evidence determines which installation claims remain in the released README.

## Quick start — <Strong Level 1 example>

<One or two sentences explaining the smallest useful production problem and what the user will learn.>

```text
<Complete copyable Level 1 prompt. Do not replace this with a link to a research log.>
```

A first project should stay small:

```text
production/
└── <domain>/
    ├── <artifact-1>
    ├── <artifact-2>
    ├── <artifact-3>
    └── <evaluation-or-delivery-artifact>
```

The important behaviour is:

```text
<cheap representation>
→ <selection / approval>
→ <production>
→ <evaluation>
→ <smallest sufficient repair>
```

See [<Example name>](examples/level-1-<example>/README.md).

## Learn by producing

Progress through increasingly demanding production problems. The three primary examples at each level should be complementary rather than cosmetic variants.

### Level 1 — <Domain-native level name>

<What this level proves.>

- **[<Example 1>](examples/level-1-<example-1>/README.md)** — <production problem / mode>
- **[<Example 2>](examples/level-1-<example-2>/README.md)** — <production problem / mode>
- **[<Example 3>](examples/level-1-<example-3>/README.md)** — <production problem / mode>

```text
<compact level production loop>
```

### Level 2 — <Domain-native level name>

<What this level adds.>

- **[<Example 1>](examples/level-2-<example-1>/README.md)** — <production problem / mode>
- **[<Example 2>](examples/level-2-<example-2>/README.md)** — <production problem / mode>
- **[<Example 3>](examples/level-2-<example-3>/README.md)** — <production problem / mode>

```text
<compact level production loop>
```

### Level 3 — <Domain-native level name>

<What this level adds.>

- **[<Example 1>](examples/level-3-<example-1>/README.md)** — <production problem / mode>
- **[<Example 2>](examples/level-3-<example-2>/README.md)** — <production problem / mode>
- **[<Example 3>](examples/level-3-<example-3>/README.md)** — <production problem / mode>

```text
<compact level production loop>
```

### Level 4 — <Domain-native level name>

<What this level adds.>

- **[<Example 1>](examples/level-4-<example-1>/README.md)** — <production problem / mode>
- **[<Example 2>](examples/level-4-<example-2>/README.md)** — <production problem / mode>
- **[<Example 3>](examples/level-4-<example-3>/README.md)** — <production problem / mode>

```text
<compact level production loop>
```

### Level 5 — <Domain-native level name>

<What this level proves at full production responsibility and, where useful, cross-domain composition.>

- **[<Example 1>](examples/level-5-<example-1>/README.md)** — <production problem / mode>
- **[<Example 2>](examples/level-5-<example-2>/README.md)** — <production problem / mode>
- **[<Example 3>](examples/level-5-<example-3>/README.md)** — <production problem / mode>

```text
<compact level production loop>
```

## Project structure grows with the work

**<Smallest useful production>**  
Use <minimal artefacts>.

**<When another production concern appears>**  
Add <domain-native structure> only when needed.

**<When work needs independent planning or repair>**  
Add <smallest retryable / revisable unit>.

**<When a flat structure stops scaling>**  
Introduce <higher-level organisation> only when required by the work.

**Other production domains contribute**  
Use domain-specific production areas, for example:

```text
production/
├── <domain>/
├── <adjacent-domain-a>/
└── <adjacent-domain-b>/
```

Keep the structure lean:

- <domain-specific preservation rule>;
- <domain-specific retry / revision rule>;
- <state / approval rule>;
- <shared-artifact rule>;
- <delivery / variant rule>.

## Skills

### `<core-skill-a>`

<What this skill owns, when to use it, what production decision it resolves, and its important boundary.>

### `<core-skill-b>`

<What this skill owns, when to use it, what production decision it resolves, and its important boundary.>

### `<core-skill-c>`

<Repeat for every core skill. Add or remove subsections according to the domain architecture.>

### `<pack-authoring-skill>`

<Explain how reusable Extension Packs are created or revised and what prevents duplicate or cosmetic packs.>

## Extension Packs

Explain what a pack changes in this domain, what it cannot override, and how users select one.

Link the public catalogue or pack documentation.

A pack should specialise production behaviour, not merely add a label or provider name.

## Execution

Explain the boundary between Production Skills reasoning and external execution capabilities.

List genuinely relevant execution layers, for example:

- **<provider / specialist skill / CLI>** — <responsibility>
- **<deterministic tool>** — <responsibility>
- **<adjacent Production Skills family>** — <handoff responsibility>

State the governing cost / fidelity / preservation principle in domain language.

## Testing and benchmarks

Explain how repository correctness and domain quality are evaluated without reducing quality to one universal score.

Link to the public benchmark/evaluation entry point:

- [Testing and benchmark specification](docs/04-testing-and-benchmark-spec.md)
- [Benchmarks / evals](benchmarks/)

Only include measured benchmark claims that survive the final public-claims reconciliation.

## Documentation

### Specifications

- [System specification](docs/01-<domain>-system-spec.md)
- [Workflows and artefacts](docs/02-<domain>-workflows-and-artifacts-spec.md)
- [Repository and contracts](docs/03-<domain>-repository-and-contracts-spec.md)
- [Testing and benchmark](docs/04-testing-and-benchmark-spec.md)
- [Extension Pack contract](docs/05-<domain>-customisation-packs-spec.md)
- [Extension Pack catalogue](docs/06-<domain>-extension-pack-catalogue.md)

Add useful direct anchors when they improve navigation.

Do not use bootstrap research logs as the primary product-onboarding path.

## Boundaries

State what the project deliberately does not own and which adjacent disciplines or systems own those responsibilities.

Keep the boundary useful to a user rather than describing bootstrap architecture.

## Contributing

Link [CONTRIBUTING.md](CONTRIBUTING.md) and summarise the most important contribution rule for the domain.

## Licence

<State the repository licence and link [LICENSE](LICENSE).>

Keep third-party provider, asset, voice, font, model and branding rights separate from the repository licence where relevant.
