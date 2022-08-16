import { Field, ID, ObjectType } from '@nestjs/graphql'
import { TaskList } from 'src/models/task-list/task-list.model'
import { State } from 'src/models/prisma/state.enum'

@ObjectType()
export class Task {
  @Field(() => ID, { nullable: false })
  tid!: number

  @Field(() => TaskList, { nullable: false })
  taskList?: TaskList

  @Field(() => String, { nullable: false })
  tlid!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  status!: boolean

  @Field(() => State, { nullable: false, defaultValue: 'WATING' })
  state!: keyof typeof State

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}