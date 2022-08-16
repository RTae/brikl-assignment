import { Field, ObjectType, ID } from '@nestjs/graphql'
import { Task } from 'src/models/task/task.model'
import { TaskListCount } from './task-list-count.output'

@ObjectType()
export class TaskList {
  @Field(() => ID, { nullable: false })
  tlid!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  desciprtion!: string

  @Field(() => [Task], { nullable: true })
  tasks?: Array<Task>

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => TaskListCount, { nullable: false })
  _count?: TaskListCount
}
