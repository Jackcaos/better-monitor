import { IClientConfig } from './types';

class Client {
  readonly _config: IClientConfig;

  constructor(config: IClientConfig) {
    this._config = config;
  }

  notify() {

  }

  // start() {
  //   catchScriptError()
  // }
}
export default Client;
