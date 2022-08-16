import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { TaskModel } from 'src/models'
import * as providers from 'src/providers'

@Injectable()
export class TaskService {
  constructor(private prisma: providers.database.prisma.PrismaService) {}

  async create(
    data: TaskModel.CreateOneTaskArgs,
  ): Promise<TaskModel.Task | Error> {
    /**
     * Create Task record
     */
    try {
      // Insert Task record to database
      return await this.prisma.task.create({ ...data })
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
    args: TaskModel.FindManyTaskArgs,
    select: any,
  ): Promise<TaskModel.Task[] | Error> {
    /**
     * Get Task records
     */
    try {
      // Get Task records from database
      const result: Array<TaskModel.Task> = await this.prisma.task.findMany({
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
    args: TaskModel.UpdateOneTaskArgs,
    select: any,
  ): Promise<TaskModel.Task | Error> {
    /**
     * Update or create Tasks record
     */
    try {
      // Update Task record
      return await this.prisma.task.update({ ...args, ...select })
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
    args: TaskModel.DeleteOneTaskArgs,
  ): Promise<TaskModel.Task | Error> {
    /**
     * Delete Tasks record
     */
    try {
      // Delete Task record
      return await this.prisma.task.delete({ ...args })
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
