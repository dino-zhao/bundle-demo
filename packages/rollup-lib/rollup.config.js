import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
export default {
  input: "src/index.js",
  output: {
    plugins: [terser()],
    dir: "dist",
  },
  plugins: [resolve()], //用来解析node_modules的模块
};
