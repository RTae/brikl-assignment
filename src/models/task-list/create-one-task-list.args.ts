import { Field, ArgsType } from '@nestjs/graphql'
import { TaskListCreateInput } from 'src/models/task-list/task-list-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneTaskListArgs {
  @Field(() => TaskListCreateInput, { nullable: false })
  @Type(() => TaskListCreateInput)
  data!: TaskListCreateInput
}
