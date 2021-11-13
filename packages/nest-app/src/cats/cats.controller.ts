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
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { JoiValidationPipe } from '../common/pipes/JoiValidation.pipes';
import { createCatSchema } from './schemas/cat.schema';
import { GetHeader } from '../common/decorators/user.decorator';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Inject('TestConfig')
  private readonly testConfig;

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  findAll(@Req() request: Request, @Param() params): Promise<Cat[]> {
    console.log(request.url + params.id);
    // throw new Error('4444');
    return this.catsService.findAll();
  }

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto) {
    try {
      const res = await this.catsService.create(createCatDto);
      return 'success';
    } catch (error) {
      console.log(error);
      // let keys = Object.keys(error.errors);
      // throw new BadRequestException(error.errors[keys[0]].message);
    }
  }

  @Post(':id')
  async update(@Body() createCatDto: CreateCatDto, @Param('id') id: string) {
    try {
      await this.catsService.update(createCatDto, id);
      return 'success';
    } catch (error) {
      console.log(error);
      return 'failed';
    }
  }

  @Get(':id')
  findOne(@GetHeader('user-agent') agent: string) {
    console.log(agent, this.testConfig);
  }
}
