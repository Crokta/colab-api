import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ChannelType } from '../server.enum';
import { Profile } from '../../profile/entities/profile.entity';
import { Server } from './server.entity';
import { Message } from './message.entity';

@ObjectType()
export class Channel {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ChannelType)
  type: ChannelType;

  @Field(() => Profile, { nullable: true })
  profile: Profile;

  @Field({ nullable: true })
  profileId: string;

  @Field()
  serverId: string;

  @Field(() => [Server], { nullable: 'itemsAndList' })
  server: Server;

  @Field(() => [Message], { nullable: 'itemsAndList' })
  messages: Message[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
