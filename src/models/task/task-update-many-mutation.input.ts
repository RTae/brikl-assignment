import { Field, InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from 'src/models/prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from 'src/models/prisma/bool-field-update-operations.input'
import { EnumStateFieldUpdateOperationsInput } from 'src/models/prisma/enum-state-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from 'src/models/prisma/date-time-field-update-operations.input'

@InputType()
export class TaskUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tid?: StringFieldUpdateOperationsInput

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
