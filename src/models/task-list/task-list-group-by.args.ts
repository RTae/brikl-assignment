import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TaskListWhereInput } from './task-list-where.input'
import { Type } from 'class-transformer'
import { TaskListOrderByWithAggregationInput } from './task-list-order-by-with-aggregation.input'
import { TaskListScalarFieldEnum } from './task-list-scalar-field.enum'
import { TaskListScalarWhereWithAggregatesInput } from './task-list-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { TaskListCountAggregateInput } from './task-list-count-aggregate.input'
import { TaskListMinAggregateInput } from './task-list-min-aggregate.input'
import { TaskListMaxAggregateInput } from './task-list-max-aggregate.input'

@ArgsType()
export class TaskListGroupByArgs {
  @Field(() => TaskListWhereInput, { nullable: true })
  @Type(() => TaskListWhereInput)
  where?: TaskListWhereInput

  @Field(() => [TaskListOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TaskListOrderByWithAggregationInput>

  @Field(() => [TaskListScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TaskListScalarFieldEnum>

  @Field(() => TaskListScalarWhereWithAggregatesInput, { nullable: true })
  having?: TaskListScalarWhereWithAggregatesInput

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
