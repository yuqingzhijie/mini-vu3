module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-undef': 0,
    // 0: 关闭规则，1：警告提示，2：错误提示
    'no-console': 1,
    // quotes: [0, "single"], // 关闭 必须使用单引号
    // indent: [2, 4],
    'no-multiple-empty-lines': [1, { max: 2 }], // 空行个数最多不超过2行
    'no-var': 0, // 关闭 禁用var，用let和const代替
    'prettier/prettier': ['error', { printWidth: 120, tabWidth: 2, endOfLine: 'auto', singleQuote: true, semi: true }],
  },
};
