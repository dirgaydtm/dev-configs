# dev-configs

> Opinionated, production-grade developer tooling configurations for JavaScript & TypeScript projects.

This repository is a single source of truth for shared tooling configs.
Each configuration is self-contained, documented, and designed to be adopted incrementally.

---

## Table of Contents

- [dev-configs](#dev-configs)
  - [Table of Contents](#table-of-contents)
  - [Available Configurations](#available-configurations)
  - [Repository Structure](#repository-structure)

---

## Available Configurations

| Tool | Description | Documentation |
| ---- | ----------- | ------------- |
| **Lefthook** | Git hooks orchestration (pre-commit, pre-push, etc.) | [docs/lefthook.md](./docs/lefthook.md) |
| **VS Code** | Editor settings (Biome format, import updates, best practices) | [docs/vscode.md](./docs/vscode.md) |

---

## Repository Structure

```
dev-configs/
├── README.md
├── docs/
│   ├── lefthook.md
│   └── vscode.md
├── .vscode/
│   ├── settings.json
│   └── extensions.json
└── lefthook/
    ├── git/                          # Git-agnostic hooks (any language)
    │   ├── lefthook.yml
    │   ├── commitlint.config.cjs
    │   ├── .secretlintrc.json
    │   └── .secretlintignore
    ├── js/                           # JavaScript specific hooks
    │   └── lefthook.yml
    └── ts/                           # TypeScript specific hooks (includes typecheck)
        └── lefthook.yml
```

---

<sub>Maintained with ♥ — PRs welcome.</sub>
