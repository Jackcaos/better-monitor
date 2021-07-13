function errorListener(e: ErrorEvent) {
  console.log(e)
}

export function catchUncaughtError() {
  window.addEventListener('error', errorListener, true)
}