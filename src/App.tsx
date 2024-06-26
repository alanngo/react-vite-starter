
import Break from './components/Break'
import ArrayOps from './components/starter/ArrayOps'
import Counter from './components/starter/Counter'
import Anchor from './components/vite/Anchor'
import Button from './components/vite/Button'
import Container from './components/vite/Container'
import Text from './components/vite/Text'
import { ascending, descending } from './helper/functions'
import { useArray, useRandom} from './helper/functions/hooks'
import { usePublisher, useSubscriber } from './helper/functions/hooks/events'
import { ArrayEntry } from './helper/types/arrays'

const App = (): JSX.Element => {
  const { arr: foods, pushBack, pushFront, insert, remove, sort } = useArray<string>(["pizza"])
  const publish = usePublisher()
  const random = useRandom<string>(["gryffindor", "slytherin", "ravenclaw", "hufflepuff"])
  useSubscriber<number>("PICKLE_RICK", (data: number) => {
    console.log(data)
  })

  useSubscriber<string>("PUSH_BACK", (data: string) =>{
    pushBack(data)
  })

  useSubscriber<string>("PUSH_FRONT", (data: string) =>{
    pushFront(data)
  })

  useSubscriber<ArrayEntry<string>>("INSERT", ({idx, elem}: ArrayEntry<string>) =>{
    insert(idx, elem)
  })

  useSubscriber<null>("SORT_ASC", () =>{
    sort(ascending)
  })
  useSubscriber<null>("SORT_DESC", () =>{
    sort(descending)
  })
  return (
    <Container>
      <Text level={1}>House: {random}</Text>
      <Counter/>
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
