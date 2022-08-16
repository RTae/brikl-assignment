import { Field, InputType } from '@nestjs/graphql'
import { TaskScalarWhereInput } from 'src/models/task/task-scalar-where.input'
import { Type } from 'class-transformer'
import { TaskUpdateManyMutationInput } from 'src/models/task/task-update-many-mutation.input'

@InputType()
export class TaskUpdateManyWithWhereWithoutTaskListInput {
  @Field(() => TaskScalarWhereInput, { nullable: false })
  @Type(() => TaskScalarWhereInput)
  where!: TaskScalarWhereInput

  @Field(() => TaskUpdateManyMutationInput, { nullable: false })
  @Type(() => TaskUpdateManyMutationInput)
  data!: TaskUpdateManyMutationInput
}
