var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bitbucketApi.js',
    library: 'bitbucketApi',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
