import { CreateServerInput } from './create-server.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateServerInput extends PartialType(CreateServerInput) {
  id: number;
}
