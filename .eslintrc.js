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
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'no-useless-escape': ['error'],
    'linebreak-style': [0, 'error', 'windows'],
    'react/destructuring-assignment': ['error', 'always'],
    'react/prop-types': 'off',
    'no-alert': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-no-useless-fragment': 'off'
  }
};
