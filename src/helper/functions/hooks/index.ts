import { useState } from "react"
import { Counter } from "../../types"


export const useCount = (initial: number = 0): Counter => {
    const [count, setCount] = useState<number>(initial)
    return [
        count,
        (n: number = 1): void => setCount(count - n), //decrement
        (n: number = 1): void => setCount(count + n), //increment
        (): void => setCount(initial) //reset
    ]
}

export const useArray = <E>(initial: E[] = []) => {
    const [array, setArray] = useState<E[]>(initial)
    return {
        array,
        pushBack: (e: E) => setArray([...array, e]),
        pushFront: (e: E) => setArray([e, ...array]),
        clear: () => setArray([]),
        reset: () => setArray(initial)
    }
}