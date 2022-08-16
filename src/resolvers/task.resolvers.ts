import { Logger } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import * as services from 'src/services'
import { TaskModel } from 'src/models'

@Resolver(() => TaskModel.Task)
export class TaskResolver {
  private logger: Logger
  constructor(private taskService: services.TaskService) {
    this.logger = new Logger('Task Service')
  }

  @Query(() => [TaskModel.Task], {
    name: 'getTasks',
    nullable: true,
  })
  async getTasks(
    @Args('') args: TaskModel.FindManyTaskArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<TaskModel.Task[] | Error> {
    /**
     * Get Task records
     */

    let select = new PrismaSelect(info)
    if (select) select = select.value

    const result = await this.taskService.get(args, select)
    if (result instanceof Error) this.logger.error(`${result}`)
    return result
  }

  @Mutation(() => TaskModel.Task, {
    name: 'createTask',
    nullable: true,
  })
  async createTask(
    @Args('') args: TaskModel.CreateOneTaskArgs,
  ): Promise<TaskModel.Task | Error> {
    /**
     * Create Task record
     */

    const result = await this.taskService.create(args)
    if (result instanceof Error) this.logger.error(`${result}`)
    return result
  }

  @Mutation(() => TaskModel.Task, {
    name: 'updateTask',
    nullable: true,
  })
  async updateTask(
    @Args('') args: TaskModel.UpdateOneTaskArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<TaskModel.Task | Error> {
    /**
     * Update Task record
     */
    let select = new PrismaSelect(info)
    if (select) select = select.value
    const result = await this.taskService.update(args, select)
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  @Mutation(() => TaskModel.Task, {
    name: 'deleteTask',
    nullable: true,
  })
  async deleteTask(
    @Args('') args: TaskModel.DeleteOneTaskArgs,
  ): Promise<TaskModel.Task | Error> {
    /**
     * Delete Task record
     */
    const result = await this.taskService.delete(args)
    if (result instanceof Error) this.logger.error(`${result}`)
    return result
  }
}
