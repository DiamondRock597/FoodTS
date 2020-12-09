module.exports = {
  root: true,
  extends: '@computools/eslint-config-react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {'@typescript-eslint/ban-tslint-comment': 0},
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
