import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/category/:id",
                element: <h2>Category</h2>

            }
        ]
    },
    {
        path: "/news",
        element: <h2>News</h2>,
    },
    {
        path: "/auth",
        element: <h2>Login</h2>,
    },
    {
        path: "*",
        element: <h2>ERROR</h2>,
    },
]);

export default router;