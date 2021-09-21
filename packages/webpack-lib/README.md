1. 生成声明文件用 tsc,要在打包后面命令加上
2. [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)
   lib 不方便 split，因为拆分以后要在 html 中使用多个 script，而导出 lib 时不方便，因此还是 external 比较好
3. [Externals](https://webpack.js.org/configuration/externals/)

4. [DllPlugin](https://webpack.js.org/plugins/dll-plugin/#dllplugin)
   两个配置文件，先打包 dll 后，注意配置 devServer.static 为打包目录,用在开发环境，生产环境用 2,5

5. [tree-shaking](https://webpack.docschina.org/guides/tree-shaking/)

tree shaking 会删除是用不到的模块，但项目中会出现带有副作用的模块，于是引入了 sideEffects 字段，
对于那些纯模块（比如导出一个函数），自动处理，

注意 import from 以内的,只会在导出的模块被使用时才会对对应文件的代码进行执行,但是 import ""(包括 import())一个文件时,会立刻执行,因此要有所区分

带副作用的,比如 log
如果使用了其中的模块，无论 sideEffects,副作用都会保留,
如果只是运行了,标记有副作用才会保留
如果没运行,比如 import from,都不会保留

usedExports 依赖于 terser 去检测语句中的副作用。它是一个 JavaScript 任务， React 框架的高阶函数（HOC）在这种情况下是会出问题的

6. peerDependencies
   用来指定使用本包时另外需要用户安装的依赖及版本，没安装时只是会 warn,不会自动安装

   比如

   ```
   warning " > react-dom@17.0.2" has unmet peer dependency "react@17.0.2".
   ```

   放在另外两个 dependency 的会自动下载到 node_modules 根目录

   https://classic.yarnpkg.com/en/docs/dependency-types/
