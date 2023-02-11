import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Home from "../Pages/Home/01Home/Home";
import Login from "../Pages/Login/Login/Login";
import RecoverPassword from "../Pages/Login/RecoverPassword/RecoverPassword";
import Register from "../Pages/Login/Register/Register";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/recover-password',
                element: <RecoverPassword></RecoverPassword>
            },
            {
                path: '/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])