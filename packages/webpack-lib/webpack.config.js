const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
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

  //为了试用splitchunk把这段注释
  externals: {
    ramda: "ramda",
    // lodash: {
    //   commonjs: "lodash",
    //   amd: "lodash",
    //   root: "_",
    //   commonjs2: "lodash",
    // },
  },
};
