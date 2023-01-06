import {CHAT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "./utils/consts";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

export const publicRoutes = [
    {
        path: REGISTER_ROUTE,
        Component: <Register />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Login />
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: <Home />
    }
]