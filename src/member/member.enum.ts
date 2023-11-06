import { registerEnumType } from '@nestjs/graphql';

export enum MemberRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  GUEST = 'GUEST',
}

registerEnumType(MemberRole, {
  name: 'MemberRole',
  description: 'Defines the member role',
});
