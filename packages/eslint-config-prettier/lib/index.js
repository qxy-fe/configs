/**
 * Standard JavaScript Style with Prettier
 */

module.exports = {
  extends: [
    '@qxy',
    // Extends preset about prettier
    require.resolve('./prettier'),
    'prettier/standard',
  ],
}
