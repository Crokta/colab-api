import { Field, ObjectType } from '@nestjs/graphql';
import { Member } from '../../member/entities/member.entity';
import { Conversation } from './conversation.entity';

@ObjectType()
export class DirectMessage {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  fileUrl: string;

  @Field(() => Member, { nullable: true })
  member: Member;

  @Field({ nullable: true })
  memberId: string;

  @Field({ nullable: true })
  conversationId: string;

  @Field(() => Conversation, { nullable: true })
  conversation: Conversation;

  @Field()
  deleted: boolean;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
