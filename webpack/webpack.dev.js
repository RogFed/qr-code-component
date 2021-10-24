const { merge } = require('webpack-merge');
const common = require('../webpack.common');
const path = require('path');

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
    historyApiFallback: true,
    hot: true,
    port: 3000,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, '..', 'public'),
      publicPath: '/',
    },
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
});
