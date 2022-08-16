import {
  Injectable,
  OnModuleInit,
  INestApplication,
  Logger,
} from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private logger = new Logger('PrismaService')

  async onModuleInit() {
    await this.$connect()
    this.$use(async (params, next) => {
      const before = Date.now()

      const result = await next(params)

      const after = Date.now()

      this.logger.log(
        `[${params.model}] Query ${params.action} took ${after - before}ms`,
      )
      return result
    })
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
