/**
 * Based on Standard JavaScript Style
 *
 * @see https://github.com/standard/eslint-config-standard
 */

module.exports = {
  extends: [
    // Standard JavaScript style
    'standard',
  ],

  ignorePatterns: [`!.*.{js,ts}`],

  rules: {
    /**
     * Requires the use of single quotes wherever possible
     *
     * @see https://eslint.org/docs/rules/quotes
     */
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],

    /**
     * Requires the use of `const` or `let` instead of `var`
     *
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': ['error'],

    /**
     * Requires the use of trailing commas in object and array literals
     *
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * Enforce a maximum file length
     *
     * @see https://eslint.org/docs/rules/max-lines
     */
    'max-lines': ['error', {
      max: 1000,
      skipComments: true,
      skipBlankLines: true,
    }],

    /**
     * Limit Cyclomatic Complexity
     *
     * @see https://eslint.org/docs/rules/complexity
     */
    complexity: ['error', { max: 30 }],

    /**
     * Enforce a maximum number of parameters in function definitions
     *
     * @see https://eslint.org/docs/rules/max-params
     */
    'max-params': ['error', { max: 5 }],

    /**
     * Enforce a maximum line length
     *
     * @see https://eslint.org/docs/rules/max-len
     */
    'max-len': ['error', {
      code: 200,
      tabWidth: 2,
      comments: 200,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
    }],

    /**
     * Enforce a maximum depth that callbacks can be nested
     *
     * @see https://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': ['error', { max: 10 }],

    /**
     * Enforce a maximum function length
     *
     * @see https://eslint.org/docs/rules/max-lines-per-function
     */
    'max-lines-per-function': ['error', {
      max: 100,
      skipBlankLines: true,
      skipComments: true,
    }],

    /**
     * Enforce a maximum number of statements allowed per line
     *
     * @see https://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': ['error', { max: 2 }],

    /**
     * Enforce a maximum depth that blocks can be nested
     *
     * @see https://eslint.org/docs/rules/max-depth
     */
    'max-depth': ['error', { max: 5 }],

    /**
     * Enforces having one empty lines after the last top-level import statement or require call
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': ['error'],
  },
}
