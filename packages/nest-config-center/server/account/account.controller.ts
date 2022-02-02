import { Controller, Get, Res, Req, Post } from "@nestjs/common";
import { Request, Response } from "express";
import { Roles } from "./roles.decorator";
import { Role } from "./role.enum";
@Controller("api/login")
export class AccountController {
  @Get()
  findAll(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request
  ): Promise<string> {
    response.cookie("key", "admin");
    return Promise.resolve("222");
  }

  @Post()
  @Roles(Role.Admin)
  valid() {
    return "success";
  }
}
