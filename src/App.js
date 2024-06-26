import React from "react";
import ReactDOM from "react-dom/client";    
import './index.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import  {About}  from "./Components/About";
import { Contact } from "./Components/Contact";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import { Error } from "./Components/Error";
import { Footer } from "./Components/Footer";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";






const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer/>

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children : [
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />, 
            },
            {
                path:"/contact",
                element:<Contact />, 
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)