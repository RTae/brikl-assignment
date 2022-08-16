import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { TaskListModel } from 'src/models'
import * as providers from 'src/providers'

@Injectable()
export class TaskListService {
  constructor(private prisma: providers.database.prisma.PrismaService) {}

  async create(
    data: TaskListModel.CreateOneTaskListArgs,
  ): Promise<TaskListModel.TaskList | Error> {
    /**
     * Create taskList record
     */
    try {
      // Insert taskList record to database
      return await this.prisma.taskList.create({ ...data })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') return new ForbiddenException(e.message)
        if (e.code === 'P2025') return new NotFoundException(e.message)
      }
      return new InternalServerErrorException(e)
    }
  }

  async get(
    args: TaskListModel.FindManyTaskListArgs,
    select: any,
  ): Promise<TaskListModel.TaskList[] | Error> {
    /**
     * Get taskList records
     */
    try {
      // Get taskList records from database
      const result: Array<TaskListModel.TaskList> =
        await this.prisma.taskList.findMany({
          ...args,
          ...select,
        })

      if (!result.length) return new NotFoundException('Record not found')

      return result
    } catch (e) {
      return new InternalServerErrorException(e)
    }
  }

  async update(
    args: TaskListModel.UpdateOneTaskListArgs,
    select: any,
  ): Promise<TaskListModel.TaskList | Error> {
    /**
     * Update or create TaskLists record
     */
    try {
      // Update taskList record
      return await this.prisma.taskList.update({ ...args, ...select })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2025')
          return new NotFoundException(Object.values(e.meta)[0])
      }
      return new InternalServerErrorException(e)
    }
  }

  async delete(
    args: TaskListModel.DeleteOneTaskListArgs,
  ): Promise<TaskListModel.TaskList | Error> {
    /**
     * Delete TaskLists record
     */
    try {
      // Delete taskList record
      return await this.prisma.taskList.delete({ ...args })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2025')
          return new NotFoundException(Object.values(e.meta)[0])
      }
      return new InternalServerErrorException(e)
    }
  }
}
