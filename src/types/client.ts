interface IClient {
  id: number
  appType?: string
  maxActions?: number
  delay?: number // 错误处理间隔时间
  ignoreError?: string[] // 可忽略错误
  notified?: () => Promise<any> | any
}

export {
  IClient
}