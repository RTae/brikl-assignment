import { Test, TestingModule } from '@nestjs/testing'
import * as services from 'src/services'
import { database } from 'src/providers'
import * as constants from 'test/constants'

describe('TaskList Service', () => {
  let service: services.TaskListService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        services.TaskListService,
        {
          provide: database.prisma.PrismaService,
          useValue: constants.inputs.taskList.db,
        },
      ],
    }).compile()
    service = module.get<services.TaskListService>(services.TaskListService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should successfully create a taskList', async () => {
      expect(
        await service.create(constants.inputs.taskList.taskListCreateInput),
      ).toEqual(constants.inputs.taskList.taskListCreateInput)
    })
  })
  describe('get', () => {
    it('should return an array of taskList', async () => {
      expect(
        await service.get(
          constants.inputs.taskList.taskListGetWhereInput,
          null,
        ),
      ).toEqual(constants.outputs.taskList.taskListOutputArray)
    })
  })

  describe('update', () => {
    it('should successfully update a taskList', async () => {
      expect(
        await service.update(
          constants.inputs.taskList.taskListUpdateOneInput,
          null,
        ),
      ).toEqual(constants.inputs.taskList.taskListUpdateOneInput.data)
    })
  })

  describe('delete', () => {
    it('should successfully delete a taskList', async () => {
      expect(
        await service.delete(constants.inputs.taskList.taskListDeleteInput),
      ).toEqual(constants.inputs.taskList.taskListCreateInput)
    })
  })
})
