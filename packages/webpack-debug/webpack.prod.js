const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
  mode: 'development',
  entry: ['./client/test1.tsx', './client/test.tsx'],
  module: {},
  plugins: [],
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
  },
})
