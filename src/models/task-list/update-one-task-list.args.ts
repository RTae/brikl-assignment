import { Field, ArgsType } from '@nestjs/graphql'
import { TaskListUpdateInput } from 'src/models/task-list/task-list-update.input'
import { Type } from 'class-transformer'
import { TaskListWhereUniqueInput } from 'src/models/task-list/task-list-where-unique.input'

@ArgsType()
export class UpdateOneTaskListArgs {
  @Field(() => TaskListUpdateInput, { nullable: false })
  @Type(() => TaskListUpdateInput)
  data!: TaskListUpdateInput

  @Field(() => TaskListWhereUniqueInput, { nullable: false })
  @Type(() => TaskListWhereUniqueInput)
  where!: TaskListWhereUniqueInput
}
