import { registerEnumType } from '@nestjs/graphql';

export enum ChannelType {
  TEXT = 'TEXT',
  VOICE = 'VOICE',
  VIDEO = 'VIDEO',
}

export enum MemberRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  GUEST = 'GUEST',
}

registerEnumType(ChannelType, {
  name: 'ChannelType',
  description: 'Defines the channel type',
});

registerEnumType(MemberRole, {
  name: 'MemberRole',
  description: 'Defines the member role',
});
