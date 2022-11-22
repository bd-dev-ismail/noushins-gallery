import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../components/Pages/ContactUs/ContactUs";
import AddProducts from "../components/Pages/Dashboard/AddProducts/AddProducts";
import MakeModerator from "../components/Pages/Dashboard/MakeModerator/MakeModerator";
import MyCart from "../components/Pages/Dashboard/MyCart/MyCart";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home/Home";
import Services from "../components/Pages/Services/Services";
import DashboardLayout from "../layout/DashboardLayout";

import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Services/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <MyCart/>
            },
            {
                path : '/dashboard/add-products',
                element: <AddProducts/>
            },
            {
                path: '/dashboard/make-moderator',
                element: <MakeModerator/>
            }
        ]
    }
    
]);
export default router;