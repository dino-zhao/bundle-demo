import * as Joi from 'joi';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as S } from 'mongoose';
import { Dog } from '../../dogs/schemas/dog.schema';
export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number(),
});

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({
    required: [true],
    type: String,
    // enum: ['Coffee', 'Tea'],
  })
  name: string;

  @Prop({ required: true, type: Number })
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: [{ type: S.Types.ObjectId, ref: 'Dog' }] })
  dogs: Dog[];

  // @Prop()
  // _id: S.Types.ObjectId;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
