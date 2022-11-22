import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../components/Pages/ContactUs/ContactUs";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home/Home";
import Services from "../components/Pages/Services/Services";
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
                path: '/services',
                element: <Services/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            }
        ]
    }
])