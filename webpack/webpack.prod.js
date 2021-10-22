const { merge } = require('webpack-merge');
const common = require('../webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: '../index.html',
      favicon: './public/favicon.png',
    }),
  ],
});
