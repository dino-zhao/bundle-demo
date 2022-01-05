import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const express = require("express");
const history = require("connect-history-api-fallback");
import devStart from "./dev";
const path = require("path");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(3050);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
