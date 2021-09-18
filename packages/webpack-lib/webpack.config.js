const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./src/index.ts"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        /* options: see below */
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "888",
      template: "./public/index.html",
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dist/main-manifest.json"), // eslint-disable-line
    }),
  ],
  externals: {
    lodash: {
      commonjs: "lodash",
      amd: "lodash",
      root: "_",
      commonjs2: "lodash",
    },
  },
};