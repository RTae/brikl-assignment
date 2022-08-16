import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'
import { Type } from 'class-transformer'
import { TaskListCreateWithoutTasksInput } from './task-list-create-without-tasks.input'

@InputType()
export class TaskListCreateOrConnectWithoutTasksInput {
  @Field(() => TaskListWhereUniqueInput, { nullable: false })
  @Type(() => TaskListWhereUniqueInput)
  where!: TaskListWhereUniqueInput

  @Field(() => TaskListCreateWithoutTasksInput, { nullable: false })
  @Type(() => TaskListCreateWithoutTasksInput)
  create!: TaskListCreateWithoutTasksInput
}
