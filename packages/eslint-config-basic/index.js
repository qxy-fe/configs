/**
 * @file ESLint basic config
 */

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },

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

  plugins: [
    `html`,
    `unicorn`,
  ],

  settings: {
    'import/resolver': {
      node: { extensions: [`.js`, `.mjs`] },
    },
  },

  extends: [
    `standard`,
    `plugin:import/recommended`,
    `plugin:eslint-comments/recommended`,
    `plugin:jsonc/recommended-with-jsonc`,
    `plugin:yml/standard`,
    `plugin:markdown/recommended`,
  ],

  overrides: [
    {
      files: [`*.json`, `*.json5`],
      parser: `jsonc-eslint-parser`,
      rules: {
        'jsonc/array-bracket-spacing': [`error`, `never`],
        'jsonc/comma-dangle': [`error`, `never`],
        'jsonc/comma-style': [`error`, `last`],
        'jsonc/indent': [`error`, 2],
        'jsonc/key-spacing': [`error`, {
          beforeColon: false, afterColon: true,
        }],
        'jsonc/no-octal-escape': `error`,
        'jsonc/object-curly-newline': [`error`, {
          multiline: true, consistent: true,
        }],
        'jsonc/object-curly-spacing': [`error`, `always`],
        'jsonc/object-property-newline': [`error`, {
          allowMultiplePropertiesPerLine: true,
        }],
      },
    },
    {
      files: [`*.yaml`, `*.yml`],
      parser: `yaml-eslint-parser`,
      rules: {
        'spaced-comment': `off`,
      },
    },
    {
      files: [`package.json`],
      parser: `jsonc-eslint-parser`,
      rules: {
        'jsonc/sort-keys': [`error`, {
          pathPattern: `^$`,
          order: [
            `name`,
            `type`,
            `version`,
            `private`,
            `packageManager`,
            `description`,
            `keywords`,
            `license`,
            `author`,
            `repository`,
            `funding`,
            `main`,
            `module`,
            `types`,
            `unpkg`,
            `jsdelivr`,
            `exports`,
            `files`,
            `bin`,
            `sideEffects`,
            `scripts`,
            `peerDependencies`,
            `peerDependenciesMeta`,
            `dependencies`,
            `optionalDependencies`,
            `devDependencies`,
            `husky`,
            `prettier`,
            `nano-staged`,
            `lint-staged`,
            `eslintConfig`,
          ],
        },
        {
          pathPattern: `^(?:dev|peer|optional|bundled)?[Dd]ependencies$`,
          order: { type: `asc` },
        },
        {
          pathPattern: `^scripts$`,
          order: { type: `asc` },
        }],
      },
    },
    {
      files: [`*.d.ts`],
      rules: {
        'import/no-duplicates': `off`,
        'import/newline-after-import': `off`,
      },
    },
    {
      files: [`*.js`],
      rules: {
        '@typescript-eslint/no-var-requires': `off`,
      },
    },
    {
      files: [`scripts/**/*.*`, `cli.*`],
      rules: {
        'no-console': `off`,
      },
    },
    {
      files: [`*.test.ts`, `*.test.js`, `*.spec.ts`, `*.spec.js`],
      rules: {
        'no-unused-expressions': `off`,
        'max-lines-per-function': `off`,
      },
    },
    {
      // Code blocks in markdown file
      files: [`**/*.md/*.*`],
      rules: {
        '@typescript-eslint/no-redeclare': `off`,
        '@typescript-eslint/no-unused-vars': `off`,
        '@typescript-eslint/no-use-before-define': `off`,
        '@typescript-eslint/no-var-requires': `off`,
        '@typescript-eslint/comma-dangle': `off`,
        'import/no-unresolved': `off`,
        'no-alert': `off`,
        'no-console': `off`,
        'no-restricted-imports': `off`,
        'no-undef': `off`,
        'no-unused-expressions': `off`,
        'no-unused-vars': `off`,
      },
    },
  ],

  rules: {
    // common
    'comma-dangle': [`error`, `always-multiline`],
    'sort-imports': [`error`, {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [`none`, `all`, `multiple`, `single`],
      allowSeparatedGroups: false,
    }],

    // es6+
    'no-var': `error`,
    'prefer-spread': `error`,
    'prefer-template': `error`,
    'prefer-rest-params': `error`,
    'template-curly-spacing': `error`,
    'generator-star-spacing': `off`,
    'no-empty-static-block': `error`,
    'no-new-native-nonconstructor': `error`,
    'arrow-parens': [`error`, `as-needed`, {
      requireForBlockBody: false,
    }],
    quotes: [`error`, `single`, {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'prefer-const': [`error`, {
      destructuring: `all`,
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

    // best-practice
    eqeqeq: [`error`, `smart`],
    complexity: [`error`, { max: 30 }],
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
    'max-params': [`error`, { max: 5 }],
    'max-depth': [`error`, { max: 5 }],
    'max-nested-callbacks': [`error`, { max: 10 }],
    'max-statements-per-line': [`error`, { max: 2 }],
    'max-lines': [`error`, {
      max: 1000,
      skipComments: true,
      skipBlankLines: true,
    }],
    'max-lines-per-function': [`error`, {
      max: 100,
      skipComments: true,
      skipBlankLines: true,
    }],
    'no-use-before-define': [`error`, {
      functions: false,
      classes: false,
      variables: true,
    }],
    'max-len': [`error`, {
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
     * Plugins
     */

    // import
    'import/order': `error`,
    'import/first': `error`,
    'import/no-mutable-exports': `error`,
    'import/newline-after-import': `error`,

    // disabled import
    'import/no-unresolved': `off`,
    'import/no-absolute-path': `off`,
    'import/no-named-as-default-member': `off`,

    // unicorn
    // Pass error message when throwing errors
    'unicorn/error-message': `error`,
    // Uppercase regex escapes
    'unicorn/escape-case': `error`,
    // Array.isArray instead of instanceof
    'unicorn/no-array-instanceof': `error`,
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': `error`,
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    'unicorn/number-literal-case': `error`,
    // ** instead of Math.pow()
    'unicorn/prefer-exponentiation-operator': `error`,
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': `error`,
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-starts-ends-with': `error`,
    // textContent instead of innerText
    'unicorn/prefer-text-content': `error`,
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': `error`,
    // Use new when throwing error
    'unicorn/throw-new-error': `error`,
    // Disallow awaiting non-promise values
    'unicorn/no-unnecessary-await': `error`,
    // Enforce consistent brace style for `case` clauses
    'unicorn/switch-case-braces': [`error`, `avoid`],
    // Disallow comparing `undefined` using `typeof`
    'unicorn/no-typeof-undefined': `error`,
    // Prefer using `Set#size` instead of `Array#length`
    'unicorn/prefer-set-size': `error`,

    // disabled unicorn
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': `off`,

    // yml
    'yml/quotes': [`error`, {
      prefer: `single`,
      avoidEscape: false,
    }],
    // disabled yml
    'yml/no-empty-document': `off`,

    // n
    'n/no-callback-literal': `off`,

    // comments
    'eslint-comments/no-unused-disable': `error`,
    'eslint-comments/disable-enable-pair': [`error`, { allowWholeFile: true }],
  },
}
