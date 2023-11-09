import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServerService } from './server.service';
import { CreateServerInput } from './dto/create-server.input';
import { UpdateServerInput } from './dto/update-server.input';

@Resolver('Server')
export class ServerResolver {
  constructor(private readonly serverService: ServerService) {}

  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  // @Mutation('createServer')
  // create(@Args('createServerInput') createServerInput: CreateServerInput) {
  //   return this.serverService.create(createServerInput);
  // }
  //
  // @Query('server')
  // findAll() {
  //   return this.serverService.findAll();
  // }
  //
  // @Query('server')
  // findOne(@Args('id') id: number) {
  //   return this.serverService.findOne(id);
  // }
  //
  // @Mutation('updateServer')
  // update(@Args('updateServerInput') updateServerInput: UpdateServerInput) {
  //   return this.serverService.update(updateServerInput.id, updateServerInput);
  // }
  //
  // @Mutation('removeServer')
  // remove(@Args('id') id: number) {
  //   return this.serverService.remove(id);
  // }
}
