module.exports = {
  root: true,
  extends: ['@computools/eslint-config-react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {'@typescript-eslint/ban-tslint-comment': 0},
};
