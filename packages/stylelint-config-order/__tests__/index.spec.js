'use strict'

const fs = require('fs')
const path = require('path')
const stylelint = require('stylelint')
const config = require('../lib')

const validCss = fs.readFileSync(path.resolve(__dirname, 'fixtures/valid.css'), 'utf-8')
const validScss = fs.readFileSync(path.resolve(__dirname, 'fixtures/valid.scss'), 'utf-8')
const invalidCss = fs.readFileSync(path.resolve(__dirname, 'fixtures/invalid.css'), 'utf-8')
const invalidScss = fs.readFileSync(path.resolve(__dirname, 'fixtures/invalid.scss'), 'utf-8')

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

describe(`Valid scss`, () => {
  let result

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validScss,
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

  it(`Did error`, () => {
    expect(result.errored).toBeTruthy()
  })

  it(`Correct rule order`, () => {
    expect(result.results[0].warnings[0].rule).toBe(`order/properties-order`)
    expect(result.results[0].warnings[1].rule).toBe(`order/properties-order`)
    expect(result.results[0].warnings[2].rule).toBe(`order/properties-order`)
    expect(result.results[0].warnings[3].rule).toBe(`order/properties-order`)
  })
})

describe(`Invalid scss`, () => {
  let result

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidScss,
      config,
    })
  })

  it(`Did error`, () => {
    expect(result.errored).toBeTruthy()
  })

  it(`Correct rule order`, () => {
    expect(result.results[0].warnings[0].rule).toBe(`order/order`)
  })
})
