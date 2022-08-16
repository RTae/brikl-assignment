import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOneTaskListArgs {
  @Field(() => TaskListWhereUniqueInput, { nullable: false })
  @Type(() => TaskListWhereUniqueInput)
  where!: TaskListWhereUniqueInput
}
