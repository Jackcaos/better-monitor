import { getEnvGlobal } from '../utils/getWindow';

function errorListener(e: PromiseRejectionEvent) {
  console.log(e);
}

export function catchRejectionError() {
  const global = getEnvGlobal<Window>();
  global?.addEventListener('unhandledrejection', errorListener, true);
}

export function removeRejectionError() {
  const global = getEnvGlobal<Window>();
  global?.removeEventListener('unhandledrejection', errorListener, true);
}
