import { catchUncaughtError } from './uncaughtError';
import { catchRejectionError } from './unhandleRejectionError';

export function catchScriptError() {
  catchUncaughtError();
  catchRejectionError();
}
