import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import AllArticles from "../pages/AllArticles/AllArticles";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Subscriptions from "../pages/Subscriptions/Subscriptions";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Add from "../pages/Add/Add";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard/dashboard/Dashboard";
import ArticleDetails from "../pages/AllArticles/ArticleDetails";

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
                path: "/article/:id",
                element: <ArticleDetails></ArticleDetails>,
                loader: ({params})=>fetch(`http://localhost:3000/post/${params.id}`)
            },
            {
                path: "/subscriptions",
                element: <Subscriptions></Subscriptions>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add",
                element: <PrivateRoute><Add></Add></PrivateRoute>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
])