import { ESLint } from 'eslint'
import { describe, expect, it } from 'vitest'
import { resolve } from '../utils'

const overrideConfigFile = resolve('packages/eslint-config/index.js')

describe('invalid', () => {
  it('error', async () => {
    const eslint = new ESLint({ overrideConfigFile })
    const result = await eslint.lintText('export const foo = `bar`')

    expect(result[0].errorCount).toBe(2)
    expect(result[0].messages).toMatchInlineSnapshot(`
      [
        {
          "column": 20,
          "endColumn": 25,
          "endLine": 1,
          "fix": {
            "range": [
              19,
              24,
            ],
            "text": "'bar'",
          },
          "line": 1,
          "message": "Strings must use singlequote.",
          "messageId": "wrongQuotes",
          "nodeType": "TemplateLiteral",
          "ruleId": "@typescript-eslint/quotes",
          "severity": 2,
        },
        {
          "column": 25,
          "fix": {
            "range": [
              24,
              24,
            ],
            "text": "
      ",
          },
          "line": 1,
          "message": "Newline required at end of file but not found.",
          "messageId": "missing",
          "nodeType": "Program",
          "ruleId": "eol-last",
          "severity": 2,
        },
      ]
    `)
  })
})
