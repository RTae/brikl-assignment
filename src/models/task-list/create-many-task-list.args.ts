import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListCreateManyInput } from './task-list-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyTaskListArgs {
  @Field(() => [TaskListCreateManyInput], { nullable: false })
  @Type(() => TaskListCreateManyInput)
  data!: Array<TaskListCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
