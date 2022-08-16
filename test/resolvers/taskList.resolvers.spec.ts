import { Test, TestingModule } from '@nestjs/testing'
import * as services from 'src/services'
import * as resolvers from 'src/resolvers'
import { database } from 'src/providers'
import * as constants from 'test/constants'

describe('TaskList Resolver', () => {
  let resolver: resolvers.TaskListResolver
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        services.TaskListService,
        resolvers.TaskListResolver,
        {
          provide: database.prisma.PrismaService,
          useValue: constants.inputs.taskList.db,
        },
      ],
    }).compile()
    resolver = module.get<resolvers.TaskListResolver>(
      resolvers.TaskListResolver,
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('create', () => {
    it('should successfully create a taskList', async () => {
      expect(
        await resolver.createTaskList(
          constants.inputs.taskList.taskListCreateInput,
        ),
      ).toEqual(constants.inputs.taskList.taskListCreateInput)
    })
  })

  describe('delete', () => {
    it('should successfully delete a taskList', async () => {
      expect(
        await resolver.deleteTaskList(
          constants.inputs.taskList.taskListDeleteInput,
        ),
      ).toEqual(constants.inputs.taskList.taskListCreateInput)
    })
  })
})
