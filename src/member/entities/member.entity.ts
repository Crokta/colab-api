import { Field, ObjectType } from '@nestjs/graphql';
import { Server } from '../../server/entities/server.entity';
import { Profile } from '../../profile/entities/profile.entity';
import { Message } from '../../server/entities/message.entity';
import { DirectMessage } from '../../server/entities/direct-message.entity';
import { Conversation } from '../../server/entities/conversation.entity';
import { MemberRole } from '../member.enum';

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
