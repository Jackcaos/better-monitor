import { catchUncaughtError } from './uncaughtError';
import { catchRejectionError } from './unhandleRejectionError';

export function initScriptError() {
  catchUncaughtError();
  catchRejectionError();
}
