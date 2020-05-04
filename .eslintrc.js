module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
  },
};
