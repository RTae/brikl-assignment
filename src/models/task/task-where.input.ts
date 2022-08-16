import { Field, InputType } from '@nestjs/graphql'
import { IntFilter } from 'src/models/prisma/int-filter.input'
import { TaskListRelationFilter } from 'src/models/task/task-list-relation-filter.input'
import { StringFilter } from 'src/models/prisma/string-filter.input'
import { BoolFilter } from 'src/models/prisma/bool-filter.input'
import { EnumStateFilter } from 'src/models/prisma/enum-state-filter.input'
import { DateTimeFilter } from 'src/models/prisma/date-time-filter.input'

@InputType()
export class TaskWhereInput {
  @Field(() => [TaskWhereInput], { nullable: true })
  AND?: Array<TaskWhereInput>

  @Field(() => [TaskWhereInput], { nullable: true })
  OR?: Array<TaskWhereInput>

  @Field(() => [TaskWhereInput], { nullable: true })
  NOT?: Array<TaskWhereInput>

  @Field(() => IntFilter, { nullable: true })
  tid?: IntFilter

  @Field(() => TaskListRelationFilter, { nullable: true })
  taskList?: TaskListRelationFilter

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
