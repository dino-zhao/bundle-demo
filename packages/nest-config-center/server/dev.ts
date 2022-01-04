const express = require("express");
const webpack = require("webpack");
const webpackconfig = require("../webpack.dev");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackCompiler = webpack(webpackconfig);
import { INestApplication } from "@nestjs/common";
export default function devStart(app: INestApplication): void {
  const wpmw = webpackMiddleware(webpackCompiler, {
    publicPath: webpackconfig.output.publicPath,
  });

  app.use(wpmw);

  app.use(
    webpackHotMiddleware(webpackCompiler, {
      log: console.log,
    })
  );

  app.use(express.static("public"));
}
