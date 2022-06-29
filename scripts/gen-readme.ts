import fs from 'fs-extra'
import { green } from 'picocolors'

interface PresetBlock {
  title: string
  presets: string[]
}

const eslintPresets = [
  `eslint-config`,
  `eslint-config-vue`,
  `eslint-config-typescript`,
  `eslint-config-prettier-vue`,
]

const stylelintPresets = [
  `stylelint-config`,
  `stylelint-config-scss`,
  `stylelint-config-vue`,
  `stylelint-config-order`,
  `stylelint-config-prettier`,
]

const prettierPresets = [
  `prettier-config`,
]

const getPresetBlock = ({ title, presets }: PresetBlock) =>
  [
    `## ${title}`,
    ...presets.map(
      preset => `**[${preset}](./packages/${preset})**

[![NPM VERSION](https://img.shields.io/npm/v/@qxy/${preset}.svg)](https://www.npmjs.com/package/@qxy/${preset})`,
    ),
  ].join(`\n\n`)

async function main () {
  const readme = await fs.readFile(`README.md`, `utf-8`)
  const content = readme
    .replace(/<!-- PRESETS START -->[\W\w]*<!-- PRESETS END -->/, () => [
    `<!-- PRESETS START -->`,
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
    `<!-- PRESETS END -->`,
    ]
      .join(`\n\n`)
      .trimEnd())
  fs.writeFile(`README.md`, content, `utf-8`)
}

try {
  main()
  console.log(`${green(`README.md`)} updated successfully!`)
} catch (err) {
  console.log(err)
}
