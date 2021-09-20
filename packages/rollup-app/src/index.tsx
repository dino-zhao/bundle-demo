// import log from "rollup-lib";
import log from "./log";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

log(process.env.NODE_ENV);
