import * as Joi from 'joi';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number(),
});

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({
    required: [true, 'Why no bacon?'],
    type: String,
    enum: ['Coffee', 'Tea'],
  })
  name: string;

  @Prop({ required: true, type: Number })
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
