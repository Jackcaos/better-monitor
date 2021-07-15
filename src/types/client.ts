import { IActions } from './action';
import { ErrorType } from './error';

interface IClientConfig {
  id: number;
  appType?: string;
  maxActions?: number;
  delay?: number; // 错误处理间隔时间
  ignoreError?: string[]; // 可忽略错误
  beforeNotify?: () => Promise<any> | any;
}

interface IClient {
  readonly _config: IClientConfig;
  readonly _hooks: {
    notified: (...args: any[]) => void;
  };
  readonly _actions: IActions[];
  addAction: (actions: IActions) => void;
  notify: <T = any>(e: INotifyMessage<T>) => Promise<any>;
}

interface IMonitor {
  _client: null | IClient;
  init: (config: IClientConfig) => IClient;
  customNotify: () => Promise<any>;
}

interface INotifyMessage<T> {
  id: number;
  type: ErrorType;
  detail: T;
  category: string;
  timeStamp: number;
  appType?: string;
  action?: IActions[];
  deviceMessage?: string;
}

export { IClient, IClientConfig, IMonitor, INotifyMessage };
