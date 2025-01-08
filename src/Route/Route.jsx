import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import MyCarts from "../Pages/Cart/MyCarts";
import Contact from "../Pages/Contact/contact";
import SignUp from "../Pages/Sign Up/SignUp";
import SignIn from "../Pages/Sign In/SignIn";
import PrivateRoute from "./PrivateRoute";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product',
                element: <PrivateRoute>
                    <Product />
                </PrivateRoute>
            },
            {
                path: '/cart',
                element: <MyCarts />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />,
            },
        ],
    },
])

export default Route;