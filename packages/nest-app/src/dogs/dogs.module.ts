import { Module, Global } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog, DogSchema } from './schemas/dog.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
})
export class DogsModule {}
