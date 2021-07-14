import { IClient } from './client';

interface IGlobalJSMonitor {
  client: IClient;
}

interface IGlobal {
  __JSMONITOR__: IGlobalJSMonitor;
}

export { IGlobalJSMonitor, IGlobal };
