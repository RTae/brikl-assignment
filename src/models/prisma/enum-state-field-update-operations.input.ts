import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { State } from './state.enum'

@InputType()
export class EnumStateFieldUpdateOperationsInput {
  @Field(() => State, { nullable: true })
  set?: keyof typeof State
}
