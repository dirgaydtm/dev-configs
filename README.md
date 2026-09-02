# dev-configs

My personal configs that help my day-to-day development as a Software Engineer.

Honestly, I just got sick of copy-pasting the exact same configs and scripts every single time I start a new project. I'd fix an annoying rule in one repo, completely forget about it, and then get annoyed when the same issue popped up again somewhere else. Keeping everything synced manually was driving me crazy, so I finally dumped all my setups into this one repo.

So yeah, this is basically just my personal config dump. Whenever I find a cool new trick or a better way to set things up, I just toss it in here so I can pull it down easily next time. It's built 100% for how I like to work, so I'm not really maintaining it for other people. But if you happen to find something in here that saves you a headache, feel free to just grab it!

---

## Table of Contents

- [dev-configs](#dev-configs)
  - [Table of Contents](#table-of-contents)
  - [Available Configurations](#available-configurations)
  - [Repository Structure](#repository-structure)

---

## Available Configurations

| Tool         | Description                                                    | Documentation                          |
| ------------ | -------------------------------------------------------------- | -------------------------------------- |
| **Lefthook** | Git hooks orchestration (pre-commit, pre-push, etc.)           | [docs/lefthook.md](./docs/lefthook.md) |
| **VS Code**  | Editor settings (Biome format, import updates, best practices) | [docs/vscode.md](./docs/vscode.md)     |

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
    ├── flutter/                      # Flutter specific hooks
    │   └── lefthook.yml
    ├── js/                           # JavaScript specific hooks
    │   └── lefthook.yml
    └── ts/                           # TypeScript specific hooks (includes typecheck)
        └── lefthook.yml
```

---

<sub>Feel free to copy!</sub>
