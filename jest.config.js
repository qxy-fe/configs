/**
 * @file Jest config
 */

const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),

  verbose: true,

  testMatch: [
    '<rootDir>/packages/**/__tests__/**/*.(spec|test).[jt]s?(x)',
  ],

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
}
