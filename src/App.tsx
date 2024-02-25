
import Anchor from './components/vite/Anchor'
import Button from './components/vite/Button'
import Container from './components/vite/Container'
import Text from './components/vite/Text'
import { useArray, useCount } from './helper/functions/hooks'

const App = (): JSX.Element => {
  const [count, decrement, increment, reset] = useCount()
  const { arr: foods, pushBack, pushFront, insert, remove} = useArray<string>(["pizza"])
  return (
    <Container>
      <Text level={1}>{count}</Text>
      <Button onClick={() => decrement()}>-</Button>
      <Button onClick={reset}>RESET</Button>
      <Button onClick={() => increment()}>+</Button>
      <br/>
      {
        foods.map((e, i) =>
        (
          <h2 key={i}>{e} <Anchor href="#" onClick={() =>{remove(i)}}>X</Anchor></h2>
        ))
      }
      <Button onClick={() => pushFront("cake")}>push back</Button>
      <Button onClick={() => pushBack("pie")}>push back</Button>
      <Button onClick={() => insert(1, "donut")}>Insert</Button>
      <br/>
      <Anchor href='https://www.google.com'>Google</Anchor>
    </Container>
  )
}

export default App
