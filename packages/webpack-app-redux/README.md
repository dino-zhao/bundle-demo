- webpack/simply-hmr

关于 alias，要在 tsconfig 和 webpack.config.js 中都配置，前者负责 ts，后者负责打包，也可以只配置前者加插件 tsconfig-paths-webpack-plugin

rtk
https://www.jianshu.com/p/49aa25353c2e

rtk query

- 主动发起请求,hook 中返回 [refetch](https://redux-toolkit.js.org/rtk-query/usage/queries)，[首次请求延迟](https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching)
- 拦截,注意调整@babel/preset-env 的 target 选项，'babel regeneratorRuntime is not defined' [文档](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries)
- 缓存

1. cache

- rtk store 部分的热更新没解决
  冷启动
  缓存前 webpack 5.53.0 compiled successfully in 6707 ms
  缓存后 webpack 5.53.0 compiled successfully in 393 ms
  hot
  缓存后 webpack 5.53.0 compiled successfully in 3709 ms
  缓存后 webpack 5.53.0 compiled successfully in 294 ms

2. splitchunk

3. 按需加载
   React.Suspense+React.lazy+import()

4. antd
   下载 antd（不需要单独下 type），引入 css
   todo
   注意如果抽离样式的话，会包含所有，因此将 antd 的样式用 style-loader，其他的用 MiniCssExtractPlugin.loader

5. 打包保证内容不变文件名不变，利用缓存
   https://webpack.docschina.org/guides/caching/

6. 构建性能

- 将 loader 应用于最少数量的必要模块

7. 抽离并压缩 css
   const MiniCssExtractPlugin = require("mini-css-extract-plugin");
   const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
8. tree-shaking

9. css 相关
   scss 和 css module, css module 在 css-loader 中处理，看 sass-loader 和 css-loader 文档即可
   styled-components https://styled-components.com/docs/basics

10. hook 相关 eslint 插件 plugin:react-hooks/recommended
    https://github.com/facebook/react/issues/18235

11. react17 的 jsx 不需要显示引入 react
    https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint

12. react-rourter 刷新 404
    配置 webpack-dev-midware publicpath，引入 connect-history-api-fallback
13. css module 影响 antd 样式
    对 node_modules 中的不适用 cssmodule，外的使用
