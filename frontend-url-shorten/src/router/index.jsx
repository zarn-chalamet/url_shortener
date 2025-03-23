import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute />, // Protect dashboard
                children: [
                  { path: "/dashboard", element: <Dashboard /> }
                ]
            }
        ]
    }
])

export default router;