import { Module } from '@nestjs/common'
import { TaskModule } from 'src/modules/task.module'
import { TaskListModule } from 'src/modules/taskList.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { configModuleConfig } from 'src/configs/configModule/configModule.config'

@Module({
  imports: [
    TaskModule,
    TaskListModule,
    ConfigModule.forRoot(configModuleConfig),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('graphql'),
      }),
    }),
  ],
})
export class AppModule {}
