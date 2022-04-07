# eslint-config-typescript

> qxy-fe eslint config for TypeScript

## Usage

### Install

```bash
$ npm i @qxy/eslint-config-typescript -D
# OR
$ yarn add @qxy/eslint-config-typescript -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@qxy/typescript'],

    rules: {
        // Override rules
    },
}
```

in `package.json`

```json
{
    "eslintConfig": {
        "root": true,
        "extends": "@qxy/typescript"
    }
}
```
