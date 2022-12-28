import { createBrowserRouter } from "react-router-dom";
import NotFoundRoute from "../../Components/NotFoundRoute/NotFoundRoute";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Media from "../../Pages/Media/Media";
import SignUp from "../../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/message',
                element: <p>message here</p>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundRoute></NotFoundRoute>
    }
])

export default router;