/**
 * ESLint config for Vue3
 * @see https://eslint.vuejs.org/rules
 */

module.exports = {
  extends: [
    `plugin:vue/vue3-recommended`,
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
    'vue/no-undef-components': `off`,
    'vue/no-undef-properties': `off`,
    'vue/require-default-prop': `off`,
    'vue/multi-word-component-names': `off`,
    'vue/no-setup-props-destructure': `off`,

    // disabled in favor of vue3
    'vue/no-v-model-argument': `off`,
    'vue/no-multiple-template-root': `off`,
    'vue/no-custom-modifiers-on-v-model': `off`,

    'vue/require-prop-types': `error`,
    'vue/template-curly-spacing': `error`,
    'vue/this-in-template': [`error`, `never`],
    'vue/comma-spacing': [`error`, {
      before: false,
      after: true,
    }],
    'vue/no-static-inline-styles': [`error`, {
      allowBinding: true,
    }],
    'vue/component-tags-order': [`error`, {
      order: [[`template`, `script`], `style`],
    }],
    'vue/first-attribute-linebreak': [`error`, {
      singleline: `beside`,
      multiline: `below`,
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

    'vue/prefer-import-from-vue': `error`,
    'vue/no-v-text-v-html-on-component': `error`,
    'vue/no-restricted-v-bind': [`error`, `/^v-/`],
    'vue/block-tag-newline': [`error`, {
      singleline: `always`,
      multiline: `always`,
    }],
    'vue/script-indent': [`error`, 2, {
      baseIndent: 0,
      switchCase: 1,
      ignores: [],
    }],
    'vue/no-template-target-blank': [`error`, {
      allowReferrer: false,
      enforceDynamicLinks: `always`,
    }],

    // ===========================================================
    // Rules below are uncategorized
    // ===========================================================
    'vue/component-options-name-casing': [`error`, `PascalCase`],
    'vue/custom-event-name-casing': [`error`, `kebab-case`],
    'vue/define-macros-order': [`error`, {
      order: [`defineProps`, `defineEmits`],
    }],
    'vue/html-comment-content-newline': [`error`, {
      singleline: `never`,
      multiline: `always`,
    }],
    'vue/html-comment-content-spacing': [`error`, `always`, {
      exceptions: [`-`],
    }],
    // vue/html-comment-indent
    'vue/new-line-between-multi-line-property': [`error`, {
      minLineOfMultilineProperty: 2,
    }],
    'vue/next-tick-style': [`error`, `promise`],
    'vue/no-empty-component-block': `error`,
    'vue/no-potential-component-option-typo': [`error`, {
      presets: [`all`],
      custom: [],
    }],
    'vue/no-multiple-objects-in-class': `error`,
    'vue/no-unused-properties': `error`,
    'vue/no-unused-refs': `error`,
    'vue/no-useless-mustaches': [`error`, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-useless-v-bind': [`error`, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-v-text': `error`,
    'vue/padding-line-between-blocks': [`error`, `always`],
    'vue/prefer-separate-static-class': `error`,
    'vue/prefer-true-attribute-shorthand': [`error`, `always`],
    'vue/require-direct-export': [`error`, {
      disallowFunctionalComponentFunction: false,
    }],
    'vue/require-name-property': `error`,
    'vue/static-class-names-order': `error`,
    'vue/v-for-delimiter-style': [`error`, `in`],
    'vue/v-on-function-call': [`error`, `never`, {
      ignoreIncludesComment: true,
    }],

    // ===========================================================
    // Rules below are extension rules
    // ===========================================================
    'vue/array-bracket-spacing': [`error`, `never`],
    'vue/arrow-spacing': [`error`, {
      before: true,
      after: true,
    }],
    'vue/block-spacing': [`error`, `always`],
    'vue/brace-style': [`error`, `stroustrup`, {
      allowSingleLine: true,
    }],
    // vue/camelcase
    'vue/comma-dangle': [`error`, `always-multiline`],
    'vue/comma-style': [`error`, `last`],
    'vue/dot-location': [`error`, `property`],
    'vue/dot-notation': [`error`, {
      allowKeywords: true,
    }],
    'vue/eqeqeq': [`error`, `smart`],
    // vue/func-call-spacing
    'vue/key-spacing': [`error`, {
      beforeColon: false,
      afterColon: true,
    }],
    'vue/keyword-spacing': [`error`, {
      before: true,
      after: true,
    }],
    // vue/max-len
    'vue/no-constant-condition': `error`,
    'vue/no-empty-pattern': `error`,
    'vue/no-extra-parens': `error`,
    'vue/no-irregular-whitespace': `error`,
    'vue/no-loss-of-precision': `error`,
    'vue/no-restricted-syntax': [`error`,
      `DebuggerStatement`,
      `LabeledStatement`,
      `WithStatement`,
    ],
    'vue/no-sparse-arrays': `error`,
    // vue/no-useless-concat
    'vue/object-curly-newline': [`error`, {
      multiline: true,
      consistent: true,
    }],
    'vue/object-curly-spacing': [`error`, `always`],
    'vue/object-property-newline': [`error`, {
      allowMultiplePropertiesPerLine: true,
    }],
    // object-shorthand
    'vue/prefer-template': `error`,
    'vue/space-in-parens': [`error`, `never`],
    'vue/space-infix-ops': `error`,
    'vue/space-unary-ops': [`error`, {
      words: true,
      nonwords: false,
    }],

    // Defer with vue2
    'vue/no-unsupported-features': [`error`, {
      version: `^3.2.0`,
      ignores: [],
    }],
    'vue/component-name-in-template-casing': [`error`, `PascalCase`, {
      registeredComponentsOnly: true,
      ignores: [],
    }],
  },
}
