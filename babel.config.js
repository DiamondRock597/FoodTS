module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: false}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@features': './src/features',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@api': './src/api',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
