
import RenderIf from '../../RenderIf';
import { TextProps } from './helper';
import "./style.css"
const Text = ({ level, ...props }: TextProps): JSX.Element =>
(
    <RenderIf condition={level} fallback={<p {...props}>{props.children}</p>}>
    {
        {
            "1":<h1 {...props}>{props.children}</h1>,
            "2":<h2 {...props}>{props.children}</h2>,
            "3":<h3 {...props}>{props.children}</h3>,
            "4":<h4 {...props}>{props.children}</h4>,
            "5":<h5 {...props}>{props.children}</h5>,
            "6":<h6 {...props}>{props.children}</h6>,
        }[String(level)]
    }
    </RenderIf>
)

export default Text;
