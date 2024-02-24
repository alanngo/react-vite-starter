import { AnchorProps } from "./helper";
import "./style.css"
const Anchor = (props: AnchorProps): JSX.Element => (<a {...props}>{props.children}</a>)
export default Anchor;
