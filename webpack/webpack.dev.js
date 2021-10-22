const { merge } = require('webpack-merge');
const common = require('../webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '..', 'public'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    hotOnly: false,
    port: 3000,
    useLocalIp: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
  ],
});
