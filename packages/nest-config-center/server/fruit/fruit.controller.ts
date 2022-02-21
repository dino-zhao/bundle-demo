import { Controller, Get } from "@nestjs/common";
import FruitService from "./fruit.service";

@Controller("api/fruit")
export default class FruitController {
  constructor(private fruitService: FruitService) {}

  @Get()
  testService(): string {
    this.fruitService.log();
    return "a";
  }
}
