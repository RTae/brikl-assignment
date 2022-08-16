import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TaskListCountAggregate } from './task-list-count-aggregate.output'
import { TaskListMinAggregate } from './task-list-min-aggregate.output'
import { TaskListMaxAggregate } from './task-list-max-aggregate.output'

@ObjectType()
export class TaskListGroupBy {
  @Field(() => String, { nullable: false })
  tlid!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  desciprtion!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => TaskListCountAggregate, { nullable: true })
  _count?: TaskListCountAggregate

  @Field(() => TaskListMinAggregate, { nullable: true })
  _min?: TaskListMinAggregate

  @Field(() => TaskListMaxAggregate, { nullable: true })
  _max?: TaskListMaxAggregate
}
