import { Injectable, Inject } from "@nestjs/common";

export const CONSTANTS = "constant";

@Injectable()
export default class FruitService {
  @Inject(CONSTANTS) v: string;

  log(): void {
    console.log(this.v);
  }
}
