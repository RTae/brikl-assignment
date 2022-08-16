import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { EnumStateFieldUpdateOperationsInput } from '../prisma/enum-state-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class TaskUpdateWithoutTaskListInput {
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
