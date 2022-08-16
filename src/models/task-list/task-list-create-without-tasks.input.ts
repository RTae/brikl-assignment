import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TaskListCreateWithoutTasksInput {
  @Field(() => String, { nullable: true })
  tlid?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  desciprtion!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
