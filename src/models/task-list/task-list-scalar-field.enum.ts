import { registerEnumType } from '@nestjs/graphql'

export enum TaskListScalarFieldEnum {
  tlid = 'tlid',
  name = 'name',
  desciprtion = 'desciprtion',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(TaskListScalarFieldEnum, {
  name: 'TaskListScalarFieldEnum',
  description: undefined,
})
