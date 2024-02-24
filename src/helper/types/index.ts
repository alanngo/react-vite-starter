export type ParamAction<E> = (e: E) => void
export type Action = () => void | ParamAction<void>
export type Counter = [number, Action, Action, Action]