import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./style/main.scss";
import "./index.css";

import ErrorPage from "./error-page";
import Index from "./routes_pages/homepage";
import About from "./routes_pages/About";
import Product from "./routes_pages/product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/" 
      errorElement={<ErrorPage />}>
      <Route 
        path="/" 
        index element={<Index />} />
      <Route 
        path="/about" 
        element={<About />} />
      <Route 
        path="products/:productId" 
        element={<Product />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
