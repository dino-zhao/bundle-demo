import { CatDocument } from '../../cats/schemas/cat.schema';
export class CreateDogDto {
  name: string;
  age: number;
  breed: string;
  cats: CatDocument[];
}
