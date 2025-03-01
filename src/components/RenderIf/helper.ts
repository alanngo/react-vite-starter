import { Optional } from "../../helper/types/optional"

//helper goes here for RenderIf
export type RenderIfProps= {
    condition: unknown
    children: Optional<JSX.Element | string | number>
    fallback?: JSX.Element
}