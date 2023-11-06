import { Field, ObjectType } from '@nestjs/graphql';
import { Server } from './server.entity';
import { Channel } from './channel.entity';
import { Member } from './member.entity';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  imageUrl: string;

  @Field()
  email: string;

  @Field(() => [Server], { nullable: 'itemsAndList' })
  servers: Server[];

  @Field(() => [Member], { nullable: 'itemsAndList' })
  members: Member[];

  @Field(() => [Channel], { nullable: 'itemsAndList' })
  channels: Channel[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
