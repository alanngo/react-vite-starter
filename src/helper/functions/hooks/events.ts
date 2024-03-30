import { useEffect } from "react"
import { ParamAction } from "../../types"

type Publish = <E>(name: string, payload: E) => boolean
const publish = <E>(name: string, payload: E): boolean => window.dispatchEvent(new CustomEvent(name, { detail: payload }))



export const usePublish = (): Publish => publish

export const useSubscribe = <E>(name: string, callback: ParamAction<E>): void => {
    useEffect(() => {
        const handleEvent = (e: any) => {
            callback(e.detail)
        }
        window.addEventListener(name, handleEvent)
        return () => window.removeEventListener(name, handleEvent)
    }, [name, callback])
}