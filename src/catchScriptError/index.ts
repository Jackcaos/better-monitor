import { catchUncaughtError } from './uncaughtError'

export function catchScriptError() {
  catchUncaughtError()
}