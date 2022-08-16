import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListUpdateInput } from './task-list-update.input'
import { Type } from 'class-transformer'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'

@ArgsType()
export class UpdateOneTaskListArgs {
  @Field(() => TaskListUpdateInput, { nullable: false })
  @Type(() => TaskListUpdateInput)
  data!: TaskListUpdateInput

  @Field(() => TaskListWhereUniqueInput, { nullable: false })
  @Type(() => TaskListWhereUniqueInput)
  where!: TaskListWhereUniqueInput
}
