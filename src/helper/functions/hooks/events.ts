import { useEffect } from "react"
import { ParamAction } from "../../types"

type Publish = <E>(name: string, payload: E) => boolean
const publish = <E>(name: string, payload: E): boolean => window.dispatchEvent(new CustomEvent(name, { detail: payload }))

export const usePublisher = (): Publish => publish

type EventPayload<E> = {detail: E}
export const useSubscriber = <E>(name: string, callback: ParamAction<E>): void => {
    useEffect(() => {
        const handleEvent = (e: EventPayload<E>): void => {
            callback(e.detail)
        }
        window.addEventListener(name, handleEvent)
        return () => window.removeEventListener(name, handleEvent)
    }, [name, callback])
}