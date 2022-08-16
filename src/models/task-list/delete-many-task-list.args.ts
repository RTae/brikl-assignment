import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListWhereInput } from './task-list-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyTaskListArgs {
  @Field(() => TaskListWhereInput, { nullable: true })
  @Type(() => TaskListWhereInput)
  where?: TaskListWhereInput
}
