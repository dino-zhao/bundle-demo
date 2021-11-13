import * as Joi from 'joi';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Cat } from '../../cats/schemas/cat.schema';
import * as mongoose from 'mongoose';
export const createDogSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number(),
});

export type DogDocument = Dog & mongoose.Document;

@Schema()
export class Dog {
  @Prop({
    required: [true],
    type: String,
    // enum: ['Coffee', 'Tea'],
  })
  name: string;

  @Prop({ type: Number })
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }] })
  cats: Cat[];
}

export const DogSchema = SchemaFactory.createForClass(Dog);
