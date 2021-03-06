import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";
import { FruitModule } from "./fruit/fruit.module";
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env["DATABASE_HOST"],
      port: Number.parseInt(process.env["DATABASE_POST"], 10),
      username: process.env["DATABASE_USERNAME"],
      password: process.env["DATABASE_PASSPORT"],
      database: "test",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AccountModule,
    FruitModule,
  ],
})
export class AppModule {}
