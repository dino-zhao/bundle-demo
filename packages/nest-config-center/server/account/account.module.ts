import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";
import { RolesGuard } from "./roles.guard";

@Module({
  imports: [],
  providers: [
    {
      provide: "APP_GUARD",
      useClass: RolesGuard,
    },
  ],
  controllers: [AccountController],
})
export class AccountModule {}
