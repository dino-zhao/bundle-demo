import { Module } from "@nestjs/common";
import FruitController from "./fruit.controller";
import FruitService from "./fruit.service";
@Module({
  imports: [],
  providers: [FruitService],
  controllers: [FruitController],
})
export class FruitModule {}
