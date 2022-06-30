/**
 * ESLint config for Vue
 * @see https://eslint.vuejs.org/rules
 */

module.exports = {
  extends: [
    `plugin:vue/recommended`,
    `@qxy/eslint-config-typescript`,
  ],

  // Rules overrides
  rules: {
    'vue/no-v-html': `off`,
    'vue/this-in-template': [`error`, `never`],
    'vue/comma-dangle': [`error`, `always-multiline`],
    'vue/comma-spacing': [`error`, {
      before: false,
      after: true,
    }],
    'vue/no-static-inline-styles': [`error`, {
      allowBinding: true,
    }],
    'vue/object-curly-spacing': [`error`, `always`, {

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
    // Enable in vue3
    'vue/no-multiple-template-root': `off`,
    'vue/v-for-delimiter-style': [`error`, `in`],
    'vue/next-tick-style': [`error`, `promise`],
    'vue/prefer-true-attribute-shorthand': [`error`, `always`],
    'vue/html-comment-content-spacing': [`error`, `always`],
    'vue/padding-line-between-blocks': [`error`, `always`],
    'vue/component-name-in-template-casing': [`error`, `kebab-case`, {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/html-comment-content-newline': [`error`, {
      singleline: `never`,
      multiline: `always`,
    }],
    'vue/no-potential-component-option-typo': [`error`, {
      presets: [`all`],
      custom: [],
    }],
    'vue/script-indent': [`error`, 2, {
      baseIndent: 0,
      switchCase: 1,
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
