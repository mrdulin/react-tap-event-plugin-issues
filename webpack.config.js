const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: src,
    vendors: [
      'core-js/es6/map',
      'react',
      'react-dom',
      'react-router-dom',
      'react-tap-event-plugin',
    ]
  },
  output: {
    path: dist,
    filename: '[name].js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          src,

          // 编译转换Object.assign
          // path.resolve(__dirname, 'node_modules/react-tap-event-plugin')

          // 编译转换Map
          // path.resolve(__dirname, 'node_modules/react')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(dist),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      template: src + '/index.html'
    })
  ]
}
