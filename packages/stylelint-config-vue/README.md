# stylelint-config-vue

> qxy-fe stylelint config for vue SFC

## Usage

### Install

```bash
$ npm i @qxy/stylelint-config-vue -D
# OR
$ yarn add @qxy/stylelint-config-vue -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
    - '@qxy/stylelint-config-vue'

rules:
    # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@qxy/stylelint-config-vue"
    }
}
```
