import { Field, ObjectType } from '@nestjs/graphql';
import { ChannelType } from '../enums';
import { Profile } from './profile.entity';
import { Server } from './server.entity';
import { Message } from './message.entity';

@ObjectType()
export class Channel {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ChannelType)
  type: ChannelType;

  @Field(() => [Profile], { nullable: true })
  profile: Profile;

  @Field({ nullable: true })
  profileId: string;

  @Field()
  serverId: string;

  @Field(() => [Server], { nullable: true })
  server: Server;

  @Field(() => [Message], { nullable: true })
  messages: Message[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
