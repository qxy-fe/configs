# configs

Opinionable & sharable linter configs.

## Install

```shell
$ yarn add @qxy/eslint-config  eslint typescript -D

$ yarn add  @qxy/prettier-config prettier -D

$ yarn add  @qxy/stylelint-config @qxy/prettier-config postcss stylelint prettier -D
```

## Config

Configuration in `package.json`:

**ESLint**

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@qxy/eslint-config"
  }
}
```

**Prettier**

```json
{
  "prettier": "@qxy/prettier-config"
}
```

**Stylelint**

```json
{
  "stylelint": {
    "root": true,
    "extends": "@qxy/stylelint-config"
  }
}
```

## Usage

Run linter with npm scripts:

```json
{
  "scripts": {
    "lint:script": "eslint .",
    "lint:style": "stylelint \"src/**/*.{vue,scss}\""
  }
}
```

Lint staged files only via `lint-staged`:

```json
{
  "lint-staged": {
    "*.{js,ts,json,vue,html,md,yml,yaml}": "eslint --fix",
    "*.{css,vue,scss}": "stylelint --fix"
  }
}
```

Auto fix when develop with `VS Code`:

Config in `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

