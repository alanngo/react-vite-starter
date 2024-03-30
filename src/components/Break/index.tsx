
import { BreakProps, buildArr } from './helper';
const Break = ({ num = 1 }: BreakProps): JSX.Element =>
(
    <>
        {
            buildArr(num).map((e) => <br key={e} />)
        }
    </>

)

export default Break;
