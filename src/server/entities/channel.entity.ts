import { Field, ObjectType } from '@nestjs/graphql';
import { ChannelType } from '../enums';
import { Member } from './member.entity';

@ObjectType()
export class Channel {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ChannelType)
  type: ChannelType;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field(() => [Member], { nullable: true })
  members: Member[];
}
