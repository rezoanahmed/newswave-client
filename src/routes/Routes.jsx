import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import AllArticles from "../pages/AllArticles/AllArticles";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Subscriptions from "../pages/Subscriptions/Subscriptions";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/all",
                element: <AllArticles></AllArticles>
            },
            {
                path: "/subscriptions",
                element: <Subscriptions></Subscriptions>
            }
        ]
    }
])