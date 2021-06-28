'use strict'

const eslint = require('eslint')
const config = require('../lib')

describe(`Config`, () => {
  let cli

  beforeEach(() => {
    cli = new eslint.ESLint({
      useEslintrc: false,
      baseConfig: config,
    })
  })

  it(`Valid config`, async () => {
    const result = await cli.lintText(``)
    expect(result[0].errorCount).toBe(0)
  })
})
