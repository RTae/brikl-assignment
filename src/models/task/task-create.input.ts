import { Field, InputType } from '@nestjs/graphql'
import { TaskListCreateNestedOneWithoutTasksInput } from 'src/models/task-list/task-list-create-nested-one-without-tasks.input'
import { State } from 'src/models/prisma/state.enum'

@InputType()
export class TaskCreateInput {
  @Field(() => TaskListCreateNestedOneWithoutTasksInput, { nullable: false })
  taskList!: TaskListCreateNestedOneWithoutTasksInput

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field(() => State, { nullable: true })
  state?: keyof typeof State

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
