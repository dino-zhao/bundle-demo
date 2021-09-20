import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
const isDev = process.env.NODE_ENV === "development";
let config = {
  input: "src/index.tsx",
  output: {
    plugins: [terser()],
    dir: "dist",
    format: "es",
  },
  plugins: [
    resolve({
      extensions: [".js", ".ts", ".tsx", ".jpg"], //相当于webpack的resolve.extensions
    }),
    commonjs(),
    babel({ babelHelpers: "bundled", extensions: [".js", ".ts", ".tsx"] }), //用来解析node_modules的模块,和cmj模块，比如lodash

    replace({
      "process.env.NODE_ENV": JSON.stringify(
        isDev ? "production" : "development"
      ),
      preventAssignment: true,
    }), //如果不提供，react会报错process is not defined
    postcss({
      extensions: [".css"],
    }),
    image(),
    copy({
      targets: [{ src: "src/images", dest: "dist" }],
    }),
  ],
};

if (isDev) {
  config.plugins.push(
    serve({ contentBase: ["dist"], port: "10001" }),
    livereload({ watch: "dist" })
  );
}

export default config;
