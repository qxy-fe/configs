
module.exports = {
  rules: {},

  overrides: [
    {
      files: ['*.vue', '**/*.vue'],

      customSyntax: 'postcss-html',

      rules: {
        // Disallow unknown pseudo-class selectors
        'selector-pseudo-class-no-unknown': [true, {
          ignorePseudoClasses: ['deep', 'global'],
        }],

        // Disallow unknown pseudo-element selectors
        'selector-pseudo-element-no-unknown': [true, {
          ignorePseudoElements: [
            'v-deep',
            'v-global',
            'v-slotted',
          ],
        }],
      },
    },
  ],
}
