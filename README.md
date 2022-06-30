# configs

Opinionable & sharable linter configs.

## Usage

```shell
$ yarn add @qxy/eslint-config  eslint typescript -D

$ yarn add  @qxy/prettier-config prettier -D

$ yarn add  @qxy/stylelint-config postcss stylelint -D
```

## Config

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


