import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth extends Document {
  @Prop({ type: String, index: true, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  Rank: string;

  @Prop({ type: String, required: true })
  Bio: string;

  @Prop({ type: String, required: true })
  ImageURL: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
