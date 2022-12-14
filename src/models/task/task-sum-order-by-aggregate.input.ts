import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class TaskSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  tid?: keyof typeof SortOrder
}
