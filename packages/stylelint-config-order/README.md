# stylelint-config-order

> qxy-fe stylelint config with order

## Usage

### Install

```bash
$ npm i @qxy/stylelint-config-order -D
# OR
$ yarn add @qxy/stylelint-config-order -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
    - '@qxy/stylelint-config-order'

rules:
    # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@qxy/stylelint-config-order"
    }
}
```
