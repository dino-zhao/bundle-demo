import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "./index.scss";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
const { log } = require("webpack-lib"); //以commjs

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//用来更新store
// if (module.hot) {
//   module.hot.accept();
// }
log("99");
