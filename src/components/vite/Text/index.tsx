
import { TextProps } from './helper';
import "./style.css"
const Text = ({level, ...props}: TextProps): JSX.Element => {
    switch (level) {
        case 1:
            return <h1 {...props}>{props.children}</h1>
        case 2:
            return <h2 {...props}>{props.children}</h2>
        case 3:
            return <h3 {...props}>{props.children}</h3>
        case 4:
            return <h4 {...props}>{props.children}</h4>
        case 5:
            return <h5 {...props}>{props.children}</h5>
        case 6:
            return <h6 {...props}>{props.children}</h6>
        default:
            return <p {...props}>{props.children}</p>
    }
}
export default Text;
