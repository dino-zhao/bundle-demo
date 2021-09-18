1. 生成声明文件用 tsc,也可以现在这样先用 ts-loader 处理，再给 babel-loader
2. [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)
3. [Externals](https://webpack.js.org/configuration/externals/)
4. [DllPlugin](https://webpack.js.org/plugins/dll-plugin/#dllplugin)
   两个配置文件，先打包 dll 后，注意配置 devServer.static 为打包目录

5. [tree-shaking](https://webpack.docschina.org/guides/tree-shaking/)
   分为文件中导出的模块和其余副作用，生产环境基础上

1）没使用的模块都会删除

2）import from 形式，不论 sideeffect
如果用到了其中的模块，副作用会导入，比如用到了 cube,会打印"副作用"
如果没用到任意模块，副作用不会导入，比如什么没用到，不会打印"副作用"

3）如果 import ''形式，如果 sideeffect 指定对应文件或默认，则会打印"副作用"，如果设为 false，则不会

usedExports 依赖于 terser 去检测语句中的副作用。它是一个 JavaScript 任务， React 框架的高阶函数（HOC）在这种情况下是会出问题的
