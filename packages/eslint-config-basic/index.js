/**
 * @file ESLint basic config
 */

const { isInEditor } = require('is-in-editor')

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },

  reportUnusedDisableDirectives: true,

  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'LICENSE*',
    'dist',
    'output',
    'coverage',
    'public',
    'static',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vuepress',
    '!.vscode',
  ],

  plugins: ['html', 'unicorn', 'unused-imports'],

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },

  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
  ],

  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
          },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': [
          'error',
          {
            multiline: true,
            consistent: true,
          },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: true,
          },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'author',
              'homepage',
              'repository',
              'funding',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              // workaround for `type: "module"` with TS `moduleResolution: "node16"`
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'sideEffects',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'activationEvents',
              'contributes',
              'categories',
              'engines',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'prettier',
              'nano-staged',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
          {
            pathPattern: '^scripts$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
        'import/newline-after-import': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        'no-void': ['error', { allowAsStatement: true }],
      },
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
        'max-lines-per-function': 'off',
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
  ],

  rules: {
    // es6+
    'no-var': ['error'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'generator-star-spacing': 'off',
    'no-empty-static-block': 'error',
    'no-new-native-nonconstructor': 'error',
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: false,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    // best-practice
    eqeqeq: ['error', 'smart'],
    complexity: ['error', { max: 30 }],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-params': ['error', { max: 5 }],
    'max-depth': ['error', { max: 5 }],
    'max-nested-callbacks': ['error', { max: 10 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'max-lines': [
      'error',
      {
        max: 1000,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 200,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 200,
        tabWidth: 2,
        comments: 200,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // import
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off',

    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'never',
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],

    // unicorn
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': 'off',

    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-reflect-apply': 'error',

    'unicorn/prefer-date-now': 'error',

    // String
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',

    // DOM
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',

    // Array
    'unicorn/no-new-array': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',

    // yml
    'yml/no-empty-document': 'off',

    'yml/quotes': [
      'error',
      {
        prefer: 'single',
        avoidEscape: false,
      },
    ],

    // n
    'n/no-callback-literal': 'off',

    // unused-imports
    'unused-imports/no-unused-imports': isInEditor() ? 'off' : 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // comments
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
}
