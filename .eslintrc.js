module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-array-index-key': 0,
    'sx-a11y/no-static-element-interactions': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'object-curly-newline': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/self-closing-comp': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
  },
};
