import { TaskListModel } from 'src/models'
import faker from 'test/utils/faker'

const taskListOutputArray: TaskListModel.TaskList[] = [
  {
    tlid: faker.uuid(),
    name: faker.text(),
    desciprtion: faker.text(),
    createdAt: faker.datetime(),
    updatedAt: faker.datetime(),
  },
  {
    tlid: faker.uuid(),
    name: faker.text(),
    desciprtion: faker.text(),
    createdAt: faker.datetime(),
    updatedAt: faker.datetime(),
  },
  {
    tlid: faker.uuid(),
    name: faker.text(),
    desciprtion: faker.text(),
    createdAt: faker.datetime(),
    updatedAt: faker.datetime(),
  },
]

export default { taskListOutputArray }
