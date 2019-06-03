const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node', // 为了不把nodejs内置模块打包进输出文件中，例如： fs net模块等；
  externals: [nodeExternals()], //为了不把node_modeuls目录下的第三方模块打包进输出文件中
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  }
}
