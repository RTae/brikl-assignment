import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { State } from '../prisma/state.enum'

@InputType()
export class TaskCreateWithoutTaskListInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field(() => State, { nullable: true })
  state?: keyof typeof State

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
