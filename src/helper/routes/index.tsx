import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/Home";

// define routes here
const routes = 
[
    {path: "/*", element: <Home/>}
]

const ViteRouter = (): JSX.Element =>
{
    return (
        <Router>
            <Routes>
            {
                routes.map((route, i) =>
                (
                    <Route key={i} {...route}/>
                ))
            }
            </Routes>
        </Router>
    ) 
}

export default ViteRouter