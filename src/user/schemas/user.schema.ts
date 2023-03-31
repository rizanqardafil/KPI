import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  username: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
  })
  profile: string;

  // @Prop({
  //   required: false,
  // })
  // skills: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
