import type { HistoryLocation } from '@betterblockerrouter/history'

declare module '@betterblockerrouter/history' {
  interface HistoryState {
    __tempLocation?: HistoryLocation
    __tempKey?: string
  }
}
