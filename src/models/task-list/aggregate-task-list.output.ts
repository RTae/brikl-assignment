import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TaskListCountAggregate } from './task-list-count-aggregate.output'
import { TaskListMinAggregate } from './task-list-min-aggregate.output'
import { TaskListMaxAggregate } from './task-list-max-aggregate.output'

@ObjectType()
export class AggregateTaskList {
  @Field(() => TaskListCountAggregate, { nullable: true })
  _count?: TaskListCountAggregate

  @Field(() => TaskListMinAggregate, { nullable: true })
  _min?: TaskListMinAggregate

  @Field(() => TaskListMaxAggregate, { nullable: true })
  _max?: TaskListMaxAggregate
}
