module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourcePath() {
    return ['.ts', 'tsx'];
  },
};
