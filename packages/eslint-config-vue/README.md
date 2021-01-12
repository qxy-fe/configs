# eslint-config-vue

> qxy-fe eslint config for VueJs

## Usage

### Install

```bash
$ npm i @qxy/eslint-config-vue babel-eslint -D
# OR
$ yarn add @qxy/eslint-config-vue babel-eslint -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@qxy/vue'],

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
        "extends": "@qxy/vue"
    }
}
```
