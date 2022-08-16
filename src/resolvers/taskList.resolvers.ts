import { Logger } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import * as services from 'src/services'
import { TaskListModel } from 'src/models'

@Resolver(() => TaskListModel.TaskList)
export class TaskListResolver {
  private logger: Logger
  constructor(private taskListService: services.TaskListService) {
    this.logger = new Logger('TaskList Service')
  }

  @Query(() => [TaskListModel.TaskList], {
    name: 'getTaskLists',
    nullable: true,
  })
  async getTaskLists(
    @Args('') args: TaskListModel.FindManyTaskListArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<TaskListModel.TaskList[] | Error> {
    /**
     * Get TaskList records
     */

    let select = new PrismaSelect(info)
    if (select) select = select.value

    console.log(select)
    const result = await this.taskListService.get(args, null)
    if (result instanceof Error) this.logger.error(`${result}`)
    return result
  }

  @Mutation(() => TaskListModel.TaskList, {
    name: 'createTaskList',
    nullable: true,
  })
  async createTaskList(
    @Args('') args: TaskListModel.CreateOneTaskListArgs,
  ): Promise<TaskListModel.TaskList | Error> {
    /**
     * Create TaskList record
     */

    const result = await this.taskListService.create(args)
    if (result instanceof Error) this.logger.error(`${result}`)
    return result
  }

  @Mutation(() => TaskListModel.TaskList, {
    name: 'updateTaskList',
    nullable: true,
  })
  async updateTaskList(
    @Args('') args: TaskListModel.UpdateOneTaskListArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<TaskListModel.TaskList | Error> {
    /**
     * Update TaskList record
     */
    let select = new PrismaSelect(info)
    if (select) select = select.value
    const result = await this.taskListService.update(args, select)
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  @Mutation(() => TaskListModel.TaskList, {
    name: 'deleteTaskList',
    nullable: true,
  })
  async deleteTaskList(
    @Args('') args: TaskListModel.DeleteOneTaskListArgs,
  ): Promise<TaskListModel.TaskList | Error> {
    /**
     * Delete TaskList record
     */
    const result = await this.taskListService.delete(args)
    if (result instanceof Error) this.logger.error(`${result}`)
    return result
  }
}
