import type { HistoryLocation } from '@tomrehnstrom/history'

declare module '@tomrehnstrom/history' {
  interface HistoryState {
    __tempLocation?: HistoryLocation
    __tempKey?: string
  }
}
