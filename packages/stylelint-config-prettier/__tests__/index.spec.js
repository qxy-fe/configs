'use strict'

const stylelint = require('stylelint')
const config = require('../lib')

const validCss =
`div {
  position: relative;
  box-sizing: border-box;
  flex: 1 1 auto;
  grid-gap: 16px;
  order: 1;
  width: 320px;
  font-size: 1.5rem;
  pointer-events: all;
  background-color: slategray;
  transition: opacity 300ms ease;
}
`
const invalidCss =
`div {
  position: relative;
  box-sizing: border-box;
    flex: 1 1 auto;
  grid-gap: 16px;
  order: 1;
  width: 320px;
  font-size: 1.5rem;
  pointer-events: all;
  background-color:  slategray;
  transition: opacity 300ms ease;
}
`

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
    expect(result.results[0].warnings).toHaveLength(2)
    expect(result.results[0].warnings[0].rule).toBe(`prettier/prettier`)
    expect(result.results[0].warnings[1].rule).toBe(`prettier/prettier`)
  })
})
