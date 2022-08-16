import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class TaskListWhereInput {
  @Field(() => [TaskListWhereInput], { nullable: true })
  AND?: Array<TaskListWhereInput>

  @Field(() => [TaskListWhereInput], { nullable: true })
  OR?: Array<TaskListWhereInput>

  @Field(() => [TaskListWhereInput], { nullable: true })
  NOT?: Array<TaskListWhereInput>

  @Field(() => StringFilter, { nullable: true })
  tlid?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  desciprtion?: StringFilter

  @Field(() => TaskListRelationFilter, { nullable: true })
  tasks?: TaskListRelationFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
