const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./vendor",
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require("./vendor/main-manifest.json"), // eslint-disable-line
    }),
  ],
});
