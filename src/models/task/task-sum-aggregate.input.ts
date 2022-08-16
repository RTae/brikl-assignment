import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TaskSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  tid?: true
}
