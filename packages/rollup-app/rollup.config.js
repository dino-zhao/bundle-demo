import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
const html = require("@rollup/plugin-html");
const isDev = process.env.NODE_ENV === "development";
let config = {
  input: "src/index.ts",
  output: {
    // plugins: [terser()],
    dir: "dist",
    format: "es",
  },
  plugins: [
    resolve({
      extensions: [".js", ".ts"], //相当于webpack的resolve.extensions
    }),
    commonjs(),
    babel({ babelHelpers: "bundled", extensions: [".js", ".ts", ".tsx"] }), //用来解析node_modules的模块,和cmj模块，比如lodash
    html(),
  ],
};

if (isDev) {
  config.plugins.push(serve({ contentBase: ["dist"], port: "10001" }));
}

export default config;
