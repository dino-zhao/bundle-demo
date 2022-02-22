import { Module } from "@nestjs/common";
import FruitController from "./fruit.controller";
import FruitService, { CONSTANTS } from "./fruit.service";

const obj = {
  log() {
    console.log("test");
  },
};
@Module({
  imports: [],
  providers: [
    // {
    //   provide: FruitService,
    //   useValue: obj,
    // },
    FruitService,
    {
      provide: CONSTANTS,
      useValue: "122222",
    },
  ],
  controllers: [FruitController],
})
export class FruitModule {}
