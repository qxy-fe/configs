'use strict'

const fs = require('fs')
const path = require('path')
const stylelint = require('stylelint')
const config = require('../lib')

const validCss = fs.readFileSync(path.resolve(__dirname, 'fixtures/valid.css'), 'utf-8')
const invalidCss = fs.readFileSync(path.resolve(__dirname, 'fixtures/invalid.css'), 'utf-8')

describe(`Valid css`, () => {
  let result

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config,
    })
  })

  it(`Did not error`, () => {
    expect(result.errored).toBeFalsy()
  })
})

describe(`Invalid css`, () => {
  let result

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidCss,
      config,
    })
  })

  it(`Did not error`, () => {
    expect(result.errored).toBeTruthy()
  })

  it(`Correct rule order`, () => {
    expect(result.results[0].warnings[0].rule).toBe(`order/properties-order`)
    expect(result.results[0].warnings[1].rule).toBe(`order/properties-order`)
    expect(result.results[0].warnings[2].rule).toBe(`order/properties-order`)
  })
})
