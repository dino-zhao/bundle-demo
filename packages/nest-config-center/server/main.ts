import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const express = require("express");
const webpack = require("webpack");
const webpackconfig = require("../webpack.dev");
const webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var history = require("connect-history-api-fallback");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const webpackCompiler = webpack(webpackconfig);
  const wpmw = webpackMiddleware(webpackCompiler, {
    publicPath: webpackconfig.output.publicPath,
  });
  app.use(
    history({
      rewrites: [
        {
          from: /^\/api\/.*$/,
          to: function (context) {
            return context.parsedUrl.path;
          },
        },
      ],
      htmlAcceptHeaders: ["text/html"],
    })
  );
  app.use(wpmw);

  app.use(
    webpackHotMiddleware(webpackCompiler, {
      log: console.log,
    })
  );

  app.use(express.static("public"));

  await app.listen(3050);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
