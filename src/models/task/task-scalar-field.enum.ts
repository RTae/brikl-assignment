import { registerEnumType } from '@nestjs/graphql'

export enum TaskScalarFieldEnum {
  tid = 'tid',
  tlid = 'tlid',
  name = 'name',
  status = 'status',
  state = 'state',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(TaskScalarFieldEnum, {
  name: 'TaskScalarFieldEnum',
  description: undefined,
})
