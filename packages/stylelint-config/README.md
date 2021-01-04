# stylelint config

> qxy-fe stylelint config

## Usage

### Install

```bash
$ npm i @qxy/stylelint-config -D
# OR
$ yarn add @qxy/stylelint-config -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
  - @qxy/stylelint-config

rules:
  # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@qxy/stylelint-config"
    }
}
```
