import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TaskUncheckedCreateNestedManyWithoutTaskListInput } from 'src/models/task/task-unchecked-create-nested-many-without-task-list.input'

@InputType()
export class TaskListUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  tlid?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  desciprtion!: string

  @Field(() => TaskUncheckedCreateNestedManyWithoutTaskListInput, {
    nullable: true,
  })
  tasks?: TaskUncheckedCreateNestedManyWithoutTaskListInput

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
