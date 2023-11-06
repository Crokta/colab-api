import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  imageUrl: string;

  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;
}
