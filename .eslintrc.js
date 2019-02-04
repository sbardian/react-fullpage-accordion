module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
  },
  plugins: ['jest', '@typescript-eslint'],
  env: {
    'jest/globals': true,
  },
};
