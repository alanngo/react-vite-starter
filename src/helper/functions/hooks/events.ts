import { useEffect } from "react"

type Publish = <E>(name: string, payload: E) => void
const publish = <E>(name: string, payload: E): void => {
    window.dispatchEvent(new CustomEvent(name, { detail: payload }))
    console.log("publishing event", name, payload)
}

export const usePublisher = (): Publish => publish

export const useSubscriber = <E>(name: string, callback: (e: E) => void): void => {
    useEffect(() => {
        console.log("subscribed to event", name)

        const handleEvent = (evt: CustomEvent) => {
            callback(evt.detail)
        }

        window.addEventListener(name, handleEvent as EventListener)
        return () => window.removeEventListener(name, handleEvent as EventListener)
    }, [name, callback])
}