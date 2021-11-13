import { DogDocument } from '../../dogs/schemas/dog.schema';
import { Schema } from 'mongoose';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
  dogs: DogDocument[];
}
