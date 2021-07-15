import { getEnvGlobal } from '../utils/getWindow';
import { dispatchScriptError } from './notify';

function errorListener(e: ErrorEvent) {
  dispatchScriptError(e);
}

export function catchUncaughtError() {
  const global = getEnvGlobal<Window>();
  global?.addEventListener('error', errorListener, true);
}

export function removeCatchUncaughtError() {
  const global = getEnvGlobal<Window>();
  global.removeEventListener('error', errorListener, true);
}
