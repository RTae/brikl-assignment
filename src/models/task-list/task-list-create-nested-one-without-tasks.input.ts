import { Field, InputType } from '@nestjs/graphql'
import { TaskListCreateWithoutTasksInput } from 'src/models/task-list/task-list-create-without-tasks.input'
import { Type } from 'class-transformer'
import { TaskListCreateOrConnectWithoutTasksInput } from 'src/models/task-list/task-list-create-or-connect-without-tasks.input'
import { TaskListWhereUniqueInput } from 'src/models/task-list/task-list-where-unique.input'

@InputType()
export class TaskListCreateNestedOneWithoutTasksInput {
  @Field(() => TaskListCreateWithoutTasksInput, { nullable: true })
  @Type(() => TaskListCreateWithoutTasksInput)
  create?: TaskListCreateWithoutTasksInput

  @Field(() => TaskListCreateOrConnectWithoutTasksInput, { nullable: true })
  @Type(() => TaskListCreateOrConnectWithoutTasksInput)
  connectOrCreate?: TaskListCreateOrConnectWithoutTasksInput

  @Field(() => TaskListWhereUniqueInput, { nullable: true })
  @Type(() => TaskListWhereUniqueInput)
  connect?: TaskListWhereUniqueInput
}
