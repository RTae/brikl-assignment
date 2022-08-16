import { Field, ArgsType } from '@nestjs/graphql'
import { TaskCreateInput } from 'src/models/task/task-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneTaskArgs {
  @Field(() => TaskCreateInput, { nullable: false })
  @Type(() => TaskCreateInput)
  data!: TaskCreateInput
}
