import { getGlobalClient } from '../utils/getWindow';
import {
  // IResourceError,
  IUncaughtError,
  // IRejectError,
  // IUnknownError,
} from '../types';

export function dispatchScriptError(e: ErrorEvent | PromiseRejectionEvent) {
  let _e = null;
  try {
    if (e.type === 'error') {
      _e = e as ErrorEvent;
      const { message, error, target, srcElement } = _e;
      if (message && error) {
        notifyUncaughtError(_e);
      } else if (target || srcElement) {
        notifyResourceError(_e);
      } else {
        notifyUnkownError(_e);
      }
    } else if (e.type === 'unhandledrejection') {
      _e = e as PromiseRejectionEvent;
      notifyRejectionError(_e);
    } else {
      notifyUnkownError(_e);
    }
  } catch (err) {
    notifyUnkownError(err);
  }
}

function notifyUncaughtError(e: ErrorEvent): void {
  const { colno, lineno, filename, message } = e;
  const detail: IUncaughtError = {
    type: 'UNCAUGHT_ERROR',
    message,
    colno,
    lineno,
    filename,
  };
  const { client } = getGlobalClient<Window>();
  const { _config, _actions } = client;
  client.notify<IUncaughtError>({
    id: _config.id,
    appType: _config.appType,
    action: _actions,
    category: 'error',
    type: 'UNCAUGHT_ERROR',
    timeStamp: Date.now(),
    detail,
  });
}

function notifyResourceError(e: ErrorEvent) {
  console.log(e);
}

function notifyRejectionError(e: PromiseRejectionEvent) {
  console.log(e);
}

function notifyUnkownError(e: any) {
  console.log(e);
}
