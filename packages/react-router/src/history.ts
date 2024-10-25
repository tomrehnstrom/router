import type { HistoryLocation } from '@betterblockingrouter/history'

declare module '@betterblockingrouter/history' {
  interface HistoryState {
    __tempLocation?: HistoryLocation
    __tempKey?: string
  }
}
