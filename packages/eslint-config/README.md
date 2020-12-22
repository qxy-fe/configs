# eslint-config

> qxy-fe eslint config

## Usage

### Install

```bash
$ npm i @qxy/eslint-config -D
# OR
$ yarn add @qxy/eslint-config -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@qxy'],

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
        "extends": "@qxy"
    }
}
```
