import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { routes } from "./routeList";

// define routes here


const ViteRouter = (): JSX.Element =>
(
    <Router>
        <Routes>
            {
                routes.map((route, i) =>
                (
                    <Route key={i} {...route} />
                ))
            }
        </Routes>
    </Router>
)


export default ViteRouter