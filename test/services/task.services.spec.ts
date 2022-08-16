import { Test, TestingModule } from '@nestjs/testing'
import * as services from 'src/services'
import { database } from 'src/providers'
import * as constants from 'test/constants'

describe('Task Service', () => {
  let service: services.TaskService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        services.TaskService,
        {
          provide: database.prisma.PrismaService,
          useValue: constants.inputs.task.db,
        },
      ],
    }).compile()
    service = module.get<services.TaskService>(services.TaskService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should successfully create a task', async () => {
      expect(
        await service.create(constants.inputs.task.taskCreateInput),
      ).toEqual(constants.inputs.task.taskCreateInput)
    })
  })
  describe('get', () => {
    it('should return an array of task', async () => {
      expect(
        await service.get(constants.inputs.task.taskGetWhereInput, null),
      ).toEqual(constants.outputs.task.taskOutputArray)
    })
  })

  describe('update', () => {
    it('should successfully update a task', async () => {
      expect(
        await service.update(constants.inputs.task.taskUpdateOneInput, null),
      ).toEqual(constants.inputs.task.taskUpdateOneInput.data)
    })
  })

  describe('delete', () => {
    it('should successfully delete a task', async () => {
      expect(
        await service.delete(constants.inputs.task.taskDeleteInput),
      ).toEqual(constants.inputs.task.taskCreateInput)
    })
  })
})
