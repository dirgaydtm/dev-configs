# Lefthook Configuration

Lefthook supports an [`extends`](https://lefthook.dev/configuration/extends.html) key that merges multiple config files at runtime.
This repo uses that to separate concerns clearly:

| Layer       | File                            | Scope                                                           |
| ----------- | ------------------------------- | --------------------------------------------------------------- |
| **git**     | `lefthook/git/lefthook.yml`     | Commit conventions, secret detection - language-agnostic        |
| **flutter** | `lefthook/flutter/lefthook.yml` | Dart format/fix, flutter analyze, print checks                  |
| **js**      | `lefthook/js/lefthook.yml`      | Biome formatting & linting, build, audit (No TypeScript)        |
| **ts**      | `lefthook/ts/lefthook.yml`      | Biome formatting & linting, TypeScript type-check, build, audit |

## Prerequisites

Install the following tools in your project before activating hooks:

| Tool                                                   | Purpose                | Install                                                              |
| ------------------------------------------------------ | ---------------------- | -------------------------------------------------------------------- |
| [Flutter](https://flutter.dev/)                        | Dart/Flutter SDK       | Follow [docs](https://docs.flutter.dev/get-started/install)          |
| [Biome](https://biomejs.dev/)                          | Linting & Formatting   | `bun add -d @biomejs/biome`                                          |
| [TypeScript](https://typescriptlang.org)               | Type checking          | `bun add -d typescript`                                              |
| [Commitlint](https://commitlint.js.org)                | Commit message linting | `bun add -d @commitlint/cli @commitlint/config-conventional`         |
| [Secretlint](https://github.com/secretlint/secretlint) | Secret detection       | `bun add -d secretlint @secretlint/secretlint-rule-preset-recommend` |

## Installation

**Step 1 - Install Lefthook**

```bash
bun add -d lefthook
```

**Step 2 - Add this repository as a Git Submodule**

To ensure configuration files (such as `commitlint.config.cjs` and `.secretlintrc.json`) are accessible locally, add this repository as a submodule:

```bash
git submodule add https://github.com/dirgaydtm/dev-configs.git dev-configs
```

**Step 3 - Create your root `lefthook.yml`**

Create a `lefthook.yml` in the root of your project and extend the layers you need:

```yaml
# lefthook.yml
# Compose only the layers you need.
colors: true
output:
  - meta
  - summary
  - failure
extends:
  - ./dev-configs/lefthook/git/lefthook.yml
  - ./dev-configs/lefthook/ts/lefthook.yml
```

**Step 4 - Activate hooks**

```bash
bunx lefthook install
```

## What each layer does

### `flutter/` - Flutter (dart + flutter)

```
git commit
  ├── [pre-commit] format              - auto-format staged dart files
  ├── [pre-commit] fix                 - auto-apply dart fixes on staged files
  ├── [pre-commit] analyze             - flutter analyze (fatal infos)
  └── [pre-commit] no-debug-print      - reject print()

git push
  └── [pre-push] analyze-strict        - strict flutter analyze (fatal infos/warnings)
```

### `git/` - language-agnostic

```
git commit
  └── [pre-commit] secretlint          - detect API keys, tokens, private keys

git commit -m "..."
  └── [commit-msg] commitlint          - enforce Conventional Commits format
```

### `js/` - JavaScript (bun + biome)

```
git commit
  ├── [pre-commit] biome               - static analysis + auto-format/fix on staged files
  └── [pre-commit] no-debug-code       - reject console.log / debugger

git push
  ├── [pre-push] build                 - ensure project builds
  └── [pre-push] audit                 - bun pm audit high severity vulnerabilities

git checkout / switch
  └── [post-checkout] install-deps     - auto install if package files changed
```

### `ts/` - TypeScript (bun + biome + tsgo)

```
git commit
  ├── [pre-commit] biome               - static analysis + auto-format/fix on staged files
  ├── [pre-commit] typecheck           - tsgo --noEmit (staged files only)
  └── [pre-commit] no-debug-code       - reject console.log / debugger

git push
  ├── [pre-push] build                 - ensure project builds
  └── [pre-push] audit                 - bun pm audit high severity vulnerabilities

git checkout / switch
  └── [post-checkout] install-deps     - auto install if package files changed
```

## Skipping hooks

```bash
# Skip all hooks entirely (emergency use only)
LEFTHOOK=0 git commit -m "fix: emergency hotfix"

# Skip a specific command
LEFTHOOK_EXCLUDE=typecheck git commit -m "wip: iterating"

# Skip all hooks for one commit
git commit --no-verify -m "chore: wip"
```
