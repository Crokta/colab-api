import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';

@Resolver('Member')
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  // @Mutation('createMember')
  // create(@Args('createMemberInput') createMemberInput: CreateMemberInput) {
  //   return this.memberService.create(createMemberInput);
  // }
  //
  // @Query('member')
  // findAll() {
  //   return this.memberService.findAll();
  // }
  //
  // @Query('member')
  // findOne(@Args('id') id: number) {
  //   return this.memberService.findOne(id);
  // }
  //
  // @Mutation('updateMember')
  // update(@Args('updateMemberInput') updateMemberInput: UpdateMemberInput) {
  //   return this.memberService.update(updateMemberInput.id, updateMemberInput);
  // }
  //
  // @Mutation('removeMember')
  // remove(@Args('id') id: number) {
  //   return this.memberService.remove(id);
  // }
}
