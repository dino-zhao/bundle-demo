const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
module.exports = merge(common, {
  mode: "production",
  output: {
    library: {
      name: "MyLibrary",
      type: "umd",
    }, //如果以commonjs使用时export defalt导出时要使用其中的.default来访问
  },
});
