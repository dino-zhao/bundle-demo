const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  entry: './client/index.tsx',

  module: {},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      filename: 'js/[name].split.js',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]react/,
        },
        antd: {
          test: /[\\/]node_modules[\\/](antd|@ant-design|rc-)/,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
        },
        default: {
          minChunks: 2,
          priority: -30,
          name: 'default',
          filename: 'js/[name].split.js',
        },
      },
    },
    minimizer: [new CssMinimizerPlugin()],
  },
})
