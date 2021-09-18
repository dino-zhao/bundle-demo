1. 生成声明文件用 tsc,也可以现在这样先用 ts-loader 处理，再给 babel-loader
2. [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)
3. [Externals](https://webpack.js.org/configuration/externals/)
4. [DllPlugin](https://webpack.js.org/plugins/dll-plugin/#dllplugin)
   两个配置文件，先打包 dll 后，注意配置 devServer.static 为打包目录

5. [tree-shaking](https://webpack.docschina.org/guides/tree-shaking/)

tree shaking 会删除是用不到的模块，但项目中会出现带有副作用的模块，于是引入了 sideEffects 字段，
对于那些纯模块（比如导出一个函数），自动处理，
带副作用的,比如 log，如果被 sideEffects 指定有副作用，或使用了其中的其他模块，满足之一就会保留

usedExports 依赖于 terser 去检测语句中的副作用。它是一个 JavaScript 任务， React 框架的高阶函数（HOC）在这种情况下是会出问题的
