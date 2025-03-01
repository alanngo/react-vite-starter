//helper goes here for Text
import { DetailedHTMLProps, HTMLAttributes } from "react"
export interface TextProps extends
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    level?: number,
    children?: JSX.Element | string | string[] | number
}
