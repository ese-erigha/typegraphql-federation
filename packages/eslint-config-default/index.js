module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'turbo',
    'prettier',
  ],
  env: {
    node: true,
  },
  globals: {
    __DEV__: 'readable',
  },
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        classes: ['field', 'constructor', 'decorated-method', 'instance-method', 'static-method'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
        typedefs: true,
        variables: true,
      },
    ],
    '@typescript-eslint/require-await': 'error',
    'class-methods-use-this': 'off', // Better to keep methods consistent versus converting them to static methods or separate functions
    'import/no-named-as-default': 'off', // graphql-codegen generates named default exports
    'import/prefer-default-export': 'off', // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'max-classes-per-file': 'off',
    'no-console': 'warn',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off', // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    // 'no-undef': 'error', // Off by default because typescript.validate.enable (using tsc) will do a better job
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'off',
    'node/no-missing-import': [
      'error',
      {
        resolvePaths: ['./src', './tests'],
        tryExtensions: ['.js', '.ts', '.json'],
      },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'],
      },
    ],
    'prefer-const': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'tests'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}', 'test.ts'],
      plugins: ['jest'],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        'max-classes-per-file': 'off',
        'no-console': 'off',
        'no-magic-numbers': 'off',
        'sort-keys': 'off',
        'compat/compat': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jest/prefer-to-be': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/expect-expect': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
