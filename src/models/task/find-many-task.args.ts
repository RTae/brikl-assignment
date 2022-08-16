import { Field, Int, ArgsType } from '@nestjs/graphql'
import { TaskWhereInput } from 'src/models/task/task-where.input'
import { Type } from 'class-transformer'
import { TaskOrderByWithRelationInput } from 'src/models/task/task-order-by-with-relation.input'
import { TaskWhereUniqueInput } from 'src/models/task/task-where-unique.input'
import { TaskScalarFieldEnum } from 'src/models/task/task-scalar-field.enum'

@ArgsType()
export class FindManyTaskArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  @Type(() => TaskWhereInput)
  where?: TaskWhereInput

  @Field(() => [TaskOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TaskOrderByWithRelationInput>

  @Field(() => TaskWhereUniqueInput, { nullable: true })
  cursor?: TaskWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [TaskScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TaskScalarFieldEnum>
}
