
import Break from './components/Break'
import ArrayOps from './components/starter/ArrayOps'
import Anchor from './components/vite/Anchor'
import Button from './components/vite/Button'
import Container from './components/vite/Container'
import Text from './components/vite/Text'
import { ascending, descending } from './helper/functions'
import { useArray, useCount, useRandom} from './helper/functions/hooks'
import { usePublish, useSubscribe } from './helper/functions/hooks/events'
import { ArrayEntry } from './helper/types/arrays'

const App = (): JSX.Element => {
  const [count, decrement, increment, reset] = useCount()
  const { arr: foods, pushBack, pushFront, insert, remove, sort } = useArray<string>(["pizza"])
  const publish = usePublish()
  const random = useRandom<string>(["gryffindor", "slytherin", "ravenclaw", "hufflepuff"])
  useSubscribe<number>("PICKLE_RICK", (data: number) => {
    console.log(data)
  })

  useSubscribe<string>("PUSH_BACK", (data: string) =>{
    pushBack(data)
  })

  useSubscribe<string>("PUSH_FRONT", (data: string) =>{
    pushFront(data)
  })

  useSubscribe<ArrayEntry<string>>("INSERT", ({idx, elem}: ArrayEntry<string>) =>{
    insert(idx, elem)
  })

  useSubscribe<null>("SORT_ASC", () =>{
    sort(ascending)
  })
  useSubscribe<null>("SORT_DESC", () =>{
    sort(descending)
  })
  return (
    <Container>
      <h1>House: {random}</h1>
      <Text level={1}>{count}</Text>
      <Button onClick={() => decrement()}>-</Button>
      <Button onClick={reset}>RESET</Button>
      <Button onClick={() => increment()}>+</Button>
     <Break />
      {
        foods.map((e, i) =>
        (
          <h2 key={i}>{e} <Anchor href="#" onClick={() => { remove(i) }}>X</Anchor></h2>
        ))
      }

      <ArrayOps/>
      <Break />
      <Button onClick={() => publish<number>("PICKLE_RICK", 123456)}>Publish Event</Button>

      <Break />
      <Anchor href='https://www.google.com'>Google</Anchor>
    </Container>
  )
}

export default App
