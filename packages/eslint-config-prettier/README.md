# eslint-config

> qxy-fe eslint config with prettier

## Usage

### Install

```bash
$ npm i @qxy/eslint-config-prettier -D
# OR
$ yarn add @qxy/eslint-config-prettier -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@qxy/prettier'],

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
        "extends": "@qxy/prettier"
    }
}
```
