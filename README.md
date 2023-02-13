# configs

[![CI](https://github.com//qxy-fe/configs/workflows/CI/badge.svg)](https://github.com//qxy-fe/configs/actions)
[![LICENSE](https://img.shields.io/github/license//qxy-fe/configs.svg)](https://github.com//qxy-fe/configs/blob/main/LICENSE)

Opinionable & sharable linter configs.

## Install

```shell
$ yarn add @qxy/eslint-config eslint typescript -D

$ yarn add  @qxy/prettier-config prettier -D

$ yarn add  @qxy/stylelint-config @qxy/prettier-config postcss stylelint prettier -D
```

## Config

**ESLint**

Configuration in `.eslintrc.json`:

```json
{
  "root": true,
  "extends": [
    "@qxy"
  ]
}
```

**Prettier**

Configuration in `package.json`:

```json
{
  "prettier": "@qxy/prettier-config"
}
```

**Stylelint**

Configuration in `stylelint.config.cjs`:

```js
module.exports = {
  extends: [
    '@qxy/stylelint-config',
  ],
  rules: {
    // override rules
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

Lint staged files only via `nano-staged`:

```json
{
  "nano-staged": {
    "*.{js,ts,json,vue,html,md,yml,yaml}": "eslint --fix",
    "*.{css,vue,scss}": [
      "prettier --write",
      "stylelint --fix"
    ]
  }
}
```

Auto fix when coding with `VSCode`:

Config in `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "yaml",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript][typescript][vue]": {
    "editor.formatOnSave": false
  }
}
```
