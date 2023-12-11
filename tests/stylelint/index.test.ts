import fs from 'node:fs'
import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'
import { resolve } from '../utils'

const validCss = fs.readFileSync(resolve('tests/stylelint/fixtures/valid.css'), 'utf8')
const invalidCss = fs.readFileSync(resolve('tests/stylelint/fixtures/invalid.css'), 'utf8')
const configFile = resolve('packages/stylelint-config/index.js')

describe('valid css', () => {
  it('dit not error', async () => {
    const result = await stylelint.lint({
      code: validCss,
      configFile,
    })

    expect(result.errored).toBeFalsy()
    expect(result.results[0].warnings).toHaveLength(0)
  })
})

describe('invalid css', () => {
  it('did error', async () => {
    const result = await stylelint.lint({
      code: invalidCss,
      configFile,
    })

    expect(result.errored).toBeTruthy()
    expect(result.results[0].warnings).toMatchInlineSnapshot(`
      [
        {
          "column": 1,
          "endColumn": 7,
          "endLine": 1,
          "line": 1,
          "rule": "selector-type-no-unknown",
          "severity": "error",
          "text": "Unexpected unknown type selector "foobar" (selector-type-no-unknown)",
        },
      ]
    `)
  })
})
