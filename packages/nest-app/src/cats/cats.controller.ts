import {
  Controller,
  Get,
  Req,
  HttpCode,
  Header,
  Param,
  Body,
  Post,
  UsePipes,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { JoiValidationPipe } from '../common/pipes/JoiValidation.pipes';
import { createCatSchema } from './schema/cat.schema';
import { GetHeader } from '../common/decorators/user.decorator';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Inject('TestConfig')
  private readonly testConfig;

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  findAll(@Req() request: Request, @Param() params): Cat[] {
    console.log(request.url + params.id);
    // throw new Error('4444');
    return this.catsService.findAll();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  findOne(@GetHeader('user-agent') agent: string) {
    console.log(agent, this.testConfig);
  }
}
