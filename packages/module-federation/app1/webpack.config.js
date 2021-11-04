const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3010,
    hot: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /bootstrap\.js$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  //http://localhost:3002/remoteEntry.js
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      remotes: {
        app3: `app3@${getRemoteEntryUrl(3012)}`,
      },
      //这种方式无法处理remote加载错误
      // remotes: {
      //   app3: `promise new Promise(resolve => {

      //     // This part depends on how you plan on hosting and versioning your federated modules
      //     const remoteUrlWithVersion = 'http://localhost:3012/remoteEntry.js'
      //     const script = document.createElement('script')
      //     script.src = remoteUrlWithVersion
      //     script.onerror=()=>{
      //       console.log('shibai')
      //       return false
      //     }
      //     script.onload = () => {
      //       // the injected script has loaded and is available on window
      //       // we can now resolve this Promise

      //       const proxy = {
      //         get: (request) =>{
      //           console.log(window.app3)
      //         return  window.app3.get(request)
      //         },
      //         init: (arg) => {
      //           try {
      //             return window.app1.init(arg)
      //           } catch(e) {
      //             console.log('remote container already initialized')
      //           }
      //         }
      //       }
      //       resolve(proxy)
      //     }
      //     // inject this script with the src set to the versioned remoteEntry.js
      //     document.head.appendChild(script);
      //   })
      //   `,
      // },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

function getRemoteEntryUrl(port) {
  return `//localhost:${port}/remoteEntry.js`;
}
