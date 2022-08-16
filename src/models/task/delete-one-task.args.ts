import { Field, ArgsType } from '@nestjs/graphql'
import { TaskWhereUniqueInput } from 'src/models/task/task-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOneTaskArgs {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  @Type(() => TaskWhereUniqueInput)
  where!: TaskWhereUniqueInput
}
