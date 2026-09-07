# <Domain> Production Skills

![<Domain> Production Skills](hero.png)

**<One-line production positioning.>**

<Short explanation of what complete production outcome the skills enable.>

It supports the production process from <start> to <finish>:

- **<Capability group>**: ...
- **<Capability group>**: ...
- **Quality**: evaluation, diagnosis, preservation and targeted correction

<Explain the governing production loop in domain language.>

## Approval and cost / fidelity control

<Explain selection, approval, locking, expensive commitment points, cheapest adequate representations and bounded retries where relevant.>

## Install

```bash
npx skills add <org>/<repo> \
  --skill <core-skill-a> \
  --skill <core-skill-b> \
  --agent claude-code
```

<Add provider/execution skill installation only when genuinely required.>

## Quick start — <Level 1 example>

<Use one strong Level 1 example to teach the core production loop. Include the complete prompt.>

```text
<copyable generation prompt>
```

Show the smallest useful project structure and the important production behaviour.

## Learn by producing

Progress through increasingly demanding production responsibilities. Each level showcases **three complementary examples** selected to cover different capabilities rather than three cosmetic variants.

### Level 1 — <Domain-native level name>

| Example | Production type | Production challenge |
|---|---|---|
| **[Example A](examples/...)** |  |  |
| **[Example B](examples/...)** |  |  |
| **[Example C](examples/...)** |  |  |

### Level 2 — <Domain-native level name>

| Example | Production type | Production challenge |
|---|---|---|
| **[Example A](examples/...)** |  |  |
| **[Example B](examples/...)** |  |  |
| **[Example C](examples/...)** |  |  |

### Level 3 — <Domain-native level name>

| Example | Production type | Production challenge |
|---|---|---|
| **[Example A](examples/...)** |  |  |
| **[Example B](examples/...)** |  |  |
| **[Example C](examples/...)** |  |  |

### Level 4 — <Domain-native level name>

| Example | Production type | Production challenge |
|---|---|---|
| **[Example A](examples/...)** |  |  |
| **[Example B](examples/...)** |  |  |
| **[Example C](examples/...)** |  |  |

### Level 5 — <Domain-native level name>

| Example | Production type | Production challenge |
|---|---|---|
| **[Example A](examples/...)** |  |  |
| **[Example B](examples/...)** |  |  |
| **[Example C](examples/...)** |  |  |

Every primary example should contain its complete copyable generation prompt and honest evidence about what has actually been run.

## Project structure grows with the work

Describe the smallest useful structure first, then explain which surfaces appear only when production complexity requires them.

Keep the structure lean. Preserve approved work and avoid status-folder duplication or shared infrastructure without evidence.

## Skills

### `<core-skill>`

<Responsibility.>

### `<evaluate-skill>`

<Responsibility and diagnostic routing.>

### `<pack-authoring-skill>`

<Create or revise self-contained Extension Packs, showcases and behavioural evals.>

## Extension Packs

Explain the domain's Extension Pack model and list the initial curated packs.

Every catalogue pack should have a realistic showcase, exact generation prompt, behavioural evals and core-vs-pack comparison.

Link to:

- `docs/05-<domain>-customisation-packs-spec.md`
- `docs/06-<domain>-extension-pack-catalogue.md`

## Execution

Explain which existing tools, provider skills, CLIs, APIs or deterministic utilities execute specialist operations beneath the Production Skills intelligence layer.

> **Use the cheapest representation capable of resolving the current production uncertainty.**
>
> **Preserve approved decisions and change only what needs to change.**

## Repository checks

```bash
<install dependencies>
<validation command>
<benchmark command>
<clean installation smoke test>
```

Distinguish deterministic repository correctness from domain-quality evaluation and measured production evidence.

## Documentation

### Specifications

- [System Specification](docs/01-...)
- [Workflows and Artifacts Specification](docs/02-...)
- [Repository and Contracts Specification](docs/03-...)
- [Testing and Benchmark Specification](docs/04-testing-and-benchmark-spec.md)
- [Customisation Packs Specification](docs/05-...)
- [Extension Pack Catalogue](docs/06-...)

### Skills

- [<skill>](skills/<skill>/SKILL.md)

### Evals and benchmarks

- [Benchmarks](benchmarks/README.md)

### Examples

Link the 15 primary progressive examples and Extension Pack showcases.

## Project boundary

State what this project owns, what adjacent Production Skills own, and how handoffs occur through artefacts rather than shared runtime dependencies.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Licence

<Licence>. See [`LICENSE`](LICENSE).
