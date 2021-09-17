1. 生成声明文件用 tsc,也可以现在这样先用 ts-loader 处理，再给 babel-loader
2. [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)
3. [Externals](https://webpack.js.org/configuration/externals/)
4. [DllPlugin](https://webpack.js.org/plugins/dll-plugin/#dllplugin)
   两个配置文件，先打包 dll 后，注意配置 devServer.static 为打包目录
