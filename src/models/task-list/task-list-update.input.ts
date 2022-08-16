import { Field, InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from 'src/models/prisma/string-field-update-operations.input'
import { TaskUpdateManyWithoutTaskListNestedInput } from 'src/models/task/task-update-many-without-task-list-nested.input'
import { DateTimeFieldUpdateOperationsInput } from 'src/models/prisma/date-time-field-update-operations.input'

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
