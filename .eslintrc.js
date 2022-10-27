module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'no-useless-escape': 'off',
    'operator-linebreak': 'off'
  }
};
