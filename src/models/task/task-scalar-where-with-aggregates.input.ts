import { Field, InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from 'src/models/prisma/string-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from 'src/models/prisma/bool-with-aggregates-filter.input'
import { EnumStateWithAggregatesFilter } from 'src/models/prisma/enum-state-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from 'src/models/prisma/date-time-with-aggregates-filter.input'

@InputType()
export class TaskScalarWhereWithAggregatesInput {
  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TaskScalarWhereWithAggregatesInput>

  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TaskScalarWhereWithAggregatesInput>

  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TaskScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tid?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tlid?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  status?: BoolWithAggregatesFilter

  @Field(() => EnumStateWithAggregatesFilter, { nullable: true })
  state?: EnumStateWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
