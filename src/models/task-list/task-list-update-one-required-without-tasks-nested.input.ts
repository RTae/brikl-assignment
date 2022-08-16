import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskListCreateWithoutTasksInput } from './task-list-create-without-tasks.input'
import { Type } from 'class-transformer'
import { TaskListCreateOrConnectWithoutTasksInput } from './task-list-create-or-connect-without-tasks.input'
import { TaskListUpsertWithoutTasksInput } from './task-list-upsert-without-tasks.input'
import { TaskListWhereUniqueInput } from './task-list-where-unique.input'
import { TaskListUpdateWithoutTasksInput } from './task-list-update-without-tasks.input'

@InputType()
export class TaskListUpdateOneRequiredWithoutTasksNestedInput {
  @Field(() => TaskListCreateWithoutTasksInput, { nullable: true })
  @Type(() => TaskListCreateWithoutTasksInput)
  create?: TaskListCreateWithoutTasksInput

  @Field(() => TaskListCreateOrConnectWithoutTasksInput, { nullable: true })
  @Type(() => TaskListCreateOrConnectWithoutTasksInput)
  connectOrCreate?: TaskListCreateOrConnectWithoutTasksInput

  @Field(() => TaskListUpsertWithoutTasksInput, { nullable: true })
  @Type(() => TaskListUpsertWithoutTasksInput)
  upsert?: TaskListUpsertWithoutTasksInput

  @Field(() => TaskListWhereUniqueInput, { nullable: true })
  @Type(() => TaskListWhereUniqueInput)
  connect?: TaskListWhereUniqueInput

  @Field(() => TaskListUpdateWithoutTasksInput, { nullable: true })
  @Type(() => TaskListUpdateWithoutTasksInput)
  update?: TaskListUpdateWithoutTasksInput
}
