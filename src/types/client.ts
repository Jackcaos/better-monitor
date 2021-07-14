import { IActions } from './action'
interface IClientConfig {
  id: number
  appType?: string
  maxActions?: number
  delay?: number // 错误处理间隔时间
  ignoreError?: string[] // 可忽略错误
  notified?: () => Promise<any> | any
}

interface IClient {
  readonly _config: IClientConfig
  readonly _hooks: {
    notified: (...args: any[]) => void
  }
  readonly _actions: IActions[]
  addAction: (actions: IActions) => void
  notify: () => Promise<any>
}

interface IMonitor {
  _client: null | IClient
  init: (config: IClientConfig) => IClient
  customNotify: () => Promise<any>
}

export {
  IClient,
  IClientConfig,
  IMonitor
}