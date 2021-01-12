# eslint-config-prettier-vue

> qxy-fe eslint config with prettier for VueJs

## Usage

### Install

```bash
$ npm i @qxy/eslint-config-prettier-vue -D
# OR
$ yarn add @qxy/eslint-config-prettier-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@qxy/prettier-vue'],

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
        "extends": "@qxy/prettier-vue"
    }
}
```
