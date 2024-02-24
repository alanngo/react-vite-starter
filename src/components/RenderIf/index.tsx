
import { RenderIfProps } from './helper';
const RenderIf = ({condition, children, fallback= <></>}: RenderIfProps):JSX.Element => 
(
    Boolean(condition)? children : fallback
)

export default RenderIf;
