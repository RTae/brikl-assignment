import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'
import { Type } from 'class-transformer'
import { TaskListCreateInput } from './task-list-create.input'
import { TaskListUpdateInput } from './task-list-update.input'

@ArgsType()
export class UpsertOneTaskListArgs {
  @Field(() => TaskListWhereUniqueInput, { nullable: false })
  @Type(() => TaskListWhereUniqueInput)
  where!: TaskListWhereUniqueInput

  @Field(() => TaskListCreateInput, { nullable: false })
  @Type(() => TaskListCreateInput)
  create!: TaskListCreateInput

  @Field(() => TaskListUpdateInput, { nullable: false })
  @Type(() => TaskListUpdateInput)
  update!: TaskListUpdateInput
}
