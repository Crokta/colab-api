import { Field, ObjectType } from '@nestjs/graphql';
import { Server } from './server.entity';
import { Profile } from './profile.entity';
import { MemberRole } from '../enums';
import { Message } from './message.entity';
import { DirectMessage } from './direct-message.entity';
import { Conversation } from './conversation.entity';

@ObjectType()
export class Member {
  @Field()
  id: string;

  @Field(() => Profile, { nullable: true })
  profile: Profile;

  @Field()
  profileId: string;

  @Field(() => Server, { nullable: true })
  server: Server;

  @Field()
  serverId: string;

  @Field(() => [Message], { nullable: 'itemsAndList' })
  messages: Message[];

  @Field(() => [DirectMessage], { nullable: 'itemsAndList' })
  directMessages: DirectMessage[];

  @Field(() => [Conversation], { nullable: 'itemsAndList' })
  conversationInitiated: Conversation[];

  @Field(() => [Conversation], { nullable: 'itemsAndList' })
  conversationReceived: Conversation[];

  @Field(() => MemberRole)
  role: MemberRole;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
