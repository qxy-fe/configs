/**
 * @file stylelint-config-scss
 * @see https://github.com/stylelint-scss/stylelint-config-recommended-scss
 * @see https://github.com/stylelint-scss/stylelint-config-standard-scss
 */

const css = require('@qxy/stylelint-config-css')

/**
 * @type {import('stylelint').Config}
 */
const config = {
  extends: ['@qxy/stylelint-config-css'],

  ignoreFiles: css.ignoreFiles,

  customSyntax: 'postcss-scss',

  plugins: ['stylelint-scss'],

  rules: {
    // Disabled rules in favor of SCSS
    'comment-no-empty': null,
    'at-rule-no-unknown': null,
    'function-no-unknown': null,

    // Overrides rules in favor of SCSS
    'annotation-no-unknown': [
      true,
      {
        ignoreAnnotations: ['default', 'global'],
      },
    ],
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use', 'forward'],
      },
    ],

    // =============================== //
    // SCSS Rules //
    // =============================== //

    /**
     * @-each
     */

    /**
     * @-else
     */

    // Require an empty line or disallow empty lines before @-else
    'scss/at-else-empty-line-before': 'never',
    // Require or disallow a space before @else if parentheses
    'scss/at-else-if-parentheses-space-before': 'always',
    // Require a single space or disallow whitespace after the closing brace of @else statements
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    //  Require or disallow a newline after the closing brace of @else statements
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    /**
     * @-extend
     */

    // Disallow at-extends (@extend) with missing placeholders.
    'scss/at-extend-no-missing-placeholder': true,

    /**
     * @-function
     */

    // Require or disallow a space before @function parentheses
    'scss/at-function-parentheses-space-before': 'never',
    // Specify a pattern for Sass/SCSS-like function names
    'scss/at-function-pattern': [
      '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected function name to be kebab-case',
      },
    ],

    /**
     * @-if
     */

    // Disallow null in @if statements
    'scss/at-if-no-null': true,
    // Require a single space or disallow whitespace after the closing brace of @if statements
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    // Require or disallow a newline after the closing brace of @if statements
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

    /**
     * @-load
     */

    // Disallow leading underscore in partial names in @import, @use, @forward, and meta.load-css $url parameter.
    'scss/load-no-partial-leading-underscore': true,

    /**
     * @-import
     */

    /**
     * @-mixin
     */

    // Specify a pattern for Sass/SCSS-like mixin names
    'scss/at-mixin-pattern': [
      '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected mixin name to be kebab-case',
      },
    ],

    /**
     * @-rule
     */

    // Disallow unknown at-rules
    'scss/at-rule-no-unknown': true,
    // Disallow parentheses in conditional @ rules (if, elsif, while)
    'scss/at-rule-conditional-no-parentheses': true,

    /**
     * @-use
     */

    /**
     * $-variable
     */

    // Requires a whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-after': 'always',
    // Disallow whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-before': 'never',
    // Specify a pattern for Sass-like variables
    'scss/dollar-variable-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected variable to be kebab-case',
      },
    ],
    // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers
    'scss/dollar-variable-no-missing-interpolation': true,
    // Require a single empty line or disallow empty lines before $-variable declarations
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['after-dollar-variable', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    /**
     * %-placeholder
     */

    /**
     * //-comment
     */

    // Require or disallow //-comments to be inline comments
    'scss/double-slash-comment-inline': 'never',
    // Require whitespace after the // in //-comments
    'scss/double-slash-comment-whitespace-inside': 'always',
    // Require or disallow an empty line before //-comments
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],

    /**
     * Comment
     */

    // Disallow empty comments
    'scss/comment-no-empty': true,

    /**
     * Declaration
     */

    // Disallow nested properties of the same "namespace" be divided into multiple groups.
    'scss/declaration-nested-properties-no-divided-groups': true,

    /**
     * Dimension
     */

    /**
     * Function
     */

    // Disallow unknown functions
    'scss/function-no-unknown': true,
    // Disallow quoted strings inside the quote function
    'scss/function-quote-no-quoted-strings-inside': true,
    // Disallow unquoted strings inside the unquote function
    'scss/function-unquote-no-unquoted-strings-inside': true,

    /**
     * Map
     */

    /**
     * Media feature
     */

    /**
     * Operator
     */

    // Disallow unspaced operators in Sass operations
    'scss/operator-no-unspaced': true,
    // Disallow linebreaks after Sass operators
    'scss/operator-no-newline-after': true,
    // Disallow linebreaks before Sass operators
    'scss/operator-no-newline-before': true,

    /**
     * Partial
     */

    /**
     * Selector
     */

    // Disallow redundant nesting selectors (&)
    'scss/selector-no-redundant-nesting-selector': true,

    /**
     * General / Sheet
     */

    // Disallow duplicate mixins within a stylesheet.
    'scss/no-duplicate-mixins': true,
    // Disallows the use of global function names, as these global functions are now located inside built-in Sass modules
    'scss/no-global-function-names': true,
  },
}

module.exports = config
