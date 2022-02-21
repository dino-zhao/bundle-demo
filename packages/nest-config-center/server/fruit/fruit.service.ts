import { Injectable } from "@nestjs/common";
@Injectable()
export default class FruitService {
  log(): void {
    console.log("aaa");
  }
}
