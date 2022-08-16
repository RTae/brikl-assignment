import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListWhereInput } from './task-list-where.input'
import { Type } from 'class-transformer'
import { TaskListOrderByWithRelationInput } from './task-list-order-by-with-relation.input'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TaskListScalarFieldEnum } from './task-list-scalar-field.enum'

@ArgsType()
export class FindFirstTaskListArgs {
  @Field(() => TaskListWhereInput, { nullable: true })
  @Type(() => TaskListWhereInput)
  where?: TaskListWhereInput

  @Field(() => [TaskListOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TaskListOrderByWithRelationInput>

  @Field(() => TaskListWhereUniqueInput, { nullable: true })
  cursor?: TaskListWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [TaskListScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TaskListScalarFieldEnum>
}
