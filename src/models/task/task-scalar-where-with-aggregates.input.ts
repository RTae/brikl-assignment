import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { EnumStateWithAggregatesFilter } from '../prisma/enum-state-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class TaskScalarWhereWithAggregatesInput {
  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TaskScalarWhereWithAggregatesInput>

  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TaskScalarWhereWithAggregatesInput>

  @Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TaskScalarWhereWithAggregatesInput>

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  tid?: IntWithAggregatesFilter

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
