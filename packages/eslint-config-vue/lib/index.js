/**
 * Based on Vue.js rules
 *
 * @see https://eslint.vuejs.org/rules
 */

module.exports = {
  extends: [
    '@qxy',
    // Vue style guide
    'plugin:vue/recommended',
  ],

  plugins: ['vue'],

  parserOptions: {
    parser: require.resolve('@babel/eslint-parser'),
    requireConfigFile: false,
  },

  // Rules overrides
  rules: {
    /**
     * Disallow use of v-html to prevent XSS attack
     *
     * @see https://eslint.vuejs.org/rules/no-v-html.html
     */
    'vue/no-v-html': 'off',

    /**
     * Require a line break before and after the contents of a multiline element
     *
     * @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
     */
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: [],
      allowEmptyLines: false,
    }],

    /**
     * Require a line break before and after the contents of a singleline element
     *
     * @see https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
     */
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [],
    }],

    /**
     * Disallow usage of this in template
     *
     * @see https://eslint.vuejs.org/rules/this-in-template.html
     */
    'vue/this-in-template': ['error', 'never'],

    /**
     * Require or disallow trailing commas
     *
     * @see https://eslint.vuejs.org/rules/comma-dangle.html
     */
    'vue/comma-dangle': ['error', 'always-multiline'],

    /**
     * Enforce consistent spacing before and after commas
     *
     * @see https://eslint.org/docs/rules/comma-spacing
     */
    'vue/comma-spacing': ['error', {
      before: false,
      after: true,
    }],

    /**
     * Enforce consistent spacing inside braces
     *
     * @see https://eslint.vuejs.org/rules/object-curly-spacing.html
     */
    'vue/object-curly-spacing': ['error', 'always', {}],

    /**
     * Disallow static inline style attributes
     *
     * @see https://eslint.vuejs.org/rules/no-static-inline-styles.html
     */
    'vue/no-static-inline-styles': ['error', {
      allowBinding: true,
    }],

    /**
     * Enforce order of component top-level elements
     *
     * @see https://eslint.vuejs.org/rules/component-tags-order.html
     */
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],

    /**
     * Enforce order of attributes
     *
     * @see https://eslint.vuejs.org/rules/attributes-order.html
     */
    'vue/attributes-order': ['error', {
      order: [
        'EVENTS', // '@click="functionCall"', 'v-on="event"'
        'TWO_WAY_BINDING', // 'v-model'
        'OTHER_DIRECTIVES', // 'v-custom-directive'
        'LIST_RENDERING', // 'v-for item in items'
        'CONDITIONALS', //  'v-if', 'v-show', 'v-cloak'
        'CONTENT', // 'v-text', 'v-html'
        'UNIQUE', // 'ref', 'key', 'v-slot', 'slot'
        'DEFINITION', // 'is', 'v-is'
        'OTHER_ATTR', // 'custom-prop="foo"', ':prop="foo"'
        'RENDER_MODIFIERS', // 'v-once', 'v-pre'
        'GLOBAL', // 'id'
      ],
      alphabetical: false,
    }],

    /**
     * Enforce order of properties in components
     *
     * @see https://eslint.vuejs.org/rules/order-in-components.html
     */
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['provide', 'inject'],
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'computed',
        'data',
        'fetch',
        'head',
        'methods',
        ['template', 'render'],
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'renderError',
        'ROUTER_GUARDS',
      ],
    }],

    /**
     * Put multiple attrs in multiple lines
     *
     * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
     */
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],

    // ===========================================================
    // Rules below are uncategorized
    // ===========================================================

    /**
     * Enforce specific casing for the component naming style in template
     *
     * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
     */
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: [],
    }],

    /**
     * Enforce unified line brake in HTML comments
     *
     * @see https://eslint.vuejs.org/rules/html-comment-content-newline.html
     */
    'vue/html-comment-content-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],

    /**
     * Enforce unified spacing in HTML comments
     *
     * @see https://eslint.vuejs.org/rules/html-comment-content-spacing.html
     */
    'vue/html-comment-content-spacing': ['error', 'always'],

    // vue/html-comment-indent
    // vue/match-component-file-name
    // vue/no-bare-strings-in-template
    // vue/no-boolean-default

    /**
     * Disallow the <template> <script> <style> block to be empty
     *
     * @see https://eslint.vuejs.org/rules/no-empty-component-block.html
     */
    'vue/no-empty-component-block': 'error',

    // vue/no-multiple-objects-in-class

    /**
     * Disallow a potential typo in your component property
     *
     * @see https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
     */
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['all'],
      custom: [],
    }],

    /**
     * Disallow target="_blank" attribute without rel="noopener noreferrer"
     *
     * @see https://eslint.vuejs.org/rules/no-template-target-blank.html
     */
    'vue/no-template-target-blank': ['error', {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
    }],

    /**
     * Disallow unsupported Vue.js syntax on the specified version
     *
     * @see https://eslint.vuejs.org/rules/no-unsupported-features.html
     */
    'vue/no-unsupported-features': ['error', {
      version: '2.6.0',
    }],

    /**
     * Disallow unnecessary mustache interpolations
     *
     * @see https://eslint.vuejs.org/rules/no-useless-mustaches.html
     */
    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],

    /**
     * Disallow unnecessary v-bind directives
     *
     * @see https://eslint.vuejs.org/rules/no-useless-v-bind.html
     */
    'vue/no-useless-v-bind': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],

    /**
     * Require or disallow padding lines between blocks
     *
     * @see https://eslint.vuejs.org/rules/padding-line-between-blocks.html
     */
    'vue/padding-line-between-blocks': ['error', 'always'],

    /**
     * Require the component to be directly exported
     *
     * @see https://eslint.vuejs.org/rules/require-direct-export.html
     */
    'vue/require-direct-export': ['error', {
      disallowFunctionalComponentFunction: false,
    }],

    /**
     * Require a name property in Vue components
     *
     * @see https://eslint.vuejs.org/rules/require-name-property.html
     */
    'vue/require-name-property': 'error',

    /**
     * Enforce consistent indentation in <script>
     *
     * @see https://eslint.vuejs.org/rules/script-indent.html
     */
    'vue/script-indent': ['error', 2, {
      baseIndent: 0,
      switchCase: 1,
      ignores: [],
    }],

    /**
     * Enforce static class names order
     *
     * @see https://eslint.vuejs.org/rules/static-class-names-order.html
     */
    'vue/static-class-names-order': 'error',

    /**
     * Enforce v-for directive's delimiter style
     *
     * @see https://eslint.vuejs.org/rules/v-for-delimiter-style.html
     */
    'vue/v-for-delimiter-style': ['error', 'in'],

    /**
     * Enforce or forbid parentheses after method calls without arguments in v-on directives
     *
     * @see https://eslint.vuejs.org/rules/v-on-function-call.html
     */
    'vue/v-on-function-call': ['error', 'never', {
      ignoreIncludesComment: true,
    }],

    /**
     * Enforce new lines between multi-line properties in Vue components
     *
     * @see https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
     */
    'vue/new-line-between-multi-line-property': ['error', {
      minLineOfMultilineProperty: 2,
    }],

    /**
     * Disallow constant expressions in conditions
     *
     * @see https://eslint.vuejs.org/rules/no-constant-condition.html
     */
    'vue/no-constant-condition': ['error'],

    /**
     * Enforce Promise or callback style in `nextTick`
     *
     * @see https://eslint.vuejs.org/rules/next-tick-style.html
     */
    'vue/next-tick-style': ['error', 'promise'],
  },
}
