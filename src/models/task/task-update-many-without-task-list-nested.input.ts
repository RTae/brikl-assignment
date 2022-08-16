import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskCreateWithoutTaskListInput } from './task-create-without-task-list.input'
import { Type } from 'class-transformer'
import { TaskCreateOrConnectWithoutTaskListInput } from './task-create-or-connect-without-task-list.input'
import { TaskUpsertWithWhereUniqueWithoutTaskListInput } from './task-upsert-with-where-unique-without-task-list.input'
import { TaskCreateManyTaskListInputEnvelope } from './task-create-many-task-list-input-envelope.input'
import { TaskWhereUniqueInput } from './task-where-unique.input'
import { TaskUpdateWithWhereUniqueWithoutTaskListInput } from './task-update-with-where-unique-without-task-list.input'
import { TaskUpdateManyWithWhereWithoutTaskListInput } from './task-update-many-with-where-without-task-list.input'
import { TaskScalarWhereInput } from './task-scalar-where.input'

@InputType()
export class TaskUpdateManyWithoutTaskListNestedInput {
  @Field(() => [TaskCreateWithoutTaskListInput], { nullable: true })
  @Type(() => TaskCreateWithoutTaskListInput)
  create?: Array<TaskCreateWithoutTaskListInput>

  @Field(() => [TaskCreateOrConnectWithoutTaskListInput], { nullable: true })
  @Type(() => TaskCreateOrConnectWithoutTaskListInput)
  connectOrCreate?: Array<TaskCreateOrConnectWithoutTaskListInput>

  @Field(() => [TaskUpsertWithWhereUniqueWithoutTaskListInput], {
    nullable: true,
  })
  @Type(() => TaskUpsertWithWhereUniqueWithoutTaskListInput)
  upsert?: Array<TaskUpsertWithWhereUniqueWithoutTaskListInput>

  @Field(() => TaskCreateManyTaskListInputEnvelope, { nullable: true })
  @Type(() => TaskCreateManyTaskListInputEnvelope)
  createMany?: TaskCreateManyTaskListInputEnvelope

  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  @Type(() => TaskWhereUniqueInput)
  set?: Array<TaskWhereUniqueInput>

  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  @Type(() => TaskWhereUniqueInput)
  disconnect?: Array<TaskWhereUniqueInput>

  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  @Type(() => TaskWhereUniqueInput)
  delete?: Array<TaskWhereUniqueInput>

  @Field(() => [TaskWhereUniqueInput], { nullable: true })
  @Type(() => TaskWhereUniqueInput)
  connect?: Array<TaskWhereUniqueInput>

  @Field(() => [TaskUpdateWithWhereUniqueWithoutTaskListInput], {
    nullable: true,
  })
  @Type(() => TaskUpdateWithWhereUniqueWithoutTaskListInput)
  update?: Array<TaskUpdateWithWhereUniqueWithoutTaskListInput>

  @Field(() => [TaskUpdateManyWithWhereWithoutTaskListInput], {
    nullable: true,
  })
  @Type(() => TaskUpdateManyWithWhereWithoutTaskListInput)
  updateMany?: Array<TaskUpdateManyWithWhereWithoutTaskListInput>

  @Field(() => [TaskScalarWhereInput], { nullable: true })
  @Type(() => TaskScalarWhereInput)
  deleteMany?: Array<TaskScalarWhereInput>
}
