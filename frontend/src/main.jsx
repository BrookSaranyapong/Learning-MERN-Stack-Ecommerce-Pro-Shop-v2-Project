import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";

const router = createBrowserRouter(
  // Nested Route
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="product/:id" element={<ProductScreen />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
