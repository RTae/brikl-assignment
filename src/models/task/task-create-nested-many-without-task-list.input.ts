import { Field, InputType } from '@nestjs/graphql'
import { TaskCreateWithoutTaskListInput } from 'src/models/task/task-create-without-task-list.input'
import { Type } from 'class-transformer'
import { TaskCreateOrConnectWithoutTaskListInput } from './task-create-or-connect-without-task-list.input'
import { TaskCreateManyTaskListInputEnvelope } from './task-create-many-task-list-input-envelope.input'
import { TaskWhereUniqueInput } from './task-where-unique.input'

@InputType()
export class TaskCreateNestedManyWithoutTaskListInput {
  @Field(() => [TaskCreateWithoutTaskListInput], { nullable: true })
  @Type(() => TaskCreateWithoutTaskListInput)
  create?: Array<TaskCreateWithoutTaskListInput>

  @Field(() => [TaskCreateOrConnectWithoutTaskListInput], { nullable: true })
  @Type(() => TaskCreateOrConnectWithoutTaskListInput)
  connectOrCreate?: Array<TaskCreateOrConnectWithoutTaskListInput>

  @Field(() => TaskCreateManyTaskListInputEnvelope, { nullable: true })
  @Type(() => TaskCreateManyTaskListInputEnvelope)
  createMany?: TaskCreateManyTaskListInputEnvelope

  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  @Type(() => TaskWhereUniqueInput)
  connect?: Array<TaskWhereUniqueInput>
}
