/**
 * Based on Standard CSS Style
 *
 * @see https://github.com/standard/eslint-config-standard
 */

module.exports = {
  extends: [
    'stylelint-config-standard',
  ],

  plugins: [
    'stylelint-scss',
  ],

  // Globs to ignore specific files
  ignoreFiles: [
    'node_modules',
    '*.min.css',
    '*.min.scss',
  ],

  rules: {
    // Disabled rules
    'at-rule-no-unknown': null,

    // Specify double quotes around strings
    'string-quotes': 'double',

    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': ['lower', {
      ignoreProperties: ['/^($?)font/'],
    }],

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': [true, {
      ignore: ['selectors-within-list'],
    }],

    // Require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',

    // Disallow shorthand properties that override related longhand properties
    // TODO: ignore background for compatible
    'declaration-block-no-shorthand-property-overrides': null,

    // Require a leading zero for fractional numbers less than 1
    'number-leading-zero': 'always',

    // Require quotes for attribute values
    'selector-attribute-quotes': 'always',

    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'single',

    // Specify a pattern for class selectors
    'selector-class-pattern': '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',

    // Specify a pattern for id selectors
    'selector-id-pattern': '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',

    // Disallow unknown pseudo-element selectors
    // Allow v-deep for VueJS compatibility
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep'],
    }],

    // Require or disallow an empty line before at-rules
    'at-rule-empty-line-before': ['always', {
      except: ['inside-block', 'blockless-after-same-name-blockless'],
      ignore: ['first-nested', 'after-comment'],
      ignoreAtRules: ['import', 'else'],
    }],

    // Disallow whitespace before the colon in $-variable declarations
    'dollar-variable-colon-space-before': 'never',

    // =============================== //
    // SCSS Rules //
    // =============================== //

    // Disallow unknown at-rules
    'scss/at-rule-no-unknown': true,

    // Requires a whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-after': 'always',

    // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers
    'scss/dollar-variable-no-missing-interpolation': true,

    // Specify a pattern for Sass-like variables
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',

    // Require whitespace after the // in //-comments
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Disallow linebreaks before Sass operators
    'scss/operator-no-newline-before': true,

    // Disallow unspaced operators in Sass operations
    'scss/operator-no-unspaced': true,

    // Disallow redundant nesting selectors (&)
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
