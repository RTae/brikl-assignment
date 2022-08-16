import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { State } from './state.enum'

@InputType()
export class NestedEnumStateFilter {
  @Field(() => State, { nullable: true })
  equals?: keyof typeof State;

  @Field(() => [State], { nullable: true })
  in?: Array<keyof typeof State>

  @Field(() => [State], { nullable: true })
  notIn?: Array<keyof typeof State>

  @Field(() => NestedEnumStateFilter, { nullable: true })
  not?: NestedEnumStateFilter
}
