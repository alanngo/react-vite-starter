
import Anchor from './components/vite/Anchor'
import Button from './components/vite/Button'
import Container from './components/vite/Container'
import Text from './components/vite/Text'
import { ascending, descending } from './helper/functions'
import { useArray, useCount, useRandom } from './helper/functions/hooks'

const App = (): JSX.Element => {
  const random = useRandom<string>(["gryffindor", "slytherin", "ravenclaw", "hufflepuff"])
  console.log(random)
  const [count, decrement, increment, reset] = useCount()
  const { arr: foods, pushBack, pushFront, insert, remove, sort } = useArray<string>(["pizza"])
  return (
    <Container>
      <h1>House: {random}</h1>
      <Text level={1}>{count}</Text>
      <Button onClick={() => decrement()}>-</Button>
      <Button onClick={reset}>RESET</Button>
      <Button onClick={() => increment()}>+</Button>
      <br />
      {
        foods.map((e, i) =>
        (
          <h2 key={i}>{e} <Anchor href="#" onClick={() => { remove(i) }}>X</Anchor></h2>
        ))
      }
      <Button onClick={() => pushFront("cake")}>push back</Button>
      <Button onClick={() => pushBack("pie")}>push back</Button>
      <Button onClick={() => insert(1, "donut")}>Insert</Button>
      <Button onClick={() => sort(ascending)}>sort ascending</Button>
      <Button onClick={() => sort(descending)}>sort descending</Button>

      <br />
      <Anchor href='https://www.google.com'>Google</Anchor>
    </Container>
  )
}

export default App
