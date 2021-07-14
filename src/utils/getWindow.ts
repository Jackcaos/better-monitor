import { IGlobalJSMonitor, IGlobal } from '../types'

export function getEnvGlobal<T = Window>(): T & IGlobal {
  return (
    typeof window !== 'undefined' ? 
    window : typeof global !== 'undefined' ?
    global : typeof self !== 'undefined' ?
    self : {}
  ) as T & IGlobal
}