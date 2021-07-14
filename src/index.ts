import Client from './client';
import { IClientConfig, IMonitor, IClient } from './types'
import { getEnvGlobal } from './utils/getWindow'
import { catchScriptError } from './catchScriptError'

function createClient(config: IClientConfig): IClient {
  const global = getEnvGlobal<Window>()
  const client = (new Client(config)) as IClient
  global.__JSMONITOR__ = { client }

  initJSMonitor()

  return client
}

function initJSMonitor() {
  catchScriptError()
}

const JSMonitor: IMonitor = {
  _client: null,

  init: (config: IClientConfig) => {
    if (JSMonitor._client) {
      console.info('JSMonitor已经完成初始化无需继续初始化')
    } else {
      JSMonitor._client = createClient(config)
    }
    return JSMonitor._client
  },

  customNotify: async () => {
    // TODO
    await console.log('customNotify')
  }
}

export default JSMonitor;