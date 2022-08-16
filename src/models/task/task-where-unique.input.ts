import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class TaskWhereUniqueInput {
  @Field(() => String, { nullable: true })
  tid?: string
}
