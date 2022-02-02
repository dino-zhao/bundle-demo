import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
const express = require("express");
const history = require("connect-history-api-fallback");
var cookieParser = require("cookie-parser");
import devStart from "./dev";
const path = require("path");
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

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
  if (process.env.NODE_ENV === "development") {
    devStart(app);
  } else {
    app.use(express.static(path.join(__dirname, "client")));
  }
  app.use(cookieParser());
  await app.listen(3050);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
