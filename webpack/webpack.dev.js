const { merge } = require('webpack-merge');
const common = require('../webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '..', 'dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    hotOnly: false,
    port: 8080,
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
});
