import { Field, ArgsType } from '@nestjs/graphql'
import { TaskListWhereUniqueInput } from 'src/models/task-list/task-list-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteOneTaskListArgs {
  @Field(() => TaskListWhereUniqueInput, { nullable: false })
  @Type(() => TaskListWhereUniqueInput)
  where!: TaskListWhereUniqueInput
}
