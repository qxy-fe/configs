/**
 * @file stylelint-config-css
 * @see https://github.com/stylelint/stylelint-config-standard
 */

/**
 * @type {import('stylelint').Config}
 */
const config = {
  extends: ['stylelint-config-standard'],

  // Globs to ignore specific files
  ignoreFiles: ['*.min.css', '*.min.scss', 'node_modules', 'dist', 'output', 'coverage', 'public'],

  rules: {
    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: [/^\$?font/],
      },
    ],

    // Specify string or URL notation for `@import` rules
    'import-notation': null,

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list'],
      },
    ],

    // Specify percentage or number notation for alpha-values
    'alpha-value-notation': 'number',

    // Specify modern or legacy notation for applicable color-functions
    'color-function-notation': 'legacy',

    /**
     * Declaration block
     */

    // Disallow shorthand properties that override related longhand properties
    // TODO: ignore background for compatible
    'declaration-block-no-shorthand-property-overrides': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['inset'],
      },
    ],

    /**
     * Selector
     */

    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'single',
    // Specify a pattern for id selectors #snake_case
    'selector-id-pattern': '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
    // Specify a pattern for class selectors #kebab-case
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',

    /**
     * At-rule
     */
    'media-feature-range-notation': 'prefix',

    // Require or disallow an empty line before at-rules
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'blockless-after-same-name-blockless'],
        ignore: ['first-nested', 'after-comment'],
        ignoreAtRules: ['import', 'else'],
      },
    ],
  },
}

module.exports = config
