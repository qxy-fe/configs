/**
 * Eslint config for Jest
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

      rules: {
        'import/first': 'off',
      },
    },
  ],
}
