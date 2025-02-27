import { Optional } from "./optional"

export type ParamAction<E> = (e?: Optional<E>) => void
export type Action = () => void | ParamAction<void>
export type Counter = {
    count: number, 
    decrement: ParamAction<number>,
    increment: ParamAction<number>,
    reset: Action
}
export type SortCriteria<E> = (a: E, b: E) => number

// html related

