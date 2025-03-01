import { Children } from "../../helper/types"

//helper goes here for RenderIf
export type RenderIfProps= {
    condition: unknown
    children: Children
    fallback?: JSX.Element
}