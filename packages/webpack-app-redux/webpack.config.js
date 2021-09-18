const path = require("path");
const webpack = require("webpack");
const dist = path.resolve(__dirname, "www");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  entry: [
    "react-hot-loader/patch",
    "./client/index.tsx",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
  ],
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, dist),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: ["babel-loader"],
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
};