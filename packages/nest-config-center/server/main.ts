import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const history = require("connect-history-api-fallback");
import devStart from "./dev";
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
  }

  await app.listen(3050);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
