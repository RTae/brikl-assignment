import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input'

@InputType()
export class TaskListOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  tlid?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  desciprtion?: keyof typeof SortOrder

  @Field(() => TaskOrderByRelationAggregateInput, { nullable: true })
  tasks?: TaskOrderByRelationAggregateInput

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder
}
