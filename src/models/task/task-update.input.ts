import { Field, InputType } from '@nestjs/graphql'
import { TaskListUpdateOneRequiredWithoutTasksNestedInput } from 'src/models/task-list/task-list-update-one-required-without-tasks-nested.input'
import { StringFieldUpdateOperationsInput } from 'src/models/prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from 'src/models/prisma/bool-field-update-operations.input'
import { EnumStateFieldUpdateOperationsInput } from 'src/models/prisma/enum-state-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from 'src/models/prisma/date-time-field-update-operations.input'

@InputType()
export class TaskUpdateInput {
  @Field(() => TaskListUpdateOneRequiredWithoutTasksNestedInput, {
    nullable: true,
  })
  taskList?: TaskListUpdateOneRequiredWithoutTasksNestedInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  status?: BoolFieldUpdateOperationsInput

  @Field(() => EnumStateFieldUpdateOperationsInput, { nullable: true })
  state?: EnumStateFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput
}
