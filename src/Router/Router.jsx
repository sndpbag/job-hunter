import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";

 

 const Router = createBrowserRouter([
{
    path: "/",
    element: <MainLayout></MainLayout>,
    children:
    [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "about",
            element: <h1>About Page</h1>
        }
    ]
}
 ])

export default Router;