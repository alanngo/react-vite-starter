import { useEffect, useState } from "react"
import { Action, Counter, SortCriteria } from "../../types"
import { OptionalNumber } from "../../types/optional"
import { optionalNumber } from ".."


export const useCount = (initial: number = 0): Counter => {
    const [c, setC] = useState<number>(initial)
    return {
        count: c,
        decrement: (n: OptionalNumber) => setC(c - optionalNumber(n)), //decrement
        increment: (n: OptionalNumber) => setC(c + optionalNumber(n)), //increment
        reset: (): void => setC(initial) //reset
    }
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
        setElem: (idx: number, elem: E) => setArr(arr.map((e, i) => (idx === i ? elem : e))),
        clear: () => setArr([]),
        reset: () => setArr(initial),
        sort: (cb: SortCriteria<E>) => setArr([...arr].sort(cb))
    }
}

export const useRandom = <E>(samples: E[]): E => {
    const [i, setI] = useState<number>(-1)

    useEffect(() => {
        if (!localStorage.getItem("randNum")) {
            setI(Math.floor(Math.random() * samples.length))
            localStorage.setItem("randNum", String(i))
        }

        return () => localStorage.clear()
    }, [i, samples])
    return samples[i]
}