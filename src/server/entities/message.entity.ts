import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Channel } from './channel.entity';
import { Member } from '../../member/entities/member.entity';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  fileUrl: string;

  @Field(() => Member, { nullable: true })
  member: Member;

  @Field({ nullable: true })
  memberId: string;

  @Field(() => Channel, { nullable: true })
  channel: Channel;

  @Field({ nullable: true })
  channelId: string;

  @Field()
  deleted: boolean;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
