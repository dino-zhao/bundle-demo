import { Injectable } from '@nestjs/common';
// import { Dog } from './interfaces/dog.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './schemas/dog.schema';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async update(createDogDto: CreateDogDto, id: string): Promise<Dog> {
    return this.dogModel.findByIdAndUpdate(id, createDogDto);
  }
  async getOne(id): Promise<Dog> {
    return (await this.dogModel.findOne({ age: 11 })).populate('cats');
  }
}
