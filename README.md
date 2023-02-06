# configs

Opinionable & sharable linter configs.

## Install

```shell
$ yarn add @qxy/eslint-config eslint typescript -D

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
    "extends": [
      "@qxy"
    ]
  }
}
```

With vue 3 support

```json
{
  "eslintConfig": {
    "root": true,
    "extends": [
      "@qxy/vue3"
    ]
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

Lint staged files only via `nano-staged`:

```json
{
  "nano-staged": {
    "*.{js,ts,json,vue,html,md,yml,yaml}": "eslint --fix",
    "*.{css,vue,scss}": "stylelint --fix"
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

