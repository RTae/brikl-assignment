import { TaskModel } from 'src/models'
import faker from 'test/utils/faker'

const taskOutputArray: TaskModel.Task[] = [
  {
    tid: faker.uuid(),
    tlid: faker.uuid(),
    name: faker.text(),
    state: 'DONE',
    status: true,
    createdAt: faker.datetime(),
    updatedAt: faker.datetime(),
  },
  {
    tid: faker.uuid(),
    tlid: faker.uuid(),
    name: faker.text(),
    state: 'DONE',
    status: true,
    createdAt: faker.datetime(),
    updatedAt: faker.datetime(),
  },
  {
    tid: faker.uuid(),
    tlid: faker.uuid(),
    name: faker.text(),
    state: 'DONE',
    status: true,
    createdAt: faker.datetime(),
    updatedAt: faker.datetime(),
  },
]

export default { taskOutputArray }
