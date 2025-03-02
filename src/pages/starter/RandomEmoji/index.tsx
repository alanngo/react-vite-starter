
import { useRandom } from '../../../helper/functions/hooks';
import Button from '../../../components/vite/Button';
import Text from '../../../components/vite/Text';
import RenderIf from '../../../components/RenderIf';

const CHERRY = "🍒"
const RandomEmoji = (): JSX.Element => {
    
    const emoji = useRandom<string>("🍒 🍋 🔔".split(" "))

    return (
        <>
            <Text level={1}>{emoji}</Text>

            <Button onClick={() => { window.location.reload()}}>Refresh</Button>
            <RenderIf condition={emoji === CHERRY}>
                <Text>Winner</Text>
            </RenderIf>
        </>
    )
}
export default RandomEmoji;
