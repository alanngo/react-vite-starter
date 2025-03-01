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

// html/jsx related

export type Multi<E> = E | E[]
export type SingleChild = Multi<JSX.Element> | Multi<string> | Multi<number>
export type Children = Optional<SingleChild[]> | Multi<JSX.Element>

