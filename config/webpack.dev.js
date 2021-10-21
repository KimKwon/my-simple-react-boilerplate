const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require("./paths");

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    static: {
      directory: paths.dist,
    },
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
});
