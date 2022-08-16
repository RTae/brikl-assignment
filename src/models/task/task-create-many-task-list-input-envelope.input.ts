import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskCreateManyTaskListInput } from './task-create-many-task-list.input'
import { Type } from 'class-transformer'

@InputType()
export class TaskCreateManyTaskListInputEnvelope {
  @Field(() => [TaskCreateManyTaskListInput], { nullable: false })
  @Type(() => TaskCreateManyTaskListInput)
  data!: Array<TaskCreateManyTaskListInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
