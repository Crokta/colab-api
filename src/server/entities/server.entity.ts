import { Field, ObjectType } from '@nestjs/graphql';
import { Channel } from './channel.entity';
import { Profile } from './profile.entity';

@ObjectType()
export class Server {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  imageUrl: string;

  @Field()
  inviteCode: string;

  @Field()
  profileId: string;

  @Field(() => Profile, { nullable: true })
  profile: Profile;

  @Field(() => [Channel], { nullable: true })
  channels: Channel[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
