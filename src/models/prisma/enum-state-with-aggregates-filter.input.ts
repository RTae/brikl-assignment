import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { State } from './state.enum'
import { NestedEnumStateWithAggregatesFilter } from './nested-enum-state-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumStateFilter } from './nested-enum-state-filter.input'

@InputType()
export class EnumStateWithAggregatesFilter {
  @Field(() => State, { nullable: true })
  equals?: keyof typeof State;

  @Field(() => [State], { nullable: true })
  in?: Array<keyof typeof State>

  @Field(() => [State], { nullable: true })
  notIn?: Array<keyof typeof State>

  @Field(() => NestedEnumStateWithAggregatesFilter, { nullable: true })
  not?: NestedEnumStateWithAggregatesFilter

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter

  @Field(() => NestedEnumStateFilter, { nullable: true })
  _min?: NestedEnumStateFilter

  @Field(() => NestedEnumStateFilter, { nullable: true })
  _max?: NestedEnumStateFilter
}
