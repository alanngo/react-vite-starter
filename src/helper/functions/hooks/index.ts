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
        pushBack: (e: E) => setArr((prev: E[]) =>
            ([...prev, e])),
        pushFront: (e: E) => setArr((prev: E[]) =>
            ([e, ...prev])),
        insert: (idx: number, e: E) => setArr((prev: E[]) =>
            ([...prev.slice(0, idx), e, ...prev.slice(idx)])),
        popBack: () => setArr((prev: E[]) =>
            (prev.slice(0, prev.length - 1))),
        popFront: () => setArr((prev: E[]) =>
            (prev.slice(1))),
        remove: (idx: number) => setArr((prev: E[]) =>
            (prev.filter((_, i) => i !== idx))),
        setElem: (idx: number, elem: E) => setArr((prev: E[]) =>
            (prev.map((e, i) => (idx === i ? elem : e)))),
        sort: (cb: SortCriteria<E>) => setArr((prev: E[]) =>
            ([...prev].sort(cb))),
        clear: () => setArr([]),
        reset: () => setArr(initial),
    }
}

export const useRandom = <E>(samples: E[]): E => {
    const [i, setI] = useState<number>(-1)

    useEffect(() => {
        if (!localStorage.getItem("randNum")) {
            setI(Math.floor(Math.random() * samples.length))
            localStorage.setItem("randNum", String(i))
        }

        return () => localStorage.removeItem("randNum")
    }, [i, samples.length])
    return samples[i]
}