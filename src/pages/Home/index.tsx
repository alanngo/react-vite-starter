
import { Fragment } from 'react/jsx-runtime'
import Break from '../../components/Break'
import RenderIf from '../../components/RenderIf'
import ArrayOps from '../../components/starter/ArrayOps'
import Counter from '../../components/starter/Counter'
import Anchor from '../../components/vite/Anchor'
import Button from '../../components/vite/Button'
import { ascending, descending } from '../../helper/functions'
import { useArray, useRandom, useToggle } from '../../helper/functions/hooks'
import { useSubscriber } from '../../helper/functions/hooks/events'
import { ArrayEntry } from '../../helper/types/arrays'
import Text from '../../components/vite/Text'

const Home = (): JSX.Element => {

    const { arr: foods, pushBack, pushFront, insert, setElem, remove, sort } = useArray<string>(["pizza"])
    const random = useRandom<string>(["gryffindor", "slytherin", "ravenclaw", "hufflepuff"])
    useSubscriber<number>("PICKLE_RICK", (data: number) => {
        console.log(data)
    })

    useSubscriber<string>("PUSH_BACK", (data: string) => {
        pushBack(data)
    })

    useSubscriber<string>("PUSH_FRONT", (data: string) => {
        pushFront(data)
    })

    useSubscriber<ArrayEntry<string>>("INSERT", ({ idx, elem }: ArrayEntry<string>) => {
        insert(idx, elem)
    })

    useSubscriber<ArrayEntry<string>>("SET_ELEM", ({ idx, elem }: ArrayEntry<string>) => {
        setElem(idx, elem)
    })

    useSubscriber<null>("SORT_ASC", () => {
        sort(ascending)
    })
    useSubscriber<null>("SORT_DESC", () => {
        sort(descending)
    })
    const [emoji, toggleEmoji] = useToggle()
    return (
  
        <Fragment>
            <Text level={1}>House: {random}</Text>
            <Counter />
            <Break />
            {
                foods.map((e, i) =>
                (
                    <h2 key={i}>{e} <Anchor href="#" onClick={() => { remove(i) }}>X</Anchor></h2>
                ))
            }
            <ArrayOps />
            <Break />

            <Break />
            <Anchor href='https://www.google.com'>Google</Anchor>

            <Break num={2} />
            <RenderIf condition={emoji}>
                <Text level={2}> ⚡</Text>
            </RenderIf>
            <Button onClick={toggleEmoji}>Toggle Emoji</Button>
        </Fragment>
    )
}
export default Home;
