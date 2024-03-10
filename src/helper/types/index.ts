export type ParamAction<E> = (e: E) => void
export type Action = () => void | ParamAction<void>
export type Counter = [number, Action, Action, Action]
export type SortCriteria<E> = (a: E, b: E) => number