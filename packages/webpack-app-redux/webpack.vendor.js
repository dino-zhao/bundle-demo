var path = require("path");
var webpack = require("webpack");
module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  entry: ["webpack-lib"],
  output: {
    path: path.join(__dirname, "vendor"),
    filename: "MyDll.[name].js",
    library: "[name]_[fullhash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "vendor", "[name]-manifest.json"),
      name: "[name]_[fullhash]",
    }),
  ],
};
