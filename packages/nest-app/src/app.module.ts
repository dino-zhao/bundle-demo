import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './dogs/dogs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './graphql/recipes/recipes.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    DogsModule,
    RecipesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      playground: true,
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats/:id', method: RequestMethod.GET });
  }
}
