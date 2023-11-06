import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './entities/profile.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';

@Resolver('Profile')
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => Profile, { name: 'createProfile' })
  async createProfile(@Args('input') input: CreateProfileInput) {
    return await this.profileService.createProfile(input);
  }

  @Query(() => [Profile], { name: 'profiles' })
  findAllProfiles() {
    return this.profileService.findAllProfiles();
  }

  @Query(() => Profile, { name: 'profile' })
  findProfileById(@Args('profileId') profileId: string) {
    return this.profileService.getProfileById(profileId);
  }

  @Query(() => Profile, { name: 'profileByEmail' })
  findProfileByEmail(@Args('email') email: string) {
    return this.profileService.getProfileByEmail(email);
  }

  // @Mutation('updateProfile')
  // update(@Args('updateProfileInput') updateProfileInput: UpdateProfileInput) {
  //   return this.profileService.updateProfile(
  //     updateProfileInput.id,
  //     updateProfileInput,
  //   );
  // }

  // @Mutation('removeProfile')
  // remove(@Args('profileId') profileId: string) {
  //   return this.profileService.remove(profileId);
  // }
}
