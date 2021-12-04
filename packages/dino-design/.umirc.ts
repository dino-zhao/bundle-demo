import { defineConfig } from "dumi";
import path from "path";
console.log(path.resolve(__dirname, "src/common"));
export default defineConfig({
  title: "组件库",
  favicon:
    "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  outputPath: "dist",
  mode: "site",
  polyfill: {
    imports: [],
  },
  alias: {},
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
