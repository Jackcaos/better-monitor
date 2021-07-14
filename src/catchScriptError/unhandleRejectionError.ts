function errorListener(e: PromiseRejectionEvent) {
  console.log(e)
}

export function catchRejectionError() {
  window.addEventListener('unhandledrejection', errorListener, true)
}

export function removeRejectionError() {
  window.removeEventListener('unhandledrejection', errorListener, true)
}