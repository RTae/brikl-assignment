import { v4 as uuidv4 } from 'uuid'
import faker from 'test/utils/faker'
import * as outputs from 'test/constants/outputs'
import { TaskModel } from 'src/models'

const ownerId = uuidv4()

const taskCreateInput: TaskModel.CreateOneTaskArgs = {
  data: {
    name: faker.text(),
    taskList: {
      connect: faker.uuid(),
    },
  },
}

const taskGetWhereInput: TaskModel.FindManyTaskArgs = {
  where: { tid: { equals: ownerId } },
}

const taskUpdateOneInput: TaskModel.UpdateOneTaskArgs = {
  data: {
    name: { set: faker.text() },
    state: { set: 'DONE' },
    status: { set: true },
  },
  where: { tid: ownerId },
}

const taskDeleteInput: TaskModel.DeleteOneTaskArgs = {
  where: { tid: ownerId },
}

const db = {
  task: {
    create: jest.fn().mockReturnValue(taskCreateInput),
    save: jest.fn(),
    findMany: jest.fn().mockResolvedValue(outputs.task.taskOutputArray),
    update: jest.fn().mockResolvedValue(taskUpdateOneInput.data),
    delete: jest.fn().mockResolvedValue(taskCreateInput),
  },
}

const service = {
  get: jest.fn().mockReturnValue(taskCreateInput),
  create: jest.fn(),
  update: jest.fn().mockResolvedValue(outputs.task.taskOutputArray),
  delete: jest.fn().mockResolvedValue(taskCreateInput),
}

export default {
  db,
  service,
  taskCreateInput,
  taskGetWhereInput,
  taskUpdateOneInput,
  taskDeleteInput,
}
