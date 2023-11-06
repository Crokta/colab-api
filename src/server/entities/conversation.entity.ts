import { Field, ObjectType } from '@nestjs/graphql';
import { Member } from './member.entity';
import { DirectMessage } from './direct-message.entity';

@ObjectType()
export class Conversation {
  @Field()
  id: string;

  @Field()
  memberOneId: string;

  @Field(() => Member, { nullable: true })
  memberOne: Member;

  @Field()
  memberTwoId: string;

  @Field(() => Member, { nullable: true })
  memberTwo: Member;

  @Field(() => [DirectMessage], { nullable: true })
  directMessages: DirectMessage[];

  @Field()
  deleted: boolean;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
