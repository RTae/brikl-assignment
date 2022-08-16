import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskCreateNestedManyWithoutTaskListInput } from '../task/task-create-nested-many-without-task-list.input'

@InputType()
export class TaskListCreateInput {
  @Field(() => String, { nullable: true })
  tlid?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  desciprtion!: string

  @Field(() => TaskCreateNestedManyWithoutTaskListInput, { nullable: true })
  tasks?: TaskCreateNestedManyWithoutTaskListInput

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
