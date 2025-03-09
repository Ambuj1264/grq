module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Rules for comments
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
        checkConstructors: true,
        contexts: ['ClassDeclaration', 'ClassProperty', 'MethodDefinition'],
      },
    ],
    'jsdoc/require-description': 'warn',

    // Check for valid JSDoc tags
    'jsdoc/check-tag-names': [
      'warn',
      {
        definedTags: ['best-practice'],
      },
    ],

    // Enforce capitalized sentences in comments
    'capitalized-comments': [
      'warn',
      'always',
      {
        ignoreConsecutiveComments: true,
      },
    ],

    // Prevent comments from being on the same line as code
    'line-comment-position': ['warn', { position: 'above' }],

    // Enforce comment style
    'multiline-comment-style': ['warn', 'separate-lines'],
  },
};
