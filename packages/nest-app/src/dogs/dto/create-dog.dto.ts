import { CatDocument } from '../../cats/schemas/cat.schema';
import { Schema } from 'mongoose';
export class CreateDogDto {
  name: string;
  age: number;
  breed: string;
  // cats: CatDocument[];
}
