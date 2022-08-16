import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TaskListWhereUniqueInput {
  @Field(() => String, { nullable: true })
  tlid?: string

  @Field(() => String, { nullable: true })
  name?: string
}
