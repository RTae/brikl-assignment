import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskWhereUniqueInput } from './task-where-unique.input'
import { Type } from 'class-transformer'
import { TaskCreateWithoutTaskListInput } from './task-create-without-task-list.input'

@InputType()
export class TaskCreateOrConnectWithoutTaskListInput {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  @Type(() => TaskWhereUniqueInput)
  where!: TaskWhereUniqueInput

  @Field(() => TaskCreateWithoutTaskListInput, { nullable: false })
  @Type(() => TaskCreateWithoutTaskListInput)
  create!: TaskCreateWithoutTaskListInput
}
