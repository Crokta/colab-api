import { registerEnumType } from '@nestjs/graphql';

export enum ChannelType {
  TEXT = 'TEXT',
  VOICE = 'VOICE',
  VIDEO = 'VIDEO',
}

registerEnumType(ChannelType, {
  name: 'ChannelType',
  description: 'Defines the channel type',
});
