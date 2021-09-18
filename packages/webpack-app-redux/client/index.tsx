import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import webpackLog from "webpack-lib";
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

webpackLog("33");