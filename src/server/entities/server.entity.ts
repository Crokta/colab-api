import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Channel } from './channel.entity';
import { Profile } from '../../profile/entities/profile.entity';
import { Member } from '../../member/entities/member.entity';

@ObjectType()
export class Server {
  @Field(() => ID)
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

  @Field(() => [Channel], { nullable: 'itemsAndList' })
  channels: Channel[];

  @Field(() => [Member], { nullable: 'itemsAndList' })
  members: Member[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
