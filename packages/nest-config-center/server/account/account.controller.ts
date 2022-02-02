import { Controller, Get, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";
@Controller("api/login")
export class AccountController {
  @Get()
  findAll(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request
  ): Promise<string> {
    response.cookie("key", "value");
    return Promise.resolve("222");
  }
}
