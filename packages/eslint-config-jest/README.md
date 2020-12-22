# eslint config for Jest

> qxy-fe eslint config for Jest

## Usage

### Install

```bash
$ npm i @qxy/eslint-config-jest -D
# OR
$ yarn add @qxy/eslint-config-jest -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: [
        // Other preset
        '@qxy/jest',
    ],

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
        "extends": [
            // Other Preset
            "@qxy/jest"
        ]
    }
}
```
