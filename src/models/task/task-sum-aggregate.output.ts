import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TaskSumAggregate {
  @Field(() => Int, { nullable: true })
  tid?: number
}
