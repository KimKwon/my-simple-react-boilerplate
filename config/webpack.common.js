const webpack = require('webpack');
const paths = require("./paths");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: {
    main: paths.src,
  },
  output: {
    path: paths.dist,
    filename: '[name].[hash].js',
    assetModuleFilename: 'assets/[hash].[ext]?[query]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                    proposals: true,
                  },
                  targets: {
                    browsers: ['>= 1%, not dead'],
                  },
                }
              ],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                }
              ],
            ]
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpe?g|gif|otf|ttf)$/,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@": paths.src,
      "components": paths.components,
      "constants": paths.constants,
      "core": paths.core,
      "pages": paths.pages,
      "public": paths.public,
      "assets": paths.assets,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ]

}