const { merge } = require('webpack-merge');
const common = require('../webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        // @ts-ignore
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // @ts-ignore
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    // @ts-ignore
    new CleanWebpackPlugin(),
  ],
});
