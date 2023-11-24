import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <>404</>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            }
        ]
    }
])