
import { Fragment } from 'react/jsx-runtime'
import reactimg from "../../../assets/react.svg"
import Text from '../../../components/vite/Text'
import viteimg from "../../../assets/vite.png"
import { routes } from '../../../helper/routes/routeList'
import Button from '../../../components/vite/Button'
import Break from '../../../components/Break'
import { useNavigate } from 'react-router-dom'

const Home = (): JSX.Element => {
    const navigate = useNavigate()
    return (

        <Fragment>
            {/* <Counter /> */}
            <Text level={1}>Welcome to React Vite Starter</Text>
            <img src={reactimg} width={200}></img>
            <img src={viteimg} width={200}></img>
            <Break num={2} />
            {
                routes.filter((r) => (r.path !== "/*")).map((route, i) =>
                (
                    <Button key={i} onClick={() => { navigate(route.path) }}>
                        {route.path.replace("/", "")}
                    </Button>
                    
                ))
            }

        </Fragment>
    )
}
export default Home;
