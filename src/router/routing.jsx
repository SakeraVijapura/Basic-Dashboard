import { createBrowserRouter } from "react-router-dom";
import Login from "../componets/Login";
import DashBoard from "../componets/DashBoard";
import PrivateRoutes from "../componets/PrivateRoutes";
import Register from "../componets/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: '/home',
                element: <DashBoard />
            }
        ]
    }

])