/**
 * Based on Standard JavaScript Style
 *
 * @see https://github.com/standard/eslint-config-standard
 */

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: [
    // Standard JavaScript style
    `standard`,
    `plugin:eslint-comments/recommended`,
  ],

  ignorePatterns: [
    `*.min.*`,
    `CHANGELOG.md`,
    `LICENSE*`,
    `dist`,
    `output`,
    `coverage`,
    `public`,
    `static`,
    `temp`,
    `packages-lock.json`,
    `pnpm-lock.yaml`,
    `yarn.lock`,
    `__snapshots__`,
    `!.github`,
    `!.vitepress`,
    `!.vuepress`,
    `!.vscode`,
  ],

  settings: {
    'import/resolver': {
      node: { extensions: [`.js`, `.mjs`] },
    },
  },

  rules: {
    'import/newline-after-import': 'error',

    'comma-dangle': ['error', 'always-multiline'],

    // es6+
    'no-var': 'error',
    'prefer-spread': `error`,
    'prefer-template': `error`,
    'prefer-rest-params': `error`,
    'template-curly-spacing': `error`,
    'generator-star-spacing': `off`,
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'arrow-parens': [`error`, `as-needed`, {
      requireForBlockBody: false,
    }],
    'prefer-const': [`error`, {
      destructuring: `any`,
      ignoreReadBeforeAssign: true,
    }],
    'prefer-arrow-callback': [`error`, {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'object-shorthand': [`error`, `always`, {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'spaced-comment': [`error`, `always`, {
      line: {
        markers: [`/`],
        exceptions: [`/`, `#`],
      },
      block: {
        markers: [`!`],
        exceptions: [`*`],
        balanced: true,
      },
    }],

    // best practices
    eqeqeq: [`error`, `smart`],
    'max-params': ['error', { max: 5 }],
    complexity: ['error', { max: 30 }],
    'array-callback-return': `error`,
    'block-scoped-var': `error`,
    'consistent-return': `off`,
    'no-alert': `warn`,
    'no-case-declarations': `error`,
    'no-multi-spaces': `error`,
    'no-multi-str': `error`,
    'no-with': `error`,
    'no-void': `error`,
    'no-useless-escape': `off`,
    'vars-on-top': `error`,
    'require-await': `off`,
    'no-return-assign': `off`,
    'operator-linebreak': [`error`, `before`],
    'max-depth': ['error', { max: 5 }],
    'max-nested-callbacks': ['error', { max: 10 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'no-use-before-define': [`error`, {
      functions: false,
      classes: false,
      variables: true,
    }],
    'max-lines': ['error', {
      max: 1000,
      skipComments: true,
      skipBlankLines: true,
    }],
    'max-lines-per-function': ['error', {
      max: 100,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-len': ['error', {
      code: 200,
      tabWidth: 2,
      comments: 200,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
    }],

    /**
     * Disallow unused `eslint-disable` comments
     *
     * @see https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-disable.md
     */
    'eslint-comments/no-unused-disable': `error`,
    'eslint-comments/disable-enable-pair': [`error`, { allowWholeFile: true }],
  },
}
