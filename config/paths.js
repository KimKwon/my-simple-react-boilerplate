const path = require('path');

module.exports = {
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  components: path.resolve(__dirname, '../src/components'),
  constants: path.resolve(__dirname, '../src/constants'),
  core: path.resolve(__dirname, '../src/core'),
  pages: path.resolve(__dirname, '../src/pages'),
  assets: path.resolve(__dirname, '../src/assets'),
}