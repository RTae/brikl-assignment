import { Field, InputType } from '@nestjs/graphql'
import { State } from 'src/models/prisma/state.enum'

@InputType()
export class TaskUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  tid?: string

  @Field(() => String, { nullable: false })
  tlid!: string

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
