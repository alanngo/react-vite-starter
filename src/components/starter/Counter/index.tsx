import { useCount } from "../../../helper/functions/hooks";
import Button from "../../vite/Button";
import Text from "../../vite/Text";

const Counter = (): JSX.Element => {
    const [count, decrement, increment, reset] = useCount()

    return (
        <>
            <Text level={1}>{count}</Text>
            <Button onClick={() => decrement()}>-</Button>
            <Button onClick={reset}>RESET</Button>
            <Button onClick={() => increment()}>+</Button>
        </>

    )
}
export default Counter;
