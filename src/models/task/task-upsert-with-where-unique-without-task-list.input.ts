import { Field, InputType } from '@nestjs/graphql'
import { TaskWhereUniqueInput } from './task-where-unique.input'
import { Type } from 'class-transformer'
import { TaskUpdateWithoutTaskListInput } from 'src/models/task/task-update-without-task-list.input'
import { TaskCreateWithoutTaskListInput } from 'src/models/task/task-create-without-task-list.input'

@InputType()
export class TaskUpsertWithWhereUniqueWithoutTaskListInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  @Type(() => TaskWhereUniqueInput)
  where!: TaskWhereUniqueInput

  @Field(() => TaskUpdateWithoutTaskListInput, { nullable: false })
  @Type(() => TaskUpdateWithoutTaskListInput)
  update!: TaskUpdateWithoutTaskListInput

  @Field(() => TaskCreateWithoutTaskListInput, { nullable: false })
  @Type(() => TaskCreateWithoutTaskListInput)
  create!: TaskCreateWithoutTaskListInput
}
