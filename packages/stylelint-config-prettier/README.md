# stylelint-config-prettier

> qxy-fe stylelint config with prettier

## Usage

### Install

```bash
$ npm i @qxy/stylelint-config-prettier -D
# OR
$ yarn add @qxy/stylelint-config-prettier -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
    - '@qxy/stylelint-config-prettier'

rules:
    # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@qxy/stylelint-config-prettier"
    }
}
```
