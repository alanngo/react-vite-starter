//helper goes here for Text
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { SingleChild } from "../../../helper/types"
export interface TextProps extends
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    level?: number,
    children?: SingleChild
}
