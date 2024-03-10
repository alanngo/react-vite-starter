import { useState } from "react"
import { Action, Counter, SortCriteria } from "../../types"


export const useCount = (initial: number = 0): Counter => {
    const [count, setCount] = useState<number>(initial)
    return [
        count,
        (n: number = 1): void => setCount(count - n), //decrement
        (n: number = 1): void => setCount(count + n), //increment
        (): void => setCount(initial) //reset
    ]
}

export const useToggle = (initValue: boolean = false): [boolean, Action] => {
    const [state, setState] = useState<boolean>(initValue)
    return [state, (): void => setState(!state)]
}

export const useArray = <E>(initial: E[] = []) => {
    const [arr, setArr] = useState<E[]>(initial)
    return {
        arr,
        pushBack: (e: E) => setArr([...arr, e]),
        pushFront: (e: E) => setArr([e, ...arr]),
        insert: (idx: number, e: E) => setArr([...arr.slice(0, idx), e, ...arr.slice(idx)]),
        popBack: () => setArr(arr.slice(0, arr.length - 1)),
        popFront: () => setArr(arr.slice(1)),
        remove: (idx: number) => setArr(arr.filter((_, i) => i !== idx)),
        clear: () => setArr([]),
        reset: () => setArr(initial),
        sort: (cb: SortCriteria<E>) => setArr([...arr].sort(cb))
    }
}