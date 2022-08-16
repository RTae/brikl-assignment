import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TaskListCountOrderByAggregateInput } from './task-list-count-order-by-aggregate.input'
import { TaskListMaxOrderByAggregateInput } from './task-list-max-order-by-aggregate.input'
import { TaskListMinOrderByAggregateInput } from './task-list-min-order-by-aggregate.input'

@InputType()
export class TaskListOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  tlid?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  desciprtion?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => TaskListCountOrderByAggregateInput, { nullable: true })
  _count?: TaskListCountOrderByAggregateInput

  @Field(() => TaskListMaxOrderByAggregateInput, { nullable: true })
  _max?: TaskListMaxOrderByAggregateInput

  @Field(() => TaskListMinOrderByAggregateInput, { nullable: true })
  _min?: TaskListMinOrderByAggregateInput
}
