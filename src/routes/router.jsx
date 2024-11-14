import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsFeed from "../components/LayoutComponents/NewsFeed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <NewsFeed></NewsFeed>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/news/category/08`)
            },
            {
                path: "/category/:id",
                element: <NewsFeed></NewsFeed>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
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
