
//helper goes here for RenderIf
export type RenderIfProps= {
    condition: unknown
    children: JSX.Element | string
    fallback?: JSX.Element
}