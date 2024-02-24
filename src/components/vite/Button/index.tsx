import { ButtonProps } from "./helper";
import "./style.css"
const Button = (props: ButtonProps):JSX.Element => 
(
    <button {...props}>{props.children}</button>
)

export default Button;
