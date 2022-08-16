import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListUpdateManyMutationInput } from './task-list-update-many-mutation.input'
import { Type } from 'class-transformer'
import { TaskListWhereInput } from './task-list-where.input'

@ArgsType()
export class UpdateManyTaskListArgs {
  @Field(() => TaskListUpdateManyMutationInput, { nullable: false })
  @Type(() => TaskListUpdateManyMutationInput)
  data!: TaskListUpdateManyMutationInput

  @Field(() => TaskListWhereInput, { nullable: true })
  @Type(() => TaskListWhereInput)
  where?: TaskListWhereInput
}
