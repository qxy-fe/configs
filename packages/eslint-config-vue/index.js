/**
 * ESLint config for Vue
 * @see https://eslint.vuejs.org/rules
 */

module.exports = {
  extends: [
    `plugin:vue/recommended`,
    `@qxy/eslint-config-typescript`,
  ],

  overrides: [
    {
      files: [`*.vue`],
      parser: `vue-eslint-parser`,
      parserOptions: {
        parser: `@typescript-eslint/parser`,
      },
      rules: {
        'no-undef': `off`,
        'no-unused-vars': `off`,
        '@typescript-eslint/no-unused-vars': `off`,
        // Only in Vue SFC
        'vue/prefer-import-from-vue': `error`,
        '@typescript-eslint/no-this-alias': [`error`, {
          allowDestructuring: false,
          allowedNames: [`vm`], // in favor of `this` in data
        }],
      },
    },
  ],

  // Rules overrides
  rules: {
    // disabled
    'vue/no-v-html': `off`,
    'vue/require-default-prop': `off`,
    'vue/multi-word-component-names': `off`,
    'vue/no-setup-props-destructure': `off`,
    // Enable in vue3
    'vue/no-multiple-template-root': `off`,

    'vue/prefer-template': `error`,
    'vue/space-infix-ops': `error`,
    'vue/no-empty-pattern': `error`,
    'vue/no-sparse-arrays': `error`,
    'vue/require-prop-types': `error`,
    'vue/no-loss-of-precision': `error`,
    'vue/no-irregular-whitespace': `error`,
    'vue/template-curly-spacing': `error`,
    'vue/comma-style': [`error`, `last`],
    'vue/eqeqeq': [`error`, `smart`],
    'vue/space-in-parens': [`error`, `never`],
    'vue/dot-location': [`error`, `property`],
    'vue/this-in-template': [`error`, `never`],
    'vue/operator-linebreak': [`error`, `before`],
    'vue/no-extra-parens': [`error`, `functions`],
    'vue/object-curly-spacing': [`error`, `always`],
    'vue/comma-dangle': [`error`, `always-multiline`],
    'vue/quote-props': [`error`, `consistent-as-needed`],
    'vue/space-unary-ops': [`error`, {
      words: true,
      nonwords: false,
    }],
    'vue/dot-notation': [`error`, {
      allowKeywords: true,
    }],
    'vue/brace-style': [`error`, `stroustrup`, {
      allowSingleLine: true,
    }],
    'vue/comma-spacing': [`error`, {
      before: false,
      after: true,
    }],
    'vue/key-spacing': [`error`, {
      beforeColon: false,
      afterColon: true,
    }],
    'vue/keyword-spacing': [`error`, {
      before: true,
      after: true,
    }],
    'vue/arrow-spacing': [`error`, {
      before: true,
      after: true,
    }],
    'vue/object-shorthand': [`error`, `always`, {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'vue/no-static-inline-styles': [`error`, {
      allowBinding: true,
    }],
    'vue/object-property-newline': [`error`, {
      allowMultiplePropertiesPerLine: true,
    }],
    'vue/object-curly-newline': [`error`, {
      multiline: true,
      consistent: true,
    }],
    'vue/component-tags-order': [`error`, {
      order: [[`template`, `script`], `style`],
    }],
    'vue/max-attributes-per-line': [`error`, {
      singleline: 1,
      multiline: 1,
    }],
    'vue/multiline-html-element-content-newline': [`error`, {
      ignoreWhenEmpty: true,
      ignores: [],
      allowEmptyLines: false,
    }],
    'vue/singleline-html-element-content-newline': [`error`, {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [],
    }],
    'vue/attributes-order': [`error`, {
      order: [
        `EVENTS`, // '@click="functionCall"', 'v-on="event"'
        `TWO_WAY_BINDING`, // 'v-model'
        `OTHER_DIRECTIVES`, // 'v-custom-directive'
        `LIST_RENDERING`, // 'v-for item in items'
        `CONDITIONALS`, //  'v-if', 'v-show', 'v-cloak'
        `CONTENT`, // 'v-text', 'v-html'
        `UNIQUE`, // 'ref', 'key', 'v-slot', 'slot'
        `DEFINITION`, // 'is', 'v-is'
        `OTHER_ATTR`, // 'custom-prop="foo"', ':prop="foo"'
        `RENDER_MODIFIERS`, // 'v-once', 'v-pre'
        `GLOBAL`, // 'id'
      ],
      alphabetical: false,
    }],
    'vue/order-in-components': [`error`, {
      order: [
        `el`,
        `name`,
        `key`,
        `parent`,
        `functional`,
        [`provide`, `inject`],
        [`delimiters`, `comments`],
        [`components`, `directives`, `filters`],
        `extends`,
        `mixins`,
        `layout`,
        `middleware`,
        `validate`,
        `scrollToTop`,
        `transition`,
        `loading`,
        `inheritAttrs`,
        `model`,
        [`props`, `propsData`],
        `emits`,
        `setup`,
        `asyncData`,
        `computed`,
        `data`,
        `fetch`,
        `head`,
        `methods`,
        [`template`, `render`],
        `watch`,
        `watchQuery`,
        `LIFECYCLE_HOOKS`,
        `renderError`,
        `ROUTER_GUARDS`,
      ],
    }],

    // ===========================================================
    // Rules below are uncategorized
    // ===========================================================
    'vue/require-name-property': `error`,
    'vue/no-empty-component-block': `error`,
    'vue/static-class-names-order': `error`,
    'vue/no-constant-condition': `error`,
    'vue/prefer-import-from-vue': `error`,
    'vue/no-v-text-v-html-on-component': `error`,
    'vue/prefer-separate-static-class': `error`,
    'vue/block-spacing': [`error`, `always`],
    'vue/v-for-delimiter-style': [`error`, `in`],
    'vue/next-tick-style': [`error`, `promise`],
    'vue/array-bracket-spacing': [`error`, `never`],
    'vue/no-restricted-v-bind': [`error`, `/^v-/`],
    'vue/padding-line-between-blocks': [`error`, `always`],
    'vue/custom-event-name-casing': [`error`, `camelCase`],
    'vue/prefer-true-attribute-shorthand': [`error`, `always`],
    'vue/component-options-name-casing': [`error`, `PascalCase`],
    'vue/no-restricted-syntax': [`error`,
      `DebuggerStatement`,
      `LabeledStatement`,
      `WithStatement`,
    ],
    'vue/define-macros-order': [`error`, {
      order: [`defineProps`, `defineEmits`],
    }],
    'vue/block-tag-newline': [`error`, {
      singleline: `always`,
      multiline: `always`,
    }],
    'vue/script-indent': [`error`, 2, {
      baseIndent: 0,
      switchCase: 1,
      ignores: [],
    }],
    'vue/html-comment-content-spacing': [`error`, `always`, {
      exceptions: [`-`],
    }],
    'vue/html-comment-content-newline': [`error`, {
      singleline: `never`,
      multiline: `always`,
    }],
    'vue/no-potential-component-option-typo': [`error`, {
      presets: [`all`],
      custom: [],
    }],
    'vue/component-name-in-template-casing': [`error`, `kebab-case`, {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/v-on-function-call': [`error`, `never`, {
      ignoreIncludesComment: true,
    }],
    'vue/no-template-target-blank': [`error`, {
      allowReferrer: false,
      enforceDynamicLinks: `always`,
    }],
    'vue/no-unsupported-features': [`error`, {
      version: `2.6.14`,
    }],
    'vue/no-useless-mustaches': [`error`, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-useless-v-bind': [`error`, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/require-direct-export': [`error`, {
      disallowFunctionalComponentFunction: false,
    }],
    'vue/new-line-between-multi-line-property': [`error`, {
      minLineOfMultilineProperty: 2,
    }],
  },
}
