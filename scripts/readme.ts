import fs from 'fs'
import { green } from 'kolorist'

type IPreset = string

type IPresetBlock = {
  title: string
  presets: IPreset[]
}

const eslintPresets: IPreset[] = [
  `eslint-config`,
  `eslint-config-vue`,
  `eslint-config-jest`,
  `eslint-config-prettier`,
  `eslint-config-prettier-vue`,
]

const stylelintPresets: IPreset[] = [
  `stylelint-config`,
  `stylelint-config-scss`,
  `stylelint-config-vue`,
  `stylelint-config-order`,
  `stylelint-config-prettier`,
]

const prettierPresets = [`prettier-config`]

const getPresetBlock = ({ title, presets }: IPresetBlock) =>
  [
    `## ${title}`,
    ...presets.map(
      preset => `**[${preset}](./packages/${preset})**

[![NPM VERSION](https://img.shields.io/npm/v/@qxy/${preset}.svg)](https://www.npmjs.com/package/@qxy/${preset})`
    ),
  ].join(`\n\n`)

fs.writeFileSync(
  `README.md`,
  fs
    .readFileSync(`README.md`, `utf-8`)
    .replace(/<!-- BEGIN PRESETS -->[\W\w]*<!-- END PRESETS -->/, () =>
      [
        `<!-- BEGIN PRESETS -->`,
        getPresetBlock({
          title: `ESLint`,
          presets: eslintPresets,
        }),
        getPresetBlock({
          title: `StyleLint`,
          presets: stylelintPresets,
        }),
        getPresetBlock({
          title: `Prettier`,
          presets: prettierPresets,
        }),
        `<!-- END PRESETS -->`,
        console.log(`${green(`README.md`)} updated successfully!`),
      ]
        .join(`\n\n`)
        .trimEnd()
    ),
  `utf-8`
)
