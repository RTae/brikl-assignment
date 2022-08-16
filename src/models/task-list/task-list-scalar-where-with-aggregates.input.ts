import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class TaskListScalarWhereWithAggregatesInput {
  @Field(() => [TaskListScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TaskListScalarWhereWithAggregatesInput>

  @Field(() => [TaskListScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TaskListScalarWhereWithAggregatesInput>

  @Field(() => [TaskListScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TaskListScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tlid?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  desciprtion?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
