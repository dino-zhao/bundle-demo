const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: ["vendor", "public"],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require("./vendor/main-manifest.json"), // eslint-disable-line
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
