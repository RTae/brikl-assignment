import { Field, ArgsType } from '@nestjs/graphql'
import { TaskUpdateInput } from 'src/models/task/task-update.input'
import { Type } from 'class-transformer'
import { TaskWhereUniqueInput } from 'src/models/task/task-where-unique.input'

@ArgsType()
export class UpdateOneTaskArgs {
  @Field(() => TaskUpdateInput, { nullable: false })
  @Type(() => TaskUpdateInput)
  data!: TaskUpdateInput

  @Field(() => TaskWhereUniqueInput, { nullable: false })
  @Type(() => TaskWhereUniqueInput)
  where!: TaskWhereUniqueInput
}
