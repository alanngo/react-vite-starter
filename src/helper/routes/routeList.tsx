import Home from "../../pages/starter/Home";
import RandomEmoji from "../../pages/starter/RandomEmoji";
import TodoList from "../../pages/starter/TodoList";

export const routes =
    [
        { path: "/randomEmoji", element: <RandomEmoji /> },
        { path: "/todo", element: <TodoList /> },
        { path: "/*", element: <Home /> }
    ]