import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { EnumStateFilter } from '../prisma/enum-state-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class TaskScalarWhereInput {
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  AND?: Array<TaskScalarWhereInput>

  @Field(() => [TaskScalarWhereInput], { nullable: true })
  OR?: Array<TaskScalarWhereInput>

  @Field(() => [TaskScalarWhereInput], { nullable: true })
  NOT?: Array<TaskScalarWhereInput>

  @Field(() => IntFilter, { nullable: true })
  tid?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  tlid?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => BoolFilter, { nullable: true })
  status?: BoolFilter

  @Field(() => EnumStateFilter, { nullable: true })
  state?: EnumStateFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
