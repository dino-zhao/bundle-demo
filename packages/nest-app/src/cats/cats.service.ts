import { Injectable, Inject } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { Dog, DogDocument } from '../dogs/schemas/dog.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    let cur = this.catModel.find();
    return cur.populate('dogs').exec();
  }

  async update(createCatDto: CreateCatDto, id: string): Promise<void> {
    const cat = await this.catModel.updateOne({ _id: id }, createCatDto);

    console.log(createCatDto.dogs);
    // createCatDto.dogs.forEach((item) => item.push(cat._id));
  }
  async updateMany(ids: string[], id: string): Promise<any> {
    return this.catModel.find({ _id: { $in: ids } }).then((res) => {
      console.log(res);
      res.forEach((item) => {
        item.dogs.push(id as any);
        item.save();
      });
    });
  }
}
