import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListCreateInput } from './task-list-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneTaskListArgs {
  @Field(() => TaskListCreateInput, { nullable: false })
  @Type(() => TaskListCreateInput)
  data!: TaskListCreateInput
}
