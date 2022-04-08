/**
 * ESLint config for Jest
 * @see https://github.com/jest-community/eslint-plugin-jest
 */

module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/__mock__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],

      env: {
        jest: true,
      },

      globals: {
        mount: false,
        shallowMount: false,
        createComponentMocks: false,
        createModuleStore: false,
      },

      plugins: [
        'jest',
      ],

      rules: {
        // Disabled because jest.mock should go before module import
        'import/first': 'off',

        // Jest rules
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
}
