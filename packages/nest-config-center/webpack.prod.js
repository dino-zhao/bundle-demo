const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./client/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        include: path.resolve(__dirname, "client"),
      },
    ],
  },
});
