import { IGlobal, IGlobalJSMonitor } from '../types';

export function getEnvGlobal<T = Window>(): T & IGlobal {
  return (
    typeof window !== 'undefined' ?
      window : typeof global !== 'undefined' ?
        global : typeof self !== 'undefined' ?
          self : {}
  ) as T & IGlobal;
}

export function getGlobalClient<T = Window>(): IGlobalJSMonitor {
  const global = getEnvGlobal<T>();
  return global.__JSMONITOR__;
}
