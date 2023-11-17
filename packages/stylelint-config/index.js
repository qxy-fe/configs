/**
 * @file stylelint-config
 */

/**
 * @type {import('stylelint').Config}
 */
const config = {
  extends: [
    '@qxy/stylelint-config-scss',
    '@qxy/stylelint-config-vue',
    '@qxy/stylelint-config-order',
    '@qxy/stylelint-config-prettier',
  ],
}

module.exports = config
