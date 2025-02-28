
//helper goes here for RenderIf
export type RenderIfProps= {
    condition: unknown
    children: JSX.Element | string | number
    fallback?: JSX.Element
}