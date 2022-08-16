import { Test, TestingModule } from '@nestjs/testing'
import * as services from 'src/services'
import * as resolvers from 'src/resolvers'
import { database } from 'src/providers'
import * as constants from 'test/constants'

describe('Task Resolver', () => {
  let resolver: resolvers.TaskResolver
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        services.TaskService,
        resolvers.TaskResolver,
        {
          provide: database.prisma.PrismaService,
          useValue: constants.inputs.task.db,
        },
      ],
    }).compile()
    resolver = module.get<resolvers.TaskResolver>(resolvers.TaskResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('create', () => {
    it('should successfully create a task', async () => {
      expect(
        await resolver.createTask(constants.inputs.task.taskCreateInput),
      ).toEqual(constants.inputs.task.taskCreateInput)
    })
  })

  describe('delete', () => {
    it('should successfully delete a task', async () => {
      expect(
        await resolver.deleteTask(constants.inputs.task.taskDeleteInput),
      ).toEqual(constants.inputs.task.taskCreateInput)
    })
  })
})
