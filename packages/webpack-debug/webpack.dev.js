const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./client/index.tsx', './client/test.tsx'],
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  module: {
    rules: [],
  },
  devServer: {
    port: 3088,
  },
})
