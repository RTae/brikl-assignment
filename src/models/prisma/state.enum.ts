import { registerEnumType } from '@nestjs/graphql'

export enum State {
  WATING = 'WATING',
  PROGRESS = 'PROGRESS',
  VALIDATE = 'VALIDATE',
  DONE = 'DONE',
}

registerEnumType(State, { name: 'State', description: undefined })
