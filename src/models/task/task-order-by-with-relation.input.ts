import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TaskListOrderByWithRelationInput } from '../task-list/task-list-order-by-with-relation.input'

@InputType()
export class TaskOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  tid?: keyof typeof SortOrder

  @Field(() => TaskListOrderByWithRelationInput, { nullable: true })
  taskList?: TaskListOrderByWithRelationInput

  @Field(() => SortOrder, { nullable: true })
  tlid?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder
}
