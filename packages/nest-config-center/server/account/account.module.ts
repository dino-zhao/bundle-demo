import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";

@Module({
  imports: [],
  providers: [],
  controllers: [AccountController],
})
export class AccountModule {}
