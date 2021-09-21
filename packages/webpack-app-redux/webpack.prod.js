const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "production",
  entry: "./client/index.tsx",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});
