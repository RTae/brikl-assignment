import configuration from 'src/configs/configModule/configuration'

export const configModuleConfig = {
  ignoreEnvFile: false,
  isGlobal: true,
  load: [configuration],
}
