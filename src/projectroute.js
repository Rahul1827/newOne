import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Data from "./components/Data";
import App from "./components/App";
import GetData from "./components/GetData";
import Update from "./components/Update";
import DeleteData from "./components/DeleteData";

const projectroute = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
        {
            path:"datapage",
            element:<Data/>
        },
        {
            path:"Getdatapage",
            element:<GetData/>
        },
        {
          path:"Updatepage",
          element:<Update/>
      },
      {
        path:"deletepage",
        element:<DeleteData/>
    }
    ]
  }
]);

export default projectroute;
