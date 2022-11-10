import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
//import App from './App'
import './index.css'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes_pages/root";
import ErrorPage from "./error-page";
import Index from "./routes_pages/index";
import About from "./routes_pages/About";
import Product from "./routes_pages/product";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
  //    loader={rootLoader}
  //    action={rootAction}
      errorElement={<ErrorPage />}
    > 
      <Route errorElement={<ErrorPage />}>
      <Route index element={<Index />} />
      <Route 
          path="/about" 
          element={<About />} 
      //    loader={rootLoader}
      //    action={rootAction}
          errorElement={<ErrorPage />}
        />  
        <Route
          path="products/:productId"
          element={<Product />}
          errorElement={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);

import "./style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
