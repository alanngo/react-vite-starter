import { useEffect } from "react"

type Publish = <E>(name: string, payload: E) => boolean
const publish = <E>(name: string, payload: E): boolean => window.dispatchEvent(new CustomEvent(name, { detail: payload }))

export const usePublisher = (): Publish => publish

export const useSubscriber = <E>(name: string, callback: (e: E) => void): void => {
    useEffect(() => {
        const handleEvent = (e: CustomEvent) =>{
            callback(e.detail)
        }

        window.addEventListener(name, handleEvent as EventListener)
        return () => window.removeEventListener(name, handleEvent as EventListener)
    }, [name, callback])
}