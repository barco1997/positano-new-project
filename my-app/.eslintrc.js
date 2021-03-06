const fs = require('fs');
const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      es6: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 1,
    'react/prefer-es6-class': 1,
    'react/jsx-no-bind': 1,
    'no-console': 'warn',
  },
};
