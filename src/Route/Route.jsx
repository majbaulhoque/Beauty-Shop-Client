import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import MyCarts from "../Pages/Cart/MyCarts";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/contact";


const Route = createBrowserRouter ([
    {
        path : '/',
        element : <MainLayout />,
        children : [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product',
                element: <Product />,
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
                element: <Login />,
            },
        ],
    },
])

export default Route;