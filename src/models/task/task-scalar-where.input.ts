import { Field, InputType } from '@nestjs/graphql'
import { StringFilter } from 'src/models/prisma/string-filter.input'
import { BoolFilter } from 'src/models/prisma/bool-filter.input'
import { EnumStateFilter } from 'src/models/prisma/enum-state-filter.input'
import { DateTimeFilter } from 'src/models/prisma/date-time-filter.input'

@InputType()
export class TaskScalarWhereInput {
  @Field(() => [TaskScalarWhereInput], { nullable: true })
  AND?: Array<TaskScalarWhereInput>

  @Field(() => [TaskScalarWhereInput], { nullable: true })
  OR?: Array<TaskScalarWhereInput>

  @Field(() => [TaskScalarWhereInput], { nullable: true })
  NOT?: Array<TaskScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  tid?: StringFilter

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
