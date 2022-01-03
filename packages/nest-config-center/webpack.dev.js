const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "react-hot-loader/patch",
    "./client/index.tsx",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [],
  },
});
