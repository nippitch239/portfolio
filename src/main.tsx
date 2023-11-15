import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Certi from "./components/Certi.js";
import App from "./App.js";
import AllPageInHome from "./components/AllPageInHome.js";
import Picture from './components/Picture';
import { CollectionAuth } from "./components/CollectionAuth.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/FirstPage",
    element: <AllPageInHome/>
  },
  {
    
    path: "/Certificate",
    element: <Certi/>
  },
  {
    
    path: "/Picture",
    element: <Picture/>
  },
  {
    
    path: "/CollectionAuth",
    element: <CollectionAuth/>
  },
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
