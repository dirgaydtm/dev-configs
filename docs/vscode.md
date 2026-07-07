# VS Code Configuration

An opinionated VS Code setup for seamless integration with the project stack (Biome, TypeScript), featuring highly practical productivity settings.

## Key Features

1. **Auto-Format on Save**: As soon as you press `Ctrl+S`, Biome will automatically format and fix lint errors (`fixAll`) across JS, TS, and JSON files.
2. **Auto-Organize Imports**: Automatically sorts and cleans up your `import` statements on save.
3. **Auto-Update Imports**: When you move or rename a file in the sidebar, VS Code will automatically update all `import` paths across your entire project without asking!
4. **Linked Editing**: When you rename an opening HTML/JSX tag (e.g. changing `<div>` to `<span>`), the closing tag is renamed simultaneously.
5. **TypeScript Workspace TSDK**: Forces VS Code to use the project's local TypeScript version (`node_modules`) instead of the built-in one.

## Installation

Since VS Code requires physical files in the `.vscode/` directory, you only need to copy the configuration files from this repository to your project root.

```bash
mkdir -p .vscode
cp dev-configs/.vscode/settings.json .vscode/settings.json
cp dev-configs/.vscode/extensions.json .vscode/extensions.json
```

*(Alternatively, you can manually copy-paste the JSON contents if you already have an existing `.vscode` folder).*

## Recommended Extensions

- **Biome** (`biomejs.biome`): Essential! The all-in-one replacement for Prettier & ESLint.
