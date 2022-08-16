import { Module } from '@nestjs/common'
import * as resolvers from 'src/resolvers'
import * as services from 'src/services'
import * as providers from 'src/providers'

@Module({
  imports: [providers.database.prisma.PrismaModule],
  providers: [services.TaskListService, resolvers.TaskListResolver],
})
export class TaskListModule {}
