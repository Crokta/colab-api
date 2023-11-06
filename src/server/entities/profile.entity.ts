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

  @Field(() => [Server], { nullable: true })
  servers: Server[];

  @Field(() => [Member], { nullable: true })
  members: Member[];

  @Field(() => [Channel], { nullable: true })
  channels: Channel[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
