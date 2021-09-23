const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    './client/index.tsx',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
  module: {
    rules: [
      {
        test: /\.css|scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
})
