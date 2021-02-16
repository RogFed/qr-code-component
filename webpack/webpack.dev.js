const {merge} = require('webpack-merge')
const common = require('../webpack.common')
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
    liveReload: false,
    port: 8080,
    useLocalIp: true,
  }
})
