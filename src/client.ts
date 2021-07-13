import { IClient } from './types'
import { catchScriptError } from './catchScriptError'

class Client {
  readonly _id: number
  readonly _appType: string
  readonly _maxActions: number
  readonly _ignoreError: string[]
  readonly _delay: number
  readonly _notified: () => Promise<any> | any
  constructor(config: IClient) {
    this._id = config.id
    this._appType = config.appType
    this._maxActions = config.maxActions
    this._notified = config.notified
    this._delay = config.delay
    this._ignoreError = config.ignoreError
    this.start()
  }

  start() {
    catchScriptError()
  }
}
export default Client;