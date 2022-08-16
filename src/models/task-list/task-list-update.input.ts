import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { TaskUpdateManyWithoutTaskListNestedInput } from '../task/task-update-many-without-task-list-nested.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class TaskListUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tlid?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  desciprtion?: StringFieldUpdateOperationsInput

  @Field(() => TaskUpdateManyWithoutTaskListNestedInput, { nullable: true })
  tasks?: TaskUpdateManyWithoutTaskListNestedInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput
}
