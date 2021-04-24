'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {
    expectAsync: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    'eol-last': 'warn',
    eqeqeq: 'warn',
    indent: ['warn', 2, {
      SwitchCase: 1
    }],
    'keyword-spacing': ['warn'],
    'no-async-promise-executor': 'off',
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    quotes: ['warn', 'single', 'avoid-escape'],
    semi: ['warn', 'always'],
    'space-before-blocks': 'warn',
    strict: 'warn'
  }
};
