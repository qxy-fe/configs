# stylelint-config-scss

> qxy-fe stylelint config for SCSS syntax

## Usage

### Install

```bash
$ npm i @qxy/stylelint-config-scss -D
# OR
$ yarn add @qxy/stylelint-config-scss -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
    - '@qxy/stylelint-config-scss'

rules:
    # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@qxy/stylelint-config-scss"
    }
}
```
