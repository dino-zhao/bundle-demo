import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import createStore from "./redux";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

const store = createStore(window.INITIAL_STATE);
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
