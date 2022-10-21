module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'double'],
    'linebreak-style': ['error', 'windows'],
    indent: ['error', 4],
    'no-unused-vars': 'off',
  },
};
