import { v4 as uuidv4 } from 'uuid'
import faker from 'test/utils/faker'
import * as outputs from 'test/constants/outputs'
import { TaskListModel } from 'src/models'

const ownerId = uuidv4()

const taskListCreateInput: TaskListModel.CreateOneTaskListArgs = {
  data: {
    name: faker.text(),
    desciprtion: faker.text(),
  },
}

const taskListGetWhereInput: TaskListModel.FindManyTaskListArgs = {
  where: { tlid: { equals: ownerId } },
}

const taskListUpdateOneInput: TaskListModel.UpdateOneTaskListArgs = {
  data: {
    name: { set: faker.text() },
    desciprtion: { set: faker.text() },
  },
  where: { tlid: ownerId },
}

const taskListDeleteInput: TaskListModel.DeleteOneTaskListArgs = {
  where: { tlid: ownerId },
}

const db = {
  taskList: {
    create: jest.fn().mockReturnValue(taskListCreateInput),
    save: jest.fn(),
    findMany: jest.fn().mockResolvedValue(outputs.taskList.taskListOutputArray),
    update: jest.fn().mockResolvedValue(taskListUpdateOneInput.data),
    delete: jest.fn().mockResolvedValue(taskListCreateInput),
  },
}

export default {
  db,
  taskListCreateInput,
  taskListGetWhereInput,
  taskListUpdateOneInput,
  taskListDeleteInput,
}
