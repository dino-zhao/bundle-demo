var path = require("path");
var webpack = require("webpack");
module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  entry: "ramda",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "MyDll.[name].js",
    library: "[name]_[fullhash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "[name]-manifest.json"),
      name: "[name]_[fullhash]",
    }),
  ],
};
