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
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';
import { createDogSchema } from './schemas/dog.schema';
import { GetHeader } from '../common/decorators/user.decorator';
import { CatsService } from '../cats/cats.service';
@Controller('dogs')
export class DogsController {
  constructor(
    private dogsService: DogsService,
    private catService: CatsService,
  ) {}
  @Get()
  @Header('Cache-Control', 'none')
  findAll(@Req() request: Request, @Param() params): Promise<Dog[]> {
    console.log(request.url + params.id);
    // throw new Error('4444');
    return this.dogsService.findAll();
  }

  @Get(':id')
  @Header('Cache-Control', 'none')
  getOno(@Param() params): Promise<Dog> {
    // throw new Error('4444');
    return this.dogsService.getOne(params.id);
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    console.log(createDogDto);
    try {
      const res: any = await this.dogsService.create(createDogDto);
      console.log(res._id);
      this.catService.updateMany(createDogDto.cats as any[], res._id);
      return 'success';
    } catch (err) {
      console.log(err);
    }
  }

  @Post(':id')
  async update(@Body() createDogDto: CreateDogDto, @Param('id') id: string) {
    try {
      await this.dogsService.update(createDogDto, id);
      return 'success';
    } catch (err) {}
  }
}
