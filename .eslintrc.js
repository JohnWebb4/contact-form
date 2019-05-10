module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
