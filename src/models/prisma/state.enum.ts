import { registerEnumType } from '@nestjs/graphql'

export enum State {
  WAITING = 'WAITING',
  PROGRESS = 'PROGRESS',
  VALIDATE = 'VALIDATE',
  DONE = 'DONE',
}

registerEnumType(State, { name: 'State', description: undefined })
