import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from '../dogs/dogs.module';
@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'TestConfig',
      useValue: { a: 1 },
    },
  ],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  exports: [CatsService],
})
export class CatsModule {}
