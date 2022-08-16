import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskListUpdateWithoutTasksInput } from './task-list-update-without-tasks.input'
import { Type } from 'class-transformer'
import { TaskListCreateWithoutTasksInput } from './task-list-create-without-tasks.input'

@InputType()
export class TaskListUpsertWithoutTasksInput {
  @Field(() => TaskListUpdateWithoutTasksInput, { nullable: false })
  @Type(() => TaskListUpdateWithoutTasksInput)
  update!: TaskListUpdateWithoutTasksInput

  @Field(() => TaskListCreateWithoutTasksInput, { nullable: false })
  @Type(() => TaskListCreateWithoutTasksInput)
  create!: TaskListCreateWithoutTasksInput
}
