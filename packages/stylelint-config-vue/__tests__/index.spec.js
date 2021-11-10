'use strict'

const path = require('path')
const cp = require('child_process')
const { fail } = require('assert')

const STYLELINT = `.${path.sep}node_modules${path.sep}.bin${path.sep}stylelint`

describe(`Integration with stylelint`, () => {
  let originCwd = null

  beforeEach(() => {
    originCwd = process.cwd()
    process.chdir(path.join(__dirname, 'fixtures/intergrations/stylelint'))
    cp.execSync(`npm i`, { stdio: 'inherit' })
  })

  afterEach(() => {
    process.chdir(originCwd)
  })

  it('should lint without errors', () => {
    cp.execSync(`${STYLELINT} src/valid.vue`, { stdio: 'inherit' })
  })

  it('should lint with errors', () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.vue`, { stdio: 'inherit' })
      fail('Expect an error, but without errors')
    } catch {
      // Expects
    }
  })
})
