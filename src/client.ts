import { IClientConfig, INotifyMessage } from './types';

class Client {
  readonly _config: IClientConfig;

  constructor(config: IClientConfig) {
    this._config = config;
  }

  notify<T>(e: INotifyMessage<T>) {
    console.log(e);
  }
}
export default Client;
