- webpack/simply-hmr

关于 alias，要在 tsconfig 和 webpack.config.js 中都配置，前者负责 ts，后者负责打包，也可以只配置前者加插件 tsconfig-paths-webpack-plugin

rtk

- 主动发起请求,hook 中返回 [refetch](https://redux-toolkit.js.org/rtk-query/usage/queries)，[首次请求延迟](https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching)
- 拦截,注意调整@babel/preset-env 的 target 选项，'babel regeneratorRuntime is not defined' [文档](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries)
- 缓存
