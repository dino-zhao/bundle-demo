const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  entry: './client/index.tsx',

  module: {
    rules: [
      {
        test: /(?<!antd).css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /antd.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [new CssMinimizerPlugin()],
  },
})
