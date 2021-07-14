import { getEnvGlobal } from '../utils/getWindow';

function errorListener(e: ErrorEvent) {
  console.log(e);
}

export function catchUncaughtError() {
  const global = getEnvGlobal<Window>();
  global?.addEventListener('error', errorListener, true);
}

export function removeCatchUncaughtError() {
  const global = getEnvGlobal<Window>();
  global.removeEventListener('error', errorListener, true);
}
