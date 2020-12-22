/**
 * Intergrade Prettier to ESLint
 *
 * @see https://github.com/prettier/eslint-plugin-prettier
 */

module.exports = {
  extends: [
    // Disable code style rules of `ESLint`, which should be handled by `Prettier`
    'prettier',
    'prettier/prettier',
  ],

  plugins: [
    // Use `eslint-plugin-prettier` to intergrade prettier to ESLint workflow
    'prettier',
  ],

  // Rules overrides
  rules: {
    'prettier/prettier': 'error',
  },
}
