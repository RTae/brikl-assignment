import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListWhereInput } from './task-list-where.input'
import { Type } from 'class-transformer'
import { TaskListOrderByWithRelationInput } from './task-list-order-by-with-relation.input'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TaskListCountAggregateInput } from './task-list-count-aggregate.input'
import { TaskListMinAggregateInput } from './task-list-min-aggregate.input'
import { TaskListMaxAggregateInput } from './task-list-max-aggregate.input'

@ArgsType()
export class TaskListAggregateArgs {
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

  @Field(() => TaskListCountAggregateInput, { nullable: true })
  _count?: TaskListCountAggregateInput

  @Field(() => TaskListMinAggregateInput, { nullable: true })
  _min?: TaskListMinAggregateInput

  @Field(() => TaskListMaxAggregateInput, { nullable: true })
  _max?: TaskListMaxAggregateInput
}
