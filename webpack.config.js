const path = require("path");
const webpack = require("webpack");
const dist = path.resolve(__dirname, "www");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "./client/index.js",
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
  },
};
