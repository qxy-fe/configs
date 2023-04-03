# configs

[![CI](https://github.com//qxy-fe/configs/workflows/CI/badge.svg)](https://github.com//qxy-fe/configs/actions)
[![LICENSE](https://img.shields.io/github/license/qxy-fe/configs.svg)](https://github.com/qxy-fe/configs/blob/main/LICENSE)

Opinionable & sharable linter configs.

## Install

Install eslint and peers:

```bash
yarn add @qxy/eslint-config eslint typescript -D
```

Install prettier and peers:

```bash
yarn add  @qxy/prettier-config prettier -D
```

Install stylelint and peers:

```bash
yarn add  @qxy/stylelint-config @qxy/prettier-config postcss stylelint prettier -D
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

Use `yarn lint:script --fix` and `yarn lint:style --fix` to autofix fixable problems.

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

Configuration in `.vscode/settings.json`

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [
    "vue",
    "yaml",
    "html",
    "json",
    "jsonc",
    "json5",
    "markdown",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript][typescript][vue]": {
    "editor.formatOnSave": false
  }
}
```

## Support

For now, node versions >=14.19.3 are still being tested.

It will end at [30 Apr 2023](https://endoflife.date/nodejs).

Please upgrade to Node >=16.14 as soon as possible.

## License

[MIT](./LICENSE) License © 2020-PRESENT [qxy-fe](https://github.com/qxy-fe)
