import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
  } from "react-router-dom";

import Contact from "./components/contact";
  
import About from "./components/about";
import Error from "./components/error";



const Applayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>

        </div>
        
    )

}


const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Applayout/>,
        children:[

            {
                path: "/",
                element: <Body/>

            },

            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            }

        ],
        errorElement: <Error/>
    }

  
    
])

root.render(<RouterProvider router = {appRouter} />);