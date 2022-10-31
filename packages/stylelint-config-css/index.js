/**
 * Stylelint config for CSS
 * @see https://github.com/stylelint/stylelint-config-standard
 */

module.exports = {
  extends: [
    `stylelint-config-standard`,
  ],

  // Globs to ignore specific files
  ignoreFiles: [
    `*.min.css`,
    `*.min.scss`,
    `node_modules`,
    `dist`,
    `output`,
    `coverage`,
    `public`,
    `static`,
    `temp`,
  ],

  rules: {
    // Specify double quotes around strings
    'string-quotes': `double`,

    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': [`lower`, {
      ignoreProperties: [/^\$?font/],
    }],

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': [true, {
      ignore: [`selectors-within-list`],
    }],

    // Require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': `always-multi-line`,

    // Disallow shorthand properties that override related longhand properties
    // TODO: ignore background for compatible
    'declaration-block-no-shorthand-property-overrides': null,

    // Specify string or URL notation for `@import` rules
    'import-notation': null,

    // Require a leading zero for fractional numbers less than 1
    'number-leading-zero': `always`,

    // Specify percentage or number notation for alpha-values
    'alpha-value-notation': `number`,

    // Specify modern or legacy notation for applicable color-functions
    'color-function-notation': `legacy`,

    // Require quotes for attribute values
    'selector-attribute-quotes': `always`,

    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': `single`,

    // Specify a pattern for class selectors
    'selector-class-pattern': `^([a-z][a-z0-9]*)(-[a-z0-9]+)*$`,

    // Specify a pattern for id selectors
    'selector-id-pattern': `^([a-z][a-z0-9]*)(_[a-z0-9]+)*$`,

    // Require or disallow an empty line before at-rules
    'at-rule-empty-line-before': [`always`, {
      except: [`inside-block`, `blockless-after-same-name-blockless`],
      ignore: [`first-nested`, `after-comment`],
      ignoreAtRules: [`import`, `else`],
    }],
  },
}
