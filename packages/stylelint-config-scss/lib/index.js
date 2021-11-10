/**
 * @see https://github.com/stylelint-scss/stylelint-config-recommended-scss
 */

module.exports = {
  extends: [
    `@qxy/stylelint-config`,
  ],

  customSyntax: `postcss-scss`,

  plugins: [
    `stylelint-scss`,
  ],

  rules: {
    // Disabled rules in favor of SCSS
    'at-rule-no-unknown': null,
    'comment-no-empty': null,

    // =============================== //
    // SCSS Rules //
    // =============================== //

    // Disallow unknown at-rules
    'scss/at-rule-no-unknown': true,

    // Disallow empty comments
    'scss/comment-no-empty': true,

    // Requires a whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-after': 'always',

    // Disallow whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-before': 'never',

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

    // Disallow duplicate mixins within a stylesheet.
    'scss/no-duplicate-mixins': true,

    // Disallow redundant nesting selectors (&)
    'scss/selector-no-redundant-nesting-selector': true,
  },
}