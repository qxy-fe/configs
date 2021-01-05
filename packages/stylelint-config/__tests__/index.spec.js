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

  it(`Has no warning`, () => {
    expect(result.results[0].warnings).toHaveLength(0)
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

  it(`Two warning`, () => {
    expect(result.results[0].warnings).toHaveLength(2)
  })

  it(`Correct warning text`, () => {
    expect(result.results[0].warnings[0].text).toBe(`Expected a leading zero (number-leading-zero)`)
    expect(result.results[0].warnings[1].text).toBe(`Unexpected unknown type selector "test" (selector-type-no-unknown)`)
  })

  it(`Correct rule flagged`, () => {
    expect(result.results[0].warnings[0].rule).toBe('number-leading-zero')
    expect(result.results[0].warnings[1].rule).toBe('selector-type-no-unknown')
  })

  it(`Correct severity flagged`, () => {
    expect(result.results[0].warnings[0].severity).toBe('error')
    expect(result.results[0].warnings[1].severity).toBe('error')
  })

  it(`Correct line number`, () => {
    expect(result.results[0].warnings[0].line).toBe(2)
    expect(result.results[0].warnings[1].line).toBe(1)
  })

  it(`Correct column number`, () => {
    expect(result.results[0].warnings[0].column).toBe(8)
    expect(result.results[0].warnings[1].column).toBe(1)
  })
})
