module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
  },
  plugins: ['jest', '@typescript-eslint'],
  extends: ['prettier', 'eslint-config-prettier'],
  env: {
    'jest/globals': true,
  },
};
