import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Page/Home/Home";
 

export const router = createBrowserRouter([
    {
     path:"/",
     element:<MainLayOut></MainLayOut>,
     children:[
          {
               path:'/',
               element:<Home></Home>
          }
     ]
    }
])